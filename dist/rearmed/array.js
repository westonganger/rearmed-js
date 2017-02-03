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
    warn(Array, 'all');
  }

  Array.prototype.all = function(cb){
    return this.every(cb);
  };

  Object.defineProperty(Array.prototype, "all", {enumerable: false});
}(this));

},{"./../core/warn":31}],3:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Array.prototype.any){
    warn(Array, 'any');
  }

  Array.prototype.any = function(cb){
    return this.some(cb);
  };

  Object.defineProperty(Array.prototype, "any", {enumerable: false});
}(this));

},{"./../core/warn":31}],4:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Array.prototype.compact){
    warn(Array, 'compact');
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

    console.log(bad);

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
    warn(Array, 'dig');
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
    warn(Array, 'each');
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
    warn(Array, 'empty');
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
    warn(Array, 'equals');
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
    warn(Array, 'excludes');
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
    warn(Array, 'first');
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
    warn(Array, 'flatten');
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
    warn(Array, 'groupBy');
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
    warn(Array, 'inGroupsOf');
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
    warn(Array, 'last');
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
    warn(Array, 'max');
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
    warn(Array, 'maxBy');
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
    warn(Array, 'min');
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
    warn(Array, 'minBy');
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
    warn(Array, 'notEmpty');
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
    warn(Array, 'reject');
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
    warn(Array, 'select');
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
    warn(Array, 'smartExcludes');
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
    warn(Array, 'smartIncludes');
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
    warn(Array, 'sum');
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
    warn(Array, 'uniq');
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

},{"./../core/isObjectLike":30,"./../core/warn":31}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvcmVhcm1lZC9hcnJheS5qcyIsInNyYy9yZWFybWVkL2FycmF5L2FsbC5qcyIsInNyYy9yZWFybWVkL2FycmF5L2FueS5qcyIsInNyYy9yZWFybWVkL2FycmF5L2NvbXBhY3QuanMiLCJzcmMvcmVhcm1lZC9hcnJheS9kaWcuanMiLCJzcmMvcmVhcm1lZC9hcnJheS9lYWNoLmpzIiwic3JjL3JlYXJtZWQvYXJyYXkvZW1wdHkuanMiLCJzcmMvcmVhcm1lZC9hcnJheS9lcXVhbHMuanMiLCJzcmMvcmVhcm1lZC9hcnJheS9leGNsdWRlcy5qcyIsInNyYy9yZWFybWVkL2FycmF5L2ZpbmQuanMiLCJzcmMvcmVhcm1lZC9hcnJheS9maW5kSW5kZXguanMiLCJzcmMvcmVhcm1lZC9hcnJheS9maXJzdC5qcyIsInNyYy9yZWFybWVkL2FycmF5L2ZsYXR0ZW4uanMiLCJzcmMvcmVhcm1lZC9hcnJheS9ncm91cEJ5LmpzIiwic3JjL3JlYXJtZWQvYXJyYXkvaW5Hcm91cHNPZi5qcyIsInNyYy9yZWFybWVkL2FycmF5L2luY2x1ZGVzLmpzIiwic3JjL3JlYXJtZWQvYXJyYXkvbGFzdC5qcyIsInNyYy9yZWFybWVkL2FycmF5L21heC5qcyIsInNyYy9yZWFybWVkL2FycmF5L21heEJ5LmpzIiwic3JjL3JlYXJtZWQvYXJyYXkvbWluLmpzIiwic3JjL3JlYXJtZWQvYXJyYXkvbWluQnkuanMiLCJzcmMvcmVhcm1lZC9hcnJheS9ub3RFbXB0eS5qcyIsInNyYy9yZWFybWVkL2FycmF5L3JlamVjdC5qcyIsInNyYy9yZWFybWVkL2FycmF5L3NlbGVjdC5qcyIsInNyYy9yZWFybWVkL2FycmF5L3NtYXJ0RXhjbHVkZXMuanMiLCJzcmMvcmVhcm1lZC9hcnJheS9zbWFydEluY2x1ZGVzLmpzIiwic3JjL3JlYXJtZWQvYXJyYXkvc3VtLmpzIiwic3JjL3JlYXJtZWQvYXJyYXkvdW5pcS5qcyIsInNyYy9yZWFybWVkL2NvcmUvaXNGdW5jdGlvbi5qcyIsInNyYy9yZWFybWVkL2NvcmUvaXNPYmplY3RMaWtlLmpzIiwic3JjL3JlYXJtZWQvY29yZS93YXJuLmpzIiwic3JjL3JlYXJtZWQvb2JqZWN0L2VxdWFscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInJlcXVpcmUoJy4vYXJyYXkvYWxsJyk7XG5yZXF1aXJlKCcuL2FycmF5L2FueScpO1xucmVxdWlyZSgnLi9hcnJheS9jb21wYWN0Jyk7XG5yZXF1aXJlKCcuL2FycmF5L2RpZycpO1xucmVxdWlyZSgnLi9hcnJheS9lYWNoJyk7XG5yZXF1aXJlKCcuL2FycmF5L2VtcHR5Jyk7XG5yZXF1aXJlKCcuL2FycmF5L2VxdWFscycpO1xucmVxdWlyZSgnLi9hcnJheS9leGNsdWRlcycpO1xucmVxdWlyZSgnLi9hcnJheS9maW5kJyk7XG5yZXF1aXJlKCcuL2FycmF5L2ZpbmRJbmRleCcpO1xucmVxdWlyZSgnLi9hcnJheS9maXJzdCcpO1xucmVxdWlyZSgnLi9hcnJheS9mbGF0dGVuJyk7XG5yZXF1aXJlKCcuL2FycmF5L2luY2x1ZGVzJyk7XG5yZXF1aXJlKCcuL2FycmF5L2luR3JvdXBzT2YnKTtcbnJlcXVpcmUoJy4vYXJyYXkvZ3JvdXBCeScpO1xucmVxdWlyZSgnLi9hcnJheS9sYXN0Jyk7XG5yZXF1aXJlKCcuL2FycmF5L21heCcpO1xucmVxdWlyZSgnLi9hcnJheS9tYXhCeScpO1xucmVxdWlyZSgnLi9hcnJheS9taW4nKTtcbnJlcXVpcmUoJy4vYXJyYXkvbWluQnknKTtcbnJlcXVpcmUoJy4vYXJyYXkvbm90RW1wdHknKTtcbnJlcXVpcmUoJy4vYXJyYXkvc21hcnRFeGNsdWRlcycpO1xucmVxdWlyZSgnLi9hcnJheS9zbWFydEluY2x1ZGVzJyk7XG5yZXF1aXJlKCcuL2FycmF5L3JlamVjdCcpO1xucmVxdWlyZSgnLi9hcnJheS9zZWxlY3QnKTtcbnJlcXVpcmUoJy4vYXJyYXkvc3VtJyk7XG5yZXF1aXJlKCcuL2FycmF5L3VuaXEnKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKEFycmF5LnByb3RvdHlwZS5hbGwpe1xuICAgIHdhcm4oQXJyYXksICdhbGwnKTtcbiAgfVxuXG4gIEFycmF5LnByb3RvdHlwZS5hbGwgPSBmdW5jdGlvbihjYil7XG4gICAgcmV0dXJuIHRoaXMuZXZlcnkoY2IpO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsIFwiYWxsXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihBcnJheS5wcm90b3R5cGUuYW55KXtcbiAgICB3YXJuKEFycmF5LCAnYW55Jyk7XG4gIH1cblxuICBBcnJheS5wcm90b3R5cGUuYW55ID0gZnVuY3Rpb24oY2Ipe1xuICAgIHJldHVybiB0aGlzLnNvbWUoY2IpO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsIFwiYW55XCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihBcnJheS5wcm90b3R5cGUuY29tcGFjdCl7XG4gICAgd2FybihBcnJheSwgJ2NvbXBhY3QnKTtcbiAgfVxuXG4gIEFycmF5LnByb3RvdHlwZS5jb21wYWN0ID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgYmFkO1xuXG4gICAgaWYoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCl7XG4gICAgICBiYWQgPSBbbnVsbCwgdW5kZWZpbmVkXTtcbiAgICB9ZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoID09PSAxKXtcbiAgICAgIGlmKEFycmF5LmlzQXJyYXkoYXJndW1lbnRzWzBdKSl7XG4gICAgICAgIGJhZCA9IGFyZ3VtZW50c1swXTtcbiAgICAgIH1lbHNle1xuICAgICAgICBiYWQgPSBbYXJndW1lbnRzWzBdXTtcbiAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgIGJhZCA9IGFyZ3VtZW50cztcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhiYWQpO1xuXG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyKGZ1bmN0aW9uKHgpe1xuICAgICAgdmFyIGJvb2wgPSB0cnVlO1xuICAgICAgZm9yKHZhciBpPTA7aTxiYWQubGVuZ3RoO2krKyl7XG4gICAgICAgIGlmKHggPT09IGJhZFtpXSl7XG4gICAgICAgICAgYm9vbCA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gYm9vbDtcbiAgICB9KTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCBcImNvbXBhY3RcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgUmVhcm1lZCA9IHtcbiAgICBpc09iamVjdExpa2U6IHJlcXVpcmUoJy4vLi4vY29yZS9pc09iamVjdExpa2UnKVxuICB9O1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoQXJyYXkucHJvdG90eXBlLmRpZyl7XG4gICAgd2FybihBcnJheSwgJ2RpZycpO1xuICB9XG5cbiAgQXJyYXkucHJvdG90eXBlLmRpZyA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIGtleXM7XG4gICAgaWYoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCl7XG4gICAgICBrZXlzID0gW107XG4gICAgfWVsc2UgaWYoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSl7XG4gICAgICBpZihBcnJheS5pc0FycmF5KGFyZ3VtZW50c1swXSkpe1xuICAgICAgICBrZXlzID0gYXJndW1lbnRzWzBdO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGtleXMgPSBbYXJndW1lbnRzWzBdXTtcbiAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgIGtleXMgPSBhcmd1bWVudHM7XG4gICAgfVxuXG4gICAgdmFyIHZhbCA9IHRoaXM7XG4gICAgZm9yKHZhciBpPTA7aTxhcmd1bWVudHMubGVuZ3RoO2krKyl7XG4gICAgICBpZihSZWFybWVkLmlzT2JqZWN0TGlrZSh2YWwpKXtcbiAgICAgICAgdmFsID0gdmFsW2FyZ3VtZW50c1tpXV07XG4gICAgICB9ZWxzZXtcbiAgICAgICAgdmFsID0gdW5kZWZpbmVkO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbDtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCBcImRpZ1wiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoQXJyYXkucHJvdG90eXBlLmVhY2gpe1xuICAgIHdhcm4oQXJyYXksICdlYWNoJyk7XG4gIH1cblxuICBBcnJheS5wcm90b3R5cGUuZWFjaCA9IGZ1bmN0aW9uKGNiKXtcbiAgICBmb3IodmFyIGk9MDtpPHRoaXMubGVuZ3RoO2krKyl7XG4gICAgICBjYih0aGlzW2ldLCBpKTtcbiAgICB9XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSwgXCJlYWNoXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihBcnJheS5wcm90b3R5cGUuZW1wdHkpe1xuICAgIHdhcm4oQXJyYXksICdlbXB0eScpO1xuICB9XG5cbiAgQXJyYXkucHJvdG90eXBlLmVtcHR5ID0gZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gdGhpcy5sZW5ndGggPT09IDA7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSwgXCJlbXB0eVwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBSZWFybWVkID0ge1xuICAgIGlzT2JqZWN0TGlrZTogcmVxdWlyZSgnLi8uLi9jb3JlL2lzT2JqZWN0TGlrZScpXG4gIH07XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihBcnJheS5wcm90b3R5cGUuZXF1YWxzKXtcbiAgICB3YXJuKEFycmF5LCAnZXF1YWxzJyk7XG4gIH1cblxuICBBcnJheS5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24oYXJyYXkpe1xuICAgIGlmKCFhcnJheSl7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYodGhpcy5sZW5ndGggIT09IGFycmF5Lmxlbmd0aCl7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9yKHZhciBpPTA7aTx0aGlzLmxlbmd0aDtpKyspe1xuICAgICAgdmFyIHZhbCA9IHRoaXNbaV07XG4gICAgICB2YXIgb3RoZXIgPSBhcnJheVtpXVxuICAgICAgaWYoQXJyYXkuaXNBcnJheSh0aGlzW2ldKSAmJiBBcnJheS5pc0FycmF5KG90aGVyKSl7XG4gICAgICAgIGlmKCF2YWwuZXF1YWxzKG90aGVyKSl7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9ZWxzZSBpZihSZWFybWVkLmlzT2JqZWN0TGlrZSh2YWwpICYmIFJlYXJtZWQuaXNPYmplY3RMaWtlKG90aGVyKSl7XG4gICAgICAgIGlmKCF2YWwuZXF1YWxzKG90aGVyKSl7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9ZWxzZSBpZih2YWwgIT09IG90aGVyKXtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsIFwiZXF1YWxzXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihBcnJheS5wcm90b3R5cGUuZXhjbHVkZXMpe1xuICAgIHdhcm4oQXJyYXksICdleGNsdWRlcycpO1xuICB9XG5cbiAgQXJyYXkucHJvdG90eXBlLmV4Y2x1ZGVzID0gZnVuY3Rpb24oeCwgZnJvbUluZGV4KXtcbiAgICB2YXIgZnJvbUluZGV4ID0gZnJvbUluZGV4IHx8IDA7XG4gICAgdmFyIGJvb2wgPSB0cnVlO1xuICAgIGZvcih2YXIgaT1mcm9tSW5kZXg7aTx0aGlzLmxlbmd0aDtpKyspe1xuICAgICAgaWYodGhpc1tpXSA9PT0geCl7XG4gICAgICAgIGJvb2wgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBib29sO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsIFwiZXhjbHVkZXNcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgUmVhcm1lZCA9IHtcbiAgICBpc0Z1bmN0aW9uOiByZXF1aXJlKCcuLy4uL2NvcmUvaXNGdW5jdGlvbicpXG4gIH07XG5cbiAgaWYoIUFycmF5LnByb3RvdHlwZS5maW5kKXtcbiAgICBBcnJheS5wcm90b3R5cGUuZmluZCA9IGZ1bmN0aW9uKGNiKXtcbiAgICAgIHZhciBpdGVtO1xuICAgICAgdmFyIGhhc0NhbGxiYWNrID0gUmVhcm1lZC5pc0Z1bmN0aW9uKGNiKTtcbiAgICAgIGZvcih2YXIgaT0wO2k8dGhpcy5sZW5ndGg7aSsrKXtcbiAgICAgICAgdmFyIHZhbCA9IHRoaXNbaV07XG4gICAgICAgIGlmKGhhc0NhbGxiYWNrID8gY2IodmFsLCBpKSA6IChjYiA9PT0gdmFsKSl7XG4gICAgICAgICAgdmFsID0gdmFsO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gaXRlbTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsIFwiZmluZFwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbiAgfVxufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIFJlYXJtZWQgPSB7XG4gICAgaXNGdW5jdGlvbjogcmVxdWlyZSgnLi8uLi9jb3JlL2lzRnVuY3Rpb24nKVxuICB9O1xuXG4gIGlmKCFBcnJheS5wcm90b3R5cGUuZmluZEluZGV4KXtcbiAgICBBcnJheS5wcm90b3R5cGUuZmluZEluZGV4ID0gZnVuY3Rpb24oY2Ipe1xuICAgICAgdmFyIGluZGV4ID0gLTE7XG4gICAgICB2YXIgaGFzQ2FsbGJhY2sgPSBSZWFybWVkLmlzRnVuY3Rpb24oY2IpO1xuICAgICAgZm9yKHZhciBpPTA7aTx0aGlzLmxlbmd0aDtpKyspe1xuICAgICAgICBpZihoYXNDYWxsYmFjayA/IGNiKHRoaXNbaV0sIGkpIDogKGNiID09PSB0aGlzW2ldKSl7XG4gICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsIFwiZmluZEluZGV4XCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xuICB9XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKEFycmF5LnByb3RvdHlwZS5maXJzdCl7XG4gICAgd2FybihBcnJheSwgJ2ZpcnN0Jyk7XG4gIH1cblxuICBBcnJheS5wcm90b3R5cGUuZmlyc3QgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiB0aGlzWzBdO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsIFwiZmlyc3RcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKEFycmF5LnByb3RvdHlwZS5mbGF0dGVuKXtcbiAgICB3YXJuKEFycmF5LCAnZmxhdHRlbicpO1xuICB9XG5cbiAgQXJyYXkucHJvdG90eXBlLmZsYXR0ZW4gPSBmdW5jdGlvbihyZXN1bHQpe1xuICAgIHJlc3VsdCA9IHJlc3VsdCB8fCBbXTtcbiAgICBmb3IodmFyIGk9MDtpPHRoaXMubGVuZ3RoO2krKyl7XG4gICAgICB2YXIgdmFsID0gdGhpc1tpXTtcbiAgICAgIGlmKEFycmF5LmlzQXJyYXkodmFsKSl7XG4gICAgICAgIGZvcih2YXIgaj0wO2o8dmFsLmxlbmd0aDtqKyspe1xuICAgICAgICAgIHZhciB2YWwyID0gdmFsW2pdO1xuICAgICAgICAgIGlmKEFycmF5LmlzQXJyYXkodmFsMikpe1xuICAgICAgICAgICAgdmFsMi5mbGF0dGVuKHJlc3VsdCk7XG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh2YWwyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1lbHNle1xuICAgICAgICByZXN1bHQucHVzaCh2YWwpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsIFwiZmxhdHRlblwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoQXJyYXkucHJvdG90eXBlLmdyb3VwQnkpe1xuICAgIHdhcm4oQXJyYXksICdncm91cEJ5Jyk7XG4gIH1cblxuICBBcnJheS5wcm90b3R5cGUuZ3JvdXBCeSA9IGZ1bmN0aW9uKGNiKXtcbiAgICB2YXIgaGFzaCA9IHt9O1xuICAgIGZvcih2YXIgaT0wO2k8dGhpcy5sZW5ndGg7aSsrKXtcbiAgICAgIHZhciB2YWwgPSB0aGlzW2ldO1xuICAgICAgdmFyIGtleSA9IGNiKHZhbCwgaSk7XG4gICAgICBoYXNoW2tleV0gPSBoYXNoW2tleV0gfHwgW107XG4gICAgICBoYXNoW2tleV0ucHVzaCh2YWwpO1xuICAgIH1cbiAgICByZXR1cm4gaGFzaDtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCBcImdyb3VwQnlcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKEFycmF5LnByb3RvdHlwZS5pbkdyb3Vwc09mKXtcbiAgICB3YXJuKEFycmF5LCAnaW5Hcm91cHNPZicpO1xuICB9XG5cbiAgQXJyYXkucHJvdG90eXBlLmluR3JvdXBzT2YgPSBmdW5jdGlvbihwZXIsIGZpbGxXaXRoKXtcbiAgICB2YXIgYXJyID0gW11cbiAgICB2YXIgcGVyID0gTnVtYmVyKHBlcik7XG4gICAgdmFyIGZpbGxXaXRoID0gZmlsbFdpdGggfHwgZmFsc2U7XG4gICAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoO1xuXG4gICAgZm9yKHZhciBpPTA7aTxsZW5ndGg7aSsrKXtcbiAgICAgIHZhciBjb3VudCA9IDA7XG4gICAgICB2YXIgb2Zmc2V0O1xuICAgICAgaWYoKGkrMSkgJSBwZXIgPT09IDApe1xuICAgICAgICBjb3VudCA9IHBlcjtcbiAgICAgICAgb2Zmc2V0ID0gcGVyO1xuICAgICAgfWVsc2UgaWYoaSsxID09PSBsZW5ndGgpe1xuICAgICAgICBjb3VudCA9IHBlcjtcbiAgICAgICAgb2Zmc2V0ID0gbGVuZ3RoICUgcGVyO1xuICAgICAgfVxuXG4gICAgICBpZihjb3VudCA+IDApe1xuICAgICAgICB2YXIgZ3JvdXAgPSBbXTtcbiAgICAgICAgZm9yKHZhciBqPTA7ajxjb3VudDtqKyspe1xuICAgICAgICAgIHZhciB2YWwgPSB0aGlzW2ktb2Zmc2V0K2orMV07XG4gICAgICAgICAgaWYodmFsKXtcbiAgICAgICAgICAgIGdyb3VwLnB1c2godmFsKTtcbiAgICAgICAgICB9ZWxzZSBpZihmaWxsV2l0aCAhPT0gZmFsc2Upe1xuICAgICAgICAgICAgZ3JvdXAucHVzaChmaWxsV2l0aCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFyci5wdXNoKGdyb3VwKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhcnI7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSwgXCJpbkdyb3Vwc09mXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgaWYoIUFycmF5LnByb3RvdHlwZS5pbmNsdWRlcyl7XG4gICAgQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzID0gZnVuY3Rpb24oeCwgZnJvbUluZGV4KXtcbiAgICAgIGZyb21JbmRleCA9IGZyb21JbmRleCB8fCAwO1xuICAgICAgdmFyIGJvb2wgPSBmYWxzZTtcbiAgICAgIGZvcih2YXIgaT1mcm9tSW5kZXg7aTx0aGlzLmxlbmd0aDtpKyspe1xuICAgICAgICBpZih0aGlzW2ldID09PSB4KXtcbiAgICAgICAgICBib29sID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGJvb2w7XG4gICAgfTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsIFwiaW5jbHVkZXNcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG4gIH1cbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoQXJyYXkucHJvdG90eXBlLmxhc3Qpe1xuICAgIHdhcm4oQXJyYXksICdsYXN0Jyk7XG4gIH1cblxuICBBcnJheS5wcm90b3R5cGUubGFzdCA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHRoaXNbdGhpcy5sZW5ndGgtMV07XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSwgXCJsYXN0XCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIFJlYXJtZWQgPSB7XG4gICAgaXNGdW5jdGlvbjogcmVxdWlyZSgnLi8uLi9jb3JlL2lzRnVuY3Rpb24nKVxuICB9O1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoQXJyYXkucHJvdG90eXBlLm1heCl7XG4gICAgd2FybihBcnJheSwgJ21heCcpO1xuICB9XG5cbiAgQXJyYXkucHJvdG90eXBlLm1heCA9IGZ1bmN0aW9uKGNiKXtcbiAgICB2YXIgbWF4O1xuICAgIHZhciBoYXNDYWxsYmFjayA9IFJlYXJtZWQuaXNGdW5jdGlvbihjYik7XG4gICAgZm9yKHZhciBpPTA7aTx0aGlzLmxlbmd0aDtpKyspe1xuICAgICAgdmFyIHZhbCA9IGhhc0NhbGxiYWNrID8gY2IodGhpc1tpXSwgaSkgOiB0aGlzW2ldO1xuXG4gICAgICBpZihtYXggPT09IG51bGwgfHwgbWF4ID09PSB1bmRlZmluZWQgfHwgdmFsID4gbWF4KXtcbiAgICAgICAgbWF4ID0gdmFsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWF4O1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsIFwibWF4XCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIFJlYXJtZWQgPSB7XG4gICAgaXNGdW5jdGlvbjogcmVxdWlyZSgnLi8uLi9jb3JlL2lzRnVuY3Rpb24nKVxuICB9O1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoQXJyYXkucHJvdG90eXBlLm1heEJ5KXtcbiAgICB3YXJuKEFycmF5LCAnbWF4QnknKTtcbiAgfVxuXG4gIEFycmF5LnByb3RvdHlwZS5tYXhCeSA9IGZ1bmN0aW9uKGNiKXtcbiAgICB2YXIgY3VycmVudCwgbWF4O1xuICAgIHZhciBoYXNDYWxsYmFjayA9IFJlYXJtZWQuaXNGdW5jdGlvbihjYik7XG4gICAgZm9yKHZhciBpPTA7aTx0aGlzLmxlbmd0aDtpKyspe1xuICAgICAgdmFyIGl0ZW0gPSB0aGlzW2ldO1xuICAgICAgdmFyIHZhbCA9IGhhc0NhbGxiYWNrID8gY2IoaXRlbSwgaSkgOiBpdGVtO1xuXG4gICAgICBpZihjdXJyZW50ID09PSBudWxsIHx8IGN1cnJlbnQgPT09IHVuZGVmaW5lZCB8fCB2YWwgPiBtYXgpe1xuICAgICAgICBjdXJyZW50ID0gaXRlbTtcbiAgICAgICAgbWF4ID0gdmFsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY3VycmVudDtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCBcIm1heEJ5XCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIFJlYXJtZWQgPSB7XG4gICAgaXNGdW5jdGlvbjogcmVxdWlyZSgnLi8uLi9jb3JlL2lzRnVuY3Rpb24nKVxuICB9O1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoQXJyYXkucHJvdG90eXBlLm1pbil7XG4gICAgd2FybihBcnJheSwgJ21pbicpO1xuICB9XG5cbiAgQXJyYXkucHJvdG90eXBlLm1pbiA9IGZ1bmN0aW9uKGNiKXtcbiAgICB2YXIgbWluO1xuICAgIHZhciBoYXNDYWxsYmFjayA9IFJlYXJtZWQuaXNGdW5jdGlvbihjYik7XG4gICAgZm9yKHZhciBpPTA7aTx0aGlzLmxlbmd0aDtpKyspe1xuICAgICAgdmFyIHZhbCA9IGhhc0NhbGxiYWNrID8gY2IodGhpc1tpXSwgaSkgOiB0aGlzW2ldO1xuXG4gICAgICBpZihtaW4gPT09IG51bGwgfHwgbWluID09PSB1bmRlZmluZWQgfHwgdmFsIDwgbWluKXtcbiAgICAgICAgbWluID0gdmFsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWluO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsIFwibWluXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIFJlYXJtZWQgPSB7XG4gICAgaXNGdW5jdGlvbjogcmVxdWlyZSgnLi8uLi9jb3JlL2lzRnVuY3Rpb24nKVxuICB9O1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoQXJyYXkucHJvdG90eXBlLm1pbkJ5KXtcbiAgICB3YXJuKEFycmF5LCAnbWluQnknKTtcbiAgfVxuXG4gIEFycmF5LnByb3RvdHlwZS5taW5CeSA9IGZ1bmN0aW9uKGNiKXtcbiAgICB2YXIgY3VycmVudCwgbWluO1xuICAgIHZhciBoYXNDYWxsYmFjayA9IFJlYXJtZWQuaXNGdW5jdGlvbihjYik7XG4gICAgZm9yKHZhciBpPTA7aTx0aGlzLmxlbmd0aDtpKyspe1xuICAgICAgdmFyIGl0ZW0gPSB0aGlzW2ldO1xuICAgICAgdmFyIHZhbCA9IGhhc0NhbGxiYWNrID8gY2IoaXRlbSwgaSkgOiBpdGVtO1xuXG4gICAgICBpZihjdXJyZW50ID09PSBudWxsIHx8IGN1cnJlbnQgPT09IHVuZGVmaW5lZCB8fCB2YWwgPCBtaW4pe1xuICAgICAgICBjdXJyZW50ID0gaXRlbTtcbiAgICAgICAgbWluID0gdmFsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY3VycmVudDtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCBcIm1pbkJ5XCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihBcnJheS5wcm90b3R5cGUubm90RW1wdHkpe1xuICAgIHdhcm4oQXJyYXksICdub3RFbXB0eScpO1xuICB9XG5cbiAgQXJyYXkucHJvdG90eXBlLm5vdEVtcHR5ID0gZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gdGhpcy5sZW5ndGggIT09IDA7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSwgXCJub3RFbXB0eVwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoQXJyYXkucHJvdG90eXBlLnJlamVjdCl7XG4gICAgd2FybihBcnJheSwgJ3JlamVjdCcpO1xuICB9XG5cbiAgQXJyYXkucHJvdG90eXBlLnJlamVjdCA9IGZ1bmN0aW9uKGNiKXtcbiAgICByZXR1cm4gdGhpcy5maWx0ZXIoZnVuY3Rpb24oeCwgaSl7XG4gICAgICByZXR1cm4gIWNiKHgsaSk7XG4gICAgfSk7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSwgXCJyZWplY3RcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKEFycmF5LnByb3RvdHlwZS5zZWxlY3Qpe1xuICAgIHdhcm4oQXJyYXksICdzZWxlY3QnKTtcbiAgfVxuXG4gIEFycmF5LnByb3RvdHlwZS5zZWxlY3QgPSBmdW5jdGlvbihjYil7XG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyKGNiKTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCBcInNlbGVjdFwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHJlcXVpcmUoJy4vZXF1YWxzJyk7XG4gIHJlcXVpcmUoJy4vLi4vb2JqZWN0L2VxdWFscycpO1xuXG4gIHZhciBSZWFybWVkID0ge1xuICAgIGlzT2JqZWN0TGlrZTogcmVxdWlyZSgnLi8uLi9jb3JlL2lzT2JqZWN0TGlrZScpXG4gIH07XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihBcnJheS5wcm90b3R5cGUuc21hcnRFeGNsdWRlcyl7XG4gICAgd2FybihBcnJheSwgJ3NtYXJ0RXhjbHVkZXMnKTtcbiAgfVxuXG4gIEFycmF5LnByb3RvdHlwZS5zbWFydEV4Y2x1ZGVzID0gZnVuY3Rpb24oeCwgZnJvbUluZGV4KXtcbiAgICB2YXIgZnJvbUluZGV4ID0gZnJvbUluZGV4IHx8IDA7XG4gICAgdmFyIGJvb2wgPSB0cnVlO1xuICAgIGZvcih2YXIgaT1mcm9tSW5kZXg7aTx0aGlzLmxlbmd0aDtpKyspe1xuICAgICAgdmFyIHZhbCA9IHRoaXNbaV07XG4gICAgICBpZihSZWFybWVkLmlzT2JqZWN0TGlrZSh2YWwpKXtcbiAgICAgICAgaWYodmFsLmVxdWFscyh4KSl7XG4gICAgICAgICAgYm9vbCA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9ZWxzZSBpZih2YWwgPT09IHgpe1xuICAgICAgICBib29sID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYm9vbDtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCBcInNtYXJ0RXhjbHVkZXNcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICByZXF1aXJlKCcuL2VxdWFscycpO1xuICByZXF1aXJlKCcuLy4uL29iamVjdC9lcXVhbHMnKTtcblxuICB2YXIgUmVhcm1lZCA9IHtcbiAgICBpc09iamVjdExpa2U6IHJlcXVpcmUoJy4vLi4vY29yZS9pc09iamVjdExpa2UnKVxuICB9O1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoQXJyYXkucHJvdG90eXBlLnNtYXJ0SW5jbHVkZXMpe1xuICAgIHdhcm4oQXJyYXksICdzbWFydEluY2x1ZGVzJyk7XG4gIH1cblxuICBBcnJheS5wcm90b3R5cGUuc21hcnRJbmNsdWRlcyA9IGZ1bmN0aW9uKHgsIGZyb21JbmRleCl7XG4gICAgdmFyIGZyb21JbmRleCA9IGZyb21JbmRleCB8fCAwO1xuICAgIHZhciBib29sID0gZmFsc2U7XG4gICAgZm9yKHZhciBpPWZyb21JbmRleDtpPHRoaXMubGVuZ3RoO2krKyl7XG4gICAgICB2YXIgdmFsID0gdGhpc1tpXTtcbiAgICAgIGlmKFJlYXJtZWQuaXNPYmplY3RMaWtlKHZhbCkpe1xuICAgICAgICBpZih2YWwuZXF1YWxzKHgpKXtcbiAgICAgICAgICBib29sID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfWVsc2UgaWYodmFsID09PSB4KXtcbiAgICAgICAgYm9vbCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYm9vbDtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCBcInNtYXJ0SW5jbHVkZXNcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgUmVhcm1lZCA9IHtcbiAgICBpc0Z1bmN0aW9uOiByZXF1aXJlKCcuLy4uL2NvcmUvaXNGdW5jdGlvbicpXG4gIH07XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihBcnJheS5wcm90b3R5cGUuc3VtKXtcbiAgICB3YXJuKEFycmF5LCAnc3VtJyk7XG4gIH1cblxuICBBcnJheS5wcm90b3R5cGUuc3VtID0gZnVuY3Rpb24oY2Ipe1xuICAgIHZhciBzdW0gPSAwO1xuICAgIHZhciBoYXNDYWxsYmFjayA9IFJlYXJtZWQuaXNGdW5jdGlvbihjYik7XG4gICAgZm9yKHZhciBpPTA7aTx0aGlzLmxlbmd0aDtpKyspe1xuICAgICAgdmFyIHZhbCA9IGhhc0NhbGxiYWNrID8gY2IodGhpc1tpXSwgaSkgOiB0aGlzW2ldO1xuXG4gICAgICBpZihpc0Zpbml0ZSh2YWwpKXtcbiAgICAgICAgc3VtICs9IE51bWJlcih2YWwpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHRocm93KFwiYFwiICsgdmFsICsgXCJgIGNhbm5vdCBiZSBjb2VyY2VkIHRvIGEgTnVtYmVyXCIpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3VtO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsIFwic3VtXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIFJlYXJtZWQgPSB7XG4gICAgaXNGdW5jdGlvbjogcmVxdWlyZSgnLi8uLi9jb3JlL2lzRnVuY3Rpb24nKVxuICB9O1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoQXJyYXkucHJvdG90eXBlLnVuaXEpe1xuICAgIHdhcm4oQXJyYXksICd1bmlxJyk7XG4gIH1cblxuICBBcnJheS5wcm90b3R5cGUudW5pcSA9IGZ1bmN0aW9uKGNiKXtcbiAgICB2YXIgdW5pcUl0ZW1zID0gW107XG4gICAgdmFyIGhhc0NhbGxiYWNrID0gUmVhcm1lZC5pc0Z1bmN0aW9uKGNiKTtcblxuICAgIHJldHVybiB0aGlzLmZpbHRlcihmdW5jdGlvbih4LGkpe1xuICAgICAgdmFyIHZhbCA9IGhhc0NhbGxiYWNrID8gY2IoeCxpKSA6IHg7XG4gICAgICBpZih1bmlxSXRlbXMuc21hcnRFeGNsdWRlcyh2YWwpKXtcbiAgICAgICAgdW5pcUl0ZW1zLnB1c2godmFsKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSwgXCJ1bmlxXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCJmdW5jdGlvbiBpc0Z1bmN0aW9uKG9iail7XG4gIHJldHVybiAhIShvYmogJiYgb2JqLmNvbnN0cnVjdG9yICYmIG9iai5jYWxsICYmIG9iai5hcHBseSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRnVuY3Rpb247XG4iLCJmdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpe1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcbiIsImZ1bmN0aW9uIHdhcm4odHlwZSwgbWV0aG9kKXtcbiAgY29uc29sZS53YXJuKFwiUmVhcm1lZC1qcyBPdmVycmlkaW5nIFwiICsgdHlwZSArIFwiIG1ldGhvZDogXCIgKyBtZXRob2QsICcuIElmIHRoaXMgaXMgYSBidWlsdC1pbiBicm93c2VyIG1ldGhvZCBwbGVhc2UgcmVwb3J0IG9uIFJlYXJtZWQtanMgZ2l0aHViIGlzc3Vlcy4nKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gd2FybjtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgUmVhcm1lZCA9IHtcbiAgICBpc09iamVjdExpa2U6IHJlcXVpcmUoJy4vLi4vY29yZS9pc09iamVjdExpa2UnKVxuICB9O1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoT2JqZWN0LnByb3RvdHlwZS5lcXVhbHMpe1xuICAgIHdhcm4oT2JqZWN0LCAnZXF1YWxzJyk7XG4gIH1cblxuICBPYmplY3QucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uKG9iamVjdDIpe1xuICAgIGZvcih2YXIgcHJvcE5hbWUgaW4gdGhpcyl7XG4gICAgICBpZih0aGlzLmhhc093blByb3BlcnR5KHByb3BOYW1lKSAhPSBvYmplY3QyLmhhc093blByb3BlcnR5KHByb3BOYW1lKSl7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1lbHNlIGlmKHR5cGVvZiB0aGlzW3Byb3BOYW1lXSAhPSB0eXBlb2Ygb2JqZWN0Mltwcm9wTmFtZV0pe1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGZvcih2YXIgcHJvcE5hbWUgaW4gb2JqZWN0Mil7XG4gICAgICB2YXIgdmFsID0gdGhpc1twcm9wTmFtZV07XG4gICAgICB2YXIgb3RoZXIgPSBvYmplY3QyW3Byb3BOYW1lXTtcbiAgICAgIGlmKHRoaXMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpICE9IG9iamVjdDIuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKXtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfWVsc2UgaWYodHlwZW9mIHZhbCAhPSB0eXBlb2Ygb3RoZXIpe1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmKCF0aGlzLmhhc093blByb3BlcnR5KHByb3BOYW1lKSl7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZihBcnJheS5pc0FycmF5KHZhbCkgJiYgQXJyYXkuaXNBcnJheShvdGhlcikpe1xuICAgICAgICBpZighdmFsLmVxdWFscyhvdGhlcikpe1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfWVsc2UgaWYoUmVhcm1lZC5pc09iamVjdExpa2UodmFsKSAmJiBSZWFybWVkLmlzT2JqZWN0TGlrZShvdGhlcikpe1xuICAgICAgICBpZighdmFsLmVxdWFscyhvdGhlcikpe1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfWVsc2UgaWYodmFsICE9IG90aGVyKXtcbiAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPYmplY3QucHJvdG90eXBlLCBcImVxdWFsc1wiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIl19
