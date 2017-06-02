(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function isObjectLike(value){
  return value != null && typeof value == 'object';
};

module.exports = isObjectLike;

},{}],2:[function(require,module,exports){
(function(){
  "use strict";

  var Rearmed = {
    isObjectLike: require('./../core/isObjectLike')
  };

  Object.rearmed.add({
    dig: function(){
      var keys;
      if(arguments.length === 0){
        keys = [];
      }else if(arguments.length === 1){
        if(Array.isArray(arguments[0])){
          keys = arguments[0];
        }else{
          keys = [arguments[0]];
        }
      }else{
        keys = arguments;
      }

      var val = this;
      for(var k in arguments){
        if(Rearmed.isObjectLike(val)){
          val = val[arguments[k]];
        }else{
          val = undefined;
          break;
        }
      }
      return val;
    }
  });
}(this));

},{"./../core/isObjectLike":1}]},{},[2]);
