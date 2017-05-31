(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function isObjectLike(value){
  return value != null && typeof value == 'object';
};

module.exports = isObjectLike;

},{}],2:[function(require,module,exports){
function warn(type, method, notPrototype){
  if(type && method){
    console.warn("Rearmed-js Overriding " + type + (notPrototype ? '.' : '.prototype.') + method, '. If this is a built-in browser method please report on Rearmed-js github issues.');
  }else{
    throw("incorrect number of arguments")
  }
};

module.exports = warn;

},{}],3:[function(require,module,exports){
require('./object/all');
require('./object/any');
require('./object/compact');
require('./object/dig');
require('./object/each');
require('./object/empty');
require('./object/equals');
require('./object/except');
require('./object/hasKey');
require('./object/hasValue');
require('./object/join');
require('./object/keys');
require('./object/merge');
require('./object/only');
require('./object/reject');
require('./object/keepIf');
require('./object/values');

},{"./object/all":4,"./object/any":5,"./object/compact":6,"./object/dig":7,"./object/each":8,"./object/empty":9,"./object/equals":10,"./object/except":11,"./object/hasKey":12,"./object/hasValue":13,"./object/join":14,"./object/keepIf":15,"./object/keys":16,"./object/merge":17,"./object/only":18,"./object/reject":19,"./object/values":20}],4:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Object.prototype.all){
    warn('Object', 'all');
  }

  Object.prototype.all = function(cb){
    var bool = true;

    if(!cb){
      cb = function(){
        return true;
      }
    }

    for(var k in this){
      if(!cb(k, this[k])){
        bool = false;
        break;
      }
    }
    return bool;
  };

  Object.defineProperty(Object.prototype, "all", {enumerable: false});
}(this));

},{"./../core/warn":2}],5:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Object.prototype.any){
    warn('Object', 'any');
  }

  Object.prototype.any = function(cb){
    var bool = false;

    if(!cb){
      cb = function(){
        return true;
      }
    }

    for(var k in this){
      if(cb(k, this[k])){
        bool = true;
        break;
      }
    }
    return bool;
  };

  Object.defineProperty(Object.prototype, "any", {enumerable: false});
}(this));

},{"./../core/warn":2}],6:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Object.prototype.compact){
    warn('Object', 'compact');
  }

  Object.prototype.compact = function(bad){
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
  };

  Object.defineProperty(Object.prototype, "compact", {enumerable: false});
}(this));

},{"./../core/warn":2}],7:[function(require,module,exports){
(function(){
  "use strict";

  var Rearmed = {
    isObjectLike: require('./../core/isObjectLike')
  };

  var warn = require('./../core/warn');
  if(Object.prototype.dig){
    warn('Object', 'dig');
  }

  Object.prototype.dig = function(){
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
  };

  Object.defineProperty(Object.prototype, "dig", {enumerable: false});
}(this));

},{"./../core/isObjectLike":1,"./../core/warn":2}],8:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Object.prototype.each){
    warn('Object', 'each');
  }

  Object.prototype.each = function(cb){
    for(var k in this){
      cb(k, this[k]);
    }
  };

  Object.defineProperty(Object.prototype, "each", {enumerable: false});
}(this));

},{"./../core/warn":2}],9:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Object.prototype.empty){
    warn('Object', 'empty');
  }

  Object.prototype.empty = function(){
    return Object.keys(this).length === 0;
  };

  Object.defineProperty(Object.prototype, "empty", {enumerable: false});
}(this));

},{"./../core/warn":2}],10:[function(require,module,exports){
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

},{"./../core/isObjectLike":1,"./../core/warn":2}],11:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Object.prototype.except){
    warn('Object', 'except');
  }

  Object.prototype.except = function(keys){
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

    var obj = {};
    for(var k in this){
      var bool = true;
      for(var i=0;i<keys.length;i++){
        if(k === keys[i]){
          bool = false;
          break;
        }
      }
      if(bool){
        obj[k] = this[k];
      }
    }
    return obj;
  };

  Object.defineProperty(Object.prototype, "except", {enumerable: false});
}(this));

},{"./../core/warn":2}],12:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Object.prototype.hasKey){
    warn('Object', 'hasKey');
  }

  Object.prototype.hasKey = function(key){
    var bool = false;
    for(var k in this){
      if(k === key){
        bool = true;
        break;
      }
    }
    return bool;
  };

  Object.defineProperty(Object.prototype, "hasKey", {enumerable: false});
}(this));

},{"./../core/warn":2}],13:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Object.prototype.hasValue){
    warn('Object', 'hasValue');
  }

  Object.prototype.hasValue = function(val){
    var bool = false;
    for(var k in this){
      if(this[k] === val){
        bool = true;
        break;
      }
    }
    return bool;
  };

  Object.defineProperty(Object.prototype, "hasValue", {enumerable: false});
}(this));

},{"./../core/warn":2}],14:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Object.prototype.join){
    warn('Object', 'join');
  }

  Object.prototype.join = function(cb, delim){
    delim = delim || ', ';
    var str = '';
    var first = true;

    for(var k in this){
      if(first){
        first = false;
      }else{
        str += delim;
      }
      str += this[k];
    }
    return str;
  };

  Object.defineProperty(Object.prototype, "join", {enumerable: false});
}(this));

},{"./../core/warn":2}],15:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Object.prototype.keepIf){
    warn('Object', 'keepIf');
  }

  Object.prototype.keepIf = function(cb){
    var obj = {};
    for(var k in this){
      var val = this[k];
      if(cb(k, val)){
        obj[k] = val;
      }
    }
    return obj;
  };

  Object.defineProperty(Object.prototype, "keepIf", {enumerable: false});
}(this));

},{"./../core/warn":2}],16:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Object.prototype.keys){
    warn('Object', 'keys');
  }

  Object.prototype.keys = function(){
    var arr = [];
    for(var k in this){
      arr.push(k);
    }
    return arr;
  };

  Object.defineProperty(Object.prototype, "keys", {enumerable: false});
}(this));

},{"./../core/warn":2}],17:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Object.prototype.merge){
    warn('Object', 'merge');
  }

  Object.prototype.merge = function(obj){
    var item = {};
    for(var k in this){
      item[k] = this[k];

      for(var k2 in obj){
        item[k2] = obj[k2];
      }
    }
    return item;
  };

  Object.defineProperty(Object.prototype, "merge", {enumerable: false});
}(this));

},{"./../core/warn":2}],18:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Object.prototype.only){
    warn('Object', 'only');
  }

  Object.prototype.only = function(keys){
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

    var obj = {};
    for(var k in this){
      var bool = false;
      for(var i=0;i<keys.length;i++){
        if(k === keys[i]){
          bool = true;
          break;
        }
      }
      if(bool){
        obj[k] = this[k];
      }
    }
    return obj;
  };

  Object.defineProperty(Object.prototype, "only", {enumerable: false});
}(this));

},{"./../core/warn":2}],19:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Object.prototype.reject){
    warn('Object', 'reject');
  }

  Object.prototype.reject = function(cb){
    var obj = {};
    for(var k in this){
      var val = this[k];
      if(!cb(k, val)){
        obj[k] = val;
      }
    }
    return obj;
  };

  Object.defineProperty(Object.prototype, "reject", {enumerable: false});
}(this));

},{"./../core/warn":2}],20:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Object.prototype.values){
    warn('Object', 'values');
  }

  Object.prototype.values = function(){
    var arr = [];
    for(var k in this){
      arr.push(this[k]);
    }
    return arr;
  };

  Object.defineProperty(Object.prototype, "values", {enumerable: false});
}(this));

},{"./../core/warn":2}]},{},[3]);
