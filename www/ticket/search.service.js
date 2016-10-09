angular.module('reader.services.search', [])
  .service('SearchService', [
    '$http',
    '$q',
    '$log',
    'settings',
    'UserService',
    function ($http, $q, $log, settings, UserService) {

      var self = this;

      self.getPrefered = function (items, sorting) {
        var result = [];
        sorting.forEach(function (key) {
          items = items.filter(function (item) {
            if (item.code == key) {
              result.push(item);
              return false;
            } else
              return true;
          })
        });
        return result;
      }

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

      self.searchZone = function (lat, lon) {
        //$log.debug(settings.api + settings.apiUri +'locations/near?lon=' + lon +'&lat=' + lat + '&radius=10');
        return $http({
          method: 'GET',
          headers: {
            'SessionToken': UserService.getToken()
          },
          url: settings.api + settings.apiUri +
          'locations/near?lon=' + lon +
          '&lat=' + lat + '&radius=10'
        });
      }

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
  ]);