(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function isBlank(x){
  val = true;

  if(x == true || typeof x == 'number'){
    val = false;
  }else if(x){
    val = Object.keys(x).length == 0;
  }

  return val;
};

module.exports = isBlank;

},{}],2:[function(require,module,exports){
function warn(type, method, notPrototype){
  if(type && method){
    console.warn("Rearmed-js Overriding " + type + (notPrototype ? '.' : '.prototype.') + method, '. If this is a built-in browser method please report on Rearmed-js github issues.');
  }else{
    throw("incorrect number of arguments")
  }
};

module.exports = warn;

},{}],3:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../functions/warn');
  var isBlank = require('./../functions/isBlank');

  if(Object.prototype.isBlank){
    warn('Object', 'isBlank');
  }

  Object.prototype.isBlank = function(){
    return isBlank(this);
  };

  Object.defineProperty(Object.prototype, "isBlank", {enumerable: false});
}(this));

},{"./../functions/isBlank":1,"./../functions/warn":2}]},{},[3]);
