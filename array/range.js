(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../functions/warn');
  if(Array.range){
    warn('Array', 'range', true);
  }

  Array.range = function(start, end, step){
    if(!(typeof start == 'number' && !isNaN(start) && isFinite(start)) || !(typeof end == 'number' && !isNaN(end) && isFinite(end))){
      throw TypeError("start/end arguments must be numbers");
    }

    if(step === 0){
      throw TypeError("step argument cannot be zero");
    }else if(!step){
      step = 1;
    }

    if(end < start){
      step = -step;
    }

    var range = [];

    while(step > 0 ? end >= start : end <= start){
      range.push(start);
      start += step;
    }

    return range;
  };
}(this));

},{"./../functions/warn":2}],2:[function(require,module,exports){
function warn(type, method, notPrototype){
  if(type && method){
    console.warn("Rearmed-js Overriding " + type + (notPrototype ? '.' : '.prototype.') + method, '. If this is a built-in browser method please report on Rearmed-js github issues.');
  }else{
    throw("incorrect number of arguments")
  }
};

module.exports = warn;

},{}]},{},[1]);
