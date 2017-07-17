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
if(!Object.prototype.rearmed){
  function RearmedObject(obj){
    for(var k in obj){
      this[k] = obj[k];
    }
  }

  var simpleType = require('./../functions/simpleType');

  Object.prototype.rearmed = function(){
    return new RearmedObject(this);
  };
  Object.defineProperty(Object.prototype, 'rearmed', {enumerable: false});

  Object.rearmed = {
    config: {
      object: []
    },

    add: function(obj){
      if(simpleType(obj) == 'Object'){
        for(var k in obj){
          RearmedObject.prototype[k] = obj[k];
          Object.defineProperty(RearmedObject.prototype, k, {enumerable: false});

          if(Object.rearmed.config.object.indexOf(k) == -1){
            Object.rearmed.config.object.push(k);
          }else{
            console.warn("Warning: Overriding rearmed()." + method);
          }
        }
      }else{
        throw('argument must be an object');
      }
    },

    remove: function(){
      var methods;
      if(arguments.length === 0){
        methods = [];
      }else if(arguments.length === 1){
        if(Array.isArray(arguments[0])){
          methods = arguments[0];
        }else{
          methods = [arguments[0]];
        }
      }else{
        methods = arguments;
      }

      for(var k in methods){
        var i = Object.rearmed.config.object.indexOf(k);
        if(i != -1){
          RearmedObject.prototype[k] = undefined;
          Object.rearmed.config.object.splice(i, 1);
        }
      }
    }
  };

}

},{"./../functions/simpleType":1}]},{},[2]);
