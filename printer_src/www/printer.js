/*globals cordova: true */
(function () {
    'use strict';
    var printer = {
        getDevices: function (successCallback, errorCallback) {
            cordova.exec(
                successCallback,
                errorCallback,
                'Printer',
                'getDevices',
                []
            );
        },
        print: function (fields, successCallback, errorCallback) {
            cordova.exec(
                successCallback,
                errorCallback,
                'Printer',
                'print',
                [{
                    fields: fields
                }]
            );
        },
        selectDevice: function (device, successCallback, errorCallback) {
            cordova.exec(
                successCallback,
                errorCallback,
                'Printer',
                'selectDevice',
                [{
                    device: device
                }]
            );
        },
        feedPage: function (successCallback, errorCallback) {
            cordova.exec(
                successCallback,
                errorCallback,
                'Printer',
                'feedPage',
                []
            );
        }
    };

    module.exports = printer;
}());
