(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function(){
  "use strict";

  Object.rearmed.add({
    compact: function(bad){
      var bad;
      if(arguments.length === 0){
        bad = [null, undefined];
      }else if(arguments.length === 1){
        if(Array.isArray(arguments[0])){
          bad = arguments[0];
        }else{
          bad = [arguments[0]];
        }
      }else{
        bad = arguments;
      }

      var obj = {};

      for(var k in this){
        var val = this[k];
        var bool = true;
        for(var i=0;i<bad.length;i++){
          if(val === bad[i]){
            bool = false; 
            break;
          }
        }
        if(bool){
          obj[k] = val;
        }
      }
      return obj;
    }
  });
}(this));

},{}]},{},[1]);
