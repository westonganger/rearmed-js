(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
require('./rearmed/array');
require('./rearmed/number');
require('./rearmed/object');
require('./rearmed/string');

var Rearmed = require('./rearmed/core');
module.exports = Rearmed;

},{"./rearmed/array":2,"./rearmed/core":30,"./rearmed/number":34,"./rearmed/object":42,"./rearmed/string":60}],2:[function(require,module,exports){
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

},{"./array/all":3,"./array/any":4,"./array/compact":5,"./array/dig":6,"./array/each":7,"./array/empty":8,"./array/equals":9,"./array/excludes":10,"./array/find":11,"./array/findIndex":12,"./array/first":13,"./array/flatten":14,"./array/groupBy":15,"./array/inGroupsOf":16,"./array/includes":17,"./array/last":18,"./array/max":19,"./array/maxBy":20,"./array/min":21,"./array/minBy":22,"./array/notEmpty":23,"./array/reject":24,"./array/select":25,"./array/smartExcludes":26,"./array/smartIncludes":27,"./array/sum":28,"./array/uniq":29}],3:[function(require,module,exports){
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

},{"./../core/warn":33}],4:[function(require,module,exports){
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

},{"./../core/warn":33}],5:[function(require,module,exports){
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

},{"./../core/warn":33}],6:[function(require,module,exports){
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

},{"./../core/isObjectLike":32,"./../core/warn":33}],7:[function(require,module,exports){
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

},{"./../core/warn":33}],8:[function(require,module,exports){
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

},{"./../core/warn":33}],9:[function(require,module,exports){
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

},{"./../core/isObjectLike":32,"./../core/warn":33}],10:[function(require,module,exports){
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

},{"./../core/warn":33}],11:[function(require,module,exports){
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

},{"./../core/isFunction":31}],12:[function(require,module,exports){
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

},{"./../core/isFunction":31}],13:[function(require,module,exports){
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

},{"./../core/warn":33}],14:[function(require,module,exports){
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

},{"./../core/warn":33}],15:[function(require,module,exports){
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

},{"./../core/warn":33}],16:[function(require,module,exports){
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

},{"./../core/warn":33}],17:[function(require,module,exports){
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

},{"./../core/warn":33}],19:[function(require,module,exports){
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

},{"./../core/isFunction":31,"./../core/warn":33}],20:[function(require,module,exports){
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

},{"./../core/isFunction":31,"./../core/warn":33}],21:[function(require,module,exports){
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

},{"./../core/isFunction":31,"./../core/warn":33}],22:[function(require,module,exports){
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

},{"./../core/isFunction":31,"./../core/warn":33}],23:[function(require,module,exports){
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

},{"./../core/warn":33}],24:[function(require,module,exports){
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

},{"./../core/warn":33}],25:[function(require,module,exports){
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

},{"./../core/warn":33}],26:[function(require,module,exports){
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

},{"./../core/isObjectLike":32,"./../core/warn":33,"./../object/equals":49,"./equals":9}],27:[function(require,module,exports){
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

},{"./../core/isObjectLike":32,"./../core/warn":33,"./../object/equals":49,"./equals":9}],28:[function(require,module,exports){
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

},{"./../core/isFunction":31,"./../core/warn":33}],29:[function(require,module,exports){
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

},{"./../core/isFunction":31,"./../core/warn":33}],30:[function(require,module,exports){
var Rearmed = {
  isFunction: require('./core/isFunction'),
  isObjectLike: require('./core/isObjectLike')
};

module.exports = Rearmed;

},{"./core/isFunction":31,"./core/isObjectLike":32}],31:[function(require,module,exports){
function isFunction(obj){
  return !!(obj && obj.constructor && obj.call && obj.apply);
};

module.exports = isFunction;

},{}],32:[function(require,module,exports){
function isObjectLike(value){
  return value != null && typeof value == 'object';
};

module.exports = isObjectLike;

},{}],33:[function(require,module,exports){
function warn(type, method){
  console.warn("Rearmed-js Overriding " + type + " method: " + method, '. If this is a built-in browser method please report on Rearmed-js github issues.');
};

module.exports = warn;

},{}],34:[function(require,module,exports){
require('./number/ceil');
require('./number/floor');
require('./number/isDecimal');
require('./number/isEven');
require('./number/isInteger');
require('./number/isOdd');
require('./number/round');

},{"./number/ceil":35,"./number/floor":36,"./number/isDecimal":37,"./number/isEven":38,"./number/isInteger":39,"./number/isOdd":40,"./number/round":41}],35:[function(require,module,exports){
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

},{"./../core/warn":33}],36:[function(require,module,exports){
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

},{"./../core/warn":33}],37:[function(require,module,exports){
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

},{"./../core/warn":33}],38:[function(require,module,exports){
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

},{"./../core/warn":33}],39:[function(require,module,exports){
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

},{"./../core/warn":33}],40:[function(require,module,exports){
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

},{"./../core/warn":33}],41:[function(require,module,exports){
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

},{"./../core/warn":33}],42:[function(require,module,exports){
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

},{"./object/all":43,"./object/any":44,"./object/compact":45,"./object/dig":46,"./object/each":47,"./object/empty":48,"./object/equals":49,"./object/except":50,"./object/hasKey":51,"./object/hasValue":52,"./object/join":53,"./object/keys":54,"./object/merge":55,"./object/only":56,"./object/reject":57,"./object/select":58,"./object/values":59}],43:[function(require,module,exports){
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

},{"./../core/warn":33}],44:[function(require,module,exports){
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

},{"./../core/warn":33}],45:[function(require,module,exports){
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

},{"./../core/warn":33}],46:[function(require,module,exports){
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

},{"./../core/isObjectLike":32,"./../core/warn":33}],47:[function(require,module,exports){
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

},{"./../core/warn":33}],48:[function(require,module,exports){
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

},{"./../core/warn":33}],49:[function(require,module,exports){
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

},{"./../core/isObjectLike":32,"./../core/warn":33}],50:[function(require,module,exports){
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

},{"./../core/warn":33}],51:[function(require,module,exports){
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

},{"./../core/warn":33}],52:[function(require,module,exports){
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

},{"./../core/warn":33}],53:[function(require,module,exports){
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

},{"./../core/warn":33}],54:[function(require,module,exports){
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

},{"./../core/warn":33}],55:[function(require,module,exports){
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

},{"./../core/warn":33}],56:[function(require,module,exports){
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

},{"./../core/warn":33}],57:[function(require,module,exports){
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

},{"./../core/warn":33}],58:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Object.prototype.select){
    warn('Object', 'select');
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

},{"./../core/warn":33}],59:[function(require,module,exports){
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

},{"./../core/warn":33}],60:[function(require,module,exports){
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

},{"./string/capitalize":61,"./string/caseCmp":62,"./string/chars":63,"./string/downcase":64,"./string/empty":65,"./string/endsWith":66,"./string/excludes":67,"./string/gsub":68,"./string/includes":69,"./string/lstrip":70,"./string/notEmpty":71,"./string/reverse":72,"./string/rstrip":73,"./string/startsWith":74,"./string/strip":75,"./string/sub":76,"./string/titleize":77,"./string/toBool":78,"./string/upcase":79}],61:[function(require,module,exports){
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

},{"./../core/warn":33}],62:[function(require,module,exports){
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

},{"./../core/warn":33}],63:[function(require,module,exports){
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

},{"./../core/warn":33}],64:[function(require,module,exports){
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

},{"./../core/warn":33}],65:[function(require,module,exports){
(function(){
  "use strict";

  if(!String.prototype.empty){
    String.prototype.empty = function(){
      return this.length === 0;
    };

    Object.defineProperty(String.prototype, "empty", {enumerable: false});
  }
}(this));

},{}],66:[function(require,module,exports){
(function(){
  "use strict";

  if(!String.prototype.endsWith){
    String.prototype.endsWith = function(x){
      return this.substr((this.length - x.length), this.length) === x;
    };

    Object.defineProperty(String.prototype, "endsWith", {enumerable: false});
  }
}(this));

},{}],67:[function(require,module,exports){
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

},{"./../core/warn":33}],68:[function(require,module,exports){
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

},{"./../core/warn":33}],69:[function(require,module,exports){
(function(){
  "use strict";

  if(!String.prototype.includes){
    String.prototype.includes = function(x){
      return this.indexOf(x) !== -1;
    }

    Object.defineProperty(String.prototype, "includes", {enumerable: false});
  }
}(this));

},{}],70:[function(require,module,exports){
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

},{"./../core/warn":33}],71:[function(require,module,exports){
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

},{"./../core/warn":33}],72:[function(require,module,exports){
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

},{"./../core/warn":33}],73:[function(require,module,exports){
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

},{"./../core/warn":33}],74:[function(require,module,exports){
(function(){
  "use strict";

  if(!String.prototype.startsWith){
    String.prototype.startsWith = function(x){
      return this.substr(0, x.length) === x;
    };

    Object.defineProperty(String.prototype, "startsWith", {enumerable: false});
  }
}(this));

},{}],75:[function(require,module,exports){
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

},{"./../core/warn":33}],76:[function(require,module,exports){
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

},{}],77:[function(require,module,exports){
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

},{"./../core/warn":33}],78:[function(require,module,exports){
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

},{"./../core/warn":33}],79:[function(require,module,exports){
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

},{"./../core/warn":33}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvcmVhcm1lZC5qcyIsInNyYy9yZWFybWVkL2FycmF5LmpzIiwic3JjL3JlYXJtZWQvYXJyYXkvYWxsLmpzIiwic3JjL3JlYXJtZWQvYXJyYXkvYW55LmpzIiwic3JjL3JlYXJtZWQvYXJyYXkvY29tcGFjdC5qcyIsInNyYy9yZWFybWVkL2FycmF5L2RpZy5qcyIsInNyYy9yZWFybWVkL2FycmF5L2VhY2guanMiLCJzcmMvcmVhcm1lZC9hcnJheS9lbXB0eS5qcyIsInNyYy9yZWFybWVkL2FycmF5L2VxdWFscy5qcyIsInNyYy9yZWFybWVkL2FycmF5L2V4Y2x1ZGVzLmpzIiwic3JjL3JlYXJtZWQvYXJyYXkvZmluZC5qcyIsInNyYy9yZWFybWVkL2FycmF5L2ZpbmRJbmRleC5qcyIsInNyYy9yZWFybWVkL2FycmF5L2ZpcnN0LmpzIiwic3JjL3JlYXJtZWQvYXJyYXkvZmxhdHRlbi5qcyIsInNyYy9yZWFybWVkL2FycmF5L2dyb3VwQnkuanMiLCJzcmMvcmVhcm1lZC9hcnJheS9pbkdyb3Vwc09mLmpzIiwic3JjL3JlYXJtZWQvYXJyYXkvaW5jbHVkZXMuanMiLCJzcmMvcmVhcm1lZC9hcnJheS9sYXN0LmpzIiwic3JjL3JlYXJtZWQvYXJyYXkvbWF4LmpzIiwic3JjL3JlYXJtZWQvYXJyYXkvbWF4QnkuanMiLCJzcmMvcmVhcm1lZC9hcnJheS9taW4uanMiLCJzcmMvcmVhcm1lZC9hcnJheS9taW5CeS5qcyIsInNyYy9yZWFybWVkL2FycmF5L25vdEVtcHR5LmpzIiwic3JjL3JlYXJtZWQvYXJyYXkvcmVqZWN0LmpzIiwic3JjL3JlYXJtZWQvYXJyYXkvc2VsZWN0LmpzIiwic3JjL3JlYXJtZWQvYXJyYXkvc21hcnRFeGNsdWRlcy5qcyIsInNyYy9yZWFybWVkL2FycmF5L3NtYXJ0SW5jbHVkZXMuanMiLCJzcmMvcmVhcm1lZC9hcnJheS9zdW0uanMiLCJzcmMvcmVhcm1lZC9hcnJheS91bmlxLmpzIiwic3JjL3JlYXJtZWQvY29yZS5qcyIsInNyYy9yZWFybWVkL2NvcmUvaXNGdW5jdGlvbi5qcyIsInNyYy9yZWFybWVkL2NvcmUvaXNPYmplY3RMaWtlLmpzIiwic3JjL3JlYXJtZWQvY29yZS93YXJuLmpzIiwic3JjL3JlYXJtZWQvbnVtYmVyLmpzIiwic3JjL3JlYXJtZWQvbnVtYmVyL2NlaWwuanMiLCJzcmMvcmVhcm1lZC9udW1iZXIvZmxvb3IuanMiLCJzcmMvcmVhcm1lZC9udW1iZXIvaXNEZWNpbWFsLmpzIiwic3JjL3JlYXJtZWQvbnVtYmVyL2lzRXZlbi5qcyIsInNyYy9yZWFybWVkL251bWJlci9pc0ludGVnZXIuanMiLCJzcmMvcmVhcm1lZC9udW1iZXIvaXNPZGQuanMiLCJzcmMvcmVhcm1lZC9udW1iZXIvcm91bmQuanMiLCJzcmMvcmVhcm1lZC9vYmplY3QuanMiLCJzcmMvcmVhcm1lZC9vYmplY3QvYWxsLmpzIiwic3JjL3JlYXJtZWQvb2JqZWN0L2FueS5qcyIsInNyYy9yZWFybWVkL29iamVjdC9jb21wYWN0LmpzIiwic3JjL3JlYXJtZWQvb2JqZWN0L2RpZy5qcyIsInNyYy9yZWFybWVkL29iamVjdC9lYWNoLmpzIiwic3JjL3JlYXJtZWQvb2JqZWN0L2VtcHR5LmpzIiwic3JjL3JlYXJtZWQvb2JqZWN0L2VxdWFscy5qcyIsInNyYy9yZWFybWVkL29iamVjdC9leGNlcHQuanMiLCJzcmMvcmVhcm1lZC9vYmplY3QvaGFzS2V5LmpzIiwic3JjL3JlYXJtZWQvb2JqZWN0L2hhc1ZhbHVlLmpzIiwic3JjL3JlYXJtZWQvb2JqZWN0L2pvaW4uanMiLCJzcmMvcmVhcm1lZC9vYmplY3Qva2V5cy5qcyIsInNyYy9yZWFybWVkL29iamVjdC9tZXJnZS5qcyIsInNyYy9yZWFybWVkL29iamVjdC9vbmx5LmpzIiwic3JjL3JlYXJtZWQvb2JqZWN0L3JlamVjdC5qcyIsInNyYy9yZWFybWVkL29iamVjdC9zZWxlY3QuanMiLCJzcmMvcmVhcm1lZC9vYmplY3QvdmFsdWVzLmpzIiwic3JjL3JlYXJtZWQvc3RyaW5nLmpzIiwic3JjL3JlYXJtZWQvc3RyaW5nL2NhcGl0YWxpemUuanMiLCJzcmMvcmVhcm1lZC9zdHJpbmcvY2FzZUNtcC5qcyIsInNyYy9yZWFybWVkL3N0cmluZy9jaGFycy5qcyIsInNyYy9yZWFybWVkL3N0cmluZy9kb3duY2FzZS5qcyIsInNyYy9yZWFybWVkL3N0cmluZy9lbXB0eS5qcyIsInNyYy9yZWFybWVkL3N0cmluZy9lbmRzV2l0aC5qcyIsInNyYy9yZWFybWVkL3N0cmluZy9leGNsdWRlcy5qcyIsInNyYy9yZWFybWVkL3N0cmluZy9nc3ViLmpzIiwic3JjL3JlYXJtZWQvc3RyaW5nL2luY2x1ZGVzLmpzIiwic3JjL3JlYXJtZWQvc3RyaW5nL2xzdHJpcC5qcyIsInNyYy9yZWFybWVkL3N0cmluZy9ub3RFbXB0eS5qcyIsInNyYy9yZWFybWVkL3N0cmluZy9yZXZlcnNlLmpzIiwic3JjL3JlYXJtZWQvc3RyaW5nL3JzdHJpcC5qcyIsInNyYy9yZWFybWVkL3N0cmluZy9zdGFydHNXaXRoLmpzIiwic3JjL3JlYXJtZWQvc3RyaW5nL3N0cmlwLmpzIiwic3JjL3JlYXJtZWQvc3RyaW5nL3N1Yi5qcyIsInNyYy9yZWFybWVkL3N0cmluZy90aXRsZWl6ZS5qcyIsInNyYy9yZWFybWVkL3N0cmluZy90b0Jvb2wuanMiLCJzcmMvcmVhcm1lZC9zdHJpbmcvdXBjYXNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJyZXF1aXJlKCcuL3JlYXJtZWQvYXJyYXknKTtcbnJlcXVpcmUoJy4vcmVhcm1lZC9udW1iZXInKTtcbnJlcXVpcmUoJy4vcmVhcm1lZC9vYmplY3QnKTtcbnJlcXVpcmUoJy4vcmVhcm1lZC9zdHJpbmcnKTtcblxudmFyIFJlYXJtZWQgPSByZXF1aXJlKCcuL3JlYXJtZWQvY29yZScpO1xubW9kdWxlLmV4cG9ydHMgPSBSZWFybWVkO1xuIiwicmVxdWlyZSgnLi9hcnJheS9hbGwnKTtcbnJlcXVpcmUoJy4vYXJyYXkvYW55Jyk7XG5yZXF1aXJlKCcuL2FycmF5L2NvbXBhY3QnKTtcbnJlcXVpcmUoJy4vYXJyYXkvZGlnJyk7XG5yZXF1aXJlKCcuL2FycmF5L2VhY2gnKTtcbnJlcXVpcmUoJy4vYXJyYXkvZW1wdHknKTtcbnJlcXVpcmUoJy4vYXJyYXkvZXF1YWxzJyk7XG5yZXF1aXJlKCcuL2FycmF5L2V4Y2x1ZGVzJyk7XG5yZXF1aXJlKCcuL2FycmF5L2ZpbmQnKTtcbnJlcXVpcmUoJy4vYXJyYXkvZmluZEluZGV4Jyk7XG5yZXF1aXJlKCcuL2FycmF5L2ZpcnN0Jyk7XG5yZXF1aXJlKCcuL2FycmF5L2ZsYXR0ZW4nKTtcbnJlcXVpcmUoJy4vYXJyYXkvaW5jbHVkZXMnKTtcbnJlcXVpcmUoJy4vYXJyYXkvaW5Hcm91cHNPZicpO1xucmVxdWlyZSgnLi9hcnJheS9ncm91cEJ5Jyk7XG5yZXF1aXJlKCcuL2FycmF5L2xhc3QnKTtcbnJlcXVpcmUoJy4vYXJyYXkvbWF4Jyk7XG5yZXF1aXJlKCcuL2FycmF5L21heEJ5Jyk7XG5yZXF1aXJlKCcuL2FycmF5L21pbicpO1xucmVxdWlyZSgnLi9hcnJheS9taW5CeScpO1xucmVxdWlyZSgnLi9hcnJheS9ub3RFbXB0eScpO1xucmVxdWlyZSgnLi9hcnJheS9zbWFydEV4Y2x1ZGVzJyk7XG5yZXF1aXJlKCcuL2FycmF5L3NtYXJ0SW5jbHVkZXMnKTtcbnJlcXVpcmUoJy4vYXJyYXkvcmVqZWN0Jyk7XG5yZXF1aXJlKCcuL2FycmF5L3NlbGVjdCcpO1xucmVxdWlyZSgnLi9hcnJheS9zdW0nKTtcbnJlcXVpcmUoJy4vYXJyYXkvdW5pcScpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoQXJyYXkucHJvdG90eXBlLmFsbCl7XG4gICAgd2FybignQXJyYXknLCAnYWxsJyk7XG4gIH1cblxuICBBcnJheS5wcm90b3R5cGUuYWxsID0gZnVuY3Rpb24oY2Ipe1xuICAgIGlmKCFjYil7XG4gICAgICBjYiA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5ldmVyeShjYik7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSwgXCJhbGxcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKEFycmF5LnByb3RvdHlwZS5hbnkpe1xuICAgIHdhcm4oJ0FycmF5JywgJ2FueScpO1xuICB9XG5cbiAgQXJyYXkucHJvdG90eXBlLmFueSA9IGZ1bmN0aW9uKGNiKXtcbiAgICBpZighY2Ipe1xuICAgICAgY2IgPSBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zb21lKGNiKTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCBcImFueVwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoQXJyYXkucHJvdG90eXBlLmNvbXBhY3Qpe1xuICAgIHdhcm4oJ0FycmF5JywgJ2NvbXBhY3QnKTtcbiAgfVxuXG4gIEFycmF5LnByb3RvdHlwZS5jb21wYWN0ID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgYmFkO1xuXG4gICAgaWYoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCl7XG4gICAgICBiYWQgPSBbbnVsbCwgdW5kZWZpbmVkXTtcbiAgICB9ZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoID09PSAxKXtcbiAgICAgIGlmKEFycmF5LmlzQXJyYXkoYXJndW1lbnRzWzBdKSl7XG4gICAgICAgIGJhZCA9IGFyZ3VtZW50c1swXTtcbiAgICAgIH1lbHNle1xuICAgICAgICBiYWQgPSBbYXJndW1lbnRzWzBdXTtcbiAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgIGJhZCA9IGFyZ3VtZW50cztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5maWx0ZXIoZnVuY3Rpb24oeCl7XG4gICAgICB2YXIgYm9vbCA9IHRydWU7XG4gICAgICBmb3IodmFyIGk9MDtpPGJhZC5sZW5ndGg7aSsrKXtcbiAgICAgICAgaWYoeCA9PT0gYmFkW2ldKXtcbiAgICAgICAgICBib29sID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBib29sO1xuICAgIH0pO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsIFwiY29tcGFjdFwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBSZWFybWVkID0ge1xuICAgIGlzT2JqZWN0TGlrZTogcmVxdWlyZSgnLi8uLi9jb3JlL2lzT2JqZWN0TGlrZScpXG4gIH07XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihBcnJheS5wcm90b3R5cGUuZGlnKXtcbiAgICB3YXJuKCdBcnJheScsICdkaWcnKTtcbiAgfVxuXG4gIEFycmF5LnByb3RvdHlwZS5kaWcgPSBmdW5jdGlvbigpe1xuICAgIHZhciBrZXlzO1xuICAgIGlmKGFyZ3VtZW50cy5sZW5ndGggPT09IDApe1xuICAgICAga2V5cyA9IFtdO1xuICAgIH1lbHNlIGlmKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpe1xuICAgICAgaWYoQXJyYXkuaXNBcnJheShhcmd1bWVudHNbMF0pKXtcbiAgICAgICAga2V5cyA9IGFyZ3VtZW50c1swXTtcbiAgICAgIH1lbHNle1xuICAgICAgICBrZXlzID0gW2FyZ3VtZW50c1swXV07XG4gICAgICB9XG4gICAgfWVsc2V7XG4gICAgICBrZXlzID0gYXJndW1lbnRzO1xuICAgIH1cblxuICAgIHZhciB2YWwgPSB0aGlzO1xuICAgIGZvcih2YXIgaT0wO2k8YXJndW1lbnRzLmxlbmd0aDtpKyspe1xuICAgICAgaWYoUmVhcm1lZC5pc09iamVjdExpa2UodmFsKSl7XG4gICAgICAgIHZhbCA9IHZhbFthcmd1bWVudHNbaV1dO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHZhbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWw7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSwgXCJkaWdcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKEFycmF5LnByb3RvdHlwZS5lYWNoKXtcbiAgICB3YXJuKCdBcnJheScsICdlYWNoJyk7XG4gIH1cblxuICBBcnJheS5wcm90b3R5cGUuZWFjaCA9IGZ1bmN0aW9uKGNiKXtcbiAgICBmb3IodmFyIGk9MDtpPHRoaXMubGVuZ3RoO2krKyl7XG4gICAgICBjYih0aGlzW2ldLCBpKTtcbiAgICB9XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSwgXCJlYWNoXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihBcnJheS5wcm90b3R5cGUuZW1wdHkpe1xuICAgIHdhcm4oJ0FycmF5JywgJ2VtcHR5Jyk7XG4gIH1cblxuICBBcnJheS5wcm90b3R5cGUuZW1wdHkgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiB0aGlzLmxlbmd0aCA9PT0gMDtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCBcImVtcHR5XCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIFJlYXJtZWQgPSB7XG4gICAgaXNPYmplY3RMaWtlOiByZXF1aXJlKCcuLy4uL2NvcmUvaXNPYmplY3RMaWtlJylcbiAgfTtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKEFycmF5LnByb3RvdHlwZS5lcXVhbHMpe1xuICAgIHdhcm4oJ0FycmF5JywgJ2VxdWFscycpO1xuICB9XG5cbiAgQXJyYXkucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uKGFycmF5KXtcbiAgICBpZighYXJyYXkpe1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmKHRoaXMubGVuZ3RoICE9PSBhcnJheS5sZW5ndGgpe1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZvcih2YXIgaT0wO2k8dGhpcy5sZW5ndGg7aSsrKXtcbiAgICAgIHZhciB2YWwgPSB0aGlzW2ldO1xuICAgICAgdmFyIG90aGVyID0gYXJyYXlbaV1cbiAgICAgIGlmKEFycmF5LmlzQXJyYXkodGhpc1tpXSkgJiYgQXJyYXkuaXNBcnJheShvdGhlcikpe1xuICAgICAgICBpZighdmFsLmVxdWFscyhvdGhlcikpe1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfWVsc2UgaWYoUmVhcm1lZC5pc09iamVjdExpa2UodmFsKSAmJiBSZWFybWVkLmlzT2JqZWN0TGlrZShvdGhlcikpe1xuICAgICAgICBpZighdmFsLmVxdWFscyhvdGhlcikpe1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfWVsc2UgaWYodmFsICE9PSBvdGhlcil7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCBcImVxdWFsc1wiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoQXJyYXkucHJvdG90eXBlLmV4Y2x1ZGVzKXtcbiAgICB3YXJuKCdBcnJheScsICdleGNsdWRlcycpO1xuICB9XG5cbiAgQXJyYXkucHJvdG90eXBlLmV4Y2x1ZGVzID0gZnVuY3Rpb24oeCwgZnJvbUluZGV4KXtcbiAgICB2YXIgZnJvbUluZGV4ID0gZnJvbUluZGV4IHx8IDA7XG4gICAgdmFyIGJvb2wgPSB0cnVlO1xuICAgIGZvcih2YXIgaT1mcm9tSW5kZXg7aTx0aGlzLmxlbmd0aDtpKyspe1xuICAgICAgaWYodGhpc1tpXSA9PT0geCl7XG4gICAgICAgIGJvb2wgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBib29sO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsIFwiZXhjbHVkZXNcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgUmVhcm1lZCA9IHtcbiAgICBpc0Z1bmN0aW9uOiByZXF1aXJlKCcuLy4uL2NvcmUvaXNGdW5jdGlvbicpXG4gIH07XG5cbiAgaWYoIUFycmF5LnByb3RvdHlwZS5maW5kKXtcbiAgICBBcnJheS5wcm90b3R5cGUuZmluZCA9IGZ1bmN0aW9uKGNiKXtcbiAgICAgIHZhciBpdGVtO1xuICAgICAgdmFyIGhhc0NhbGxiYWNrID0gUmVhcm1lZC5pc0Z1bmN0aW9uKGNiKTtcbiAgICAgIGZvcih2YXIgaT0wO2k8dGhpcy5sZW5ndGg7aSsrKXtcbiAgICAgICAgdmFyIHZhbCA9IHRoaXNbaV07XG4gICAgICAgIGlmKGhhc0NhbGxiYWNrID8gY2IodmFsLCBpKSA6IChjYiA9PT0gdmFsKSl7XG4gICAgICAgICAgdmFsID0gdmFsO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gaXRlbTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsIFwiZmluZFwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbiAgfVxufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIFJlYXJtZWQgPSB7XG4gICAgaXNGdW5jdGlvbjogcmVxdWlyZSgnLi8uLi9jb3JlL2lzRnVuY3Rpb24nKVxuICB9O1xuXG4gIGlmKCFBcnJheS5wcm90b3R5cGUuZmluZEluZGV4KXtcbiAgICBBcnJheS5wcm90b3R5cGUuZmluZEluZGV4ID0gZnVuY3Rpb24oY2Ipe1xuICAgICAgdmFyIGluZGV4ID0gLTE7XG4gICAgICB2YXIgaGFzQ2FsbGJhY2sgPSBSZWFybWVkLmlzRnVuY3Rpb24oY2IpO1xuICAgICAgZm9yKHZhciBpPTA7aTx0aGlzLmxlbmd0aDtpKyspe1xuICAgICAgICBpZihoYXNDYWxsYmFjayA/IGNiKHRoaXNbaV0sIGkpIDogKGNiID09PSB0aGlzW2ldKSl7XG4gICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsIFwiZmluZEluZGV4XCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xuICB9XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKEFycmF5LnByb3RvdHlwZS5maXJzdCl7XG4gICAgd2FybignQXJyYXknLCAnZmlyc3QnKTtcbiAgfVxuXG4gIEFycmF5LnByb3RvdHlwZS5maXJzdCA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHRoaXNbMF07XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSwgXCJmaXJzdFwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoQXJyYXkucHJvdG90eXBlLmZsYXR0ZW4pe1xuICAgIHdhcm4oJ0FycmF5JywgJ2ZsYXR0ZW4nKTtcbiAgfVxuXG4gIEFycmF5LnByb3RvdHlwZS5mbGF0dGVuID0gZnVuY3Rpb24ocmVzdWx0KXtcbiAgICByZXN1bHQgPSByZXN1bHQgfHwgW107XG4gICAgZm9yKHZhciBpPTA7aTx0aGlzLmxlbmd0aDtpKyspe1xuICAgICAgdmFyIHZhbCA9IHRoaXNbaV07XG4gICAgICBpZihBcnJheS5pc0FycmF5KHZhbCkpe1xuICAgICAgICBmb3IodmFyIGo9MDtqPHZhbC5sZW5ndGg7aisrKXtcbiAgICAgICAgICB2YXIgdmFsMiA9IHZhbFtqXTtcbiAgICAgICAgICBpZihBcnJheS5pc0FycmF5KHZhbDIpKXtcbiAgICAgICAgICAgIHZhbDIuZmxhdHRlbihyZXN1bHQpO1xuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmVzdWx0LnB1c2godmFsMik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9ZWxzZXtcbiAgICAgICAgcmVzdWx0LnB1c2godmFsKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCBcImZsYXR0ZW5cIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKEFycmF5LnByb3RvdHlwZS5ncm91cEJ5KXtcbiAgICB3YXJuKCdBcnJheScsICdncm91cEJ5Jyk7XG4gIH1cblxuICBBcnJheS5wcm90b3R5cGUuZ3JvdXBCeSA9IGZ1bmN0aW9uKGNiKXtcbiAgICB2YXIgaGFzaCA9IHt9O1xuICAgIGZvcih2YXIgaT0wO2k8dGhpcy5sZW5ndGg7aSsrKXtcbiAgICAgIHZhciB2YWwgPSB0aGlzW2ldO1xuICAgICAgdmFyIGtleSA9IGNiKHZhbCwgaSk7XG4gICAgICBoYXNoW2tleV0gPSBoYXNoW2tleV0gfHwgW107XG4gICAgICBoYXNoW2tleV0ucHVzaCh2YWwpO1xuICAgIH1cbiAgICByZXR1cm4gaGFzaDtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCBcImdyb3VwQnlcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKEFycmF5LnByb3RvdHlwZS5pbkdyb3Vwc09mKXtcbiAgICB3YXJuKCdBcnJheScsICdpbkdyb3Vwc09mJyk7XG4gIH1cblxuICBBcnJheS5wcm90b3R5cGUuaW5Hcm91cHNPZiA9IGZ1bmN0aW9uKHBlciwgZmlsbFdpdGgpe1xuICAgIHZhciBhcnIgPSBbXVxuICAgIHZhciBwZXIgPSBOdW1iZXIocGVyKTtcbiAgICB2YXIgZmlsbFdpdGggPSBmaWxsV2l0aCB8fCBmYWxzZTtcbiAgICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGg7XG5cbiAgICBmb3IodmFyIGk9MDtpPGxlbmd0aDtpKyspe1xuICAgICAgdmFyIGNvdW50ID0gMDtcbiAgICAgIHZhciBvZmZzZXQ7XG4gICAgICBpZigoaSsxKSAlIHBlciA9PT0gMCl7XG4gICAgICAgIGNvdW50ID0gcGVyO1xuICAgICAgICBvZmZzZXQgPSBwZXI7XG4gICAgICB9ZWxzZSBpZihpKzEgPT09IGxlbmd0aCl7XG4gICAgICAgIGNvdW50ID0gcGVyO1xuICAgICAgICBvZmZzZXQgPSBsZW5ndGggJSBwZXI7XG4gICAgICB9XG5cbiAgICAgIGlmKGNvdW50ID4gMCl7XG4gICAgICAgIHZhciBncm91cCA9IFtdO1xuICAgICAgICBmb3IodmFyIGo9MDtqPGNvdW50O2orKyl7XG4gICAgICAgICAgdmFyIHZhbCA9IHRoaXNbaS1vZmZzZXQraisxXTtcbiAgICAgICAgICBpZih2YWwpe1xuICAgICAgICAgICAgZ3JvdXAucHVzaCh2YWwpO1xuICAgICAgICAgIH1lbHNlIGlmKGZpbGxXaXRoICE9PSBmYWxzZSl7XG4gICAgICAgICAgICBncm91cC5wdXNoKGZpbGxXaXRoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXJyLnB1c2goZ3JvdXApXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCBcImluR3JvdXBzT2ZcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBpZighQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzKXtcbiAgICBBcnJheS5wcm90b3R5cGUuaW5jbHVkZXMgPSBmdW5jdGlvbih4LCBmcm9tSW5kZXgpe1xuICAgICAgZnJvbUluZGV4ID0gZnJvbUluZGV4IHx8IDA7XG4gICAgICB2YXIgYm9vbCA9IGZhbHNlO1xuICAgICAgZm9yKHZhciBpPWZyb21JbmRleDtpPHRoaXMubGVuZ3RoO2krKyl7XG4gICAgICAgIGlmKHRoaXNbaV0gPT09IHgpe1xuICAgICAgICAgIGJvb2wgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gYm9vbDtcbiAgICB9O1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSwgXCJpbmNsdWRlc1wiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbiAgfVxufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihBcnJheS5wcm90b3R5cGUubGFzdCl7XG4gICAgd2FybignQXJyYXknLCAnbGFzdCcpO1xuICB9XG5cbiAgQXJyYXkucHJvdG90eXBlLmxhc3QgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiB0aGlzW3RoaXMubGVuZ3RoLTFdO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsIFwibGFzdFwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBSZWFybWVkID0ge1xuICAgIGlzRnVuY3Rpb246IHJlcXVpcmUoJy4vLi4vY29yZS9pc0Z1bmN0aW9uJylcbiAgfTtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKEFycmF5LnByb3RvdHlwZS5tYXgpe1xuICAgIHdhcm4oJ0FycmF5JywgJ21heCcpO1xuICB9XG5cbiAgQXJyYXkucHJvdG90eXBlLm1heCA9IGZ1bmN0aW9uKGNiKXtcbiAgICB2YXIgbWF4O1xuICAgIHZhciBoYXNDYWxsYmFjayA9IFJlYXJtZWQuaXNGdW5jdGlvbihjYik7XG4gICAgZm9yKHZhciBpPTA7aTx0aGlzLmxlbmd0aDtpKyspe1xuICAgICAgdmFyIHZhbCA9IGhhc0NhbGxiYWNrID8gY2IodGhpc1tpXSwgaSkgOiB0aGlzW2ldO1xuXG4gICAgICBpZihtYXggPT09IG51bGwgfHwgbWF4ID09PSB1bmRlZmluZWQgfHwgdmFsID4gbWF4KXtcbiAgICAgICAgbWF4ID0gdmFsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWF4O1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsIFwibWF4XCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIFJlYXJtZWQgPSB7XG4gICAgaXNGdW5jdGlvbjogcmVxdWlyZSgnLi8uLi9jb3JlL2lzRnVuY3Rpb24nKVxuICB9O1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoQXJyYXkucHJvdG90eXBlLm1heEJ5KXtcbiAgICB3YXJuKCdBcnJheScsICdtYXhCeScpO1xuICB9XG5cbiAgQXJyYXkucHJvdG90eXBlLm1heEJ5ID0gZnVuY3Rpb24oY2Ipe1xuICAgIHZhciBjdXJyZW50LCBtYXg7XG4gICAgdmFyIGhhc0NhbGxiYWNrID0gUmVhcm1lZC5pc0Z1bmN0aW9uKGNiKTtcbiAgICBmb3IodmFyIGk9MDtpPHRoaXMubGVuZ3RoO2krKyl7XG4gICAgICB2YXIgaXRlbSA9IHRoaXNbaV07XG4gICAgICB2YXIgdmFsID0gaGFzQ2FsbGJhY2sgPyBjYihpdGVtLCBpKSA6IGl0ZW07XG5cbiAgICAgIGlmKGN1cnJlbnQgPT09IG51bGwgfHwgY3VycmVudCA9PT0gdW5kZWZpbmVkIHx8IHZhbCA+IG1heCl7XG4gICAgICAgIGN1cnJlbnQgPSBpdGVtO1xuICAgICAgICBtYXggPSB2YWw7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjdXJyZW50O1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsIFwibWF4QnlcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgUmVhcm1lZCA9IHtcbiAgICBpc0Z1bmN0aW9uOiByZXF1aXJlKCcuLy4uL2NvcmUvaXNGdW5jdGlvbicpXG4gIH07XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihBcnJheS5wcm90b3R5cGUubWluKXtcbiAgICB3YXJuKCdBcnJheScsICdtaW4nKTtcbiAgfVxuXG4gIEFycmF5LnByb3RvdHlwZS5taW4gPSBmdW5jdGlvbihjYil7XG4gICAgdmFyIG1pbjtcbiAgICB2YXIgaGFzQ2FsbGJhY2sgPSBSZWFybWVkLmlzRnVuY3Rpb24oY2IpO1xuICAgIGZvcih2YXIgaT0wO2k8dGhpcy5sZW5ndGg7aSsrKXtcbiAgICAgIHZhciB2YWwgPSBoYXNDYWxsYmFjayA/IGNiKHRoaXNbaV0sIGkpIDogdGhpc1tpXTtcblxuICAgICAgaWYobWluID09PSBudWxsIHx8IG1pbiA9PT0gdW5kZWZpbmVkIHx8IHZhbCA8IG1pbil7XG4gICAgICAgIG1pbiA9IHZhbDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1pbjtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCBcIm1pblwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBSZWFybWVkID0ge1xuICAgIGlzRnVuY3Rpb246IHJlcXVpcmUoJy4vLi4vY29yZS9pc0Z1bmN0aW9uJylcbiAgfTtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKEFycmF5LnByb3RvdHlwZS5taW5CeSl7XG4gICAgd2FybignQXJyYXknLCAnbWluQnknKTtcbiAgfVxuXG4gIEFycmF5LnByb3RvdHlwZS5taW5CeSA9IGZ1bmN0aW9uKGNiKXtcbiAgICB2YXIgY3VycmVudCwgbWluO1xuICAgIHZhciBoYXNDYWxsYmFjayA9IFJlYXJtZWQuaXNGdW5jdGlvbihjYik7XG4gICAgZm9yKHZhciBpPTA7aTx0aGlzLmxlbmd0aDtpKyspe1xuICAgICAgdmFyIGl0ZW0gPSB0aGlzW2ldO1xuICAgICAgdmFyIHZhbCA9IGhhc0NhbGxiYWNrID8gY2IoaXRlbSwgaSkgOiBpdGVtO1xuXG4gICAgICBpZihjdXJyZW50ID09PSBudWxsIHx8IGN1cnJlbnQgPT09IHVuZGVmaW5lZCB8fCB2YWwgPCBtaW4pe1xuICAgICAgICBjdXJyZW50ID0gaXRlbTtcbiAgICAgICAgbWluID0gdmFsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY3VycmVudDtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCBcIm1pbkJ5XCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihBcnJheS5wcm90b3R5cGUubm90RW1wdHkpe1xuICAgIHdhcm4oJ0FycmF5JywgJ25vdEVtcHR5Jyk7XG4gIH1cblxuICBBcnJheS5wcm90b3R5cGUubm90RW1wdHkgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiB0aGlzLmxlbmd0aCAhPT0gMDtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCBcIm5vdEVtcHR5XCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihBcnJheS5wcm90b3R5cGUucmVqZWN0KXtcbiAgICB3YXJuKCdBcnJheScsICdyZWplY3QnKTtcbiAgfVxuXG4gIEFycmF5LnByb3RvdHlwZS5yZWplY3QgPSBmdW5jdGlvbihjYil7XG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyKGZ1bmN0aW9uKHgsIGkpe1xuICAgICAgcmV0dXJuICFjYih4LGkpO1xuICAgIH0pO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsIFwicmVqZWN0XCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihBcnJheS5wcm90b3R5cGUuc2VsZWN0KXtcbiAgICB3YXJuKCdBcnJheScsICdzZWxlY3QnKTtcbiAgfVxuXG4gIEFycmF5LnByb3RvdHlwZS5zZWxlY3QgPSBmdW5jdGlvbihjYil7XG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyKGNiKTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCBcInNlbGVjdFwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHJlcXVpcmUoJy4vZXF1YWxzJyk7XG4gIHJlcXVpcmUoJy4vLi4vb2JqZWN0L2VxdWFscycpO1xuXG4gIHZhciBSZWFybWVkID0ge1xuICAgIGlzT2JqZWN0TGlrZTogcmVxdWlyZSgnLi8uLi9jb3JlL2lzT2JqZWN0TGlrZScpXG4gIH07XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihBcnJheS5wcm90b3R5cGUuc21hcnRFeGNsdWRlcyl7XG4gICAgd2FybignQXJyYXknLCAnc21hcnRFeGNsdWRlcycpO1xuICB9XG5cbiAgQXJyYXkucHJvdG90eXBlLnNtYXJ0RXhjbHVkZXMgPSBmdW5jdGlvbih4LCBmcm9tSW5kZXgpe1xuICAgIHZhciBmcm9tSW5kZXggPSBmcm9tSW5kZXggfHwgMDtcbiAgICB2YXIgYm9vbCA9IHRydWU7XG4gICAgZm9yKHZhciBpPWZyb21JbmRleDtpPHRoaXMubGVuZ3RoO2krKyl7XG4gICAgICB2YXIgdmFsID0gdGhpc1tpXTtcbiAgICAgIGlmKFJlYXJtZWQuaXNPYmplY3RMaWtlKHZhbCkpe1xuICAgICAgICBpZih2YWwuZXF1YWxzKHgpKXtcbiAgICAgICAgICBib29sID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1lbHNlIGlmKHZhbCA9PT0geCl7XG4gICAgICAgIGJvb2wgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBib29sO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsIFwic21hcnRFeGNsdWRlc1wiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHJlcXVpcmUoJy4vZXF1YWxzJyk7XG4gIHJlcXVpcmUoJy4vLi4vb2JqZWN0L2VxdWFscycpO1xuXG4gIHZhciBSZWFybWVkID0ge1xuICAgIGlzT2JqZWN0TGlrZTogcmVxdWlyZSgnLi8uLi9jb3JlL2lzT2JqZWN0TGlrZScpXG4gIH07XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihBcnJheS5wcm90b3R5cGUuc21hcnRJbmNsdWRlcyl7XG4gICAgd2FybignQXJyYXknLCAnc21hcnRJbmNsdWRlcycpO1xuICB9XG5cbiAgQXJyYXkucHJvdG90eXBlLnNtYXJ0SW5jbHVkZXMgPSBmdW5jdGlvbih4LCBmcm9tSW5kZXgpe1xuICAgIHZhciBmcm9tSW5kZXggPSBmcm9tSW5kZXggfHwgMDtcbiAgICB2YXIgYm9vbCA9IGZhbHNlO1xuICAgIGZvcih2YXIgaT1mcm9tSW5kZXg7aTx0aGlzLmxlbmd0aDtpKyspe1xuICAgICAgdmFyIHZhbCA9IHRoaXNbaV07XG4gICAgICBpZihSZWFybWVkLmlzT2JqZWN0TGlrZSh2YWwpKXtcbiAgICAgICAgaWYodmFsLmVxdWFscyh4KSl7XG4gICAgICAgICAgYm9vbCA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1lbHNlIGlmKHZhbCA9PT0geCl7XG4gICAgICAgIGJvb2wgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJvb2w7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSwgXCJzbWFydEluY2x1ZGVzXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIFJlYXJtZWQgPSB7XG4gICAgaXNGdW5jdGlvbjogcmVxdWlyZSgnLi8uLi9jb3JlL2lzRnVuY3Rpb24nKVxuICB9O1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoQXJyYXkucHJvdG90eXBlLnN1bSl7XG4gICAgd2FybignQXJyYXknLCAnc3VtJyk7XG4gIH1cblxuICBBcnJheS5wcm90b3R5cGUuc3VtID0gZnVuY3Rpb24oY2Ipe1xuICAgIHZhciBzdW0gPSAwO1xuICAgIHZhciBoYXNDYWxsYmFjayA9IFJlYXJtZWQuaXNGdW5jdGlvbihjYik7XG4gICAgZm9yKHZhciBpPTA7aTx0aGlzLmxlbmd0aDtpKyspe1xuICAgICAgdmFyIHZhbCA9IGhhc0NhbGxiYWNrID8gY2IodGhpc1tpXSwgaSkgOiB0aGlzW2ldO1xuXG4gICAgICBpZihpc0Zpbml0ZSh2YWwpKXtcbiAgICAgICAgc3VtICs9IE51bWJlcih2YWwpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHRocm93KFwiYFwiICsgdmFsICsgXCJgIGNhbm5vdCBiZSBjb2VyY2VkIHRvIGEgTnVtYmVyXCIpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3VtO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsIFwic3VtXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIFJlYXJtZWQgPSB7XG4gICAgaXNGdW5jdGlvbjogcmVxdWlyZSgnLi8uLi9jb3JlL2lzRnVuY3Rpb24nKVxuICB9O1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoQXJyYXkucHJvdG90eXBlLnVuaXEpe1xuICAgIHdhcm4oJ0FycmF5JywgJ3VuaXEnKTtcbiAgfVxuXG4gIEFycmF5LnByb3RvdHlwZS51bmlxID0gZnVuY3Rpb24oY2Ipe1xuICAgIHZhciB1bmlxSXRlbXMgPSBbXTtcbiAgICB2YXIgaGFzQ2FsbGJhY2sgPSBSZWFybWVkLmlzRnVuY3Rpb24oY2IpO1xuXG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyKGZ1bmN0aW9uKHgsaSl7XG4gICAgICB2YXIgdmFsID0gaGFzQ2FsbGJhY2sgPyBjYih4LGkpIDogeDtcbiAgICAgIGlmKHVuaXFJdGVtcy5zbWFydEV4Y2x1ZGVzKHZhbCkpe1xuICAgICAgICB1bmlxSXRlbXMucHVzaCh2YWwpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCBcInVuaXFcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsInZhciBSZWFybWVkID0ge1xuICBpc0Z1bmN0aW9uOiByZXF1aXJlKCcuL2NvcmUvaXNGdW5jdGlvbicpLFxuICBpc09iamVjdExpa2U6IHJlcXVpcmUoJy4vY29yZS9pc09iamVjdExpa2UnKVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFybWVkO1xuIiwiZnVuY3Rpb24gaXNGdW5jdGlvbihvYmope1xuICByZXR1cm4gISEob2JqICYmIG9iai5jb25zdHJ1Y3RvciAmJiBvYmouY2FsbCAmJiBvYmouYXBwbHkpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0Z1bmN0aW9uO1xuIiwiZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKXtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdExpa2U7XG4iLCJmdW5jdGlvbiB3YXJuKHR5cGUsIG1ldGhvZCl7XG4gIGNvbnNvbGUud2FybihcIlJlYXJtZWQtanMgT3ZlcnJpZGluZyBcIiArIHR5cGUgKyBcIiBtZXRob2Q6IFwiICsgbWV0aG9kLCAnLiBJZiB0aGlzIGlzIGEgYnVpbHQtaW4gYnJvd3NlciBtZXRob2QgcGxlYXNlIHJlcG9ydCBvbiBSZWFybWVkLWpzIGdpdGh1YiBpc3N1ZXMuJyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdhcm47XG4iLCJyZXF1aXJlKCcuL251bWJlci9jZWlsJyk7XG5yZXF1aXJlKCcuL251bWJlci9mbG9vcicpO1xucmVxdWlyZSgnLi9udW1iZXIvaXNEZWNpbWFsJyk7XG5yZXF1aXJlKCcuL251bWJlci9pc0V2ZW4nKTtcbnJlcXVpcmUoJy4vbnVtYmVyL2lzSW50ZWdlcicpO1xucmVxdWlyZSgnLi9udW1iZXIvaXNPZGQnKTtcbnJlcXVpcmUoJy4vbnVtYmVyL3JvdW5kJyk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihOdW1iZXIucHJvdG90eXBlLmNlaWwpe1xuICAgIHdhcm4oJ051bWJlcicsICdjZWlsJyk7XG4gIH1cblxuICBOdW1iZXIucHJvdG90eXBlLmNlaWwgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiBNYXRoLmNlaWwodGhpcyk7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE51bWJlci5wcm90b3R5cGUsIFwiY2VpbFwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoTnVtYmVyLnByb3RvdHlwZS5mbG9vcil7XG4gICAgd2FybignTnVtYmVyJywgJ2Zsb29yJyk7XG4gIH1cblxuICBOdW1iZXIucHJvdG90eXBlLmZsb29yID0gZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzKTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTnVtYmVyLnByb3RvdHlwZSwgXCJmbG9vclwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoTnVtYmVyLnByb3RvdHlwZS5pc0RlY2ltYWwpe1xuICAgIHdhcm4oJ051bWJlcicsICdpc0RlY2ltYWwnKTtcbiAgfVxuXG4gIE51bWJlci5wcm90b3R5cGUuaXNEZWNpbWFsID0gZnVuY3Rpb24oKXtcbiAgICBpZihOdW1iZXIuaXNJbnRlZ2VyKXtcbiAgICAgIHJldHVybiAhTnVtYmVyLmlzSW50ZWdlcih0aGlzKTtcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBpc0Zpbml0ZSh0aGlzKSAmJiBNYXRoLmZsb29yKHRoaXMpICE9PSB0aGlzO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOdW1iZXIucHJvdG90eXBlLCBcImlzRGVjaW1hbFwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoTnVtYmVyLnByb3RvdHlwZS5pc0V2ZW4pe1xuICAgIHdhcm4oJ051bWJlcicsICdpc0V2ZW4nKTtcbiAgfVxuXG4gIE51bWJlci5wcm90b3R5cGUuaXNFdmVuID0gZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gaXNGaW5pdGUodGhpcykgJiYgdGhpcyAlIDIgPT09IDA7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE51bWJlci5wcm90b3R5cGUsIFwiaXNFdmVuXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihOdW1iZXIucHJvdG90eXBlLmlzSW50ZWdlcil7XG4gICAgd2FybignTnVtYmVyJywgJ2lzSW50ZWdlcicpO1xuICB9XG5cbiAgTnVtYmVyLnByb3RvdHlwZS5pc0ludGVnZXIgPSBmdW5jdGlvbigpe1xuICAgIGlmKE51bWJlci5pc0ludGVnZXIpe1xuICAgICAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIodGhpcyk7XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gaXNGaW5pdGUodGhpcykgJiYgTWF0aC5mbG9vcih0aGlzKSA9PT0gdGhpcztcbiAgICB9XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE51bWJlci5wcm90b3R5cGUsIFwiaXNJbnRlZ2VyXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihOdW1iZXIucHJvdG90eXBlLmlzT2RkKXtcbiAgICB3YXJuKCdOdW1iZXInLCAnaXNPZGQnKTtcbiAgfVxuXG4gIE51bWJlci5wcm90b3R5cGUuaXNPZGQgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiBpc0Zpbml0ZSh0aGlzKSAmJiBNYXRoLmFicyh0aGlzICUgMikgPT09IDE7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE51bWJlci5wcm90b3R5cGUsIFwiaXNPZGRcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKE51bWJlci5wcm90b3R5cGUucm91bmQpe1xuICAgIHdhcm4oJ051bWJlcicsICdyb3VuZCcpO1xuICB9XG5cbiAgTnVtYmVyLnByb3RvdHlwZS5yb3VuZCA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIE1hdGgucm91bmQodGhpcyk7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE51bWJlci5wcm90b3R5cGUsIFwicm91bmRcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsInJlcXVpcmUoJy4vb2JqZWN0L2FsbCcpO1xucmVxdWlyZSgnLi9vYmplY3QvYW55Jyk7XG5yZXF1aXJlKCcuL29iamVjdC9jb21wYWN0Jyk7XG5yZXF1aXJlKCcuL29iamVjdC9kaWcnKTtcbnJlcXVpcmUoJy4vb2JqZWN0L2VhY2gnKTtcbnJlcXVpcmUoJy4vb2JqZWN0L2VtcHR5Jyk7XG5yZXF1aXJlKCcuL29iamVjdC9lcXVhbHMnKTtcbnJlcXVpcmUoJy4vb2JqZWN0L2V4Y2VwdCcpO1xucmVxdWlyZSgnLi9vYmplY3QvaGFzS2V5Jyk7XG5yZXF1aXJlKCcuL29iamVjdC9oYXNWYWx1ZScpO1xucmVxdWlyZSgnLi9vYmplY3Qvam9pbicpO1xucmVxdWlyZSgnLi9vYmplY3Qva2V5cycpO1xucmVxdWlyZSgnLi9vYmplY3QvbWVyZ2UnKTtcbnJlcXVpcmUoJy4vb2JqZWN0L29ubHknKTtcbnJlcXVpcmUoJy4vb2JqZWN0L3JlamVjdCcpO1xucmVxdWlyZSgnLi9vYmplY3Qvc2VsZWN0Jyk7XG5yZXF1aXJlKCcuL29iamVjdC92YWx1ZXMnKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKE9iamVjdC5wcm90b3R5cGUuYWxsKXtcbiAgICB3YXJuKCdPYmplY3QnLCAnYWxsJyk7XG4gIH1cblxuICBPYmplY3QucHJvdG90eXBlLmFsbCA9IGZ1bmN0aW9uKGNiKXtcbiAgICB2YXIgYm9vbCA9IHRydWU7XG5cbiAgICBpZighY2Ipe1xuICAgICAgY2IgPSBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IodmFyIGsgaW4gdGhpcyl7XG4gICAgICBpZighY2IoaywgdGhpc1trXSkpe1xuICAgICAgICBib29sID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYm9vbDtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JqZWN0LnByb3RvdHlwZSwgXCJhbGxcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKE9iamVjdC5wcm90b3R5cGUuYW55KXtcbiAgICB3YXJuKCdPYmplY3QnLCAnYW55Jyk7XG4gIH1cblxuICBPYmplY3QucHJvdG90eXBlLmFueSA9IGZ1bmN0aW9uKGNiKXtcbiAgICB2YXIgYm9vbCA9IGZhbHNlO1xuXG4gICAgaWYoIWNiKXtcbiAgICAgIGNiID0gZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yKHZhciBrIGluIHRoaXMpe1xuICAgICAgaWYoY2IoaywgdGhpc1trXSkpe1xuICAgICAgICBib29sID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBib29sO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPYmplY3QucHJvdG90eXBlLCBcImFueVwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoT2JqZWN0LnByb3RvdHlwZS5jb21wYWN0KXtcbiAgICB3YXJuKCdPYmplY3QnLCAnY29tcGFjdCcpO1xuICB9XG5cbiAgT2JqZWN0LnByb3RvdHlwZS5jb21wYWN0ID0gZnVuY3Rpb24oYmFkKXtcbiAgICB2YXIgYmFkO1xuICAgIGlmKGFyZ3VtZW50cy5sZW5ndGggPT09IDApe1xuICAgICAgYmFkID0gW251bGwsIHVuZGVmaW5lZF07XG4gICAgfWVsc2UgaWYoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSl7XG4gICAgICBpZihBcnJheS5pc0FycmF5KGFyZ3VtZW50c1swXSkpe1xuICAgICAgICBiYWQgPSBhcmd1bWVudHNbMF07XG4gICAgICB9ZWxzZXtcbiAgICAgICAgYmFkID0gW2FyZ3VtZW50c1swXV07XG4gICAgICB9XG4gICAgfWVsc2V7XG4gICAgICBiYWQgPSBhcmd1bWVudHM7XG4gICAgfVxuXG4gICAgdmFyIG9iaiA9IHt9O1xuXG4gICAgZm9yKHZhciBrIGluIHRoaXMpe1xuICAgICAgdmFyIHZhbCA9IHRoaXNba107XG4gICAgICB2YXIgYm9vbCA9IHRydWU7XG4gICAgICBmb3IodmFyIGk9MDtpPGJhZC5sZW5ndGg7aSsrKXtcbiAgICAgICAgaWYodmFsID09PSBiYWRbaV0pe1xuICAgICAgICAgIGJvb2wgPSBmYWxzZTsgXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKGJvb2wpe1xuICAgICAgICBvYmpba10gPSB2YWw7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9iamVjdC5wcm90b3R5cGUsIFwiY29tcGFjdFwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBSZWFybWVkID0ge1xuICAgIGlzT2JqZWN0TGlrZTogcmVxdWlyZSgnLi8uLi9jb3JlL2lzT2JqZWN0TGlrZScpXG4gIH07XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihPYmplY3QucHJvdG90eXBlLmRpZyl7XG4gICAgd2FybignT2JqZWN0JywgJ2RpZycpO1xuICB9XG5cbiAgT2JqZWN0LnByb3RvdHlwZS5kaWcgPSBmdW5jdGlvbigpe1xuICAgIHZhciBrZXlzO1xuICAgIGlmKGFyZ3VtZW50cy5sZW5ndGggPT09IDApe1xuICAgICAga2V5cyA9IFtdO1xuICAgIH1lbHNlIGlmKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpe1xuICAgICAgaWYoQXJyYXkuaXNBcnJheShhcmd1bWVudHNbMF0pKXtcbiAgICAgICAga2V5cyA9IGFyZ3VtZW50c1swXTtcbiAgICAgIH1lbHNle1xuICAgICAgICBrZXlzID0gW2FyZ3VtZW50c1swXV07XG4gICAgICB9XG4gICAgfWVsc2V7XG4gICAgICBrZXlzID0gYXJndW1lbnRzO1xuICAgIH1cblxuICAgIHZhciB2YWwgPSB0aGlzO1xuICAgIGZvcih2YXIgayBpbiBhcmd1bWVudHMpe1xuICAgICAgaWYoUmVhcm1lZC5pc09iamVjdExpa2UodmFsKSl7XG4gICAgICAgIHZhbCA9IHZhbFthcmd1bWVudHNba11dO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHZhbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWw7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9iamVjdC5wcm90b3R5cGUsIFwiZGlnXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihPYmplY3QucHJvdG90eXBlLmVhY2gpe1xuICAgIHdhcm4oJ09iamVjdCcsICdlYWNoJyk7XG4gIH1cblxuICBPYmplY3QucHJvdG90eXBlLmVhY2ggPSBmdW5jdGlvbihjYil7XG4gICAgZm9yKHZhciBrIGluIHRoaXMpe1xuICAgICAgY2IoaywgdGhpc1trXSk7XG4gICAgfVxuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPYmplY3QucHJvdG90eXBlLCBcImVhY2hcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKE9iamVjdC5wcm90b3R5cGUuZW1wdHkpe1xuICAgIHdhcm4oJ09iamVjdCcsICdlbXB0eScpO1xuICB9XG5cbiAgT2JqZWN0LnByb3RvdHlwZS5lbXB0eSA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMpLmxlbmd0aCA9PT0gMDtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JqZWN0LnByb3RvdHlwZSwgXCJlbXB0eVwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBSZWFybWVkID0ge1xuICAgIGlzT2JqZWN0TGlrZTogcmVxdWlyZSgnLi8uLi9jb3JlL2lzT2JqZWN0TGlrZScpXG4gIH07XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihPYmplY3QucHJvdG90eXBlLmVxdWFscyl7XG4gICAgd2FybignT2JqZWN0JywgJ2VxdWFscycpO1xuICB9XG5cbiAgT2JqZWN0LnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbihvYmplY3QyKXtcbiAgICBmb3IodmFyIHByb3BOYW1lIGluIHRoaXMpe1xuICAgICAgaWYodGhpcy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkgIT0gb2JqZWN0Mi5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpe1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9ZWxzZSBpZih0eXBlb2YgdGhpc1twcm9wTmFtZV0gIT0gdHlwZW9mIG9iamVjdDJbcHJvcE5hbWVdKXtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IodmFyIHByb3BOYW1lIGluIG9iamVjdDIpe1xuICAgICAgdmFyIHZhbCA9IHRoaXNbcHJvcE5hbWVdO1xuICAgICAgdmFyIG90aGVyID0gb2JqZWN0Mltwcm9wTmFtZV07XG4gICAgICBpZih0aGlzLmhhc093blByb3BlcnR5KHByb3BOYW1lKSAhPSBvYmplY3QyLmhhc093blByb3BlcnR5KHByb3BOYW1lKSl7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1lbHNlIGlmKHR5cGVvZiB2YWwgIT0gdHlwZW9mIG90aGVyKXtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZighdGhpcy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpe1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYoQXJyYXkuaXNBcnJheSh2YWwpICYmIEFycmF5LmlzQXJyYXkob3RoZXIpKXtcbiAgICAgICAgaWYoIXZhbC5lcXVhbHMob3RoZXIpKXtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1lbHNlIGlmKFJlYXJtZWQuaXNPYmplY3RMaWtlKHZhbCkgJiYgUmVhcm1lZC5pc09iamVjdExpa2Uob3RoZXIpKXtcbiAgICAgICAgaWYoIXZhbC5lcXVhbHMob3RoZXIpKXtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1lbHNlIGlmKHZhbCAhPSBvdGhlcil7XG4gICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JqZWN0LnByb3RvdHlwZSwgXCJlcXVhbHNcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKE9iamVjdC5wcm90b3R5cGUuZXhjZXB0KXtcbiAgICB3YXJuKCdPYmplY3QnLCAnZXhjZXB0Jyk7XG4gIH1cblxuICBPYmplY3QucHJvdG90eXBlLmV4Y2VwdCA9IGZ1bmN0aW9uKGtleXMpe1xuICAgIHZhciBrZXlzO1xuICAgIGlmKGFyZ3VtZW50cy5sZW5ndGggPT09IDApe1xuICAgICAga2V5cyA9IFtdO1xuICAgIH1lbHNlIGlmKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpe1xuICAgICAgaWYoQXJyYXkuaXNBcnJheShhcmd1bWVudHNbMF0pKXtcbiAgICAgICAga2V5cyA9IGFyZ3VtZW50c1swXTtcbiAgICAgIH1lbHNle1xuICAgICAgICBrZXlzID0gW2FyZ3VtZW50c1swXV07XG4gICAgICB9XG4gICAgfWVsc2V7XG4gICAgICBrZXlzID0gYXJndW1lbnRzO1xuICAgIH1cblxuICAgIHZhciBvYmogPSB7fTtcbiAgICBmb3IodmFyIGsgaW4gdGhpcyl7XG4gICAgICB2YXIgYm9vbCA9IHRydWU7XG4gICAgICBmb3IodmFyIGk9MDtpPGtleXMubGVuZ3RoO2krKyl7XG4gICAgICAgIGlmKGsgPT09IGtleXNbaV0pe1xuICAgICAgICAgIGJvb2wgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYoYm9vbCl7XG4gICAgICAgIG9ialtrXSA9IHRoaXNba107XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9iamVjdC5wcm90b3R5cGUsIFwiZXhjZXB0XCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihPYmplY3QucHJvdG90eXBlLmhhc0tleSl7XG4gICAgd2FybignT2JqZWN0JywgJ2hhc0tleScpO1xuICB9XG5cbiAgT2JqZWN0LnByb3RvdHlwZS5oYXNLZXkgPSBmdW5jdGlvbihrZXkpe1xuICAgIHZhciBib29sID0gZmFsc2U7XG4gICAgZm9yKHZhciBrIGluIHRoaXMpe1xuICAgICAgaWYoayA9PT0ga2V5KXtcbiAgICAgICAgYm9vbCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYm9vbDtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JqZWN0LnByb3RvdHlwZSwgXCJoYXNLZXlcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKE9iamVjdC5wcm90b3R5cGUuaGFzVmFsdWUpe1xuICAgIHdhcm4oJ09iamVjdCcsICdoYXNWYWx1ZScpO1xuICB9XG5cbiAgT2JqZWN0LnByb3RvdHlwZS5oYXNWYWx1ZSA9IGZ1bmN0aW9uKHZhbCl7XG4gICAgdmFyIGJvb2wgPSBmYWxzZTtcbiAgICBmb3IodmFyIGsgaW4gdGhpcyl7XG4gICAgICBpZih0aGlzW2tdID09PSB2YWwpe1xuICAgICAgICBib29sID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBib29sO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPYmplY3QucHJvdG90eXBlLCBcImhhc1ZhbHVlXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihPYmplY3QucHJvdG90eXBlLmpvaW4pe1xuICAgIHdhcm4oJ09iamVjdCcsICdqb2luJyk7XG4gIH1cblxuICBPYmplY3QucHJvdG90eXBlLmpvaW4gPSBmdW5jdGlvbihjYiwgZGVsaW0pe1xuICAgIGRlbGltID0gZGVsaW0gfHwgJywgJztcbiAgICB2YXIgc3RyID0gJyc7XG4gICAgdmFyIGZpcnN0ID0gdHJ1ZTtcblxuICAgIGZvcih2YXIgayBpbiB0aGlzKXtcbiAgICAgIGlmKGZpcnN0KXtcbiAgICAgICAgZmlyc3QgPSBmYWxzZTtcbiAgICAgIH1lbHNle1xuICAgICAgICBzdHIgKz0gZGVsaW07XG4gICAgICB9XG4gICAgICBzdHIgKz0gdGhpc1trXTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JqZWN0LnByb3RvdHlwZSwgXCJqb2luXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihPYmplY3QucHJvdG90eXBlLmtleXMpe1xuICAgIHdhcm4oJ09iamVjdCcsICdrZXlzJyk7XG4gIH1cblxuICBPYmplY3QucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbigpe1xuICAgIHZhciBhcnIgPSBbXTtcbiAgICBmb3IodmFyIGsgaW4gdGhpcyl7XG4gICAgICBhcnIucHVzaChrKTtcbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JqZWN0LnByb3RvdHlwZSwgXCJrZXlzXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihPYmplY3QucHJvdG90eXBlLm1lcmdlKXtcbiAgICB3YXJuKCdPYmplY3QnLCAnbWVyZ2UnKTtcbiAgfVxuXG4gIE9iamVjdC5wcm90b3R5cGUubWVyZ2UgPSBmdW5jdGlvbihvYmope1xuICAgIHZhciBpdGVtID0ge307XG4gICAgZm9yKHZhciBrIGluIHRoaXMpe1xuICAgICAgaXRlbVtrXSA9IHRoaXNba107XG5cbiAgICAgIGZvcih2YXIgazIgaW4gb2JqKXtcbiAgICAgICAgaXRlbVtrMl0gPSBvYmpbazJdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaXRlbTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JqZWN0LnByb3RvdHlwZSwgXCJtZXJnZVwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoT2JqZWN0LnByb3RvdHlwZS5vbmx5KXtcbiAgICB3YXJuKCdPYmplY3QnLCAnb25seScpO1xuICB9XG5cbiAgT2JqZWN0LnByb3RvdHlwZS5vbmx5ID0gZnVuY3Rpb24oa2V5cyl7XG4gICAgdmFyIGtleXM7XG4gICAgaWYoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCl7XG4gICAgICBrZXlzID0gW107XG4gICAgfWVsc2UgaWYoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSl7XG4gICAgICBpZihBcnJheS5pc0FycmF5KGFyZ3VtZW50c1swXSkpe1xuICAgICAgICBrZXlzID0gYXJndW1lbnRzWzBdO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGtleXMgPSBbYXJndW1lbnRzWzBdXTtcbiAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgIGtleXMgPSBhcmd1bWVudHM7XG4gICAgfVxuXG4gICAgdmFyIG9iaiA9IHt9O1xuICAgIGZvcih2YXIgayBpbiB0aGlzKXtcbiAgICAgIHZhciBib29sID0gZmFsc2U7XG4gICAgICBmb3IodmFyIGk9MDtpPGtleXMubGVuZ3RoO2krKyl7XG4gICAgICAgIGlmKGsgPT09IGtleXNbaV0pe1xuICAgICAgICAgIGJvb2wgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZihib29sKXtcbiAgICAgICAgb2JqW2tdID0gdGhpc1trXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JqZWN0LnByb3RvdHlwZSwgXCJvbmx5XCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihPYmplY3QucHJvdG90eXBlLnJlamVjdCl7XG4gICAgd2FybignT2JqZWN0JywgJ3JlamVjdCcpO1xuICB9XG5cbiAgT2JqZWN0LnByb3RvdHlwZS5yZWplY3QgPSBmdW5jdGlvbihjYil7XG4gICAgdmFyIG9iaiA9IHt9O1xuICAgIGZvcih2YXIgayBpbiB0aGlzKXtcbiAgICAgIHZhciB2YWwgPSB0aGlzW2tdO1xuICAgICAgaWYoIWNiKGssIHZhbCkpe1xuICAgICAgICBvYmpba10gPSB2YWw7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9iamVjdC5wcm90b3R5cGUsIFwicmVqZWN0XCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihPYmplY3QucHJvdG90eXBlLnNlbGVjdCl7XG4gICAgd2FybignT2JqZWN0JywgJ3NlbGVjdCcpO1xuICB9XG5cbiAgT2JqZWN0LnByb3RvdHlwZS5zZWxlY3QgPSBmdW5jdGlvbihjYil7XG4gICAgdmFyIG9iaiA9IHt9O1xuICAgIGZvcih2YXIgayBpbiB0aGlzKXtcbiAgICAgIHZhciB2YWwgPSB0aGlzW2tdO1xuICAgICAgaWYoY2IoaywgdmFsKSl7XG4gICAgICAgIG9ialtrXSA9IHZhbDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JqZWN0LnByb3RvdHlwZSwgXCJzZWxlY3RcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKE9iamVjdC5wcm90b3R5cGUudmFsdWVzKXtcbiAgICB3YXJuKCdPYmplY3QnLCAndmFsdWVzJyk7XG4gIH1cblxuICBPYmplY3QucHJvdG90eXBlLnZhbHVlcyA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIGFyciA9IFtdO1xuICAgIGZvcih2YXIgayBpbiB0aGlzKXtcbiAgICAgIGFyci5wdXNoKHRoaXNba10pO1xuICAgIH1cbiAgICByZXR1cm4gYXJyO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPYmplY3QucHJvdG90eXBlLCBcInZhbHVlc1wiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwicmVxdWlyZSgnLi9zdHJpbmcvY2FwaXRhbGl6ZScpO1xucmVxdWlyZSgnLi9zdHJpbmcvY2FzZUNtcCcpO1xucmVxdWlyZSgnLi9zdHJpbmcvY2hhcnMnKTtcbnJlcXVpcmUoJy4vc3RyaW5nL2Rvd25jYXNlJyk7XG5yZXF1aXJlKCcuL3N0cmluZy9lbXB0eScpO1xucmVxdWlyZSgnLi9zdHJpbmcvZW5kc1dpdGgnKTtcbnJlcXVpcmUoJy4vc3RyaW5nL2V4Y2x1ZGVzJyk7XG5yZXF1aXJlKCcuL3N0cmluZy9nc3ViJyk7XG5yZXF1aXJlKCcuL3N0cmluZy9pbmNsdWRlcycpO1xucmVxdWlyZSgnLi9zdHJpbmcvbHN0cmlwJyk7XG5yZXF1aXJlKCcuL3N0cmluZy9ub3RFbXB0eScpO1xucmVxdWlyZSgnLi9zdHJpbmcvcmV2ZXJzZScpO1xucmVxdWlyZSgnLi9zdHJpbmcvcnN0cmlwJyk7XG5yZXF1aXJlKCcuL3N0cmluZy9zdGFydHNXaXRoJyk7XG5yZXF1aXJlKCcuL3N0cmluZy9zdHJpcCcpO1xucmVxdWlyZSgnLi9zdHJpbmcvc3ViJyk7XG5yZXF1aXJlKCcuL3N0cmluZy90aXRsZWl6ZScpO1xucmVxdWlyZSgnLi9zdHJpbmcvdG9Cb29sJyk7XG5yZXF1aXJlKCcuL3N0cmluZy91cGNhc2UnKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKFN0cmluZy5wcm90b3R5cGUuY2FwaXRhbGl6ZSl7XG4gICAgd2FybignU3RyaW5nJywgJ2NhcGl0YWxpemUnKTtcbiAgfVxuXG4gIFN0cmluZy5wcm90b3R5cGUuY2FwaXRhbGl6ZSA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHRoaXMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnN1YnN0cigxKTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJjYXBpdGFsaXplXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIFxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKFN0cmluZy5wcm90b3R5cGUuY2FzZUNtcCl7XG4gICAgd2FybignU3RyaW5nJywgJ2Nhc2VDbXAnKTtcbiAgfVxuXG4gIFN0cmluZy5wcm90b3R5cGUuY2FzZUNtcCA9IGZ1bmN0aW9uKHgpe1xuICAgIHJldHVybiB0aGlzLnRvTG93ZXJDYXNlKCkgPT09IHgudG9Mb3dlckNhc2UoKTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJjYXNlQ21wXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIFxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKFN0cmluZy5wcm90b3R5cGUuY2hhcnMpe1xuICAgIHdhcm4oJ1N0cmluZycsICdjaGFycycpO1xuICB9XG5cbiAgU3RyaW5nLnByb3RvdHlwZS5jaGFycyA9IGZ1bmN0aW9uKCl7XG4gICAgaWYoQXJyYXkucHJvdG90eXBlLmZyb20pe1xuICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcyk7XG4gICAgfWVsc2V7XG4gICAgICB2YXIgYXJyYXkgPSBbXTtcblxuICAgICAgZm9yKHZhciBpPTA7aSA8IHRoaXMubGVuZ3RoO2krKyl7XG4gICAgICAgIGFycmF5LnB1c2godGhpcy5jaGFyQXQoaSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYXJyYXk7XG4gICAgfVxuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcImNoYXJzXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihTdHJpbmcucHJvdG90eXBlLmRvd25jYXNlKXtcbiAgICB3YXJuKCdTdHJpbmcnLCAnZG93bmNhc2UnKTtcbiAgfVxuXG4gIFN0cmluZy5wcm90b3R5cGUuZG93bmNhc2UgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiB0aGlzLnRvTG93ZXJDYXNlKCk7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwiZG93bmNhc2VcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBpZighU3RyaW5nLnByb3RvdHlwZS5lbXB0eSl7XG4gICAgU3RyaW5nLnByb3RvdHlwZS5lbXB0eSA9IGZ1bmN0aW9uKCl7XG4gICAgICByZXR1cm4gdGhpcy5sZW5ndGggPT09IDA7XG4gICAgfTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcImVtcHR5XCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xuICB9XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBpZighU3RyaW5nLnByb3RvdHlwZS5lbmRzV2l0aCl7XG4gICAgU3RyaW5nLnByb3RvdHlwZS5lbmRzV2l0aCA9IGZ1bmN0aW9uKHgpe1xuICAgICAgcmV0dXJuIHRoaXMuc3Vic3RyKCh0aGlzLmxlbmd0aCAtIHgubGVuZ3RoKSwgdGhpcy5sZW5ndGgpID09PSB4O1xuICAgIH07XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJlbmRzV2l0aFwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbiAgfVxufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIFxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKFN0cmluZy5wcm90b3R5cGUuZXhjbHVkZXMpe1xuICAgIHdhcm4oJ1N0cmluZycsICdleGNsdWRlcycpO1xuICB9XG5cbiAgU3RyaW5nLnByb3RvdHlwZS5leGNsdWRlcyA9IGZ1bmN0aW9uKHgpe1xuICAgIHJldHVybiB0aGlzLmluZGV4T2YoeCkgPT09IC0xO1xuICB9XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwiZXhjbHVkZXNcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKFN0cmluZy5wcm90b3R5cGUuZ3N1Yil7XG4gICAgd2FybignU3RyaW5nJywgJ2dzdWInKTtcbiAgfVxuXG4gIFN0cmluZy5wcm90b3R5cGUuZ3N1YiA9IGZ1bmN0aW9uKGEsYil7XG4gICAgcmV0dXJuIHRoaXMuc3BsaXQoYSkuam9pbihiKTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJnc3ViXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgaWYoIVN0cmluZy5wcm90b3R5cGUuaW5jbHVkZXMpe1xuICAgIFN0cmluZy5wcm90b3R5cGUuaW5jbHVkZXMgPSBmdW5jdGlvbih4KXtcbiAgICAgIHJldHVybiB0aGlzLmluZGV4T2YoeCkgIT09IC0xO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcImluY2x1ZGVzXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xuICB9XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKFN0cmluZy5wcm90b3R5cGUubHN0cmlwKXtcbiAgICB3YXJuKCdTdHJpbmcnLCAnbHN0cmlwJyk7XG4gIH1cblxuICBTdHJpbmcucHJvdG90eXBlLmxzdHJpcCA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZSgvXlxccysvZywnJyk7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwibHN0cmlwXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihTdHJpbmcucHJvdG90eXBlLm5vdEVtcHR5KXtcbiAgICB3YXJuKCdTdHJpbmcnLCAnbm90RW1wdHknKTtcbiAgfVxuXG4gIFN0cmluZy5wcm90b3R5cGUubm90RW1wdHkgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiB0aGlzLmxlbmd0aCAhPT0gMDtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJub3RFbXB0eVwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoU3RyaW5nLnByb3RvdHlwZS5yZXZlcnNlKXtcbiAgICB3YXJuKCdTdHJpbmcnLCAncmV2ZXJzZScpO1xuICB9XG5cbiAgU3RyaW5nLnByb3RvdHlwZS5yZXZlcnNlID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgYXJyYXk7XG5cbiAgICBpZihBcnJheS5wcm90b3R5cGUuZnJvbSl7XG4gICAgICBhcnJheSA9IEFycmF5LmZyb20odGhpcykucmV2ZXJzZSgpO1xuICAgIH1lbHNle1xuICAgICAgdmFyIGFycmF5ID0gW107XG5cbiAgICAgIGZvcih2YXIgaT0wO2kgPCB0aGlzLmxlbmd0aDtpKyspe1xuICAgICAgICBhcnJheS51bnNoaWZ0KHRoaXMuY2hhckF0KGkpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXJyYXkuam9pbignJyk7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicmV2ZXJzZVwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoU3RyaW5nLnByb3RvdHlwZS5yc3RyaXApe1xuICAgIHdhcm4oJ1N0cmluZycsICdyc3RyaXAnKTtcbiAgfVxuXG4gIFN0cmluZy5wcm90b3R5cGUucnN0cmlwID0gZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlKC9cXHMrJC9nLCcnKTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJyc3RyaXBcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBpZighU3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRoKXtcbiAgICBTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGggPSBmdW5jdGlvbih4KXtcbiAgICAgIHJldHVybiB0aGlzLnN1YnN0cigwLCB4Lmxlbmd0aCkgPT09IHg7XG4gICAgfTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInN0YXJ0c1dpdGhcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG4gIH1cbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoU3RyaW5nLnByb3RvdHlwZS5zdHJpcCl7XG4gICAgd2FybignU3RyaW5nJywgJ3N0cmlwJyk7XG4gIH1cblxuICBTdHJpbmcucHJvdG90eXBlLnN0cmlwID0gZnVuY3Rpb24oKXtcbiAgICBpZihTdHJpbmcucHJvdG90eXBlLnRyaW0pe1xuICAgICAgcmV0dXJuIHRoaXMudHJpbSgpO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIHRoaXMucmVwbGFjZSgvXlxccyt8XFxzKyQvZywnJyk7XG4gICAgfVxuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInN0cmlwXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgLypcbiAgaWYoU3RyaW5nLnByb3RvdHlwZS5zdWIpe1xuICAgIGNvbnNvbGUud2FybihcIlJlYXJtZWQtanMgT3ZlcnJpZGluZyBTdHJpbmcgbWV0aG9kOiBzdWIuIFRoZSBvcmlnaW5hbCBzdWIgbWV0aG9kIGlzIHVzZWxlc3MgYW5kIGhhcyBiZWVuIHJlbW92ZWQgZnJvbSB0aGUgSlMgc3RhbmRhcmQuIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL1N0cmluZy9zdWInKTtcbiAgfVxuICAqL1xuXG4gIFN0cmluZy5wcm90b3R5cGUuc3ViID0gZnVuY3Rpb24oYSxiKXtcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlKGEsIGIpO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInN1YlwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoU3RyaW5nLnByb3RvdHlwZS50aXRsZWl6ZSl7XG4gICAgd2FybignU3RyaW5nJywgJ3RpdGxlaXplJyk7XG4gIH1cblxuICBTdHJpbmcucHJvdG90eXBlLnRpdGxlaXplID0gZnVuY3Rpb24ob25seUZpcnN0TGV0dGVyKXtcbiAgICByZXR1cm4gdGhpcy5zcGxpdCgnICcpLm1hcChmdW5jdGlvbihzdHIpe1xuICAgICAgdmFyIHMgPSBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCk7XG4gICAgICBpZihvbmx5Rmlyc3RMZXR0ZXIgPT09IGZhbHNlKXtcbiAgICAgICAgcyArPSBzdHIuc3Vic3RyKDEpLnRvTG93ZXJDYXNlKCk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgcyArPSBzdHIuc3Vic3RyKDEpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHM7XG4gICAgfSkuam9pbignICcpO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInRpdGxlaXplXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihTdHJpbmcucHJvdG90eXBlLnRvQm9vbCl7XG4gICAgd2FybignU3RyaW5nJywgJ3RvQm9vbCcpO1xuICB9XG5cbiAgU3RyaW5nLnByb3RvdHlwZS50b0Jvb2wgPSBmdW5jdGlvbigpe1xuICAgIGlmKHRoaXMgPT09ICd0cnVlJyl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9ZWxzZSBpZih0aGlzID09PSAnZmFsc2UnKXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwidG9Cb29sXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihTdHJpbmcucHJvdG90eXBlLnVwY2FzZSl7XG4gICAgd2FybignU3RyaW5nJywgJ3VwY2FzZScpO1xuICB9XG5cbiAgU3RyaW5nLnByb3RvdHlwZS51cGNhc2UgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiB0aGlzLnRvVXBwZXJDYXNlKCk7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwidXBjYXNlXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iXX0=
