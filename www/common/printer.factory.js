/*globals angular: true */
(function () {
    'use strict';
    var selected = JSON.parse(window.localStorage.getItem('printer'));

    angular.module('reader.factories.printer', [])
    .factory('PrinterFactory', ['$q', function ($q) {
        function Device(d) {
            var self = this;
            this.name = d.name;
            this.address = d.address;
            this.select = function () {
                selected = self;
                var defer = $q.defer();
                window.localStorage.setItem('printer', JSON.stringify(self));
                window.printer.selectDevice(self, function (config) {
                    defer.resolve(config);
                }, function (err) {
                    defer.reject(err);
                });
                return defer.promise;
            };
        }
        function getFakeDevice() {
          var fakeData=[];
          fakeData[0]=new Device({name: "D-O PRINTER",address: "00:12:F3:1B:AF:17"});
          fakeData[1]=new Device({name: "D-1 PRINTER",address: "10:12:F3:1B:AF:20"});
          return fakeData;
        }
        var printer = {
            loadSavedPrinter: function () {
                var defer;
                if (selected) {
                    var printer = new Device(selected);
                    defer = printer.select()
                } else {
                    defer = $q.defer();
                    defer.reject('no device selected');
                }
                return defer;

            },
            getSelected: function () {
                return selected;
            },
            getDevices: function () {
                var defer = $q.defer();
                if (!window.cordova || !window.printer) {
                    console.log('PrinterFactory.getDevices not supported, sending back fake device');
                    // defer.reject('Not supported without cordova.js');
                    // Let send back a fake printer to ease browser based development
                    defer.resolve(getFakeDevice());
                } else {
                    window.printer.getDevices(function (devices) {
                        var results = [];
                        devices.forEach(function (device) {
                            results.push(new Device(device));
                        });
                        defer.resolve(results);
                    }, function (err) {
                        defer.reject(err);
                    });
                }
                return defer.promise;
            },
            connect: function (d) {
                if (!d && !selected) {
                    throw new Error('No device to select');
                }

                d = d || selected;
                return d.select();
            },
            printImage: function (image, ticket) {
                var defer = $q.defer();

                if (!window.cordova) {
                    defer.reject('Not supported without cordova.js');
                } else {
                    window.printer.printImage(image, ticket, function () {
                        defer.resolve();
                    }, function (err) {
                        defer.reject(err);
                    });
                }

                return defer.promise;
            },
            printTicket: function (data) {
                var defer = $q.defer();
                console.log(data);

                if (!window.cordova) {
                    defer.reject('Not supported without cordova.js');
                } else {
                    if (!window.printer) {
                        defer.reject('No printer plugin');
                    } else {
                        window.printer.print(data, function () {
                            defer.resolve();
                        }, function (err) {
                            defer.reject(err);
                        });
                    }
                }
                return defer.promise;
            },
            feedPage: function () {
                if (!window.printer) {
                    defer.reject('No printer plugin');
                } else {
                    window.printer.feedPage();
                }
            }
        };
        printer.Device = Device;
        return printer;
    }])

}());
