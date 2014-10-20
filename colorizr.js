'use strict';
!function(name, definition) {
    if (typeof define === 'function') { // AMD
        define(definition);
    }
    else if (typeof module !== 'undefined' && module.exports) {
        module.exports = definition;
    }
    else {
        var global = window, old = global[name];
        definition.noConflict = function () {
            global[name] = old;
            return definition;
        };
        global[name] = definition;
    }
}('colorizr', function() {
    var colorizr = {};

    colorizr.rgb = function(styleFriendly) {
        var rgb = [], val;
        while (rgb.length < 3) {
            val = Math.floor(Math.random() * 256);
            rgb.push(val);
        }
        if (styleFriendly) {
            return "rgb(" + rgb.join(',') + ")";
        }
        return rgb;
    };

    colorizr.hex = (function() {
        var getValidHex = (function() {
            var letters = ["A", "B", "C", "D", "E", "F"];
            function getHex(value) {
                if (value < 10 || value > 15) return value;
                return letters[value-10];
            }
            return getHex;
        }());
        return function(useHashtag) {
            var hexadecimal = "";
            while (hexadecimal.length < 6) {
                hexadecimal += getValidHex(Math.floor(Math.random() * 16));
            }
            return (useHashtag ? "#" : "") + hexadecimal;
        };
    }());

    return colorizr;
}());
