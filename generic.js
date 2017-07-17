(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function equals(obj1, obj2){
  if((obj1 == null || typeof obj1 != 'object') || (obj2 == null || typeof obj2 != 'object')){
    return obj1 == obj2;
  }

  for(var propName in obj1){
    if(obj1.hasOwnProperty(propName) != obj2.hasOwnProperty(propName)){
      return false;
    }else if(typeof obj1[propName] != typeof obj2[propName]){
      return false;
    }
  }
  for(var propName in obj2){
    var val = obj1[propName];
    var other = obj2[propName];
    if(obj1.hasOwnProperty(propName) != obj2.hasOwnProperty(propName)){
      return false;
    }else if(typeof val != typeof other){
      return false;
    }

    if(!obj1.hasOwnProperty(propName)){
      continue;
    }

    if(!equals(val, other)){
      return false;
    }
  }
  return true;
};

module.exports = equals;

},{}],2:[function(require,module,exports){
function isBlank(x){
  var val = true;
  var length = x['length'];

  if(length || length == 0){
    val = length == 0;
  }else if(x == true || typeof x == 'number'){
    val = false;
  }else if(x){
    val = Object.keys(x).length == 0;
  }

  return val;
};

module.exports = isBlank;

},{}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
function warn(type, method, notPrototype){
  if(type && method){
    console.warn("Rearmed-js Overriding " + type + (notPrototype ? '.' : '.prototype.') + method, '. If this is a built-in browser method please report on Rearmed-js github issues.');
  }else{
    throw("incorrect number of arguments")
  }
};

module.exports = warn;

},{}],5:[function(require,module,exports){
require('./generic/equals');
require('./generic/isBlank');
require('./generic/isPresent');
require('./generic/presence');
require('./generic/simpleType');

},{"./generic/equals":6,"./generic/isBlank":7,"./generic/isPresent":8,"./generic/presence":9,"./generic/simpleType":10}],6:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../functions/warn');
  var equals = require('./../functions/equals');

  if(Object.prototype.equals){
    warn('Object', 'equals');
  }

  Object.prototype.equals = function(x){
    return equals(this, x);
  };

  Object.defineProperty(Object.prototype, "equals", {enumerable: false});
}(this));

},{"./../functions/equals":1,"./../functions/warn":4}],7:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../functions/warn');
  var isBlank = require('./../functions/isBlank');

  if(Object.prototype.isBlank){
    warn('Object', 'isBlank');
  }

  Object.prototype.isBlank = function(){
    return isBlank(this);
  };

  Object.defineProperty(Object.prototype, "isBlank", {enumerable: false});
}(this));

},{"./../functions/isBlank":2,"./../functions/warn":4}],8:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../functions/warn');
  var isBlank = require('./../functions/isBlank');

  if(Object.prototype.isPresent){
    warn('Object', 'isPresent');
  }

  Object.prototype.isPresent = function(){
    return !isBlank(this);
  };

  Object.defineProperty(Object.prototype, "isPresent", {enumerable: false});
}(this));

},{"./../functions/isBlank":2,"./../functions/warn":4}],9:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../functions/warn');
  var isBlank = require('./../functions/isBlank');

  if(Object.prototype.presence){
    warn('Object', 'presence');
  }

  Object.prototype.presence = function(){
    return !isBlank(this) ? this : false;
  };

  Object.defineProperty(Object.prototype, "presence", {enumerable: false});
}(this));

},{"./../functions/isBlank":2,"./../functions/warn":4}],10:[function(require,module,exports){
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

},{"./../functions/simpleType":3,"./../functions/warn":4}]},{},[5]);
