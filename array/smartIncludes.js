(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function(){
  "use strict";

  var Rearmed = {
    isObjectLike: require('./../core/isObjectLike')
  };

  var warn = require('./../core/warn');
  if(Array.prototype.equals){
    warn('Array', 'equals');
  }

  Array.prototype.equals = function(array){
    if(!array){
      return false;
    }

    if(this.length !== array.length){
      return false;
    }

    for(var i=0;i<this.length;i++){
      var val = this[i];
      var other = array[i]
      if(Array.isArray(this[i]) && Array.isArray(other)){
        if(!val.equals(other)){
          return false;
        }
      }else if(Rearmed.isObjectLike(val) && Rearmed.isObjectLike(other)){
        if(!val.equals(other)){
          return false;
        }
      }else if(val !== other){
        return false;
      }
    }
    return true;
  }

  Object.defineProperty(Array.prototype, "equals", {enumerable: false});
}(this));

},{"./../core/isObjectLike":3,"./../core/warn":4}],2:[function(require,module,exports){
(function(){
  "use strict";

  require('./equals');
  require('./../object/equals');

  var Rearmed = {
    isObjectLike: require('./../core/isObjectLike')
  };

  var warn = require('./../core/warn');
  if(Array.prototype.smartIncludes){
    warn('Array', 'smartIncludes');
  }

  Array.prototype.smartIncludes = function(x, fromIndex){
    var fromIndex = fromIndex || 0;
    var bool = false;
    for(var i=fromIndex;i<this.length;i++){
      var val = this[i];
      if(Rearmed.isObjectLike(val)){
        if(val.equals(x)){
          bool = true;
          break;
        }
      }else if(val === x){
        bool = true;
        break;
      }
    }
    return bool;
  };

  Object.defineProperty(Array.prototype, "smartIncludes", {enumerable: false});
}(this));

},{"./../core/isObjectLike":3,"./../core/warn":4,"./../object/equals":5,"./equals":1}],3:[function(require,module,exports){
function isObjectLike(value){
  return value != null && typeof value == 'object';
};

module.exports = isObjectLike;

},{}],4:[function(require,module,exports){
function warn(type, method){
  console.warn("Rearmed-js Overriding " + type + " method: " + method, '. If this is a built-in browser method please report on Rearmed-js github issues.');
};

module.exports = warn;

},{}],5:[function(require,module,exports){
(function(){
  "use strict";

  var Rearmed = {
    isObjectLike: require('./../core/isObjectLike')
  };

  var warn = require('./../core/warn');
  if(Object.prototype.equals){
    warn('Object', 'equals');
  }

  Object.prototype.equals = function(object2){
    for(var propName in this){
      if(this.hasOwnProperty(propName) != object2.hasOwnProperty(propName)){
        return false;
      }else if(typeof this[propName] != typeof object2[propName]){
        return false;
      }
    }
    for(var propName in object2){
      var val = this[propName];
      var other = object2[propName];
      if(this.hasOwnProperty(propName) != object2.hasOwnProperty(propName)){
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
  };

  Object.defineProperty(Object.prototype, "equals", {enumerable: false});
}(this));

},{"./../core/isObjectLike":3,"./../core/warn":4}]},{},[2]);
