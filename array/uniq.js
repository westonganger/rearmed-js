(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function(){
  "use strict";

  var simpleType = require('./../functions/simpleType');

  var warn = require('./../functions/warn');
  if(Array.prototype.uniq){
    warn('Array', 'uniq');
  }

  Array.prototype.uniq = function(cb){
    var uniqItems = [];
    var hasCallback = simpleType(cb) == 'Function';

    return this.filter(function(x,i){
      var val = hasCallback ? cb(x,i) : x;
      if(uniqItems.smartExcludes(val)){
        uniqItems.push(val);
        return true;
      }
    });
  };

  Object.defineProperty(Array.prototype, "uniq", {enumerable: false});
}(this));

},{"./../functions/simpleType":2,"./../functions/warn":3}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
function warn(type, method, notPrototype){
  if(type && method){
    console.warn("Rearmed-js Overriding " + type + (notPrototype ? '.' : '.prototype.') + method, '. If this is a built-in browser method please report on Rearmed-js github issues.');
  }else{
    throw("incorrect number of arguments")
  }
};

module.exports = warn;

},{}]},{},[1]);
