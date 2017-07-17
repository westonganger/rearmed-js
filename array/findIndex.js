(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function(){
  "use strict";

  var simpleType = require('./../functions/simpleType');

  if(!Array.prototype.findIndex){
    Array.prototype.findIndex = function(cb){
      var index = -1;
      var hasCallback = simpleType(cb) == 'Function';
      for(var i=0;i<this.length;i++){
        if(hasCallback ? cb(this[i], i) : (cb === this[i])){
          index = i;
          break;
        }
      }
      return index;
    };

    Object.defineProperty(Array.prototype, "findIndex", {enumerable: false});
  }
}(this));

},{"./../functions/simpleType":2}],2:[function(require,module,exports){
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

},{}]},{},[1]);
