(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
require('./rearmed/array');
require('./rearmed/number');
require('./rearmed/object');
require('./rearmed/string');

var Rearmed = require('./rearmed/core');
module.exports = Rearmed;

},{"./rearmed/array":2,"./rearmed/core":31,"./rearmed/number":35,"./rearmed/object":44,"./rearmed/string":63}],2:[function(require,module,exports){
"use strict";

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
require('./array/range');
require('./array/reject');
require('./array/select');
require('./array/sum');
require('./array/uniq');

},{"./array/all":3,"./array/any":4,"./array/compact":5,"./array/dig":6,"./array/each":7,"./array/empty":8,"./array/equals":9,"./array/excludes":10,"./array/find":11,"./array/findIndex":12,"./array/first":13,"./array/flatten":14,"./array/groupBy":15,"./array/inGroupsOf":16,"./array/includes":17,"./array/last":18,"./array/max":19,"./array/maxBy":20,"./array/min":21,"./array/minBy":22,"./array/notEmpty":23,"./array/range":24,"./array/reject":25,"./array/select":26,"./array/smartExcludes":27,"./array/smartIncludes":28,"./array/sum":29,"./array/uniq":30}],3:[function(require,module,exports){
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

},{"./../core/warn":34}],4:[function(require,module,exports){
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

},{"./../core/warn":34}],5:[function(require,module,exports){
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

},{"./../core/warn":34}],6:[function(require,module,exports){
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

},{"./../core/isObjectLike":33,"./../core/warn":34}],7:[function(require,module,exports){
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

},{"./../core/warn":34}],8:[function(require,module,exports){
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

},{"./../core/warn":34}],9:[function(require,module,exports){
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

},{"./../core/isObjectLike":33,"./../core/warn":34}],10:[function(require,module,exports){
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

},{"./../core/warn":34}],11:[function(require,module,exports){
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

},{"./../core/isFunction":32}],12:[function(require,module,exports){
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

},{"./../core/isFunction":32}],13:[function(require,module,exports){
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

},{"./../core/warn":34}],14:[function(require,module,exports){
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

},{"./../core/warn":34}],15:[function(require,module,exports){
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

},{"./../core/warn":34}],16:[function(require,module,exports){
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

},{"./../core/warn":34}],17:[function(require,module,exports){
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

},{}],18:[function(require,module,exports){
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

},{"./../core/warn":34}],19:[function(require,module,exports){
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

},{"./../core/isFunction":32,"./../core/warn":34}],20:[function(require,module,exports){
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

},{"./../core/isFunction":32,"./../core/warn":34}],21:[function(require,module,exports){
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

},{"./../core/isFunction":32,"./../core/warn":34}],22:[function(require,module,exports){
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

},{"./../core/isFunction":32,"./../core/warn":34}],23:[function(require,module,exports){
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

},{"./../core/warn":34}],24:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Array.range){
    warn('Array', 'range', true);
  }

  Array.range = function(start, end, step){
    if(!(typeof start == 'number' && !isNaN(start) && isFinite(start)) || !(typeof end == 'number' && !isNaN(end) && isFinite(end))){
      throw TypeError("start/end arguments must be numbers");
    }

    if(step === 0){
      throw TypeError("step argument cannot be zero");
    }else if(!step){
      step = 1;
    }

    if(end < start){
      step = -step;
    }

    var range = [];

    while(step > 0 ? end >= start : end <= start){
      range.push(start);
      start += step;
    }

    return range;
  };
}(this));

},{"./../core/warn":34}],25:[function(require,module,exports){
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

},{"./../core/warn":34}],26:[function(require,module,exports){
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

},{"./../core/warn":34}],27:[function(require,module,exports){
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

},{"./../core/isObjectLike":33,"./../core/warn":34,"./../object/equals":52,"./equals":9}],28:[function(require,module,exports){
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

},{"./../core/isObjectLike":33,"./../core/warn":34,"./../object/equals":52,"./equals":9}],29:[function(require,module,exports){
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

},{"./../core/isFunction":32,"./../core/warn":34}],30:[function(require,module,exports){
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

},{"./../core/isFunction":32,"./../core/warn":34}],31:[function(require,module,exports){
var Rearmed = {
  isFunction: require('./core/isFunction'),
  isObjectLike: require('./core/isObjectLike')
};

module.exports = Rearmed;

},{"./core/isFunction":32,"./core/isObjectLike":33}],32:[function(require,module,exports){
function isFunction(obj){
  return !!(obj && obj.constructor && obj.call && obj.apply);
};

module.exports = isFunction;

},{}],33:[function(require,module,exports){
function isObjectLike(value){
  return value != null && typeof value == 'object';
};

module.exports = isObjectLike;

},{}],34:[function(require,module,exports){
function warn(type, method, notPrototype){
  if(type && method){
    console.warn("Rearmed-js Overriding " + type + (notPrototype ? '.' : '.prototype.') + method, '. If this is a built-in browser method please report on Rearmed-js github issues.');
  }else{
    throw("incorrect number of arguments")
  }
};

module.exports = warn;

},{}],35:[function(require,module,exports){
require('./number/ceil');
require('./number/floor');
require('./number/isDecimal');
require('./number/isEven');
require('./number/isInteger');
require('./number/isOdd');
require('./number/round');
require('./number/blank');

},{"./number/blank":36,"./number/ceil":37,"./number/floor":38,"./number/isDecimal":39,"./number/isEven":40,"./number/isInteger":41,"./number/isOdd":42,"./number/round":43}],36:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Number.prototype.blank){
    warn('Number', 'blank');
  }

  Number.prototype.blank = function(){
    return false; // No number is considered blank, as rails
  };

  Object.defineProperty(Number.prototype, "blank", {enumerable: false});
}(this));

},{"./../core/warn":34}],37:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Number.prototype.ceil){
    warn('Number', 'ceil');
  }

  Number.prototype.ceil = function(){
    return Math.ceil(this);
  };

  Object.defineProperty(Number.prototype, "ceil", {enumerable: false});
}(this));

},{"./../core/warn":34}],38:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Number.prototype.floor){
    warn('Number', 'floor');
  }

  Number.prototype.floor = function(){
    return Math.floor(this);
  };

  Object.defineProperty(Number.prototype, "floor", {enumerable: false});
}(this));

},{"./../core/warn":34}],39:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Number.prototype.isDecimal){
    warn('Number', 'isDecimal');
  }

  Number.prototype.isDecimal = function(){
    if(Number.isInteger){
      return !Number.isInteger(this);
    }else{
      return isFinite(this) && Math.floor(this) !== this;
    }
  }

  Object.defineProperty(Number.prototype, "isDecimal", {enumerable: false});
}(this));

},{"./../core/warn":34}],40:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Number.prototype.isEven){
    warn('Number', 'isEven');
  }

  Number.prototype.isEven = function(){
    return isFinite(this) && this % 2 === 0;
  };

  Object.defineProperty(Number.prototype, "isEven", {enumerable: false});
}(this));

},{"./../core/warn":34}],41:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Number.prototype.isInteger){
    warn('Number', 'isInteger');
  }

  Number.prototype.isInteger = function(){
    if(Number.isInteger){
      return Number.isInteger(this);
    }else{
      return isFinite(this) && Math.floor(this) === this;
    }
  };

  Object.defineProperty(Number.prototype, "isInteger", {enumerable: false});
}(this));

},{"./../core/warn":34}],42:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Number.prototype.isOdd){
    warn('Number', 'isOdd');
  }

  Number.prototype.isOdd = function(){
    return isFinite(this) && Math.abs(this % 2) === 1;
  };

  Object.defineProperty(Number.prototype, "isOdd", {enumerable: false});
}(this));

},{"./../core/warn":34}],43:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Number.prototype.round){
    warn('Number', 'round');
  }

  Number.prototype.round = function(){
    return Math.round(this);
  };

  Object.defineProperty(Number.prototype, "round", {enumerable: false});
}(this));

},{"./../core/warn":34}],44:[function(require,module,exports){
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
require('./object/blank');

},{"./object/all":45,"./object/any":46,"./object/blank":47,"./object/compact":48,"./object/dig":49,"./object/each":50,"./object/empty":51,"./object/equals":52,"./object/except":53,"./object/hasKey":54,"./object/hasValue":55,"./object/join":56,"./object/keepIf":57,"./object/keys":58,"./object/merge":59,"./object/only":60,"./object/reject":61,"./object/values":62}],45:[function(require,module,exports){
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

},{"./../core/warn":34}],46:[function(require,module,exports){
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

},{"./../core/warn":34}],47:[function(require,module,exports){
(function(){
  "use strict";

// The rails implementation was used as a guide:
// https://github.com/rails/rails/blob/cab6ba4e1bf2abf6a5fb83f2f28e2a8482350bbd/activesupport/lib/active_support/core_ext/object/blank.rb
//

  var warn = require('./../core/warn');

// blank
  if(Object.prototype.blank){
    warn('Object', 'blank');
  }

  Object.prototype.blank = function(){
    if(this.empty){
      return this.empty();
    }
    return !this;
  };

  Object.defineProperty(Object.prototype, "blank", {enumerable: false});

// present
  if(Object.prototype.present){
    warn('Object', 'present');
  }

  Object.prototype.present = function(){
    return !this.blank();
  };

  Object.defineProperty(Object.prototype, "present", {enumerable: false});

// presence
  if(Object.prototype.presence){
    warn('Object', 'presence');
  }

  Object.prototype.presence = function(){
    return this.present() ? this : null;
  };

  Object.defineProperty(Object.prototype, "presence", {enumerable: false});
}(this));


},{"./../core/warn":34}],48:[function(require,module,exports){
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

},{"./../core/warn":34}],49:[function(require,module,exports){
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

},{"./../core/isObjectLike":33,"./../core/warn":34}],50:[function(require,module,exports){
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

},{"./../core/warn":34}],51:[function(require,module,exports){
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

},{"./../core/warn":34}],52:[function(require,module,exports){
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

},{"./../core/isObjectLike":33,"./../core/warn":34}],53:[function(require,module,exports){
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

},{"./../core/warn":34}],54:[function(require,module,exports){
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

},{"./../core/warn":34}],55:[function(require,module,exports){
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

},{"./../core/warn":34}],56:[function(require,module,exports){
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

},{"./../core/warn":34}],57:[function(require,module,exports){
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

},{"./../core/warn":34}],58:[function(require,module,exports){
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

},{"./../core/warn":34}],59:[function(require,module,exports){
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

},{"./../core/warn":34}],60:[function(require,module,exports){
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

},{"./../core/warn":34}],61:[function(require,module,exports){
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

},{"./../core/warn":34}],62:[function(require,module,exports){
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

},{"./../core/warn":34}],63:[function(require,module,exports){
require('./string/capitalize');
require('./string/caseCmp');
require('./string/chars');
require('./string/downcase');
require('./string/empty');
require('./string/endsWith');
require('./string/excludes');
require('./string/gsub');
require('./string/includes');
require('./string/lstrip');
require('./string/notEmpty');
require('./string/reverse');
require('./string/rstrip');
require('./string/startsWith');
require('./string/strip');
require('./string/sub');
require('./string/titleize');
require('./string/toBool');
require('./string/upcase');

},{"./string/capitalize":64,"./string/caseCmp":65,"./string/chars":66,"./string/downcase":67,"./string/empty":68,"./string/endsWith":69,"./string/excludes":70,"./string/gsub":71,"./string/includes":72,"./string/lstrip":73,"./string/notEmpty":74,"./string/reverse":75,"./string/rstrip":76,"./string/startsWith":77,"./string/strip":78,"./string/sub":79,"./string/titleize":80,"./string/toBool":81,"./string/upcase":82}],64:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(String.prototype.capitalize){
    warn('String', 'capitalize');
  }

  String.prototype.capitalize = function(){
    return this.charAt(0).toUpperCase() + this.substr(1);
  };

  Object.defineProperty(String.prototype, "capitalize", {enumerable: false});
}(this));

},{"./../core/warn":34}],65:[function(require,module,exports){
(function(){
  "use strict";
  
  var warn = require('./../core/warn');
  if(String.prototype.caseCmp){
    warn('String', 'caseCmp');
  }

  String.prototype.caseCmp = function(x){
    return this.toLowerCase() === x.toLowerCase();
  };

  Object.defineProperty(String.prototype, "caseCmp", {enumerable: false});
}(this));

},{"./../core/warn":34}],66:[function(require,module,exports){
(function(){
  "use strict";
  
  var warn = require('./../core/warn');
  if(String.prototype.chars){
    warn('String', 'chars');
  }

  String.prototype.chars = function(){
    if(Array.prototype.from){
      return Array.from(this);
    }else{
      var array = [];

      for(var i=0;i < this.length;i++){
        array.push(this.charAt(i));
      }

      return array;
    }
  };

  Object.defineProperty(String.prototype, "chars", {enumerable: false});
}(this));

},{"./../core/warn":34}],67:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(String.prototype.downcase){
    warn('String', 'downcase');
  }

  String.prototype.downcase = function(){
    return this.toLowerCase();
  };

  Object.defineProperty(String.prototype, "downcase", {enumerable: false});
}(this));

},{"./../core/warn":34}],68:[function(require,module,exports){
(function(){
  "use strict";

  if(!String.prototype.empty){
    String.prototype.empty = function(){
      return this.length === 0;
    };

    Object.defineProperty(String.prototype, "empty", {enumerable: false});
  }
}(this));

},{}],69:[function(require,module,exports){
(function(){
  "use strict";

  if(!String.prototype.endsWith){
    String.prototype.endsWith = function(x){
      return this.substr((this.length - x.length), this.length) === x;
    };

    Object.defineProperty(String.prototype, "endsWith", {enumerable: false});
  }
}(this));

},{}],70:[function(require,module,exports){
(function(){
  "use strict";
  
  var warn = require('./../core/warn');
  if(String.prototype.excludes){
    warn('String', 'excludes');
  }

  String.prototype.excludes = function(x){
    return this.indexOf(x) === -1;
  }

  Object.defineProperty(String.prototype, "excludes", {enumerable: false});
}(this));

},{"./../core/warn":34}],71:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(String.prototype.gsub){
    warn('String', 'gsub');
  }

  String.prototype.gsub = function(a,b){
    return this.split(a).join(b);
  };

  Object.defineProperty(String.prototype, "gsub", {enumerable: false});
}(this));

},{"./../core/warn":34}],72:[function(require,module,exports){
(function(){
  "use strict";

  if(!String.prototype.includes){
    String.prototype.includes = function(x){
      return this.indexOf(x) !== -1;
    }

    Object.defineProperty(String.prototype, "includes", {enumerable: false});
  }
}(this));

},{}],73:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(String.prototype.lstrip){
    warn('String', 'lstrip');
  }

  String.prototype.lstrip = function(){
    return this.replace(/^\s+/g,'');
  };

  Object.defineProperty(String.prototype, "lstrip", {enumerable: false});
}(this));

},{"./../core/warn":34}],74:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(String.prototype.notEmpty){
    warn('String', 'notEmpty');
  }

  String.prototype.notEmpty = function(){
    return this.length !== 0;
  };

  Object.defineProperty(String.prototype, "notEmpty", {enumerable: false});
}(this));

},{"./../core/warn":34}],75:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(String.prototype.reverse){
    warn('String', 'reverse');
  }

  String.prototype.reverse = function(){
    var array;

    if(Array.prototype.from){
      array = Array.from(this).reverse();
    }else{
      var array = [];

      for(var i=0;i < this.length;i++){
        array.unshift(this.charAt(i));
      }
    }

    return array.join('');
  };

  Object.defineProperty(String.prototype, "reverse", {enumerable: false});
}(this));

},{"./../core/warn":34}],76:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(String.prototype.rstrip){
    warn('String', 'rstrip');
  }

  String.prototype.rstrip = function(){
    return this.replace(/\s+$/g,'');
  };

  Object.defineProperty(String.prototype, "rstrip", {enumerable: false});
}(this));

},{"./../core/warn":34}],77:[function(require,module,exports){
(function(){
  "use strict";

  if(!String.prototype.startsWith){
    String.prototype.startsWith = function(x){
      return this.substr(0, x.length) === x;
    };

    Object.defineProperty(String.prototype, "startsWith", {enumerable: false});
  }
}(this));

},{}],78:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(String.prototype.strip){
    warn('String', 'strip');
  }

  String.prototype.strip = function(){
    if(String.prototype.trim){
      return this.trim();
    }else{
      return this.replace(/^\s+|\s+$/g,'');
    }
  };

  Object.defineProperty(String.prototype, "strip", {enumerable: false});
}(this));

},{"./../core/warn":34}],79:[function(require,module,exports){
(function(){
  "use strict";

  /*
  if(String.prototype.sub){
    console.warn("Rearmed-js Overriding String method: sub. The original sub method is useless and has been removed from the JS standard. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/sub');
  }
  */

  String.prototype.sub = function(a,b){
    return this.replace(a, b);
  };

  Object.defineProperty(String.prototype, "sub", {enumerable: false});
}(this));

},{}],80:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(String.prototype.titleize){
    warn('String', 'titleize');
  }

  String.prototype.titleize = function(onlyFirstLetter){
    return this.split(' ').map(function(str){
      var s = str.charAt(0).toUpperCase();
      if(onlyFirstLetter === false){
        s += str.substr(1).toLowerCase();
      }else{
        s += str.substr(1);
      }
      return s;
    }).join(' ');
  };

  Object.defineProperty(String.prototype, "titleize", {enumerable: false});
}(this));

},{"./../core/warn":34}],81:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(String.prototype.toBool){
    warn('String', 'toBool');
  }

  String.prototype.toBool = function(){
    if(this === 'true'){
      return true;
    }else if(this === 'false'){
      return false;
    }
  };

  Object.defineProperty(String.prototype, "toBool", {enumerable: false});
}(this));

},{"./../core/warn":34}],82:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(String.prototype.upcase){
    warn('String', 'upcase');
  }

  String.prototype.upcase = function(){
    return this.toUpperCase();
  };

  Object.defineProperty(String.prototype, "upcase", {enumerable: false});
}(this));

},{"./../core/warn":34}]},{},[1]);
