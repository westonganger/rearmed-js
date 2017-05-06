(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
require('./array/all');
require('./array/any');
require('./array/compact');
require('./array/dig');
require('./array/each');
require('./array/empty');
require('./array/equals');
require('./array/excludes');
require('./array/find');
require('./array/findIndex');
require('./array/first');
require('./array/flatten');
require('./array/includes');
require('./array/inGroupsOf');
require('./array/groupBy');
require('./array/last');
require('./array/max');
require('./array/maxBy');
require('./array/min');
require('./array/minBy');
require('./array/notEmpty');
require('./array/smartExcludes');
require('./array/smartIncludes');
require('./array/reject');
require('./array/select');
require('./array/sum');
require('./array/uniq');

},{"./array/all":2,"./array/any":3,"./array/compact":4,"./array/dig":5,"./array/each":6,"./array/empty":7,"./array/equals":8,"./array/excludes":9,"./array/find":10,"./array/findIndex":11,"./array/first":12,"./array/flatten":13,"./array/groupBy":14,"./array/inGroupsOf":15,"./array/includes":16,"./array/last":17,"./array/max":18,"./array/maxBy":19,"./array/min":20,"./array/minBy":21,"./array/notEmpty":22,"./array/reject":23,"./array/select":24,"./array/smartExcludes":25,"./array/smartIncludes":26,"./array/sum":27,"./array/uniq":28}],2:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Array.prototype.all){
    warn('Array', 'all');
  }

  Array.prototype.all = function(cb){
    if(!cb){
      cb = function(){
        return true;
      }
    }
    return this.every(cb);
  };

  Object.defineProperty(Array.prototype, "all", {enumerable: false});
}(this));

},{"./../core/warn":31}],3:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Array.prototype.any){
    warn('Array', 'any');
  }

  Array.prototype.any = function(cb){
    if(!cb){
      cb = function(){
        return true;
      }
    }

    return this.some(cb);
  };

  Object.defineProperty(Array.prototype, "any", {enumerable: false});
}(this));

},{"./../core/warn":31}],4:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Array.prototype.compact){
    warn('Array', 'compact');
  }

  Array.prototype.compact = function(){
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

    return this.filter(function(x){
      var bool = true;
      for(var i=0;i<bad.length;i++){
        if(x === bad[i]){
          bool = false;
          break;
        }
      }
      return bool;
    });
  };

  Object.defineProperty(Array.prototype, "compact", {enumerable: false});
}(this));

},{"./../core/warn":31}],5:[function(require,module,exports){
(function(){
  "use strict";

  var Rearmed = {
    isObjectLike: require('./../core/isObjectLike')
  };

  var warn = require('./../core/warn');
  if(Array.prototype.dig){
    warn('Array', 'dig');
  }

  Array.prototype.dig = function(){
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
    for(var i=0;i<arguments.length;i++){
      if(Rearmed.isObjectLike(val)){
        val = val[arguments[i]];
      }else{
        val = undefined;
        break;
      }
    }
    return val;
  };

  Object.defineProperty(Array.prototype, "dig", {enumerable: false});
}(this));

},{"./../core/isObjectLike":30,"./../core/warn":31}],6:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Array.prototype.each){
    warn('Array', 'each');
  }

  Array.prototype.each = function(cb){
    for(var i=0;i<this.length;i++){
      cb(this[i], i);
    }
  };

  Object.defineProperty(Array.prototype, "each", {enumerable: false});
}(this));

},{"./../core/warn":31}],7:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Array.prototype.empty){
    warn('Array', 'empty');
  }

  Array.prototype.empty = function(){
    return this.length === 0;
  };

  Object.defineProperty(Array.prototype, "empty", {enumerable: false});
}(this));

},{"./../core/warn":31}],8:[function(require,module,exports){
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

},{"./../core/isObjectLike":30,"./../core/warn":31}],9:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Array.prototype.excludes){
    warn('Array', 'excludes');
  }

  Array.prototype.excludes = function(x, fromIndex){
    var fromIndex = fromIndex || 0;
    var bool = true;
    for(var i=fromIndex;i<this.length;i++){
      if(this[i] === x){
        bool = false;
        break;
      }
    }
    return bool;
  };

  Object.defineProperty(Array.prototype, "excludes", {enumerable: false});
}(this));

},{"./../core/warn":31}],10:[function(require,module,exports){
(function(){
  "use strict";

  var Rearmed = {
    isFunction: require('./../core/isFunction')
  };

  if(!Array.prototype.find){
    Array.prototype.find = function(cb){
      var item;
      var hasCallback = Rearmed.isFunction(cb);
      for(var i=0;i<this.length;i++){
        var val = this[i];
        if(hasCallback ? cb(val, i) : (cb === val)){
          val = val;
          break;
        }
      }
      return item;
    };
    Object.defineProperty(Array.prototype, "find", {enumerable: false});
  }
}(this));

},{"./../core/isFunction":29}],11:[function(require,module,exports){
(function(){
  "use strict";

  var Rearmed = {
    isFunction: require('./../core/isFunction')
  };

  if(!Array.prototype.findIndex){
    Array.prototype.findIndex = function(cb){
      var index = -1;
      var hasCallback = Rearmed.isFunction(cb);
      for(var i=0;i<this.length;i++){
        if(hasCallback ? cb(this[i], i) : (cb === this[i])){
          index = i;
          break;
        }
      }
      return index;
    };

    Object.defineProperty(Array.prototype, "findIndex", {enumerable: false});
  }
}(this));

},{"./../core/isFunction":29}],12:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Array.prototype.first){
    warn('Array', 'first');
  }

  Array.prototype.first = function(){
    return this[0];
  };

  Object.defineProperty(Array.prototype, "first", {enumerable: false});
}(this));

},{"./../core/warn":31}],13:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Array.prototype.flatten){
    warn('Array', 'flatten');
  }

  Array.prototype.flatten = function(result){
    result = result || [];
    for(var i=0;i<this.length;i++){
      var val = this[i];
      if(Array.isArray(val)){
        for(var j=0;j<val.length;j++){
          var val2 = val[j];
          if(Array.isArray(val2)){
            val2.flatten(result);
          }else{
            result.push(val2);
          }
        }
      }else{
        result.push(val);
      }
    }
    return result;
  };

  Object.defineProperty(Array.prototype, "flatten", {enumerable: false});
}(this));

},{"./../core/warn":31}],14:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Array.prototype.groupBy){
    warn('Array', 'groupBy');
  }

  Array.prototype.groupBy = function(cb){
    var hash = {};
    for(var i=0;i<this.length;i++){
      var val = this[i];
      var key = cb(val, i);
      hash[key] = hash[key] || [];
      hash[key].push(val);
    }
    return hash;
  };

  Object.defineProperty(Array.prototype, "groupBy", {enumerable: false});
}(this));

},{"./../core/warn":31}],15:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Array.prototype.inGroupsOf){
    warn('Array', 'inGroupsOf');
  }

  Array.prototype.inGroupsOf = function(per, fillWith){
    var arr = []
    var per = Number(per);
    var fillWith = fillWith || false;
    var length = this.length;

    for(var i=0;i<length;i++){
      var count = 0;
      var offset;
      if((i+1) % per === 0){
        count = per;
        offset = per;
      }else if(i+1 === length){
        count = per;
        offset = length % per;
      }

      if(count > 0){
        var group = [];
        for(var j=0;j<count;j++){
          var val = this[i-offset+j+1];
          if(val){
            group.push(val);
          }else if(fillWith !== false){
            group.push(fillWith);
          }
        }
        arr.push(group)
      }
    }

    return arr;
  };

  Object.defineProperty(Array.prototype, "inGroupsOf", {enumerable: false});
}(this));

},{"./../core/warn":31}],16:[function(require,module,exports){
(function(){
  "use strict";

  if(!Array.prototype.includes){
    Array.prototype.includes = function(x, fromIndex){
      fromIndex = fromIndex || 0;
      var bool = false;
      for(var i=fromIndex;i<this.length;i++){
        if(this[i] === x){
          bool = true;
          break;
        }
      }
      return bool;
    };

    Object.defineProperty(Array.prototype, "includes", {enumerable: false});
  }
}(this));

},{}],17:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Array.prototype.last){
    warn('Array', 'last');
  }

  Array.prototype.last = function(){
    return this[this.length-1];
  };

  Object.defineProperty(Array.prototype, "last", {enumerable: false});
}(this));

},{"./../core/warn":31}],18:[function(require,module,exports){
(function(){
  "use strict";

  var Rearmed = {
    isFunction: require('./../core/isFunction')
  };

  var warn = require('./../core/warn');
  if(Array.prototype.max){
    warn('Array', 'max');
  }

  Array.prototype.max = function(cb){
    var max;
    var hasCallback = Rearmed.isFunction(cb);
    for(var i=0;i<this.length;i++){
      var val = hasCallback ? cb(this[i], i) : this[i];

      if(max === null || max === undefined || val > max){
        max = val;
      }
    }
    return max;
  };

  Object.defineProperty(Array.prototype, "max", {enumerable: false});
}(this));

},{"./../core/isFunction":29,"./../core/warn":31}],19:[function(require,module,exports){
(function(){
  "use strict";

  var Rearmed = {
    isFunction: require('./../core/isFunction')
  };

  var warn = require('./../core/warn');
  if(Array.prototype.maxBy){
    warn('Array', 'maxBy');
  }

  Array.prototype.maxBy = function(cb){
    var current, max;
    var hasCallback = Rearmed.isFunction(cb);
    for(var i=0;i<this.length;i++){
      var item = this[i];
      var val = hasCallback ? cb(item, i) : item;

      if(current === null || current === undefined || val > max){
        current = item;
        max = val;
      }
    }
    return current;
  };

  Object.defineProperty(Array.prototype, "maxBy", {enumerable: false});
}(this));

},{"./../core/isFunction":29,"./../core/warn":31}],20:[function(require,module,exports){
(function(){
  "use strict";

  var Rearmed = {
    isFunction: require('./../core/isFunction')
  };

  var warn = require('./../core/warn');
  if(Array.prototype.min){
    warn('Array', 'min');
  }

  Array.prototype.min = function(cb){
    var min;
    var hasCallback = Rearmed.isFunction(cb);
    for(var i=0;i<this.length;i++){
      var val = hasCallback ? cb(this[i], i) : this[i];

      if(min === null || min === undefined || val < min){
        min = val;
      }
    }
    return min;
  };

  Object.defineProperty(Array.prototype, "min", {enumerable: false});
}(this));

},{"./../core/isFunction":29,"./../core/warn":31}],21:[function(require,module,exports){
(function(){
  "use strict";

  var Rearmed = {
    isFunction: require('./../core/isFunction')
  };

  var warn = require('./../core/warn');
  if(Array.prototype.minBy){
    warn('Array', 'minBy');
  }

  Array.prototype.minBy = function(cb){
    var current, min;
    var hasCallback = Rearmed.isFunction(cb);
    for(var i=0;i<this.length;i++){
      var item = this[i];
      var val = hasCallback ? cb(item, i) : item;

      if(current === null || current === undefined || val < min){
        current = item;
        min = val;
      }
    }
    return current;
  };

  Object.defineProperty(Array.prototype, "minBy", {enumerable: false});
}(this));

},{"./../core/isFunction":29,"./../core/warn":31}],22:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Array.prototype.notEmpty){
    warn('Array', 'notEmpty');
  }

  Array.prototype.notEmpty = function(){
    return this.length !== 0;
  };

  Object.defineProperty(Array.prototype, "notEmpty", {enumerable: false});
}(this));

},{"./../core/warn":31}],23:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Array.prototype.reject){
    warn('Array', 'reject');
  }

  Array.prototype.reject = function(cb){
    return this.filter(function(x, i){
      return !cb(x,i);
    });
  };

  Object.defineProperty(Array.prototype, "reject", {enumerable: false});
}(this));

},{"./../core/warn":31}],24:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Array.prototype.select){
    warn('Array', 'select');
  }

  Array.prototype.select = function(cb){
    return this.filter(cb);
  };

  Object.defineProperty(Array.prototype, "select", {enumerable: false});
}(this));

},{"./../core/warn":31}],25:[function(require,module,exports){
(function(){
  "use strict";

  require('./equals');
  require('./../object/equals');

  var Rearmed = {
    isObjectLike: require('./../core/isObjectLike')
  };

  var warn = require('./../core/warn');
  if(Array.prototype.smartExcludes){
    warn('Array', 'smartExcludes');
  }

  Array.prototype.smartExcludes = function(x, fromIndex){
    var fromIndex = fromIndex || 0;
    var bool = true;
    for(var i=fromIndex;i<this.length;i++){
      var val = this[i];
      if(Rearmed.isObjectLike(val)){
        if(val.equals(x)){
          bool = false;
          break;
        }
      }else if(val === x){
        bool = false;
        break;
      }
    }
    return bool;
  };

  Object.defineProperty(Array.prototype, "smartExcludes", {enumerable: false});
}(this));

},{"./../core/isObjectLike":30,"./../core/warn":31,"./../object/equals":32,"./equals":8}],26:[function(require,module,exports){
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

},{"./../core/isObjectLike":30,"./../core/warn":31,"./../object/equals":32,"./equals":8}],27:[function(require,module,exports){
(function(){
  "use strict";

  var Rearmed = {
    isFunction: require('./../core/isFunction')
  };

  var warn = require('./../core/warn');
  if(Array.prototype.sum){
    warn('Array', 'sum');
  }

  Array.prototype.sum = function(cb){
    var sum = 0;
    var hasCallback = Rearmed.isFunction(cb);
    for(var i=0;i<this.length;i++){
      var val = hasCallback ? cb(this[i], i) : this[i];

      if(isFinite(val)){
        sum += Number(val);
      }else{
        throw("`" + val + "` cannot be coerced to a Number");
      }
    }
    return sum;
  };

  Object.defineProperty(Array.prototype, "sum", {enumerable: false});
}(this));

},{"./../core/isFunction":29,"./../core/warn":31}],28:[function(require,module,exports){
(function(){
  "use strict";

  var Rearmed = {
    isFunction: require('./../core/isFunction')
  };

  var warn = require('./../core/warn');
  if(Array.prototype.uniq){
    warn('Array', 'uniq');
  }

  Array.prototype.uniq = function(cb){
    var uniqItems = [];
    var hasCallback = Rearmed.isFunction(cb);

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

},{"./../core/isFunction":29,"./../core/warn":31}],29:[function(require,module,exports){
function isFunction(obj){
  return !!(obj && obj.constructor && obj.call && obj.apply);
};

module.exports = isFunction;

},{}],30:[function(require,module,exports){
function isObjectLike(value){
  return value != null && typeof value == 'object';
};

module.exports = isObjectLike;

},{}],31:[function(require,module,exports){
function warn(type, method){
  console.warn("Rearmed-js Overriding " + type + " method: " + method, '. If this is a built-in browser method please report on Rearmed-js github issues.');
};

module.exports = warn;

},{}],32:[function(require,module,exports){
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

},{"./../core/isObjectLike":30,"./../core/warn":31}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvcmVhcm1lZC9hcnJheS5qcyIsInNyYy9yZWFybWVkL2FycmF5L2FsbC5qcyIsInNyYy9yZWFybWVkL2FycmF5L2FueS5qcyIsInNyYy9yZWFybWVkL2FycmF5L2NvbXBhY3QuanMiLCJzcmMvcmVhcm1lZC9hcnJheS9kaWcuanMiLCJzcmMvcmVhcm1lZC9hcnJheS9lYWNoLmpzIiwic3JjL3JlYXJtZWQvYXJyYXkvZW1wdHkuanMiLCJzcmMvcmVhcm1lZC9hcnJheS9lcXVhbHMuanMiLCJzcmMvcmVhcm1lZC9hcnJheS9leGNsdWRlcy5qcyIsInNyYy9yZWFybWVkL2FycmF5L2ZpbmQuanMiLCJzcmMvcmVhcm1lZC9hcnJheS9maW5kSW5kZXguanMiLCJzcmMvcmVhcm1lZC9hcnJheS9maXJzdC5qcyIsInNyYy9yZWFybWVkL2FycmF5L2ZsYXR0ZW4uanMiLCJzcmMvcmVhcm1lZC9hcnJheS9ncm91cEJ5LmpzIiwic3JjL3JlYXJtZWQvYXJyYXkvaW5Hcm91cHNPZi5qcyIsInNyYy9yZWFybWVkL2FycmF5L2luY2x1ZGVzLmpzIiwic3JjL3JlYXJtZWQvYXJyYXkvbGFzdC5qcyIsInNyYy9yZWFybWVkL2FycmF5L21heC5qcyIsInNyYy9yZWFybWVkL2FycmF5L21heEJ5LmpzIiwic3JjL3JlYXJtZWQvYXJyYXkvbWluLmpzIiwic3JjL3JlYXJtZWQvYXJyYXkvbWluQnkuanMiLCJzcmMvcmVhcm1lZC9hcnJheS9ub3RFbXB0eS5qcyIsInNyYy9yZWFybWVkL2FycmF5L3JlamVjdC5qcyIsInNyYy9yZWFybWVkL2FycmF5L3NlbGVjdC5qcyIsInNyYy9yZWFybWVkL2FycmF5L3NtYXJ0RXhjbHVkZXMuanMiLCJzcmMvcmVhcm1lZC9hcnJheS9zbWFydEluY2x1ZGVzLmpzIiwic3JjL3JlYXJtZWQvYXJyYXkvc3VtLmpzIiwic3JjL3JlYXJtZWQvYXJyYXkvdW5pcS5qcyIsInNyYy9yZWFybWVkL2NvcmUvaXNGdW5jdGlvbi5qcyIsInNyYy9yZWFybWVkL2NvcmUvaXNPYmplY3RMaWtlLmpzIiwic3JjL3JlYXJtZWQvY29yZS93YXJuLmpzIiwic3JjL3JlYXJtZWQvb2JqZWN0L2VxdWFscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwicmVxdWlyZSgnLi9hcnJheS9hbGwnKTtcbnJlcXVpcmUoJy4vYXJyYXkvYW55Jyk7XG5yZXF1aXJlKCcuL2FycmF5L2NvbXBhY3QnKTtcbnJlcXVpcmUoJy4vYXJyYXkvZGlnJyk7XG5yZXF1aXJlKCcuL2FycmF5L2VhY2gnKTtcbnJlcXVpcmUoJy4vYXJyYXkvZW1wdHknKTtcbnJlcXVpcmUoJy4vYXJyYXkvZXF1YWxzJyk7XG5yZXF1aXJlKCcuL2FycmF5L2V4Y2x1ZGVzJyk7XG5yZXF1aXJlKCcuL2FycmF5L2ZpbmQnKTtcbnJlcXVpcmUoJy4vYXJyYXkvZmluZEluZGV4Jyk7XG5yZXF1aXJlKCcuL2FycmF5L2ZpcnN0Jyk7XG5yZXF1aXJlKCcuL2FycmF5L2ZsYXR0ZW4nKTtcbnJlcXVpcmUoJy4vYXJyYXkvaW5jbHVkZXMnKTtcbnJlcXVpcmUoJy4vYXJyYXkvaW5Hcm91cHNPZicpO1xucmVxdWlyZSgnLi9hcnJheS9ncm91cEJ5Jyk7XG5yZXF1aXJlKCcuL2FycmF5L2xhc3QnKTtcbnJlcXVpcmUoJy4vYXJyYXkvbWF4Jyk7XG5yZXF1aXJlKCcuL2FycmF5L21heEJ5Jyk7XG5yZXF1aXJlKCcuL2FycmF5L21pbicpO1xucmVxdWlyZSgnLi9hcnJheS9taW5CeScpO1xucmVxdWlyZSgnLi9hcnJheS9ub3RFbXB0eScpO1xucmVxdWlyZSgnLi9hcnJheS9zbWFydEV4Y2x1ZGVzJyk7XG5yZXF1aXJlKCcuL2FycmF5L3NtYXJ0SW5jbHVkZXMnKTtcbnJlcXVpcmUoJy4vYXJyYXkvcmVqZWN0Jyk7XG5yZXF1aXJlKCcuL2FycmF5L3NlbGVjdCcpO1xucmVxdWlyZSgnLi9hcnJheS9zdW0nKTtcbnJlcXVpcmUoJy4vYXJyYXkvdW5pcScpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoQXJyYXkucHJvdG90eXBlLmFsbCl7XG4gICAgd2FybignQXJyYXknLCAnYWxsJyk7XG4gIH1cblxuICBBcnJheS5wcm90b3R5cGUuYWxsID0gZnVuY3Rpb24oY2Ipe1xuICAgIGlmKCFjYil7XG4gICAgICBjYiA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5ldmVyeShjYik7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSwgXCJhbGxcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKEFycmF5LnByb3RvdHlwZS5hbnkpe1xuICAgIHdhcm4oJ0FycmF5JywgJ2FueScpO1xuICB9XG5cbiAgQXJyYXkucHJvdG90eXBlLmFueSA9IGZ1bmN0aW9uKGNiKXtcbiAgICBpZighY2Ipe1xuICAgICAgY2IgPSBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zb21lKGNiKTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCBcImFueVwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoQXJyYXkucHJvdG90eXBlLmNvbXBhY3Qpe1xuICAgIHdhcm4oJ0FycmF5JywgJ2NvbXBhY3QnKTtcbiAgfVxuXG4gIEFycmF5LnByb3RvdHlwZS5jb21wYWN0ID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgYmFkO1xuXG4gICAgaWYoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCl7XG4gICAgICBiYWQgPSBbbnVsbCwgdW5kZWZpbmVkXTtcbiAgICB9ZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoID09PSAxKXtcbiAgICAgIGlmKEFycmF5LmlzQXJyYXkoYXJndW1lbnRzWzBdKSl7XG4gICAgICAgIGJhZCA9IGFyZ3VtZW50c1swXTtcbiAgICAgIH1lbHNle1xuICAgICAgICBiYWQgPSBbYXJndW1lbnRzWzBdXTtcbiAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgIGJhZCA9IGFyZ3VtZW50cztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5maWx0ZXIoZnVuY3Rpb24oeCl7XG4gICAgICB2YXIgYm9vbCA9IHRydWU7XG4gICAgICBmb3IodmFyIGk9MDtpPGJhZC5sZW5ndGg7aSsrKXtcbiAgICAgICAgaWYoeCA9PT0gYmFkW2ldKXtcbiAgICAgICAgICBib29sID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBib29sO1xuICAgIH0pO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsIFwiY29tcGFjdFwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBSZWFybWVkID0ge1xuICAgIGlzT2JqZWN0TGlrZTogcmVxdWlyZSgnLi8uLi9jb3JlL2lzT2JqZWN0TGlrZScpXG4gIH07XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihBcnJheS5wcm90b3R5cGUuZGlnKXtcbiAgICB3YXJuKCdBcnJheScsICdkaWcnKTtcbiAgfVxuXG4gIEFycmF5LnByb3RvdHlwZS5kaWcgPSBmdW5jdGlvbigpe1xuICAgIHZhciBrZXlzO1xuICAgIGlmKGFyZ3VtZW50cy5sZW5ndGggPT09IDApe1xuICAgICAga2V5cyA9IFtdO1xuICAgIH1lbHNlIGlmKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpe1xuICAgICAgaWYoQXJyYXkuaXNBcnJheShhcmd1bWVudHNbMF0pKXtcbiAgICAgICAga2V5cyA9IGFyZ3VtZW50c1swXTtcbiAgICAgIH1lbHNle1xuICAgICAgICBrZXlzID0gW2FyZ3VtZW50c1swXV07XG4gICAgICB9XG4gICAgfWVsc2V7XG4gICAgICBrZXlzID0gYXJndW1lbnRzO1xuICAgIH1cblxuICAgIHZhciB2YWwgPSB0aGlzO1xuICAgIGZvcih2YXIgaT0wO2k8YXJndW1lbnRzLmxlbmd0aDtpKyspe1xuICAgICAgaWYoUmVhcm1lZC5pc09iamVjdExpa2UodmFsKSl7XG4gICAgICAgIHZhbCA9IHZhbFthcmd1bWVudHNbaV1dO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHZhbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWw7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSwgXCJkaWdcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKEFycmF5LnByb3RvdHlwZS5lYWNoKXtcbiAgICB3YXJuKCdBcnJheScsICdlYWNoJyk7XG4gIH1cblxuICBBcnJheS5wcm90b3R5cGUuZWFjaCA9IGZ1bmN0aW9uKGNiKXtcbiAgICBmb3IodmFyIGk9MDtpPHRoaXMubGVuZ3RoO2krKyl7XG4gICAgICBjYih0aGlzW2ldLCBpKTtcbiAgICB9XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSwgXCJlYWNoXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihBcnJheS5wcm90b3R5cGUuZW1wdHkpe1xuICAgIHdhcm4oJ0FycmF5JywgJ2VtcHR5Jyk7XG4gIH1cblxuICBBcnJheS5wcm90b3R5cGUuZW1wdHkgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiB0aGlzLmxlbmd0aCA9PT0gMDtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCBcImVtcHR5XCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIFJlYXJtZWQgPSB7XG4gICAgaXNPYmplY3RMaWtlOiByZXF1aXJlKCcuLy4uL2NvcmUvaXNPYmplY3RMaWtlJylcbiAgfTtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKEFycmF5LnByb3RvdHlwZS5lcXVhbHMpe1xuICAgIHdhcm4oJ0FycmF5JywgJ2VxdWFscycpO1xuICB9XG5cbiAgQXJyYXkucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uKGFycmF5KXtcbiAgICBpZighYXJyYXkpe1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmKHRoaXMubGVuZ3RoICE9PSBhcnJheS5sZW5ndGgpe1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZvcih2YXIgaT0wO2k8dGhpcy5sZW5ndGg7aSsrKXtcbiAgICAgIHZhciB2YWwgPSB0aGlzW2ldO1xuICAgICAgdmFyIG90aGVyID0gYXJyYXlbaV1cbiAgICAgIGlmKEFycmF5LmlzQXJyYXkodGhpc1tpXSkgJiYgQXJyYXkuaXNBcnJheShvdGhlcikpe1xuICAgICAgICBpZighdmFsLmVxdWFscyhvdGhlcikpe1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfWVsc2UgaWYoUmVhcm1lZC5pc09iamVjdExpa2UodmFsKSAmJiBSZWFybWVkLmlzT2JqZWN0TGlrZShvdGhlcikpe1xuICAgICAgICBpZighdmFsLmVxdWFscyhvdGhlcikpe1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfWVsc2UgaWYodmFsICE9PSBvdGhlcil7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCBcImVxdWFsc1wiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoQXJyYXkucHJvdG90eXBlLmV4Y2x1ZGVzKXtcbiAgICB3YXJuKCdBcnJheScsICdleGNsdWRlcycpO1xuICB9XG5cbiAgQXJyYXkucHJvdG90eXBlLmV4Y2x1ZGVzID0gZnVuY3Rpb24oeCwgZnJvbUluZGV4KXtcbiAgICB2YXIgZnJvbUluZGV4ID0gZnJvbUluZGV4IHx8IDA7XG4gICAgdmFyIGJvb2wgPSB0cnVlO1xuICAgIGZvcih2YXIgaT1mcm9tSW5kZXg7aTx0aGlzLmxlbmd0aDtpKyspe1xuICAgICAgaWYodGhpc1tpXSA9PT0geCl7XG4gICAgICAgIGJvb2wgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBib29sO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsIFwiZXhjbHVkZXNcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgUmVhcm1lZCA9IHtcbiAgICBpc0Z1bmN0aW9uOiByZXF1aXJlKCcuLy4uL2NvcmUvaXNGdW5jdGlvbicpXG4gIH07XG5cbiAgaWYoIUFycmF5LnByb3RvdHlwZS5maW5kKXtcbiAgICBBcnJheS5wcm90b3R5cGUuZmluZCA9IGZ1bmN0aW9uKGNiKXtcbiAgICAgIHZhciBpdGVtO1xuICAgICAgdmFyIGhhc0NhbGxiYWNrID0gUmVhcm1lZC5pc0Z1bmN0aW9uKGNiKTtcbiAgICAgIGZvcih2YXIgaT0wO2k8dGhpcy5sZW5ndGg7aSsrKXtcbiAgICAgICAgdmFyIHZhbCA9IHRoaXNbaV07XG4gICAgICAgIGlmKGhhc0NhbGxiYWNrID8gY2IodmFsLCBpKSA6IChjYiA9PT0gdmFsKSl7XG4gICAgICAgICAgdmFsID0gdmFsO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gaXRlbTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsIFwiZmluZFwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbiAgfVxufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIFJlYXJtZWQgPSB7XG4gICAgaXNGdW5jdGlvbjogcmVxdWlyZSgnLi8uLi9jb3JlL2lzRnVuY3Rpb24nKVxuICB9O1xuXG4gIGlmKCFBcnJheS5wcm90b3R5cGUuZmluZEluZGV4KXtcbiAgICBBcnJheS5wcm90b3R5cGUuZmluZEluZGV4ID0gZnVuY3Rpb24oY2Ipe1xuICAgICAgdmFyIGluZGV4ID0gLTE7XG4gICAgICB2YXIgaGFzQ2FsbGJhY2sgPSBSZWFybWVkLmlzRnVuY3Rpb24oY2IpO1xuICAgICAgZm9yKHZhciBpPTA7aTx0aGlzLmxlbmd0aDtpKyspe1xuICAgICAgICBpZihoYXNDYWxsYmFjayA/IGNiKHRoaXNbaV0sIGkpIDogKGNiID09PSB0aGlzW2ldKSl7XG4gICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsIFwiZmluZEluZGV4XCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xuICB9XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKEFycmF5LnByb3RvdHlwZS5maXJzdCl7XG4gICAgd2FybignQXJyYXknLCAnZmlyc3QnKTtcbiAgfVxuXG4gIEFycmF5LnByb3RvdHlwZS5maXJzdCA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHRoaXNbMF07XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSwgXCJmaXJzdFwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoQXJyYXkucHJvdG90eXBlLmZsYXR0ZW4pe1xuICAgIHdhcm4oJ0FycmF5JywgJ2ZsYXR0ZW4nKTtcbiAgfVxuXG4gIEFycmF5LnByb3RvdHlwZS5mbGF0dGVuID0gZnVuY3Rpb24ocmVzdWx0KXtcbiAgICByZXN1bHQgPSByZXN1bHQgfHwgW107XG4gICAgZm9yKHZhciBpPTA7aTx0aGlzLmxlbmd0aDtpKyspe1xuICAgICAgdmFyIHZhbCA9IHRoaXNbaV07XG4gICAgICBpZihBcnJheS5pc0FycmF5KHZhbCkpe1xuICAgICAgICBmb3IodmFyIGo9MDtqPHZhbC5sZW5ndGg7aisrKXtcbiAgICAgICAgICB2YXIgdmFsMiA9IHZhbFtqXTtcbiAgICAgICAgICBpZihBcnJheS5pc0FycmF5KHZhbDIpKXtcbiAgICAgICAgICAgIHZhbDIuZmxhdHRlbihyZXN1bHQpO1xuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmVzdWx0LnB1c2godmFsMik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9ZWxzZXtcbiAgICAgICAgcmVzdWx0LnB1c2godmFsKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCBcImZsYXR0ZW5cIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKEFycmF5LnByb3RvdHlwZS5ncm91cEJ5KXtcbiAgICB3YXJuKCdBcnJheScsICdncm91cEJ5Jyk7XG4gIH1cblxuICBBcnJheS5wcm90b3R5cGUuZ3JvdXBCeSA9IGZ1bmN0aW9uKGNiKXtcbiAgICB2YXIgaGFzaCA9IHt9O1xuICAgIGZvcih2YXIgaT0wO2k8dGhpcy5sZW5ndGg7aSsrKXtcbiAgICAgIHZhciB2YWwgPSB0aGlzW2ldO1xuICAgICAgdmFyIGtleSA9IGNiKHZhbCwgaSk7XG4gICAgICBoYXNoW2tleV0gPSBoYXNoW2tleV0gfHwgW107XG4gICAgICBoYXNoW2tleV0ucHVzaCh2YWwpO1xuICAgIH1cbiAgICByZXR1cm4gaGFzaDtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCBcImdyb3VwQnlcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKEFycmF5LnByb3RvdHlwZS5pbkdyb3Vwc09mKXtcbiAgICB3YXJuKCdBcnJheScsICdpbkdyb3Vwc09mJyk7XG4gIH1cblxuICBBcnJheS5wcm90b3R5cGUuaW5Hcm91cHNPZiA9IGZ1bmN0aW9uKHBlciwgZmlsbFdpdGgpe1xuICAgIHZhciBhcnIgPSBbXVxuICAgIHZhciBwZXIgPSBOdW1iZXIocGVyKTtcbiAgICB2YXIgZmlsbFdpdGggPSBmaWxsV2l0aCB8fCBmYWxzZTtcbiAgICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGg7XG5cbiAgICBmb3IodmFyIGk9MDtpPGxlbmd0aDtpKyspe1xuICAgICAgdmFyIGNvdW50ID0gMDtcbiAgICAgIHZhciBvZmZzZXQ7XG4gICAgICBpZigoaSsxKSAlIHBlciA9PT0gMCl7XG4gICAgICAgIGNvdW50ID0gcGVyO1xuICAgICAgICBvZmZzZXQgPSBwZXI7XG4gICAgICB9ZWxzZSBpZihpKzEgPT09IGxlbmd0aCl7XG4gICAgICAgIGNvdW50ID0gcGVyO1xuICAgICAgICBvZmZzZXQgPSBsZW5ndGggJSBwZXI7XG4gICAgICB9XG5cbiAgICAgIGlmKGNvdW50ID4gMCl7XG4gICAgICAgIHZhciBncm91cCA9IFtdO1xuICAgICAgICBmb3IodmFyIGo9MDtqPGNvdW50O2orKyl7XG4gICAgICAgICAgdmFyIHZhbCA9IHRoaXNbaS1vZmZzZXQraisxXTtcbiAgICAgICAgICBpZih2YWwpe1xuICAgICAgICAgICAgZ3JvdXAucHVzaCh2YWwpO1xuICAgICAgICAgIH1lbHNlIGlmKGZpbGxXaXRoICE9PSBmYWxzZSl7XG4gICAgICAgICAgICBncm91cC5wdXNoKGZpbGxXaXRoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXJyLnB1c2goZ3JvdXApXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCBcImluR3JvdXBzT2ZcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBpZighQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzKXtcbiAgICBBcnJheS5wcm90b3R5cGUuaW5jbHVkZXMgPSBmdW5jdGlvbih4LCBmcm9tSW5kZXgpe1xuICAgICAgZnJvbUluZGV4ID0gZnJvbUluZGV4IHx8IDA7XG4gICAgICB2YXIgYm9vbCA9IGZhbHNlO1xuICAgICAgZm9yKHZhciBpPWZyb21JbmRleDtpPHRoaXMubGVuZ3RoO2krKyl7XG4gICAgICAgIGlmKHRoaXNbaV0gPT09IHgpe1xuICAgICAgICAgIGJvb2wgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gYm9vbDtcbiAgICB9O1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSwgXCJpbmNsdWRlc1wiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbiAgfVxufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihBcnJheS5wcm90b3R5cGUubGFzdCl7XG4gICAgd2FybignQXJyYXknLCAnbGFzdCcpO1xuICB9XG5cbiAgQXJyYXkucHJvdG90eXBlLmxhc3QgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiB0aGlzW3RoaXMubGVuZ3RoLTFdO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsIFwibGFzdFwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBSZWFybWVkID0ge1xuICAgIGlzRnVuY3Rpb246IHJlcXVpcmUoJy4vLi4vY29yZS9pc0Z1bmN0aW9uJylcbiAgfTtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKEFycmF5LnByb3RvdHlwZS5tYXgpe1xuICAgIHdhcm4oJ0FycmF5JywgJ21heCcpO1xuICB9XG5cbiAgQXJyYXkucHJvdG90eXBlLm1heCA9IGZ1bmN0aW9uKGNiKXtcbiAgICB2YXIgbWF4O1xuICAgIHZhciBoYXNDYWxsYmFjayA9IFJlYXJtZWQuaXNGdW5jdGlvbihjYik7XG4gICAgZm9yKHZhciBpPTA7aTx0aGlzLmxlbmd0aDtpKyspe1xuICAgICAgdmFyIHZhbCA9IGhhc0NhbGxiYWNrID8gY2IodGhpc1tpXSwgaSkgOiB0aGlzW2ldO1xuXG4gICAgICBpZihtYXggPT09IG51bGwgfHwgbWF4ID09PSB1bmRlZmluZWQgfHwgdmFsID4gbWF4KXtcbiAgICAgICAgbWF4ID0gdmFsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWF4O1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsIFwibWF4XCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIFJlYXJtZWQgPSB7XG4gICAgaXNGdW5jdGlvbjogcmVxdWlyZSgnLi8uLi9jb3JlL2lzRnVuY3Rpb24nKVxuICB9O1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoQXJyYXkucHJvdG90eXBlLm1heEJ5KXtcbiAgICB3YXJuKCdBcnJheScsICdtYXhCeScpO1xuICB9XG5cbiAgQXJyYXkucHJvdG90eXBlLm1heEJ5ID0gZnVuY3Rpb24oY2Ipe1xuICAgIHZhciBjdXJyZW50LCBtYXg7XG4gICAgdmFyIGhhc0NhbGxiYWNrID0gUmVhcm1lZC5pc0Z1bmN0aW9uKGNiKTtcbiAgICBmb3IodmFyIGk9MDtpPHRoaXMubGVuZ3RoO2krKyl7XG4gICAgICB2YXIgaXRlbSA9IHRoaXNbaV07XG4gICAgICB2YXIgdmFsID0gaGFzQ2FsbGJhY2sgPyBjYihpdGVtLCBpKSA6IGl0ZW07XG5cbiAgICAgIGlmKGN1cnJlbnQgPT09IG51bGwgfHwgY3VycmVudCA9PT0gdW5kZWZpbmVkIHx8IHZhbCA+IG1heCl7XG4gICAgICAgIGN1cnJlbnQgPSBpdGVtO1xuICAgICAgICBtYXggPSB2YWw7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjdXJyZW50O1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsIFwibWF4QnlcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgUmVhcm1lZCA9IHtcbiAgICBpc0Z1bmN0aW9uOiByZXF1aXJlKCcuLy4uL2NvcmUvaXNGdW5jdGlvbicpXG4gIH07XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihBcnJheS5wcm90b3R5cGUubWluKXtcbiAgICB3YXJuKCdBcnJheScsICdtaW4nKTtcbiAgfVxuXG4gIEFycmF5LnByb3RvdHlwZS5taW4gPSBmdW5jdGlvbihjYil7XG4gICAgdmFyIG1pbjtcbiAgICB2YXIgaGFzQ2FsbGJhY2sgPSBSZWFybWVkLmlzRnVuY3Rpb24oY2IpO1xuICAgIGZvcih2YXIgaT0wO2k8dGhpcy5sZW5ndGg7aSsrKXtcbiAgICAgIHZhciB2YWwgPSBoYXNDYWxsYmFjayA/IGNiKHRoaXNbaV0sIGkpIDogdGhpc1tpXTtcblxuICAgICAgaWYobWluID09PSBudWxsIHx8IG1pbiA9PT0gdW5kZWZpbmVkIHx8IHZhbCA8IG1pbil7XG4gICAgICAgIG1pbiA9IHZhbDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1pbjtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCBcIm1pblwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBSZWFybWVkID0ge1xuICAgIGlzRnVuY3Rpb246IHJlcXVpcmUoJy4vLi4vY29yZS9pc0Z1bmN0aW9uJylcbiAgfTtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKEFycmF5LnByb3RvdHlwZS5taW5CeSl7XG4gICAgd2FybignQXJyYXknLCAnbWluQnknKTtcbiAgfVxuXG4gIEFycmF5LnByb3RvdHlwZS5taW5CeSA9IGZ1bmN0aW9uKGNiKXtcbiAgICB2YXIgY3VycmVudCwgbWluO1xuICAgIHZhciBoYXNDYWxsYmFjayA9IFJlYXJtZWQuaXNGdW5jdGlvbihjYik7XG4gICAgZm9yKHZhciBpPTA7aTx0aGlzLmxlbmd0aDtpKyspe1xuICAgICAgdmFyIGl0ZW0gPSB0aGlzW2ldO1xuICAgICAgdmFyIHZhbCA9IGhhc0NhbGxiYWNrID8gY2IoaXRlbSwgaSkgOiBpdGVtO1xuXG4gICAgICBpZihjdXJyZW50ID09PSBudWxsIHx8IGN1cnJlbnQgPT09IHVuZGVmaW5lZCB8fCB2YWwgPCBtaW4pe1xuICAgICAgICBjdXJyZW50ID0gaXRlbTtcbiAgICAgICAgbWluID0gdmFsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY3VycmVudDtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCBcIm1pbkJ5XCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihBcnJheS5wcm90b3R5cGUubm90RW1wdHkpe1xuICAgIHdhcm4oJ0FycmF5JywgJ25vdEVtcHR5Jyk7XG4gIH1cblxuICBBcnJheS5wcm90b3R5cGUubm90RW1wdHkgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiB0aGlzLmxlbmd0aCAhPT0gMDtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCBcIm5vdEVtcHR5XCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihBcnJheS5wcm90b3R5cGUucmVqZWN0KXtcbiAgICB3YXJuKCdBcnJheScsICdyZWplY3QnKTtcbiAgfVxuXG4gIEFycmF5LnByb3RvdHlwZS5yZWplY3QgPSBmdW5jdGlvbihjYil7XG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyKGZ1bmN0aW9uKHgsIGkpe1xuICAgICAgcmV0dXJuICFjYih4LGkpO1xuICAgIH0pO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsIFwicmVqZWN0XCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihBcnJheS5wcm90b3R5cGUuc2VsZWN0KXtcbiAgICB3YXJuKCdBcnJheScsICdzZWxlY3QnKTtcbiAgfVxuXG4gIEFycmF5LnByb3RvdHlwZS5zZWxlY3QgPSBmdW5jdGlvbihjYil7XG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyKGNiKTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCBcInNlbGVjdFwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHJlcXVpcmUoJy4vZXF1YWxzJyk7XG4gIHJlcXVpcmUoJy4vLi4vb2JqZWN0L2VxdWFscycpO1xuXG4gIHZhciBSZWFybWVkID0ge1xuICAgIGlzT2JqZWN0TGlrZTogcmVxdWlyZSgnLi8uLi9jb3JlL2lzT2JqZWN0TGlrZScpXG4gIH07XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihBcnJheS5wcm90b3R5cGUuc21hcnRFeGNsdWRlcyl7XG4gICAgd2FybignQXJyYXknLCAnc21hcnRFeGNsdWRlcycpO1xuICB9XG5cbiAgQXJyYXkucHJvdG90eXBlLnNtYXJ0RXhjbHVkZXMgPSBmdW5jdGlvbih4LCBmcm9tSW5kZXgpe1xuICAgIHZhciBmcm9tSW5kZXggPSBmcm9tSW5kZXggfHwgMDtcbiAgICB2YXIgYm9vbCA9IHRydWU7XG4gICAgZm9yKHZhciBpPWZyb21JbmRleDtpPHRoaXMubGVuZ3RoO2krKyl7XG4gICAgICB2YXIgdmFsID0gdGhpc1tpXTtcbiAgICAgIGlmKFJlYXJtZWQuaXNPYmplY3RMaWtlKHZhbCkpe1xuICAgICAgICBpZih2YWwuZXF1YWxzKHgpKXtcbiAgICAgICAgICBib29sID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1lbHNlIGlmKHZhbCA9PT0geCl7XG4gICAgICAgIGJvb2wgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBib29sO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsIFwic21hcnRFeGNsdWRlc1wiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHJlcXVpcmUoJy4vZXF1YWxzJyk7XG4gIHJlcXVpcmUoJy4vLi4vb2JqZWN0L2VxdWFscycpO1xuXG4gIHZhciBSZWFybWVkID0ge1xuICAgIGlzT2JqZWN0TGlrZTogcmVxdWlyZSgnLi8uLi9jb3JlL2lzT2JqZWN0TGlrZScpXG4gIH07XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihBcnJheS5wcm90b3R5cGUuc21hcnRJbmNsdWRlcyl7XG4gICAgd2FybignQXJyYXknLCAnc21hcnRJbmNsdWRlcycpO1xuICB9XG5cbiAgQXJyYXkucHJvdG90eXBlLnNtYXJ0SW5jbHVkZXMgPSBmdW5jdGlvbih4LCBmcm9tSW5kZXgpe1xuICAgIHZhciBmcm9tSW5kZXggPSBmcm9tSW5kZXggfHwgMDtcbiAgICB2YXIgYm9vbCA9IGZhbHNlO1xuICAgIGZvcih2YXIgaT1mcm9tSW5kZXg7aTx0aGlzLmxlbmd0aDtpKyspe1xuICAgICAgdmFyIHZhbCA9IHRoaXNbaV07XG4gICAgICBpZihSZWFybWVkLmlzT2JqZWN0TGlrZSh2YWwpKXtcbiAgICAgICAgaWYodmFsLmVxdWFscyh4KSl7XG4gICAgICAgICAgYm9vbCA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1lbHNlIGlmKHZhbCA9PT0geCl7XG4gICAgICAgIGJvb2wgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJvb2w7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSwgXCJzbWFydEluY2x1ZGVzXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIFJlYXJtZWQgPSB7XG4gICAgaXNGdW5jdGlvbjogcmVxdWlyZSgnLi8uLi9jb3JlL2lzRnVuY3Rpb24nKVxuICB9O1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoQXJyYXkucHJvdG90eXBlLnN1bSl7XG4gICAgd2FybignQXJyYXknLCAnc3VtJyk7XG4gIH1cblxuICBBcnJheS5wcm90b3R5cGUuc3VtID0gZnVuY3Rpb24oY2Ipe1xuICAgIHZhciBzdW0gPSAwO1xuICAgIHZhciBoYXNDYWxsYmFjayA9IFJlYXJtZWQuaXNGdW5jdGlvbihjYik7XG4gICAgZm9yKHZhciBpPTA7aTx0aGlzLmxlbmd0aDtpKyspe1xuICAgICAgdmFyIHZhbCA9IGhhc0NhbGxiYWNrID8gY2IodGhpc1tpXSwgaSkgOiB0aGlzW2ldO1xuXG4gICAgICBpZihpc0Zpbml0ZSh2YWwpKXtcbiAgICAgICAgc3VtICs9IE51bWJlcih2YWwpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHRocm93KFwiYFwiICsgdmFsICsgXCJgIGNhbm5vdCBiZSBjb2VyY2VkIHRvIGEgTnVtYmVyXCIpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3VtO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsIFwic3VtXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIFJlYXJtZWQgPSB7XG4gICAgaXNGdW5jdGlvbjogcmVxdWlyZSgnLi8uLi9jb3JlL2lzRnVuY3Rpb24nKVxuICB9O1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoQXJyYXkucHJvdG90eXBlLnVuaXEpe1xuICAgIHdhcm4oJ0FycmF5JywgJ3VuaXEnKTtcbiAgfVxuXG4gIEFycmF5LnByb3RvdHlwZS51bmlxID0gZnVuY3Rpb24oY2Ipe1xuICAgIHZhciB1bmlxSXRlbXMgPSBbXTtcbiAgICB2YXIgaGFzQ2FsbGJhY2sgPSBSZWFybWVkLmlzRnVuY3Rpb24oY2IpO1xuXG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyKGZ1bmN0aW9uKHgsaSl7XG4gICAgICB2YXIgdmFsID0gaGFzQ2FsbGJhY2sgPyBjYih4LGkpIDogeDtcbiAgICAgIGlmKHVuaXFJdGVtcy5zbWFydEV4Y2x1ZGVzKHZhbCkpe1xuICAgICAgICB1bmlxSXRlbXMucHVzaCh2YWwpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCBcInVuaXFcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsImZ1bmN0aW9uIGlzRnVuY3Rpb24ob2JqKXtcbiAgcmV0dXJuICEhKG9iaiAmJiBvYmouY29uc3RydWN0b3IgJiYgb2JqLmNhbGwgJiYgb2JqLmFwcGx5KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGdW5jdGlvbjtcbiIsImZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSl7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuIiwiZnVuY3Rpb24gd2Fybih0eXBlLCBtZXRob2Qpe1xuICBjb25zb2xlLndhcm4oXCJSZWFybWVkLWpzIE92ZXJyaWRpbmcgXCIgKyB0eXBlICsgXCIgbWV0aG9kOiBcIiArIG1ldGhvZCwgJy4gSWYgdGhpcyBpcyBhIGJ1aWx0LWluIGJyb3dzZXIgbWV0aG9kIHBsZWFzZSByZXBvcnQgb24gUmVhcm1lZC1qcyBnaXRodWIgaXNzdWVzLicpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBSZWFybWVkID0ge1xuICAgIGlzT2JqZWN0TGlrZTogcmVxdWlyZSgnLi8uLi9jb3JlL2lzT2JqZWN0TGlrZScpXG4gIH07XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihPYmplY3QucHJvdG90eXBlLmVxdWFscyl7XG4gICAgd2FybignT2JqZWN0JywgJ2VxdWFscycpO1xuICB9XG5cbiAgT2JqZWN0LnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbihvYmplY3QyKXtcbiAgICBmb3IodmFyIHByb3BOYW1lIGluIHRoaXMpe1xuICAgICAgaWYodGhpcy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkgIT0gb2JqZWN0Mi5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpe1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9ZWxzZSBpZih0eXBlb2YgdGhpc1twcm9wTmFtZV0gIT0gdHlwZW9mIG9iamVjdDJbcHJvcE5hbWVdKXtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IodmFyIHByb3BOYW1lIGluIG9iamVjdDIpe1xuICAgICAgdmFyIHZhbCA9IHRoaXNbcHJvcE5hbWVdO1xuICAgICAgdmFyIG90aGVyID0gb2JqZWN0Mltwcm9wTmFtZV07XG4gICAgICBpZih0aGlzLmhhc093blByb3BlcnR5KHByb3BOYW1lKSAhPSBvYmplY3QyLmhhc093blByb3BlcnR5KHByb3BOYW1lKSl7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1lbHNlIGlmKHR5cGVvZiB2YWwgIT0gdHlwZW9mIG90aGVyKXtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZighdGhpcy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpe1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYoQXJyYXkuaXNBcnJheSh2YWwpICYmIEFycmF5LmlzQXJyYXkob3RoZXIpKXtcbiAgICAgICAgaWYoIXZhbC5lcXVhbHMob3RoZXIpKXtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1lbHNlIGlmKFJlYXJtZWQuaXNPYmplY3RMaWtlKHZhbCkgJiYgUmVhcm1lZC5pc09iamVjdExpa2Uob3RoZXIpKXtcbiAgICAgICAgaWYoIXZhbC5lcXVhbHMob3RoZXIpKXtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1lbHNlIGlmKHZhbCAhPSBvdGhlcil7XG4gICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JqZWN0LnByb3RvdHlwZSwgXCJlcXVhbHNcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiJdfQ==
