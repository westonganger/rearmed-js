(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function isObjectLike(value){
  return value != null && typeof value == 'object';
};

module.exports = isObjectLike;

},{}],2:[function(require,module,exports){
function warn(type, method){
  console.warn("Rearmed-js Overriding " + type + " method: " + method, '. If this is a built-in browser method please report on Rearmed-js github issues.');
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
require('./object/select');
require('./object/values');

},{"./object/all":4,"./object/any":5,"./object/compact":6,"./object/dig":7,"./object/each":8,"./object/empty":9,"./object/equals":10,"./object/except":11,"./object/hasKey":12,"./object/hasValue":13,"./object/join":14,"./object/keys":15,"./object/merge":16,"./object/only":17,"./object/reject":18,"./object/select":19,"./object/values":20}],4:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Object.prototype.all){
    warn(Object, 'all');
  }

  Object.prototype.all = function(cb){
    var bool = true;

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
    warn(Object, 'any');
  }

  Object.prototype.any = function(cb){
    var bool = false;

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
    warn(Object, 'compact');
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
    warn(Object, 'dig');
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
    warn(Object, 'each');
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
    warn(Object, 'empty');
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
    warn(Object, 'equals');
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
    warn(Object, 'except');
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
    warn(Object, 'hasKey');
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
    warn(Object, 'hasValue');
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
    warn(Object, 'join');
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
  if(Object.prototype.keys){
    warn(Object, 'keys');
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

},{"./../core/warn":2}],16:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Object.prototype.merge){
    warn(Object, 'merge');
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

},{"./../core/warn":2}],17:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Object.prototype.only){
    warn(Object, 'only');
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

},{"./../core/warn":2}],18:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Object.prototype.reject){
    warn(Object, 'reject');
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

},{"./../core/warn":2}],19:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Object.prototype.select){
    warn(Object, 'select');
  }

  Object.prototype.select = function(cb){
    var obj = {};
    for(var k in this){
      var val = this[k];
      if(cb(k, val)){
        obj[k] = val;
      }
    }
    return obj;
  };

  Object.defineProperty(Object.prototype, "select", {enumerable: false});
}(this));

},{"./../core/warn":2}],20:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Object.prototype.values){
    warn(Object, 'values');
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

},{"./../core/warn":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvcmVhcm1lZC9jb3JlL2lzT2JqZWN0TGlrZS5qcyIsInNyYy9yZWFybWVkL2NvcmUvd2Fybi5qcyIsInNyYy9yZWFybWVkL29iamVjdC5qcyIsInNyYy9yZWFybWVkL29iamVjdC9hbGwuanMiLCJzcmMvcmVhcm1lZC9vYmplY3QvYW55LmpzIiwic3JjL3JlYXJtZWQvb2JqZWN0L2NvbXBhY3QuanMiLCJzcmMvcmVhcm1lZC9vYmplY3QvZGlnLmpzIiwic3JjL3JlYXJtZWQvb2JqZWN0L2VhY2guanMiLCJzcmMvcmVhcm1lZC9vYmplY3QvZW1wdHkuanMiLCJzcmMvcmVhcm1lZC9vYmplY3QvZXF1YWxzLmpzIiwic3JjL3JlYXJtZWQvb2JqZWN0L2V4Y2VwdC5qcyIsInNyYy9yZWFybWVkL29iamVjdC9oYXNLZXkuanMiLCJzcmMvcmVhcm1lZC9vYmplY3QvaGFzVmFsdWUuanMiLCJzcmMvcmVhcm1lZC9vYmplY3Qvam9pbi5qcyIsInNyYy9yZWFybWVkL29iamVjdC9rZXlzLmpzIiwic3JjL3JlYXJtZWQvb2JqZWN0L21lcmdlLmpzIiwic3JjL3JlYXJtZWQvb2JqZWN0L29ubHkuanMiLCJzcmMvcmVhcm1lZC9vYmplY3QvcmVqZWN0LmpzIiwic3JjL3JlYXJtZWQvb2JqZWN0L3NlbGVjdC5qcyIsInNyYy9yZWFybWVkL29iamVjdC92YWx1ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJmdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpe1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcbiIsImZ1bmN0aW9uIHdhcm4odHlwZSwgbWV0aG9kKXtcbiAgY29uc29sZS53YXJuKFwiUmVhcm1lZC1qcyBPdmVycmlkaW5nIFwiICsgdHlwZSArIFwiIG1ldGhvZDogXCIgKyBtZXRob2QsICcuIElmIHRoaXMgaXMgYSBidWlsdC1pbiBicm93c2VyIG1ldGhvZCBwbGVhc2UgcmVwb3J0IG9uIFJlYXJtZWQtanMgZ2l0aHViIGlzc3Vlcy4nKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gd2FybjtcbiIsInJlcXVpcmUoJy4vb2JqZWN0L2FsbCcpO1xucmVxdWlyZSgnLi9vYmplY3QvYW55Jyk7XG5yZXF1aXJlKCcuL29iamVjdC9jb21wYWN0Jyk7XG5yZXF1aXJlKCcuL29iamVjdC9kaWcnKTtcbnJlcXVpcmUoJy4vb2JqZWN0L2VhY2gnKTtcbnJlcXVpcmUoJy4vb2JqZWN0L2VtcHR5Jyk7XG5yZXF1aXJlKCcuL29iamVjdC9lcXVhbHMnKTtcbnJlcXVpcmUoJy4vb2JqZWN0L2V4Y2VwdCcpO1xucmVxdWlyZSgnLi9vYmplY3QvaGFzS2V5Jyk7XG5yZXF1aXJlKCcuL29iamVjdC9oYXNWYWx1ZScpO1xucmVxdWlyZSgnLi9vYmplY3Qvam9pbicpO1xucmVxdWlyZSgnLi9vYmplY3Qva2V5cycpO1xucmVxdWlyZSgnLi9vYmplY3QvbWVyZ2UnKTtcbnJlcXVpcmUoJy4vb2JqZWN0L29ubHknKTtcbnJlcXVpcmUoJy4vb2JqZWN0L3JlamVjdCcpO1xucmVxdWlyZSgnLi9vYmplY3Qvc2VsZWN0Jyk7XG5yZXF1aXJlKCcuL29iamVjdC92YWx1ZXMnKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKE9iamVjdC5wcm90b3R5cGUuYWxsKXtcbiAgICB3YXJuKE9iamVjdCwgJ2FsbCcpO1xuICB9XG5cbiAgT2JqZWN0LnByb3RvdHlwZS5hbGwgPSBmdW5jdGlvbihjYil7XG4gICAgdmFyIGJvb2wgPSB0cnVlO1xuXG4gICAgZm9yKHZhciBrIGluIHRoaXMpe1xuICAgICAgaWYoIWNiKGssIHRoaXNba10pKXtcbiAgICAgICAgYm9vbCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJvb2w7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9iamVjdC5wcm90b3R5cGUsIFwiYWxsXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihPYmplY3QucHJvdG90eXBlLmFueSl7XG4gICAgd2FybihPYmplY3QsICdhbnknKTtcbiAgfVxuXG4gIE9iamVjdC5wcm90b3R5cGUuYW55ID0gZnVuY3Rpb24oY2Ipe1xuICAgIHZhciBib29sID0gZmFsc2U7XG5cbiAgICBmb3IodmFyIGsgaW4gdGhpcyl7XG4gICAgICBpZihjYihrLCB0aGlzW2tdKSl7XG4gICAgICAgIGJvb2wgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJvb2w7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9iamVjdC5wcm90b3R5cGUsIFwiYW55XCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihPYmplY3QucHJvdG90eXBlLmNvbXBhY3Qpe1xuICAgIHdhcm4oT2JqZWN0LCAnY29tcGFjdCcpO1xuICB9XG5cbiAgT2JqZWN0LnByb3RvdHlwZS5jb21wYWN0ID0gZnVuY3Rpb24oYmFkKXtcbiAgICB2YXIgYmFkO1xuICAgIGlmKGFyZ3VtZW50cy5sZW5ndGggPT09IDApe1xuICAgICAgYmFkID0gW251bGwsIHVuZGVmaW5lZF07XG4gICAgfWVsc2UgaWYoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSl7XG4gICAgICBpZihBcnJheS5pc0FycmF5KGFyZ3VtZW50c1swXSkpe1xuICAgICAgICBiYWQgPSBhcmd1bWVudHNbMF07XG4gICAgICB9ZWxzZXtcbiAgICAgICAgYmFkID0gW2FyZ3VtZW50c1swXV07XG4gICAgICB9XG4gICAgfWVsc2V7XG4gICAgICBiYWQgPSBhcmd1bWVudHM7XG4gICAgfVxuXG4gICAgdmFyIG9iaiA9IHt9O1xuXG4gICAgZm9yKHZhciBrIGluIHRoaXMpe1xuICAgICAgdmFyIHZhbCA9IHRoaXNba107XG4gICAgICB2YXIgYm9vbCA9IHRydWU7XG4gICAgICBmb3IodmFyIGk9MDtpPGJhZC5sZW5ndGg7aSsrKXtcbiAgICAgICAgaWYodmFsID09PSBiYWRbaV0pe1xuICAgICAgICAgIGJvb2wgPSBmYWxzZTsgXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKGJvb2wpe1xuICAgICAgICBvYmpba10gPSB2YWw7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9iamVjdC5wcm90b3R5cGUsIFwiY29tcGFjdFwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBSZWFybWVkID0ge1xuICAgIGlzT2JqZWN0TGlrZTogcmVxdWlyZSgnLi8uLi9jb3JlL2lzT2JqZWN0TGlrZScpXG4gIH07XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihPYmplY3QucHJvdG90eXBlLmRpZyl7XG4gICAgd2FybihPYmplY3QsICdkaWcnKTtcbiAgfVxuXG4gIE9iamVjdC5wcm90b3R5cGUuZGlnID0gZnVuY3Rpb24oKXtcbiAgICB2YXIga2V5cztcbiAgICBpZihhcmd1bWVudHMubGVuZ3RoID09PSAwKXtcbiAgICAgIGtleXMgPSBbXTtcbiAgICB9ZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoID09PSAxKXtcbiAgICAgIGlmKEFycmF5LmlzQXJyYXkoYXJndW1lbnRzWzBdKSl7XG4gICAgICAgIGtleXMgPSBhcmd1bWVudHNbMF07XG4gICAgICB9ZWxzZXtcbiAgICAgICAga2V5cyA9IFthcmd1bWVudHNbMF1dO1xuICAgICAgfVxuICAgIH1lbHNle1xuICAgICAga2V5cyA9IGFyZ3VtZW50cztcbiAgICB9XG5cbiAgICB2YXIgdmFsID0gdGhpcztcbiAgICBmb3IodmFyIGsgaW4gYXJndW1lbnRzKXtcbiAgICAgIGlmKFJlYXJtZWQuaXNPYmplY3RMaWtlKHZhbCkpe1xuICAgICAgICB2YWwgPSB2YWxbYXJndW1lbnRzW2tdXTtcbiAgICAgIH1lbHNle1xuICAgICAgICB2YWwgPSB1bmRlZmluZWQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPYmplY3QucHJvdG90eXBlLCBcImRpZ1wiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoT2JqZWN0LnByb3RvdHlwZS5lYWNoKXtcbiAgICB3YXJuKE9iamVjdCwgJ2VhY2gnKTtcbiAgfVxuXG4gIE9iamVjdC5wcm90b3R5cGUuZWFjaCA9IGZ1bmN0aW9uKGNiKXtcbiAgICBmb3IodmFyIGsgaW4gdGhpcyl7XG4gICAgICBjYihrLCB0aGlzW2tdKTtcbiAgICB9XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9iamVjdC5wcm90b3R5cGUsIFwiZWFjaFwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoT2JqZWN0LnByb3RvdHlwZS5lbXB0eSl7XG4gICAgd2FybihPYmplY3QsICdlbXB0eScpO1xuICB9XG5cbiAgT2JqZWN0LnByb3RvdHlwZS5lbXB0eSA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMpLmxlbmd0aCA9PT0gMDtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JqZWN0LnByb3RvdHlwZSwgXCJlbXB0eVwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBSZWFybWVkID0ge1xuICAgIGlzT2JqZWN0TGlrZTogcmVxdWlyZSgnLi8uLi9jb3JlL2lzT2JqZWN0TGlrZScpXG4gIH07XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihPYmplY3QucHJvdG90eXBlLmVxdWFscyl7XG4gICAgd2FybihPYmplY3QsICdlcXVhbHMnKTtcbiAgfVxuXG4gIE9iamVjdC5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24ob2JqZWN0Mil7XG4gICAgZm9yKHZhciBwcm9wTmFtZSBpbiB0aGlzKXtcbiAgICAgIGlmKHRoaXMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpICE9IG9iamVjdDIuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKXtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfWVsc2UgaWYodHlwZW9mIHRoaXNbcHJvcE5hbWVdICE9IHR5cGVvZiBvYmplY3QyW3Byb3BOYW1lXSl7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yKHZhciBwcm9wTmFtZSBpbiBvYmplY3QyKXtcbiAgICAgIHZhciB2YWwgPSB0aGlzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBvdGhlciA9IG9iamVjdDJbcHJvcE5hbWVdO1xuICAgICAgaWYodGhpcy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkgIT0gb2JqZWN0Mi5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpe1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9ZWxzZSBpZih0eXBlb2YgdmFsICE9IHR5cGVvZiBvdGhlcil7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYoIXRoaXMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKXtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmKEFycmF5LmlzQXJyYXkodmFsKSAmJiBBcnJheS5pc0FycmF5KG90aGVyKSl7XG4gICAgICAgIGlmKCF2YWwuZXF1YWxzKG90aGVyKSl7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9ZWxzZSBpZihSZWFybWVkLmlzT2JqZWN0TGlrZSh2YWwpICYmIFJlYXJtZWQuaXNPYmplY3RMaWtlKG90aGVyKSl7XG4gICAgICAgIGlmKCF2YWwuZXF1YWxzKG90aGVyKSl7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9ZWxzZSBpZih2YWwgIT0gb3RoZXIpe1xuICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9iamVjdC5wcm90b3R5cGUsIFwiZXF1YWxzXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihPYmplY3QucHJvdG90eXBlLmV4Y2VwdCl7XG4gICAgd2FybihPYmplY3QsICdleGNlcHQnKTtcbiAgfVxuXG4gIE9iamVjdC5wcm90b3R5cGUuZXhjZXB0ID0gZnVuY3Rpb24oa2V5cyl7XG4gICAgdmFyIGtleXM7XG4gICAgaWYoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCl7XG4gICAgICBrZXlzID0gW107XG4gICAgfWVsc2UgaWYoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSl7XG4gICAgICBpZihBcnJheS5pc0FycmF5KGFyZ3VtZW50c1swXSkpe1xuICAgICAgICBrZXlzID0gYXJndW1lbnRzWzBdO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGtleXMgPSBbYXJndW1lbnRzWzBdXTtcbiAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgIGtleXMgPSBhcmd1bWVudHM7XG4gICAgfVxuXG4gICAgdmFyIG9iaiA9IHt9O1xuICAgIGZvcih2YXIgayBpbiB0aGlzKXtcbiAgICAgIHZhciBib29sID0gdHJ1ZTtcbiAgICAgIGZvcih2YXIgaT0wO2k8a2V5cy5sZW5ndGg7aSsrKXtcbiAgICAgICAgaWYoayA9PT0ga2V5c1tpXSl7XG4gICAgICAgICAgYm9vbCA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZihib29sKXtcbiAgICAgICAgb2JqW2tdID0gdGhpc1trXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JqZWN0LnByb3RvdHlwZSwgXCJleGNlcHRcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKE9iamVjdC5wcm90b3R5cGUuaGFzS2V5KXtcbiAgICB3YXJuKE9iamVjdCwgJ2hhc0tleScpO1xuICB9XG5cbiAgT2JqZWN0LnByb3RvdHlwZS5oYXNLZXkgPSBmdW5jdGlvbihrZXkpe1xuICAgIHZhciBib29sID0gZmFsc2U7XG4gICAgZm9yKHZhciBrIGluIHRoaXMpe1xuICAgICAgaWYoayA9PT0ga2V5KXtcbiAgICAgICAgYm9vbCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYm9vbDtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JqZWN0LnByb3RvdHlwZSwgXCJoYXNLZXlcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKE9iamVjdC5wcm90b3R5cGUuaGFzVmFsdWUpe1xuICAgIHdhcm4oT2JqZWN0LCAnaGFzVmFsdWUnKTtcbiAgfVxuXG4gIE9iamVjdC5wcm90b3R5cGUuaGFzVmFsdWUgPSBmdW5jdGlvbih2YWwpe1xuICAgIHZhciBib29sID0gZmFsc2U7XG4gICAgZm9yKHZhciBrIGluIHRoaXMpe1xuICAgICAgaWYodGhpc1trXSA9PT0gdmFsKXtcbiAgICAgICAgYm9vbCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYm9vbDtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JqZWN0LnByb3RvdHlwZSwgXCJoYXNWYWx1ZVwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoT2JqZWN0LnByb3RvdHlwZS5qb2luKXtcbiAgICB3YXJuKE9iamVjdCwgJ2pvaW4nKTtcbiAgfVxuXG4gIE9iamVjdC5wcm90b3R5cGUuam9pbiA9IGZ1bmN0aW9uKGNiLCBkZWxpbSl7XG4gICAgZGVsaW0gPSBkZWxpbSB8fCAnLCAnO1xuICAgIHZhciBzdHIgPSAnJztcbiAgICB2YXIgZmlyc3QgPSB0cnVlO1xuXG4gICAgZm9yKHZhciBrIGluIHRoaXMpe1xuICAgICAgaWYoZmlyc3Qpe1xuICAgICAgICBmaXJzdCA9IGZhbHNlO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHN0ciArPSBkZWxpbTtcbiAgICAgIH1cbiAgICAgIHN0ciArPSB0aGlzW2tdO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPYmplY3QucHJvdG90eXBlLCBcImpvaW5cIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKE9iamVjdC5wcm90b3R5cGUua2V5cyl7XG4gICAgd2FybihPYmplY3QsICdrZXlzJyk7XG4gIH1cblxuICBPYmplY3QucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbigpe1xuICAgIHZhciBhcnIgPSBbXTtcbiAgICBmb3IodmFyIGsgaW4gdGhpcyl7XG4gICAgICBhcnIucHVzaChrKTtcbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JqZWN0LnByb3RvdHlwZSwgXCJrZXlzXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihPYmplY3QucHJvdG90eXBlLm1lcmdlKXtcbiAgICB3YXJuKE9iamVjdCwgJ21lcmdlJyk7XG4gIH1cblxuICBPYmplY3QucHJvdG90eXBlLm1lcmdlID0gZnVuY3Rpb24ob2JqKXtcbiAgICB2YXIgaXRlbSA9IHt9O1xuICAgIGZvcih2YXIgayBpbiB0aGlzKXtcbiAgICAgIGl0ZW1ba10gPSB0aGlzW2tdO1xuXG4gICAgICBmb3IodmFyIGsyIGluIG9iail7XG4gICAgICAgIGl0ZW1bazJdID0gb2JqW2syXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGl0ZW07XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9iamVjdC5wcm90b3R5cGUsIFwibWVyZ2VcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKE9iamVjdC5wcm90b3R5cGUub25seSl7XG4gICAgd2FybihPYmplY3QsICdvbmx5Jyk7XG4gIH1cblxuICBPYmplY3QucHJvdG90eXBlLm9ubHkgPSBmdW5jdGlvbihrZXlzKXtcbiAgICB2YXIga2V5cztcbiAgICBpZihhcmd1bWVudHMubGVuZ3RoID09PSAwKXtcbiAgICAgIGtleXMgPSBbXTtcbiAgICB9ZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoID09PSAxKXtcbiAgICAgIGlmKEFycmF5LmlzQXJyYXkoYXJndW1lbnRzWzBdKSl7XG4gICAgICAgIGtleXMgPSBhcmd1bWVudHNbMF07XG4gICAgICB9ZWxzZXtcbiAgICAgICAga2V5cyA9IFthcmd1bWVudHNbMF1dO1xuICAgICAgfVxuICAgIH1lbHNle1xuICAgICAga2V5cyA9IGFyZ3VtZW50cztcbiAgICB9XG5cbiAgICB2YXIgb2JqID0ge307XG4gICAgZm9yKHZhciBrIGluIHRoaXMpe1xuICAgICAgdmFyIGJvb2wgPSBmYWxzZTtcbiAgICAgIGZvcih2YXIgaT0wO2k8a2V5cy5sZW5ndGg7aSsrKXtcbiAgICAgICAgaWYoayA9PT0ga2V5c1tpXSl7XG4gICAgICAgICAgYm9vbCA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKGJvb2wpe1xuICAgICAgICBvYmpba10gPSB0aGlzW2tdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPYmplY3QucHJvdG90eXBlLCBcIm9ubHlcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKE9iamVjdC5wcm90b3R5cGUucmVqZWN0KXtcbiAgICB3YXJuKE9iamVjdCwgJ3JlamVjdCcpO1xuICB9XG5cbiAgT2JqZWN0LnByb3RvdHlwZS5yZWplY3QgPSBmdW5jdGlvbihjYil7XG4gICAgdmFyIG9iaiA9IHt9O1xuICAgIGZvcih2YXIgayBpbiB0aGlzKXtcbiAgICAgIHZhciB2YWwgPSB0aGlzW2tdO1xuICAgICAgaWYoIWNiKGssIHZhbCkpe1xuICAgICAgICBvYmpba10gPSB2YWw7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9iamVjdC5wcm90b3R5cGUsIFwicmVqZWN0XCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihPYmplY3QucHJvdG90eXBlLnNlbGVjdCl7XG4gICAgd2FybihPYmplY3QsICdzZWxlY3QnKTtcbiAgfVxuXG4gIE9iamVjdC5wcm90b3R5cGUuc2VsZWN0ID0gZnVuY3Rpb24oY2Ipe1xuICAgIHZhciBvYmogPSB7fTtcbiAgICBmb3IodmFyIGsgaW4gdGhpcyl7XG4gICAgICB2YXIgdmFsID0gdGhpc1trXTtcbiAgICAgIGlmKGNiKGssIHZhbCkpe1xuICAgICAgICBvYmpba10gPSB2YWw7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9iamVjdC5wcm90b3R5cGUsIFwic2VsZWN0XCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihPYmplY3QucHJvdG90eXBlLnZhbHVlcyl7XG4gICAgd2FybihPYmplY3QsICd2YWx1ZXMnKTtcbiAgfVxuXG4gIE9iamVjdC5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgYXJyID0gW107XG4gICAgZm9yKHZhciBrIGluIHRoaXMpe1xuICAgICAgYXJyLnB1c2godGhpc1trXSk7XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9iamVjdC5wcm90b3R5cGUsIFwidmFsdWVzXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iXX0=
