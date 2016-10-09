'use strict';
module.exports = {
    getDevices: function (success, error, opts) {
        console.log('Called "getDevices" action stub', opts);
        return success([{
            name: 'BT Printer 1',
            addressn: '01:02:03:04:05'
        }, {
            name: 'D-O PRINTER',
            addressn: '01:02:03:04:05'
        }]);
    },
    print: function (success, error, opts) {
        console.log('Called "print" action stub', opts);
        return success();
    },
    selectDevice: function (success, error, opts) {
        console.log('Called "selectDevice" action stub', opts);
        return success();
    }
};
require('cordova/exec/proxy').add('Printer', module.exports);
