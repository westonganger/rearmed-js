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
(function(){
  "use strict";

  if(!Object.prototype.try){
    var simpleType = require('./../functions/simpleType');

    Object.prototype.try = function(x){
      var val = this[x];
      if(val || val === 0 || val === ''){
        if(simpleType(val) === 'Function'){
          if(arguments.length > 1){
            var args = Array.prototype.slice.call(arguments);
            args.shift();
          }
          val = val.apply(this, args);
        }
        return (val || val === 0 || val === '') ? val : false;
      }
      return false;
    };

    Object.defineProperty(Object.prototype, "try", {enumerable: false});
  }
}(this));

},{"./../functions/simpleType":1}]},{},[2]);
