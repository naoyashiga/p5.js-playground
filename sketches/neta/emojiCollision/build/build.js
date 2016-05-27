(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Visualization = function Visualization(cb) {
  _classCallCheck(this, Visualization);

  var _this = this;

  // Callback onLoaded
  cb();
};

exports.default = Visualization;

},{}],2:[function(require,module,exports){
'use strict';

var _Visualization = require('./components/Visualization');

var _Visualization2 = _interopRequireDefault(_Visualization);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var visualization = new _Visualization2.default(function (v) {
  console.log('Visualization loaded');
});

},{"./components/Visualization":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJza2V0Y2hlcy9uZXRhL2Vtb2ppQ29sbGlzaW9uL2pzL2NvbXBvbmVudHMvVmlzdWFsaXphdGlvbi5qcyIsInNrZXRjaGVzL25ldGEvZW1vamlDb2xsaXNpb24vanMvc2tldGNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7SUNDcUIsYSxHQUNuQix1QkFBWSxFQUFaLEVBQWdCO0FBQUE7O0FBQ2QsTUFBTSxRQUFRLElBQWQ7OztBQUlBO0FBQ0QsQzs7a0JBUGtCLGE7Ozs7O0FDRHJCOzs7Ozs7QUFFQSxJQUFNLGdCQUFnQiw0QkFBa0IsVUFBQyxDQUFELEVBQU87QUFDN0MsVUFBUSxHQUFSLENBQVksc0JBQVo7QUFDRCxDQUZxQixDQUF0QiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpc3VhbGl6YXRpb24ge1xuICBjb25zdHJ1Y3RvcihjYikge1xuICAgIGNvbnN0IF90aGlzID0gdGhpcztcblxuXG4gICAgLy8gQ2FsbGJhY2sgb25Mb2FkZWRcbiAgICBjYigpO1xuICB9XG5cbn1cbiIsImltcG9ydCBWaXN1YWxpemF0aW9uIGZyb20gJy4vY29tcG9uZW50cy9WaXN1YWxpemF0aW9uJztcblxuY29uc3QgdmlzdWFsaXphdGlvbiA9IG5ldyBWaXN1YWxpemF0aW9uKCh2KSA9PiB7XG4gIGNvbnNvbGUubG9nKCdWaXN1YWxpemF0aW9uIGxvYWRlZCcpO1xufSk7XG4iXX0=
