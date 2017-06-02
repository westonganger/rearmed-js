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
    equals: function(obj2){
      for(var propName in this){
        if(this.hasOwnProperty(propName) != obj2.hasOwnProperty(propName)){
          return false;
        }else if(typeof this[propName] != typeof obj2[propName]){
          return false;
        }
      }
      for(var propName in obj2){
        var val = this[propName];
        var other = obj2[propName];
        if(this.hasOwnProperty(propName) != obj2.hasOwnProperty(propName)){
          return false;
        }else if(typeof val != typeof other){
          return false;
        }

        if(!this.hasOwnProperty(propName)){
          continue;
        }

        if(Array.isArray(val) && Array.isArray(other)){
          if(!val.equals(other)){
            return false;
          }
        }else if(Rearmed.isObjectLike(val) && Rearmed.isObjectLike(other)){
          if(!val.equals(other)){
            return false;
          }
        }else if(val != other){
         return false;
        }
      }
      return true;
    }
  });
}(this));

},{"./../core/isObjectLike":1}]},{},[2]);
