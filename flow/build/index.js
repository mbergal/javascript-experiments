"use strict";

var a = function () {
    var ref = _asyncToGenerator(function* () {
        (0, _module.f)();
        ///throw new Error( "!!!!"); // this should point to original file
    });

    return function a() {
        return ref.apply(this, arguments);
    };
}();

var b = function () {
    var ref = _asyncToGenerator(function* () {
        return a();
    });

    return function b() {
        return ref.apply(this, arguments);
    };
}();

var _module = require("./module1");

var _sourceMapSupport = require("source-map-support");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

// dasdasdasdasdasdas
require("babel-core/register");
require("babel-polyfill");

(0, _sourceMapSupport.install)();

var c = { a: 1, b: 2 };

_asyncToGenerator(function* () {
    yield b();
    console.log("Yey, story successfully loaded!");
})();

//# sourceMappingURL=index.js.map