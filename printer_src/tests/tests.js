/*globals expect: true */
'use strict';
exports.defineAutoTests = function () {
    describe('Printer Global (window.printer)', function () {
        it('should exist', function () {
            expect(window.printer).toBeDefined();
        });

        describe('getDevices', function () {
            var devices = {};
            beforeEach(function (done) {
                console.log('beforeEach, prepared');
                window.printer.getDevices(function (d) {
                    devices = d;
                    console.log('Found devices', devices);
                    done();
                }, function (err) {
                    throw err;
                });
            });
            it('should return an object of device name: address pairs ', function () {
                expect(Object.keys(devices).length > 0).toBe(true);
            });
        });
    });
};

exports.defineManualTests = function (contentEl, createActionButton) {
    var logMessage = function (message, color) {
        var log = document.getElementById('info');
        var logLine = document.createElement('div');
        if (color) {
            logLine.style.color = color;
        }
        logLine.innerHTML = message;
        log.appendChild(logLine);
    };

    var clearLog = function () {
        var log = document.getElementById('info');
        log.innerHTML = '';
    };

    var devicetests =
        '<div id="dump_device"></div>' +
        '<div id="print"></div>';

    contentEl.innerHTML = '<div id="info"></div>' + devicetests;

    createActionButton('List Devices', function () {
        clearLog();
        console.log('querying devices');
        window.printer.getDevices(function (devices) {
            logMessage(JSON.stringify(devices, null, '\t'));
            console.log('devices', devices, Object.keys(devices).lendth);
        });
    }, 'dump_device');
    createActionButton('Print Ticket', function () {
        clearLog();
        console.log('Printing Ticket');

        window.printer.selectDevice({
            name: 'D-O PRINTER',
            address: '00:12:F3:1B:A9:2B'
        }, function () {
            console.log('Selected Printer');
            window.printer.print('ticket', {
                municipality: 'Borough of Brentwood, PA',
                zone: '',
                plate: 'ICUR12',
                state: 'PA',
                veh_make: 'Lexus',
                veh_model: 'ES 300h',
                veh_reg_yr: 2015,
                id: 'asd123'
            }, function () {
                console.log('done');
            }, function (err) {
                throw new Error(err);
            });
        });
    }, 'print');
};
