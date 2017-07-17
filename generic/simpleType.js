(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function simpleType(x){
  var val = typeof x;

  if(val == 'number'){
    val = 'Number';
  }else if(val == 'string'){
    val = 'String';
  }else if(val == 'boolean'){
    val = 'Boolean';
  }else if(!!(x && x.constructor && x.call && x.apply)){
    val = 'Function';
  }else if(x != null && val == 'object'){
    val = Array.isArray(x) ? 'Array' : 'Object';
  }

  return val;
}

module.exports = simpleType;

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
  var simpleType = require('./../functions/simpleType');

  if(Object.prototype.simpleType){
    warn('Object', 'simpleType');
  }

  Object.prototype.simpleType = function(){
    return simpleType(this);
  };

  Object.defineProperty(Object.prototype, "simpleType", {enumerable: false});
}(this));

},{"./../functions/simpleType":1,"./../functions/warn":2}]},{},[3]);
