(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function warn(type, method){
  console.warn("Rearmed-js Overriding " + type + " method: " + method, '. If this is a built-in browser method please report on Rearmed-js github issues.');
};

module.exports = warn;

},{}],2:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Number.prototype.ceil){
    warn('Number', 'ceil');
  }

  Number.prototype.ceil = function(){
    return Math.ceil(this);
  };

  Object.defineProperty(Number.prototype, "ceil", {enumerable: false});
}(this));

},{"./../core/warn":1}]},{},[2]);
