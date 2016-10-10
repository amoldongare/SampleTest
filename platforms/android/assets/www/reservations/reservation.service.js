angular.module('reader.services.reservation', [])
  .service('ReservationService', [
    '$q',
    '$http',
    '$log',
    'settings',
    'UserService',
    function ($q, $http,$log, settings, UserService) {
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
            url: settings.api + settings.apiUri + 'reservation/current?expired=60'
          });
        }
      };
      this.uploadTicket = function (ticketFormData) {
        var token = UserService.getToken();
        return $http({
          method: 'POST',
          headers: {
              'SessionToken': token
            },
          url: settings.api + settings.apiUri + 'ticket',
          data: JSON.parse(ticketFormData)
        });
      };
    }
  ])