(function () {
  'use strict';

  angular
    .module('sjs.services.geo', [])
    .service('GeoService', GeoService);

  GeoService.$inject = ['$q', '$cordovaGeolocation'];
  function GeoService($q, $cordovaGeolocation) {
    this.getCurrentLocation = getCurrentLocation;

    ////////////////

    function getCurrentLocation() {
      return $q(function (resolve, reject) {
        if (!!window.cordova) {
          var posOptions = { timeout: 10000, enableHighAccuracy: true };
          $cordovaGeolocation
            .getCurrentPosition(posOptions)
            .then(resolve, reject);
        } else if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        } else {
          reject('Geolocation unsupported');
        }
      });
    }
  }
})();
