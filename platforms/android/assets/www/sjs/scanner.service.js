/* global AWS */
(function () {
  'use strict';

  angular
    .module('sjs.services.scanner', [])
    .service('ScannerService', ScannerService);
  ScannerService.$inject = ['$q', '$cordovaBarcodeScanner'];
  function ScannerService($q, $cordovaBarcodeScanner) {
    // hoisted functions
    this.getBarcode = getBarcode;

    function getBarcode() {
      return $q(function (resolve, reject) {
        if (!!window.cordova) {
          // then lets use the scanner to interpret a barcode for us
          var options = {
            "preferFrontCamera": true, // iOS and Android
            "showFlipCameraButton": false, // iOS and Android
            "prompt": "Center a vin barcode inside the scan area", // supported on Android only
            // "formats": "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
            "orientation": "portrait" // Android only (portrait|landscape), default unset so it rotates with the device
          };
          $cordovaBarcodeScanner.scan(options).then(resolve, reject);
        } else {
          // then return a dummy info
          resolve(getDummyBarcode());
        }
      });
    }

    function getDummyBarcode() {
      return {
        exampleVin: "VIN234564709743847HGDF"
      };
    }

  }
})();
