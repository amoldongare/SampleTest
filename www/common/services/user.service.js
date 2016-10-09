angular.module('reader.services.user', [])
  .service('UserService', [
    '$q',
    '$http',
	  '$log',
    'settings',
    'locker',
    function ($q, $http,$log,settings, locker) {

      var self = this;
      var user = locker.get('user') ? locker.get('user') : {username: "", password: ""};
      var token = locker.get('token') ? locker.get('token') : null;
      var scanner = locker.get('scanner') ? locker.get('scanner') : null;
      var printer = locker.get('printer') ? locker.get('printer') : null;
      var notified = false;

      var observerCallbacks = [];

      //register an observer
      self.registerObserverCallback = function (callback) {
        observerCallbacks.push(callback);
        if (notified) {
          // it is safe to call the observer
          callback.call(self);
        }
      };

      //call this when you know 'foo' has been changed
      var notifyObservers = function () {
        notified = true;
        angular.forEach(observerCallbacks, function (callback) {
          callback.call(self);
        });
      };

      var save = function (key, data) {
        if (typeof data === 'object') {
          locker.put(key, JSON.stringify(data));
        } else {
          locker.put(key, data);
        }
      }

      self.login = function (userData) {
        return $http({
          method: 'POST',
          url: settings.api + settings.apiUri + 'user/auth',
          data: userData
        });
      };

      self.getUserByToken = function (token) {
        return $http({
          method: 'GET',
          url: settings.api + settings.apiUri + 'user/auth',
          headers: {
            'SessionToken': token
          }
        }).then(function (result) {
          if (result.status === 403) {
            $log.error('invalid token, removing');
            token = undefined;
            locker.put('token', '');
          }
          return result;
        });
      };

      self.logout = function () {
        $log.debug('loggin out');
        locker.forget('token');
        token = undefined;
      };

      self.getUser = function () {
        var defer = $q.defer();
        var sessionUser = JSON.parse(locker.get('user'));
        if (sessionUser) {
          defer.resolve(sessionUser);
        } else {
          defer = self.getUserByToken(token).then(function (result) {
            if (result.status === 200) {
              return result.data;
            } else {
              return {};
            }
          });
        }
        return defer.promise;
      };

      self.getCurrentUser = function () {
        return user;
      };

      self.setUser = function (userData) {
        user = userData;
        save('user', user);
        notifyObservers();
      };

      self.setToken = function (tokenData) {
        token = tokenData;
        save('token', token);
      };

      self.setScanner = function (scannerFlag) {
        scanner = scannerFlag;
        save('scanner', scanner);
      };

      self.getScanner = function (scannerFlag) {
        return scanner;
      };

      self.setPrinter = function (printerFlag) {
        printer = printerFlag;
        save('printer', printer);
      };

      self.getPrinter = function (printerFlag) {
        return printer;
      };

      self.getToken = function () {
        return token;
      };

      self.getRecentTickets = function(userId){
        var token = self.getToken();
        var end = moment().toISOString();
        var start=(moment().subtract(9, 'hours')).toISOString();
        if (!token) {
          throw ('Not logged in');
        } else {
          return $http({
            method: 'GET',
            headers: {
              'SessionToken': token
            },
            url: settings.api + settings.apiUri + 'admin/ticket?user='+userId+'&end='+end+'&start='+start
          });
        }
      }

    }
  ])
  .service('ReservationService', [
    '$q',
    '$http',
    'settings',
    'UserService',
    function ($q, $http, settings, UserService) {
      
      this.getData = function (zone) {
        var token = UserService.getToken();
        if (!token) {
          throw ('Not logged in');
        } else {
          return $http({
            method: 'GET',
            headers: {
              'SessionToken': token
            },
            url: settings.api + settings.apiUri + '/reservation/current'
          });
        }
      };

      this.getRecentTickets = function(userId){
        var token = UserService.getToken();
        var end = moment(), start = end.clone().sub(9, 'hours');
        if (!token) {
          throw ('Not logged in');
        } else {
          return $http({
            method: 'GET',
            headers: {
              'SessionToken': token
            },
            url: settings.api + settings.apiUri + 'admin/ticket?user='+userId+'&end='+end+'&start='+start
          });
        }
      }
    }
  ])
  .service('SearchService', [
    '$http',
    '$q',
    'settings',
    'UserService',
    function ($http, $q, settings, UserService) {

      var self = this;

      self.search = function (plate, zone) {
        if (typeof zone._id === "undefined")
          zone = JSON.parse(zone);
        return $http({
          method: 'GET',
          headers: {
            'SessionToken': UserService.getToken()
          },
          url: settings.api + settings.apiUri +
          'reservation/plate/' + plate.toUpperCase() +
          '/zone/' + zone._id
        });
      };

      self.searchAll = function (plate) {
        var deferred = $q.defer();
        var queries = [];
        var user = UserService.getCurrentUser();
        var zones = user.municipality.zones;

        angular.forEach(zones, function (zone) {
          queries.push(self.search(plate, zone));
        });

        return $q.all(queries);
      };

      self.issueTicket = function (ticketData) {
        var data = {
          ticket: angular.copy(ticketData)
        };

        data.ticket.zone = ticketData.zone._id;

        return $http({
          method: 'POST',
          headers: {
            'SessionToken': UserService.getToken()
          },
          url: settings.api + settings.apiUri + 'ticket',
          data: data
        });
      };

    }
  ])
