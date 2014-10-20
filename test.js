'use strict';
var test = require('ava');
var colorizr = require('./colorizr');

test(function (t) {
	var rgbTest = colorizr.rgb();
    t.assert(Array.isArray(rgbTest));
    t.assert(rgbTest.length === 3, "array length = 3");

    var hexTest = colorizr.hex();
    t.assert(typeof hexTest === 'string');
    t.assert(hexTest.length === 6, "hex length = 6");

    rgbTest = colorizr.rgb(true);
    t.assert(typeof rgbTest === 'string', 'rgb is string');
    t.assert(rgbTest.length >= 10 && rgbTest.length <= 16, 'rgb length > 9 & < 17 / '+ rgbTest.length);
    t.assert(rgbTest.substr(0, 4) === 'rgb(', 'rgb(');
    t.assert(rgbTest.substr(rgbTest.length-1) === ')', ')');

    hexTest = colorizr.hex(true);
    t.assert(typeof hexTest === 'string');
    t.assert(hexTest.length === 7, "hex length = 7");
    t.assert(hexTest.substr(0, 1) === '#', 'start with #');
});
