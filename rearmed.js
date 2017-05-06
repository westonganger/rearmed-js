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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvcmVhcm1lZC5qcyIsInNyYy9yZWFybWVkL2FycmF5LmpzIiwic3JjL3JlYXJtZWQvYXJyYXkvYWxsLmpzIiwic3JjL3JlYXJtZWQvYXJyYXkvYW55LmpzIiwic3JjL3JlYXJtZWQvYXJyYXkvY29tcGFjdC5qcyIsInNyYy9yZWFybWVkL2FycmF5L2RpZy5qcyIsInNyYy9yZWFybWVkL2FycmF5L2VhY2guanMiLCJzcmMvcmVhcm1lZC9hcnJheS9lbXB0eS5qcyIsInNyYy9yZWFybWVkL2FycmF5L2VxdWFscy5qcyIsInNyYy9yZWFybWVkL2FycmF5L2V4Y2x1ZGVzLmpzIiwic3JjL3JlYXJtZWQvYXJyYXkvZmluZC5qcyIsInNyYy9yZWFybWVkL2FycmF5L2ZpbmRJbmRleC5qcyIsInNyYy9yZWFybWVkL2FycmF5L2ZpcnN0LmpzIiwic3JjL3JlYXJtZWQvYXJyYXkvZmxhdHRlbi5qcyIsInNyYy9yZWFybWVkL2FycmF5L2dyb3VwQnkuanMiLCJzcmMvcmVhcm1lZC9hcnJheS9pbkdyb3Vwc09mLmpzIiwic3JjL3JlYXJtZWQvYXJyYXkvaW5jbHVkZXMuanMiLCJzcmMvcmVhcm1lZC9hcnJheS9sYXN0LmpzIiwic3JjL3JlYXJtZWQvYXJyYXkvbWF4LmpzIiwic3JjL3JlYXJtZWQvYXJyYXkvbWF4QnkuanMiLCJzcmMvcmVhcm1lZC9hcnJheS9taW4uanMiLCJzcmMvcmVhcm1lZC9hcnJheS9taW5CeS5qcyIsInNyYy9yZWFybWVkL2FycmF5L25vdEVtcHR5LmpzIiwic3JjL3JlYXJtZWQvYXJyYXkvcmVqZWN0LmpzIiwic3JjL3JlYXJtZWQvYXJyYXkvc2VsZWN0LmpzIiwic3JjL3JlYXJtZWQvYXJyYXkvc21hcnRFeGNsdWRlcy5qcyIsInNyYy9yZWFybWVkL2FycmF5L3NtYXJ0SW5jbHVkZXMuanMiLCJzcmMvcmVhcm1lZC9hcnJheS9zdW0uanMiLCJzcmMvcmVhcm1lZC9hcnJheS91bmlxLmpzIiwic3JjL3JlYXJtZWQvY29yZS5qcyIsInNyYy9yZWFybWVkL2NvcmUvaXNGdW5jdGlvbi5qcyIsInNyYy9yZWFybWVkL2NvcmUvaXNPYmplY3RMaWtlLmpzIiwic3JjL3JlYXJtZWQvY29yZS93YXJuLmpzIiwic3JjL3JlYXJtZWQvbnVtYmVyLmpzIiwic3JjL3JlYXJtZWQvbnVtYmVyL2NlaWwuanMiLCJzcmMvcmVhcm1lZC9udW1iZXIvZmxvb3IuanMiLCJzcmMvcmVhcm1lZC9udW1iZXIvaXNEZWNpbWFsLmpzIiwic3JjL3JlYXJtZWQvbnVtYmVyL2lzRXZlbi5qcyIsInNyYy9yZWFybWVkL251bWJlci9pc0ludGVnZXIuanMiLCJzcmMvcmVhcm1lZC9udW1iZXIvaXNPZGQuanMiLCJzcmMvcmVhcm1lZC9udW1iZXIvcm91bmQuanMiLCJzcmMvcmVhcm1lZC9vYmplY3QuanMiLCJzcmMvcmVhcm1lZC9vYmplY3QvYWxsLmpzIiwic3JjL3JlYXJtZWQvb2JqZWN0L2FueS5qcyIsInNyYy9yZWFybWVkL29iamVjdC9jb21wYWN0LmpzIiwic3JjL3JlYXJtZWQvb2JqZWN0L2RpZy5qcyIsInNyYy9yZWFybWVkL29iamVjdC9lYWNoLmpzIiwic3JjL3JlYXJtZWQvb2JqZWN0L2VtcHR5LmpzIiwic3JjL3JlYXJtZWQvb2JqZWN0L2VxdWFscy5qcyIsInNyYy9yZWFybWVkL29iamVjdC9leGNlcHQuanMiLCJzcmMvcmVhcm1lZC9vYmplY3QvaGFzS2V5LmpzIiwic3JjL3JlYXJtZWQvb2JqZWN0L2hhc1ZhbHVlLmpzIiwic3JjL3JlYXJtZWQvb2JqZWN0L2pvaW4uanMiLCJzcmMvcmVhcm1lZC9vYmplY3Qva2V5cy5qcyIsInNyYy9yZWFybWVkL29iamVjdC9tZXJnZS5qcyIsInNyYy9yZWFybWVkL29iamVjdC9vbmx5LmpzIiwic3JjL3JlYXJtZWQvb2JqZWN0L3JlamVjdC5qcyIsInNyYy9yZWFybWVkL29iamVjdC9zZWxlY3QuanMiLCJzcmMvcmVhcm1lZC9vYmplY3QvdmFsdWVzLmpzIiwic3JjL3JlYXJtZWQvc3RyaW5nLmpzIiwic3JjL3JlYXJtZWQvc3RyaW5nL2NhcGl0YWxpemUuanMiLCJzcmMvcmVhcm1lZC9zdHJpbmcvY2FzZUNtcC5qcyIsInNyYy9yZWFybWVkL3N0cmluZy9jaGFycy5qcyIsInNyYy9yZWFybWVkL3N0cmluZy9kb3duY2FzZS5qcyIsInNyYy9yZWFybWVkL3N0cmluZy9lbXB0eS5qcyIsInNyYy9yZWFybWVkL3N0cmluZy9lbmRzV2l0aC5qcyIsInNyYy9yZWFybWVkL3N0cmluZy9leGNsdWRlcy5qcyIsInNyYy9yZWFybWVkL3N0cmluZy9nc3ViLmpzIiwic3JjL3JlYXJtZWQvc3RyaW5nL2luY2x1ZGVzLmpzIiwic3JjL3JlYXJtZWQvc3RyaW5nL2xzdHJpcC5qcyIsInNyYy9yZWFybWVkL3N0cmluZy9ub3RFbXB0eS5qcyIsInNyYy9yZWFybWVkL3N0cmluZy9yZXZlcnNlLmpzIiwic3JjL3JlYXJtZWQvc3RyaW5nL3JzdHJpcC5qcyIsInNyYy9yZWFybWVkL3N0cmluZy9zdGFydHNXaXRoLmpzIiwic3JjL3JlYXJtZWQvc3RyaW5nL3N0cmlwLmpzIiwic3JjL3JlYXJtZWQvc3RyaW5nL3N1Yi5qcyIsInNyYy9yZWFybWVkL3N0cmluZy90aXRsZWl6ZS5qcyIsInNyYy9yZWFybWVkL3N0cmluZy90b0Jvb2wuanMiLCJzcmMvcmVhcm1lZC9zdHJpbmcvdXBjYXNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwicmVxdWlyZSgnLi9yZWFybWVkL2FycmF5Jyk7XG5yZXF1aXJlKCcuL3JlYXJtZWQvbnVtYmVyJyk7XG5yZXF1aXJlKCcuL3JlYXJtZWQvb2JqZWN0Jyk7XG5yZXF1aXJlKCcuL3JlYXJtZWQvc3RyaW5nJyk7XG5cbnZhciBSZWFybWVkID0gcmVxdWlyZSgnLi9yZWFybWVkL2NvcmUnKTtcbm1vZHVsZS5leHBvcnRzID0gUmVhcm1lZDtcbiIsInJlcXVpcmUoJy4vYXJyYXkvYWxsJyk7XG5yZXF1aXJlKCcuL2FycmF5L2FueScpO1xucmVxdWlyZSgnLi9hcnJheS9jb21wYWN0Jyk7XG5yZXF1aXJlKCcuL2FycmF5L2RpZycpO1xucmVxdWlyZSgnLi9hcnJheS9lYWNoJyk7XG5yZXF1aXJlKCcuL2FycmF5L2VtcHR5Jyk7XG5yZXF1aXJlKCcuL2FycmF5L2VxdWFscycpO1xucmVxdWlyZSgnLi9hcnJheS9leGNsdWRlcycpO1xucmVxdWlyZSgnLi9hcnJheS9maW5kJyk7XG5yZXF1aXJlKCcuL2FycmF5L2ZpbmRJbmRleCcpO1xucmVxdWlyZSgnLi9hcnJheS9maXJzdCcpO1xucmVxdWlyZSgnLi9hcnJheS9mbGF0dGVuJyk7XG5yZXF1aXJlKCcuL2FycmF5L2luY2x1ZGVzJyk7XG5yZXF1aXJlKCcuL2FycmF5L2luR3JvdXBzT2YnKTtcbnJlcXVpcmUoJy4vYXJyYXkvZ3JvdXBCeScpO1xucmVxdWlyZSgnLi9hcnJheS9sYXN0Jyk7XG5yZXF1aXJlKCcuL2FycmF5L21heCcpO1xucmVxdWlyZSgnLi9hcnJheS9tYXhCeScpO1xucmVxdWlyZSgnLi9hcnJheS9taW4nKTtcbnJlcXVpcmUoJy4vYXJyYXkvbWluQnknKTtcbnJlcXVpcmUoJy4vYXJyYXkvbm90RW1wdHknKTtcbnJlcXVpcmUoJy4vYXJyYXkvc21hcnRFeGNsdWRlcycpO1xucmVxdWlyZSgnLi9hcnJheS9zbWFydEluY2x1ZGVzJyk7XG5yZXF1aXJlKCcuL2FycmF5L3JlamVjdCcpO1xucmVxdWlyZSgnLi9hcnJheS9zZWxlY3QnKTtcbnJlcXVpcmUoJy4vYXJyYXkvc3VtJyk7XG5yZXF1aXJlKCcuL2FycmF5L3VuaXEnKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKEFycmF5LnByb3RvdHlwZS5hbGwpe1xuICAgIHdhcm4oJ0FycmF5JywgJ2FsbCcpO1xuICB9XG5cbiAgQXJyYXkucHJvdG90eXBlLmFsbCA9IGZ1bmN0aW9uKGNiKXtcbiAgICBpZighY2Ipe1xuICAgICAgY2IgPSBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZXZlcnkoY2IpO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsIFwiYWxsXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihBcnJheS5wcm90b3R5cGUuYW55KXtcbiAgICB3YXJuKCdBcnJheScsICdhbnknKTtcbiAgfVxuXG4gIEFycmF5LnByb3RvdHlwZS5hbnkgPSBmdW5jdGlvbihjYil7XG4gICAgaWYoIWNiKXtcbiAgICAgIGNiID0gZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc29tZShjYik7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSwgXCJhbnlcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKEFycmF5LnByb3RvdHlwZS5jb21wYWN0KXtcbiAgICB3YXJuKCdBcnJheScsICdjb21wYWN0Jyk7XG4gIH1cblxuICBBcnJheS5wcm90b3R5cGUuY29tcGFjdCA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIGJhZDtcblxuICAgIGlmKGFyZ3VtZW50cy5sZW5ndGggPT09IDApe1xuICAgICAgYmFkID0gW251bGwsIHVuZGVmaW5lZF07XG4gICAgfWVsc2UgaWYoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSl7XG4gICAgICBpZihBcnJheS5pc0FycmF5KGFyZ3VtZW50c1swXSkpe1xuICAgICAgICBiYWQgPSBhcmd1bWVudHNbMF07XG4gICAgICB9ZWxzZXtcbiAgICAgICAgYmFkID0gW2FyZ3VtZW50c1swXV07XG4gICAgICB9XG4gICAgfWVsc2V7XG4gICAgICBiYWQgPSBhcmd1bWVudHM7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coYmFkKTtcblxuICAgIHJldHVybiB0aGlzLmZpbHRlcihmdW5jdGlvbih4KXtcbiAgICAgIHZhciBib29sID0gdHJ1ZTtcbiAgICAgIGZvcih2YXIgaT0wO2k8YmFkLmxlbmd0aDtpKyspe1xuICAgICAgICBpZih4ID09PSBiYWRbaV0pe1xuICAgICAgICAgIGJvb2wgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGJvb2w7XG4gICAgfSk7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSwgXCJjb21wYWN0XCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIFJlYXJtZWQgPSB7XG4gICAgaXNPYmplY3RMaWtlOiByZXF1aXJlKCcuLy4uL2NvcmUvaXNPYmplY3RMaWtlJylcbiAgfTtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKEFycmF5LnByb3RvdHlwZS5kaWcpe1xuICAgIHdhcm4oJ0FycmF5JywgJ2RpZycpO1xuICB9XG5cbiAgQXJyYXkucHJvdG90eXBlLmRpZyA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIGtleXM7XG4gICAgaWYoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCl7XG4gICAgICBrZXlzID0gW107XG4gICAgfWVsc2UgaWYoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSl7XG4gICAgICBpZihBcnJheS5pc0FycmF5KGFyZ3VtZW50c1swXSkpe1xuICAgICAgICBrZXlzID0gYXJndW1lbnRzWzBdO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGtleXMgPSBbYXJndW1lbnRzWzBdXTtcbiAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgIGtleXMgPSBhcmd1bWVudHM7XG4gICAgfVxuXG4gICAgdmFyIHZhbCA9IHRoaXM7XG4gICAgZm9yKHZhciBpPTA7aTxhcmd1bWVudHMubGVuZ3RoO2krKyl7XG4gICAgICBpZihSZWFybWVkLmlzT2JqZWN0TGlrZSh2YWwpKXtcbiAgICAgICAgdmFsID0gdmFsW2FyZ3VtZW50c1tpXV07XG4gICAgICB9ZWxzZXtcbiAgICAgICAgdmFsID0gdW5kZWZpbmVkO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbDtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCBcImRpZ1wiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoQXJyYXkucHJvdG90eXBlLmVhY2gpe1xuICAgIHdhcm4oJ0FycmF5JywgJ2VhY2gnKTtcbiAgfVxuXG4gIEFycmF5LnByb3RvdHlwZS5lYWNoID0gZnVuY3Rpb24oY2Ipe1xuICAgIGZvcih2YXIgaT0wO2k8dGhpcy5sZW5ndGg7aSsrKXtcbiAgICAgIGNiKHRoaXNbaV0sIGkpO1xuICAgIH1cbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCBcImVhY2hcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKEFycmF5LnByb3RvdHlwZS5lbXB0eSl7XG4gICAgd2FybignQXJyYXknLCAnZW1wdHknKTtcbiAgfVxuXG4gIEFycmF5LnByb3RvdHlwZS5lbXB0eSA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHRoaXMubGVuZ3RoID09PSAwO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsIFwiZW1wdHlcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgUmVhcm1lZCA9IHtcbiAgICBpc09iamVjdExpa2U6IHJlcXVpcmUoJy4vLi4vY29yZS9pc09iamVjdExpa2UnKVxuICB9O1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoQXJyYXkucHJvdG90eXBlLmVxdWFscyl7XG4gICAgd2FybignQXJyYXknLCAnZXF1YWxzJyk7XG4gIH1cblxuICBBcnJheS5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24oYXJyYXkpe1xuICAgIGlmKCFhcnJheSl7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYodGhpcy5sZW5ndGggIT09IGFycmF5Lmxlbmd0aCl7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9yKHZhciBpPTA7aTx0aGlzLmxlbmd0aDtpKyspe1xuICAgICAgdmFyIHZhbCA9IHRoaXNbaV07XG4gICAgICB2YXIgb3RoZXIgPSBhcnJheVtpXVxuICAgICAgaWYoQXJyYXkuaXNBcnJheSh0aGlzW2ldKSAmJiBBcnJheS5pc0FycmF5KG90aGVyKSl7XG4gICAgICAgIGlmKCF2YWwuZXF1YWxzKG90aGVyKSl7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9ZWxzZSBpZihSZWFybWVkLmlzT2JqZWN0TGlrZSh2YWwpICYmIFJlYXJtZWQuaXNPYmplY3RMaWtlKG90aGVyKSl7XG4gICAgICAgIGlmKCF2YWwuZXF1YWxzKG90aGVyKSl7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9ZWxzZSBpZih2YWwgIT09IG90aGVyKXtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsIFwiZXF1YWxzXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihBcnJheS5wcm90b3R5cGUuZXhjbHVkZXMpe1xuICAgIHdhcm4oJ0FycmF5JywgJ2V4Y2x1ZGVzJyk7XG4gIH1cblxuICBBcnJheS5wcm90b3R5cGUuZXhjbHVkZXMgPSBmdW5jdGlvbih4LCBmcm9tSW5kZXgpe1xuICAgIHZhciBmcm9tSW5kZXggPSBmcm9tSW5kZXggfHwgMDtcbiAgICB2YXIgYm9vbCA9IHRydWU7XG4gICAgZm9yKHZhciBpPWZyb21JbmRleDtpPHRoaXMubGVuZ3RoO2krKyl7XG4gICAgICBpZih0aGlzW2ldID09PSB4KXtcbiAgICAgICAgYm9vbCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJvb2w7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSwgXCJleGNsdWRlc1wiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBSZWFybWVkID0ge1xuICAgIGlzRnVuY3Rpb246IHJlcXVpcmUoJy4vLi4vY29yZS9pc0Z1bmN0aW9uJylcbiAgfTtcblxuICBpZighQXJyYXkucHJvdG90eXBlLmZpbmQpe1xuICAgIEFycmF5LnByb3RvdHlwZS5maW5kID0gZnVuY3Rpb24oY2Ipe1xuICAgICAgdmFyIGl0ZW07XG4gICAgICB2YXIgaGFzQ2FsbGJhY2sgPSBSZWFybWVkLmlzRnVuY3Rpb24oY2IpO1xuICAgICAgZm9yKHZhciBpPTA7aTx0aGlzLmxlbmd0aDtpKyspe1xuICAgICAgICB2YXIgdmFsID0gdGhpc1tpXTtcbiAgICAgICAgaWYoaGFzQ2FsbGJhY2sgPyBjYih2YWwsIGkpIDogKGNiID09PSB2YWwpKXtcbiAgICAgICAgICB2YWwgPSB2YWw7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBpdGVtO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSwgXCJmaW5kXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xuICB9XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgUmVhcm1lZCA9IHtcbiAgICBpc0Z1bmN0aW9uOiByZXF1aXJlKCcuLy4uL2NvcmUvaXNGdW5jdGlvbicpXG4gIH07XG5cbiAgaWYoIUFycmF5LnByb3RvdHlwZS5maW5kSW5kZXgpe1xuICAgIEFycmF5LnByb3RvdHlwZS5maW5kSW5kZXggPSBmdW5jdGlvbihjYil7XG4gICAgICB2YXIgaW5kZXggPSAtMTtcbiAgICAgIHZhciBoYXNDYWxsYmFjayA9IFJlYXJtZWQuaXNGdW5jdGlvbihjYik7XG4gICAgICBmb3IodmFyIGk9MDtpPHRoaXMubGVuZ3RoO2krKyl7XG4gICAgICAgIGlmKGhhc0NhbGxiYWNrID8gY2IodGhpc1tpXSwgaSkgOiAoY2IgPT09IHRoaXNbaV0pKXtcbiAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9O1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSwgXCJmaW5kSW5kZXhcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG4gIH1cbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoQXJyYXkucHJvdG90eXBlLmZpcnN0KXtcbiAgICB3YXJuKCdBcnJheScsICdmaXJzdCcpO1xuICB9XG5cbiAgQXJyYXkucHJvdG90eXBlLmZpcnN0ID0gZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gdGhpc1swXTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCBcImZpcnN0XCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihBcnJheS5wcm90b3R5cGUuZmxhdHRlbil7XG4gICAgd2FybignQXJyYXknLCAnZmxhdHRlbicpO1xuICB9XG5cbiAgQXJyYXkucHJvdG90eXBlLmZsYXR0ZW4gPSBmdW5jdGlvbihyZXN1bHQpe1xuICAgIHJlc3VsdCA9IHJlc3VsdCB8fCBbXTtcbiAgICBmb3IodmFyIGk9MDtpPHRoaXMubGVuZ3RoO2krKyl7XG4gICAgICB2YXIgdmFsID0gdGhpc1tpXTtcbiAgICAgIGlmKEFycmF5LmlzQXJyYXkodmFsKSl7XG4gICAgICAgIGZvcih2YXIgaj0wO2o8dmFsLmxlbmd0aDtqKyspe1xuICAgICAgICAgIHZhciB2YWwyID0gdmFsW2pdO1xuICAgICAgICAgIGlmKEFycmF5LmlzQXJyYXkodmFsMikpe1xuICAgICAgICAgICAgdmFsMi5mbGF0dGVuKHJlc3VsdCk7XG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh2YWwyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1lbHNle1xuICAgICAgICByZXN1bHQucHVzaCh2YWwpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsIFwiZmxhdHRlblwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoQXJyYXkucHJvdG90eXBlLmdyb3VwQnkpe1xuICAgIHdhcm4oJ0FycmF5JywgJ2dyb3VwQnknKTtcbiAgfVxuXG4gIEFycmF5LnByb3RvdHlwZS5ncm91cEJ5ID0gZnVuY3Rpb24oY2Ipe1xuICAgIHZhciBoYXNoID0ge307XG4gICAgZm9yKHZhciBpPTA7aTx0aGlzLmxlbmd0aDtpKyspe1xuICAgICAgdmFyIHZhbCA9IHRoaXNbaV07XG4gICAgICB2YXIga2V5ID0gY2IodmFsLCBpKTtcbiAgICAgIGhhc2hba2V5XSA9IGhhc2hba2V5XSB8fCBbXTtcbiAgICAgIGhhc2hba2V5XS5wdXNoKHZhbCk7XG4gICAgfVxuICAgIHJldHVybiBoYXNoO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsIFwiZ3JvdXBCeVwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoQXJyYXkucHJvdG90eXBlLmluR3JvdXBzT2Ype1xuICAgIHdhcm4oJ0FycmF5JywgJ2luR3JvdXBzT2YnKTtcbiAgfVxuXG4gIEFycmF5LnByb3RvdHlwZS5pbkdyb3Vwc09mID0gZnVuY3Rpb24ocGVyLCBmaWxsV2l0aCl7XG4gICAgdmFyIGFyciA9IFtdXG4gICAgdmFyIHBlciA9IE51bWJlcihwZXIpO1xuICAgIHZhciBmaWxsV2l0aCA9IGZpbGxXaXRoIHx8IGZhbHNlO1xuICAgIHZhciBsZW5ndGggPSB0aGlzLmxlbmd0aDtcblxuICAgIGZvcih2YXIgaT0wO2k8bGVuZ3RoO2krKyl7XG4gICAgICB2YXIgY291bnQgPSAwO1xuICAgICAgdmFyIG9mZnNldDtcbiAgICAgIGlmKChpKzEpICUgcGVyID09PSAwKXtcbiAgICAgICAgY291bnQgPSBwZXI7XG4gICAgICAgIG9mZnNldCA9IHBlcjtcbiAgICAgIH1lbHNlIGlmKGkrMSA9PT0gbGVuZ3RoKXtcbiAgICAgICAgY291bnQgPSBwZXI7XG4gICAgICAgIG9mZnNldCA9IGxlbmd0aCAlIHBlcjtcbiAgICAgIH1cblxuICAgICAgaWYoY291bnQgPiAwKXtcbiAgICAgICAgdmFyIGdyb3VwID0gW107XG4gICAgICAgIGZvcih2YXIgaj0wO2o8Y291bnQ7aisrKXtcbiAgICAgICAgICB2YXIgdmFsID0gdGhpc1tpLW9mZnNldCtqKzFdO1xuICAgICAgICAgIGlmKHZhbCl7XG4gICAgICAgICAgICBncm91cC5wdXNoKHZhbCk7XG4gICAgICAgICAgfWVsc2UgaWYoZmlsbFdpdGggIT09IGZhbHNlKXtcbiAgICAgICAgICAgIGdyb3VwLnB1c2goZmlsbFdpdGgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhcnIucHVzaChncm91cClcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXJyO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsIFwiaW5Hcm91cHNPZlwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIGlmKCFBcnJheS5wcm90b3R5cGUuaW5jbHVkZXMpe1xuICAgIEFycmF5LnByb3RvdHlwZS5pbmNsdWRlcyA9IGZ1bmN0aW9uKHgsIGZyb21JbmRleCl7XG4gICAgICBmcm9tSW5kZXggPSBmcm9tSW5kZXggfHwgMDtcbiAgICAgIHZhciBib29sID0gZmFsc2U7XG4gICAgICBmb3IodmFyIGk9ZnJvbUluZGV4O2k8dGhpcy5sZW5ndGg7aSsrKXtcbiAgICAgICAgaWYodGhpc1tpXSA9PT0geCl7XG4gICAgICAgICAgYm9vbCA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBib29sO1xuICAgIH07XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCBcImluY2x1ZGVzXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xuICB9XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKEFycmF5LnByb3RvdHlwZS5sYXN0KXtcbiAgICB3YXJuKCdBcnJheScsICdsYXN0Jyk7XG4gIH1cblxuICBBcnJheS5wcm90b3R5cGUubGFzdCA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHRoaXNbdGhpcy5sZW5ndGgtMV07XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSwgXCJsYXN0XCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIFJlYXJtZWQgPSB7XG4gICAgaXNGdW5jdGlvbjogcmVxdWlyZSgnLi8uLi9jb3JlL2lzRnVuY3Rpb24nKVxuICB9O1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoQXJyYXkucHJvdG90eXBlLm1heCl7XG4gICAgd2FybignQXJyYXknLCAnbWF4Jyk7XG4gIH1cblxuICBBcnJheS5wcm90b3R5cGUubWF4ID0gZnVuY3Rpb24oY2Ipe1xuICAgIHZhciBtYXg7XG4gICAgdmFyIGhhc0NhbGxiYWNrID0gUmVhcm1lZC5pc0Z1bmN0aW9uKGNiKTtcbiAgICBmb3IodmFyIGk9MDtpPHRoaXMubGVuZ3RoO2krKyl7XG4gICAgICB2YXIgdmFsID0gaGFzQ2FsbGJhY2sgPyBjYih0aGlzW2ldLCBpKSA6IHRoaXNbaV07XG5cbiAgICAgIGlmKG1heCA9PT0gbnVsbCB8fCBtYXggPT09IHVuZGVmaW5lZCB8fCB2YWwgPiBtYXgpe1xuICAgICAgICBtYXggPSB2YWw7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtYXg7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSwgXCJtYXhcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgUmVhcm1lZCA9IHtcbiAgICBpc0Z1bmN0aW9uOiByZXF1aXJlKCcuLy4uL2NvcmUvaXNGdW5jdGlvbicpXG4gIH07XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihBcnJheS5wcm90b3R5cGUubWF4Qnkpe1xuICAgIHdhcm4oJ0FycmF5JywgJ21heEJ5Jyk7XG4gIH1cblxuICBBcnJheS5wcm90b3R5cGUubWF4QnkgPSBmdW5jdGlvbihjYil7XG4gICAgdmFyIGN1cnJlbnQsIG1heDtcbiAgICB2YXIgaGFzQ2FsbGJhY2sgPSBSZWFybWVkLmlzRnVuY3Rpb24oY2IpO1xuICAgIGZvcih2YXIgaT0wO2k8dGhpcy5sZW5ndGg7aSsrKXtcbiAgICAgIHZhciBpdGVtID0gdGhpc1tpXTtcbiAgICAgIHZhciB2YWwgPSBoYXNDYWxsYmFjayA/IGNiKGl0ZW0sIGkpIDogaXRlbTtcblxuICAgICAgaWYoY3VycmVudCA9PT0gbnVsbCB8fCBjdXJyZW50ID09PSB1bmRlZmluZWQgfHwgdmFsID4gbWF4KXtcbiAgICAgICAgY3VycmVudCA9IGl0ZW07XG4gICAgICAgIG1heCA9IHZhbDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGN1cnJlbnQ7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSwgXCJtYXhCeVwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBSZWFybWVkID0ge1xuICAgIGlzRnVuY3Rpb246IHJlcXVpcmUoJy4vLi4vY29yZS9pc0Z1bmN0aW9uJylcbiAgfTtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKEFycmF5LnByb3RvdHlwZS5taW4pe1xuICAgIHdhcm4oJ0FycmF5JywgJ21pbicpO1xuICB9XG5cbiAgQXJyYXkucHJvdG90eXBlLm1pbiA9IGZ1bmN0aW9uKGNiKXtcbiAgICB2YXIgbWluO1xuICAgIHZhciBoYXNDYWxsYmFjayA9IFJlYXJtZWQuaXNGdW5jdGlvbihjYik7XG4gICAgZm9yKHZhciBpPTA7aTx0aGlzLmxlbmd0aDtpKyspe1xuICAgICAgdmFyIHZhbCA9IGhhc0NhbGxiYWNrID8gY2IodGhpc1tpXSwgaSkgOiB0aGlzW2ldO1xuXG4gICAgICBpZihtaW4gPT09IG51bGwgfHwgbWluID09PSB1bmRlZmluZWQgfHwgdmFsIDwgbWluKXtcbiAgICAgICAgbWluID0gdmFsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWluO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsIFwibWluXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIFJlYXJtZWQgPSB7XG4gICAgaXNGdW5jdGlvbjogcmVxdWlyZSgnLi8uLi9jb3JlL2lzRnVuY3Rpb24nKVxuICB9O1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoQXJyYXkucHJvdG90eXBlLm1pbkJ5KXtcbiAgICB3YXJuKCdBcnJheScsICdtaW5CeScpO1xuICB9XG5cbiAgQXJyYXkucHJvdG90eXBlLm1pbkJ5ID0gZnVuY3Rpb24oY2Ipe1xuICAgIHZhciBjdXJyZW50LCBtaW47XG4gICAgdmFyIGhhc0NhbGxiYWNrID0gUmVhcm1lZC5pc0Z1bmN0aW9uKGNiKTtcbiAgICBmb3IodmFyIGk9MDtpPHRoaXMubGVuZ3RoO2krKyl7XG4gICAgICB2YXIgaXRlbSA9IHRoaXNbaV07XG4gICAgICB2YXIgdmFsID0gaGFzQ2FsbGJhY2sgPyBjYihpdGVtLCBpKSA6IGl0ZW07XG5cbiAgICAgIGlmKGN1cnJlbnQgPT09IG51bGwgfHwgY3VycmVudCA9PT0gdW5kZWZpbmVkIHx8IHZhbCA8IG1pbil7XG4gICAgICAgIGN1cnJlbnQgPSBpdGVtO1xuICAgICAgICBtaW4gPSB2YWw7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjdXJyZW50O1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsIFwibWluQnlcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKEFycmF5LnByb3RvdHlwZS5ub3RFbXB0eSl7XG4gICAgd2FybignQXJyYXknLCAnbm90RW1wdHknKTtcbiAgfVxuXG4gIEFycmF5LnByb3RvdHlwZS5ub3RFbXB0eSA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHRoaXMubGVuZ3RoICE9PSAwO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsIFwibm90RW1wdHlcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKEFycmF5LnByb3RvdHlwZS5yZWplY3Qpe1xuICAgIHdhcm4oJ0FycmF5JywgJ3JlamVjdCcpO1xuICB9XG5cbiAgQXJyYXkucHJvdG90eXBlLnJlamVjdCA9IGZ1bmN0aW9uKGNiKXtcbiAgICByZXR1cm4gdGhpcy5maWx0ZXIoZnVuY3Rpb24oeCwgaSl7XG4gICAgICByZXR1cm4gIWNiKHgsaSk7XG4gICAgfSk7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSwgXCJyZWplY3RcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKEFycmF5LnByb3RvdHlwZS5zZWxlY3Qpe1xuICAgIHdhcm4oJ0FycmF5JywgJ3NlbGVjdCcpO1xuICB9XG5cbiAgQXJyYXkucHJvdG90eXBlLnNlbGVjdCA9IGZ1bmN0aW9uKGNiKXtcbiAgICByZXR1cm4gdGhpcy5maWx0ZXIoY2IpO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsIFwic2VsZWN0XCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgcmVxdWlyZSgnLi9lcXVhbHMnKTtcbiAgcmVxdWlyZSgnLi8uLi9vYmplY3QvZXF1YWxzJyk7XG5cbiAgdmFyIFJlYXJtZWQgPSB7XG4gICAgaXNPYmplY3RMaWtlOiByZXF1aXJlKCcuLy4uL2NvcmUvaXNPYmplY3RMaWtlJylcbiAgfTtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKEFycmF5LnByb3RvdHlwZS5zbWFydEV4Y2x1ZGVzKXtcbiAgICB3YXJuKCdBcnJheScsICdzbWFydEV4Y2x1ZGVzJyk7XG4gIH1cblxuICBBcnJheS5wcm90b3R5cGUuc21hcnRFeGNsdWRlcyA9IGZ1bmN0aW9uKHgsIGZyb21JbmRleCl7XG4gICAgdmFyIGZyb21JbmRleCA9IGZyb21JbmRleCB8fCAwO1xuICAgIHZhciBib29sID0gdHJ1ZTtcbiAgICBmb3IodmFyIGk9ZnJvbUluZGV4O2k8dGhpcy5sZW5ndGg7aSsrKXtcbiAgICAgIHZhciB2YWwgPSB0aGlzW2ldO1xuICAgICAgaWYoUmVhcm1lZC5pc09iamVjdExpa2UodmFsKSl7XG4gICAgICAgIGlmKHZhbC5lcXVhbHMoeCkpe1xuICAgICAgICAgIGJvb2wgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfWVsc2UgaWYodmFsID09PSB4KXtcbiAgICAgICAgYm9vbCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJvb2w7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSwgXCJzbWFydEV4Y2x1ZGVzXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgcmVxdWlyZSgnLi9lcXVhbHMnKTtcbiAgcmVxdWlyZSgnLi8uLi9vYmplY3QvZXF1YWxzJyk7XG5cbiAgdmFyIFJlYXJtZWQgPSB7XG4gICAgaXNPYmplY3RMaWtlOiByZXF1aXJlKCcuLy4uL2NvcmUvaXNPYmplY3RMaWtlJylcbiAgfTtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKEFycmF5LnByb3RvdHlwZS5zbWFydEluY2x1ZGVzKXtcbiAgICB3YXJuKCdBcnJheScsICdzbWFydEluY2x1ZGVzJyk7XG4gIH1cblxuICBBcnJheS5wcm90b3R5cGUuc21hcnRJbmNsdWRlcyA9IGZ1bmN0aW9uKHgsIGZyb21JbmRleCl7XG4gICAgdmFyIGZyb21JbmRleCA9IGZyb21JbmRleCB8fCAwO1xuICAgIHZhciBib29sID0gZmFsc2U7XG4gICAgZm9yKHZhciBpPWZyb21JbmRleDtpPHRoaXMubGVuZ3RoO2krKyl7XG4gICAgICB2YXIgdmFsID0gdGhpc1tpXTtcbiAgICAgIGlmKFJlYXJtZWQuaXNPYmplY3RMaWtlKHZhbCkpe1xuICAgICAgICBpZih2YWwuZXF1YWxzKHgpKXtcbiAgICAgICAgICBib29sID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfWVsc2UgaWYodmFsID09PSB4KXtcbiAgICAgICAgYm9vbCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYm9vbDtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCBcInNtYXJ0SW5jbHVkZXNcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgUmVhcm1lZCA9IHtcbiAgICBpc0Z1bmN0aW9uOiByZXF1aXJlKCcuLy4uL2NvcmUvaXNGdW5jdGlvbicpXG4gIH07XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihBcnJheS5wcm90b3R5cGUuc3VtKXtcbiAgICB3YXJuKCdBcnJheScsICdzdW0nKTtcbiAgfVxuXG4gIEFycmF5LnByb3RvdHlwZS5zdW0gPSBmdW5jdGlvbihjYil7XG4gICAgdmFyIHN1bSA9IDA7XG4gICAgdmFyIGhhc0NhbGxiYWNrID0gUmVhcm1lZC5pc0Z1bmN0aW9uKGNiKTtcbiAgICBmb3IodmFyIGk9MDtpPHRoaXMubGVuZ3RoO2krKyl7XG4gICAgICB2YXIgdmFsID0gaGFzQ2FsbGJhY2sgPyBjYih0aGlzW2ldLCBpKSA6IHRoaXNbaV07XG5cbiAgICAgIGlmKGlzRmluaXRlKHZhbCkpe1xuICAgICAgICBzdW0gKz0gTnVtYmVyKHZhbCk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgdGhyb3coXCJgXCIgKyB2YWwgKyBcImAgY2Fubm90IGJlIGNvZXJjZWQgdG8gYSBOdW1iZXJcIik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdW07XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSwgXCJzdW1cIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgUmVhcm1lZCA9IHtcbiAgICBpc0Z1bmN0aW9uOiByZXF1aXJlKCcuLy4uL2NvcmUvaXNGdW5jdGlvbicpXG4gIH07XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihBcnJheS5wcm90b3R5cGUudW5pcSl7XG4gICAgd2FybignQXJyYXknLCAndW5pcScpO1xuICB9XG5cbiAgQXJyYXkucHJvdG90eXBlLnVuaXEgPSBmdW5jdGlvbihjYil7XG4gICAgdmFyIHVuaXFJdGVtcyA9IFtdO1xuICAgIHZhciBoYXNDYWxsYmFjayA9IFJlYXJtZWQuaXNGdW5jdGlvbihjYik7XG5cbiAgICByZXR1cm4gdGhpcy5maWx0ZXIoZnVuY3Rpb24oeCxpKXtcbiAgICAgIHZhciB2YWwgPSBoYXNDYWxsYmFjayA/IGNiKHgsaSkgOiB4O1xuICAgICAgaWYodW5pcUl0ZW1zLnNtYXJ0RXhjbHVkZXModmFsKSl7XG4gICAgICAgIHVuaXFJdGVtcy5wdXNoKHZhbCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsIFwidW5pcVwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwidmFyIFJlYXJtZWQgPSB7XG4gIGlzRnVuY3Rpb246IHJlcXVpcmUoJy4vY29yZS9pc0Z1bmN0aW9uJyksXG4gIGlzT2JqZWN0TGlrZTogcmVxdWlyZSgnLi9jb3JlL2lzT2JqZWN0TGlrZScpXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYXJtZWQ7XG4iLCJmdW5jdGlvbiBpc0Z1bmN0aW9uKG9iail7XG4gIHJldHVybiAhIShvYmogJiYgb2JqLmNvbnN0cnVjdG9yICYmIG9iai5jYWxsICYmIG9iai5hcHBseSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRnVuY3Rpb247XG4iLCJmdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpe1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcbiIsImZ1bmN0aW9uIHdhcm4odHlwZSwgbWV0aG9kKXtcbiAgY29uc29sZS53YXJuKFwiUmVhcm1lZC1qcyBPdmVycmlkaW5nIFwiICsgdHlwZSArIFwiIG1ldGhvZDogXCIgKyBtZXRob2QsICcuIElmIHRoaXMgaXMgYSBidWlsdC1pbiBicm93c2VyIG1ldGhvZCBwbGVhc2UgcmVwb3J0IG9uIFJlYXJtZWQtanMgZ2l0aHViIGlzc3Vlcy4nKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gd2FybjtcbiIsInJlcXVpcmUoJy4vbnVtYmVyL2NlaWwnKTtcbnJlcXVpcmUoJy4vbnVtYmVyL2Zsb29yJyk7XG5yZXF1aXJlKCcuL251bWJlci9pc0RlY2ltYWwnKTtcbnJlcXVpcmUoJy4vbnVtYmVyL2lzRXZlbicpO1xucmVxdWlyZSgnLi9udW1iZXIvaXNJbnRlZ2VyJyk7XG5yZXF1aXJlKCcuL251bWJlci9pc09kZCcpO1xucmVxdWlyZSgnLi9udW1iZXIvcm91bmQnKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKE51bWJlci5wcm90b3R5cGUuY2VpbCl7XG4gICAgd2FybignTnVtYmVyJywgJ2NlaWwnKTtcbiAgfVxuXG4gIE51bWJlci5wcm90b3R5cGUuY2VpbCA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIE1hdGguY2VpbCh0aGlzKTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTnVtYmVyLnByb3RvdHlwZSwgXCJjZWlsXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihOdW1iZXIucHJvdG90eXBlLmZsb29yKXtcbiAgICB3YXJuKCdOdW1iZXInLCAnZmxvb3InKTtcbiAgfVxuXG4gIE51bWJlci5wcm90b3R5cGUuZmxvb3IgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMpO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOdW1iZXIucHJvdG90eXBlLCBcImZsb29yXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihOdW1iZXIucHJvdG90eXBlLmlzRGVjaW1hbCl7XG4gICAgd2FybignTnVtYmVyJywgJ2lzRGVjaW1hbCcpO1xuICB9XG5cbiAgTnVtYmVyLnByb3RvdHlwZS5pc0RlY2ltYWwgPSBmdW5jdGlvbigpe1xuICAgIGlmKE51bWJlci5pc0ludGVnZXIpe1xuICAgICAgcmV0dXJuICFOdW1iZXIuaXNJbnRlZ2VyKHRoaXMpO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGlzRmluaXRlKHRoaXMpICYmIE1hdGguZmxvb3IodGhpcykgIT09IHRoaXM7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE51bWJlci5wcm90b3R5cGUsIFwiaXNEZWNpbWFsXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihOdW1iZXIucHJvdG90eXBlLmlzRXZlbil7XG4gICAgd2FybignTnVtYmVyJywgJ2lzRXZlbicpO1xuICB9XG5cbiAgTnVtYmVyLnByb3RvdHlwZS5pc0V2ZW4gPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiBpc0Zpbml0ZSh0aGlzKSAmJiB0aGlzICUgMiA9PT0gMDtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTnVtYmVyLnByb3RvdHlwZSwgXCJpc0V2ZW5cIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKE51bWJlci5wcm90b3R5cGUuaXNJbnRlZ2VyKXtcbiAgICB3YXJuKCdOdW1iZXInLCAnaXNJbnRlZ2VyJyk7XG4gIH1cblxuICBOdW1iZXIucHJvdG90eXBlLmlzSW50ZWdlciA9IGZ1bmN0aW9uKCl7XG4gICAgaWYoTnVtYmVyLmlzSW50ZWdlcil7XG4gICAgICByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcih0aGlzKTtcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBpc0Zpbml0ZSh0aGlzKSAmJiBNYXRoLmZsb29yKHRoaXMpID09PSB0aGlzO1xuICAgIH1cbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTnVtYmVyLnByb3RvdHlwZSwgXCJpc0ludGVnZXJcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKE51bWJlci5wcm90b3R5cGUuaXNPZGQpe1xuICAgIHdhcm4oJ051bWJlcicsICdpc09kZCcpO1xuICB9XG5cbiAgTnVtYmVyLnByb3RvdHlwZS5pc09kZCA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIGlzRmluaXRlKHRoaXMpICYmIE1hdGguYWJzKHRoaXMgJSAyKSA9PT0gMTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTnVtYmVyLnByb3RvdHlwZSwgXCJpc09kZFwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoTnVtYmVyLnByb3RvdHlwZS5yb3VuZCl7XG4gICAgd2FybignTnVtYmVyJywgJ3JvdW5kJyk7XG4gIH1cblxuICBOdW1iZXIucHJvdG90eXBlLnJvdW5kID0gZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gTWF0aC5yb3VuZCh0aGlzKTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTnVtYmVyLnByb3RvdHlwZSwgXCJyb3VuZFwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwicmVxdWlyZSgnLi9vYmplY3QvYWxsJyk7XG5yZXF1aXJlKCcuL29iamVjdC9hbnknKTtcbnJlcXVpcmUoJy4vb2JqZWN0L2NvbXBhY3QnKTtcbnJlcXVpcmUoJy4vb2JqZWN0L2RpZycpO1xucmVxdWlyZSgnLi9vYmplY3QvZWFjaCcpO1xucmVxdWlyZSgnLi9vYmplY3QvZW1wdHknKTtcbnJlcXVpcmUoJy4vb2JqZWN0L2VxdWFscycpO1xucmVxdWlyZSgnLi9vYmplY3QvZXhjZXB0Jyk7XG5yZXF1aXJlKCcuL29iamVjdC9oYXNLZXknKTtcbnJlcXVpcmUoJy4vb2JqZWN0L2hhc1ZhbHVlJyk7XG5yZXF1aXJlKCcuL29iamVjdC9qb2luJyk7XG5yZXF1aXJlKCcuL29iamVjdC9rZXlzJyk7XG5yZXF1aXJlKCcuL29iamVjdC9tZXJnZScpO1xucmVxdWlyZSgnLi9vYmplY3Qvb25seScpO1xucmVxdWlyZSgnLi9vYmplY3QvcmVqZWN0Jyk7XG5yZXF1aXJlKCcuL29iamVjdC9zZWxlY3QnKTtcbnJlcXVpcmUoJy4vb2JqZWN0L3ZhbHVlcycpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoT2JqZWN0LnByb3RvdHlwZS5hbGwpe1xuICAgIHdhcm4oJ09iamVjdCcsICdhbGwnKTtcbiAgfVxuXG4gIE9iamVjdC5wcm90b3R5cGUuYWxsID0gZnVuY3Rpb24oY2Ipe1xuICAgIHZhciBib29sID0gdHJ1ZTtcblxuICAgIGlmKCFjYil7XG4gICAgICBjYiA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvcih2YXIgayBpbiB0aGlzKXtcbiAgICAgIGlmKCFjYihrLCB0aGlzW2tdKSl7XG4gICAgICAgIGJvb2wgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBib29sO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPYmplY3QucHJvdG90eXBlLCBcImFsbFwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoT2JqZWN0LnByb3RvdHlwZS5hbnkpe1xuICAgIHdhcm4oJ09iamVjdCcsICdhbnknKTtcbiAgfVxuXG4gIE9iamVjdC5wcm90b3R5cGUuYW55ID0gZnVuY3Rpb24oY2Ipe1xuICAgIHZhciBib29sID0gZmFsc2U7XG5cbiAgICBpZighY2Ipe1xuICAgICAgY2IgPSBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IodmFyIGsgaW4gdGhpcyl7XG4gICAgICBpZihjYihrLCB0aGlzW2tdKSl7XG4gICAgICAgIGJvb2wgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJvb2w7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9iamVjdC5wcm90b3R5cGUsIFwiYW55XCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihPYmplY3QucHJvdG90eXBlLmNvbXBhY3Qpe1xuICAgIHdhcm4oJ09iamVjdCcsICdjb21wYWN0Jyk7XG4gIH1cblxuICBPYmplY3QucHJvdG90eXBlLmNvbXBhY3QgPSBmdW5jdGlvbihiYWQpe1xuICAgIHZhciBiYWQ7XG4gICAgaWYoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCl7XG4gICAgICBiYWQgPSBbbnVsbCwgdW5kZWZpbmVkXTtcbiAgICB9ZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoID09PSAxKXtcbiAgICAgIGlmKEFycmF5LmlzQXJyYXkoYXJndW1lbnRzWzBdKSl7XG4gICAgICAgIGJhZCA9IGFyZ3VtZW50c1swXTtcbiAgICAgIH1lbHNle1xuICAgICAgICBiYWQgPSBbYXJndW1lbnRzWzBdXTtcbiAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgIGJhZCA9IGFyZ3VtZW50cztcbiAgICB9XG5cbiAgICB2YXIgb2JqID0ge307XG5cbiAgICBmb3IodmFyIGsgaW4gdGhpcyl7XG4gICAgICB2YXIgdmFsID0gdGhpc1trXTtcbiAgICAgIHZhciBib29sID0gdHJ1ZTtcbiAgICAgIGZvcih2YXIgaT0wO2k8YmFkLmxlbmd0aDtpKyspe1xuICAgICAgICBpZih2YWwgPT09IGJhZFtpXSl7XG4gICAgICAgICAgYm9vbCA9IGZhbHNlOyBcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYoYm9vbCl7XG4gICAgICAgIG9ialtrXSA9IHZhbDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JqZWN0LnByb3RvdHlwZSwgXCJjb21wYWN0XCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIFJlYXJtZWQgPSB7XG4gICAgaXNPYmplY3RMaWtlOiByZXF1aXJlKCcuLy4uL2NvcmUvaXNPYmplY3RMaWtlJylcbiAgfTtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKE9iamVjdC5wcm90b3R5cGUuZGlnKXtcbiAgICB3YXJuKCdPYmplY3QnLCAnZGlnJyk7XG4gIH1cblxuICBPYmplY3QucHJvdG90eXBlLmRpZyA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIGtleXM7XG4gICAgaWYoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCl7XG4gICAgICBrZXlzID0gW107XG4gICAgfWVsc2UgaWYoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSl7XG4gICAgICBpZihBcnJheS5pc0FycmF5KGFyZ3VtZW50c1swXSkpe1xuICAgICAgICBrZXlzID0gYXJndW1lbnRzWzBdO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGtleXMgPSBbYXJndW1lbnRzWzBdXTtcbiAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgIGtleXMgPSBhcmd1bWVudHM7XG4gICAgfVxuXG4gICAgdmFyIHZhbCA9IHRoaXM7XG4gICAgZm9yKHZhciBrIGluIGFyZ3VtZW50cyl7XG4gICAgICBpZihSZWFybWVkLmlzT2JqZWN0TGlrZSh2YWwpKXtcbiAgICAgICAgdmFsID0gdmFsW2FyZ3VtZW50c1trXV07XG4gICAgICB9ZWxzZXtcbiAgICAgICAgdmFsID0gdW5kZWZpbmVkO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbDtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JqZWN0LnByb3RvdHlwZSwgXCJkaWdcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKE9iamVjdC5wcm90b3R5cGUuZWFjaCl7XG4gICAgd2FybignT2JqZWN0JywgJ2VhY2gnKTtcbiAgfVxuXG4gIE9iamVjdC5wcm90b3R5cGUuZWFjaCA9IGZ1bmN0aW9uKGNiKXtcbiAgICBmb3IodmFyIGsgaW4gdGhpcyl7XG4gICAgICBjYihrLCB0aGlzW2tdKTtcbiAgICB9XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9iamVjdC5wcm90b3R5cGUsIFwiZWFjaFwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoT2JqZWN0LnByb3RvdHlwZS5lbXB0eSl7XG4gICAgd2FybignT2JqZWN0JywgJ2VtcHR5Jyk7XG4gIH1cblxuICBPYmplY3QucHJvdG90eXBlLmVtcHR5ID0gZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcykubGVuZ3RoID09PSAwO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPYmplY3QucHJvdG90eXBlLCBcImVtcHR5XCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIFJlYXJtZWQgPSB7XG4gICAgaXNPYmplY3RMaWtlOiByZXF1aXJlKCcuLy4uL2NvcmUvaXNPYmplY3RMaWtlJylcbiAgfTtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKE9iamVjdC5wcm90b3R5cGUuZXF1YWxzKXtcbiAgICB3YXJuKCdPYmplY3QnLCAnZXF1YWxzJyk7XG4gIH1cblxuICBPYmplY3QucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uKG9iamVjdDIpe1xuICAgIGZvcih2YXIgcHJvcE5hbWUgaW4gdGhpcyl7XG4gICAgICBpZih0aGlzLmhhc093blByb3BlcnR5KHByb3BOYW1lKSAhPSBvYmplY3QyLmhhc093blByb3BlcnR5KHByb3BOYW1lKSl7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1lbHNlIGlmKHR5cGVvZiB0aGlzW3Byb3BOYW1lXSAhPSB0eXBlb2Ygb2JqZWN0Mltwcm9wTmFtZV0pe1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGZvcih2YXIgcHJvcE5hbWUgaW4gb2JqZWN0Mil7XG4gICAgICB2YXIgdmFsID0gdGhpc1twcm9wTmFtZV07XG4gICAgICB2YXIgb3RoZXIgPSBvYmplY3QyW3Byb3BOYW1lXTtcbiAgICAgIGlmKHRoaXMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpICE9IG9iamVjdDIuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKXtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfWVsc2UgaWYodHlwZW9mIHZhbCAhPSB0eXBlb2Ygb3RoZXIpe1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmKCF0aGlzLmhhc093blByb3BlcnR5KHByb3BOYW1lKSl7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZihBcnJheS5pc0FycmF5KHZhbCkgJiYgQXJyYXkuaXNBcnJheShvdGhlcikpe1xuICAgICAgICBpZighdmFsLmVxdWFscyhvdGhlcikpe1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfWVsc2UgaWYoUmVhcm1lZC5pc09iamVjdExpa2UodmFsKSAmJiBSZWFybWVkLmlzT2JqZWN0TGlrZShvdGhlcikpe1xuICAgICAgICBpZighdmFsLmVxdWFscyhvdGhlcikpe1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfWVsc2UgaWYodmFsICE9IG90aGVyKXtcbiAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPYmplY3QucHJvdG90eXBlLCBcImVxdWFsc1wiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoT2JqZWN0LnByb3RvdHlwZS5leGNlcHQpe1xuICAgIHdhcm4oJ09iamVjdCcsICdleGNlcHQnKTtcbiAgfVxuXG4gIE9iamVjdC5wcm90b3R5cGUuZXhjZXB0ID0gZnVuY3Rpb24oa2V5cyl7XG4gICAgdmFyIGtleXM7XG4gICAgaWYoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCl7XG4gICAgICBrZXlzID0gW107XG4gICAgfWVsc2UgaWYoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSl7XG4gICAgICBpZihBcnJheS5pc0FycmF5KGFyZ3VtZW50c1swXSkpe1xuICAgICAgICBrZXlzID0gYXJndW1lbnRzWzBdO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGtleXMgPSBbYXJndW1lbnRzWzBdXTtcbiAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgIGtleXMgPSBhcmd1bWVudHM7XG4gICAgfVxuXG4gICAgdmFyIG9iaiA9IHt9O1xuICAgIGZvcih2YXIgayBpbiB0aGlzKXtcbiAgICAgIHZhciBib29sID0gdHJ1ZTtcbiAgICAgIGZvcih2YXIgaT0wO2k8a2V5cy5sZW5ndGg7aSsrKXtcbiAgICAgICAgaWYoayA9PT0ga2V5c1tpXSl7XG4gICAgICAgICAgYm9vbCA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZihib29sKXtcbiAgICAgICAgb2JqW2tdID0gdGhpc1trXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JqZWN0LnByb3RvdHlwZSwgXCJleGNlcHRcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKE9iamVjdC5wcm90b3R5cGUuaGFzS2V5KXtcbiAgICB3YXJuKCdPYmplY3QnLCAnaGFzS2V5Jyk7XG4gIH1cblxuICBPYmplY3QucHJvdG90eXBlLmhhc0tleSA9IGZ1bmN0aW9uKGtleSl7XG4gICAgdmFyIGJvb2wgPSBmYWxzZTtcbiAgICBmb3IodmFyIGsgaW4gdGhpcyl7XG4gICAgICBpZihrID09PSBrZXkpe1xuICAgICAgICBib29sID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBib29sO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPYmplY3QucHJvdG90eXBlLCBcImhhc0tleVwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoT2JqZWN0LnByb3RvdHlwZS5oYXNWYWx1ZSl7XG4gICAgd2FybignT2JqZWN0JywgJ2hhc1ZhbHVlJyk7XG4gIH1cblxuICBPYmplY3QucHJvdG90eXBlLmhhc1ZhbHVlID0gZnVuY3Rpb24odmFsKXtcbiAgICB2YXIgYm9vbCA9IGZhbHNlO1xuICAgIGZvcih2YXIgayBpbiB0aGlzKXtcbiAgICAgIGlmKHRoaXNba10gPT09IHZhbCl7XG4gICAgICAgIGJvb2wgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJvb2w7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9iamVjdC5wcm90b3R5cGUsIFwiaGFzVmFsdWVcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKE9iamVjdC5wcm90b3R5cGUuam9pbil7XG4gICAgd2FybignT2JqZWN0JywgJ2pvaW4nKTtcbiAgfVxuXG4gIE9iamVjdC5wcm90b3R5cGUuam9pbiA9IGZ1bmN0aW9uKGNiLCBkZWxpbSl7XG4gICAgZGVsaW0gPSBkZWxpbSB8fCAnLCAnO1xuICAgIHZhciBzdHIgPSAnJztcbiAgICB2YXIgZmlyc3QgPSB0cnVlO1xuXG4gICAgZm9yKHZhciBrIGluIHRoaXMpe1xuICAgICAgaWYoZmlyc3Qpe1xuICAgICAgICBmaXJzdCA9IGZhbHNlO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHN0ciArPSBkZWxpbTtcbiAgICAgIH1cbiAgICAgIHN0ciArPSB0aGlzW2tdO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPYmplY3QucHJvdG90eXBlLCBcImpvaW5cIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKE9iamVjdC5wcm90b3R5cGUua2V5cyl7XG4gICAgd2FybignT2JqZWN0JywgJ2tleXMnKTtcbiAgfVxuXG4gIE9iamVjdC5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIGFyciA9IFtdO1xuICAgIGZvcih2YXIgayBpbiB0aGlzKXtcbiAgICAgIGFyci5wdXNoKGspO1xuICAgIH1cbiAgICByZXR1cm4gYXJyO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPYmplY3QucHJvdG90eXBlLCBcImtleXNcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKE9iamVjdC5wcm90b3R5cGUubWVyZ2Upe1xuICAgIHdhcm4oJ09iamVjdCcsICdtZXJnZScpO1xuICB9XG5cbiAgT2JqZWN0LnByb3RvdHlwZS5tZXJnZSA9IGZ1bmN0aW9uKG9iail7XG4gICAgdmFyIGl0ZW0gPSB7fTtcbiAgICBmb3IodmFyIGsgaW4gdGhpcyl7XG4gICAgICBpdGVtW2tdID0gdGhpc1trXTtcblxuICAgICAgZm9yKHZhciBrMiBpbiBvYmope1xuICAgICAgICBpdGVtW2syXSA9IG9ialtrMl07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpdGVtO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPYmplY3QucHJvdG90eXBlLCBcIm1lcmdlXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihPYmplY3QucHJvdG90eXBlLm9ubHkpe1xuICAgIHdhcm4oJ09iamVjdCcsICdvbmx5Jyk7XG4gIH1cblxuICBPYmplY3QucHJvdG90eXBlLm9ubHkgPSBmdW5jdGlvbihrZXlzKXtcbiAgICB2YXIga2V5cztcbiAgICBpZihhcmd1bWVudHMubGVuZ3RoID09PSAwKXtcbiAgICAgIGtleXMgPSBbXTtcbiAgICB9ZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoID09PSAxKXtcbiAgICAgIGlmKEFycmF5LmlzQXJyYXkoYXJndW1lbnRzWzBdKSl7XG4gICAgICAgIGtleXMgPSBhcmd1bWVudHNbMF07XG4gICAgICB9ZWxzZXtcbiAgICAgICAga2V5cyA9IFthcmd1bWVudHNbMF1dO1xuICAgICAgfVxuICAgIH1lbHNle1xuICAgICAga2V5cyA9IGFyZ3VtZW50cztcbiAgICB9XG5cbiAgICB2YXIgb2JqID0ge307XG4gICAgZm9yKHZhciBrIGluIHRoaXMpe1xuICAgICAgdmFyIGJvb2wgPSBmYWxzZTtcbiAgICAgIGZvcih2YXIgaT0wO2k8a2V5cy5sZW5ndGg7aSsrKXtcbiAgICAgICAgaWYoayA9PT0ga2V5c1tpXSl7XG4gICAgICAgICAgYm9vbCA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKGJvb2wpe1xuICAgICAgICBvYmpba10gPSB0aGlzW2tdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPYmplY3QucHJvdG90eXBlLCBcIm9ubHlcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKE9iamVjdC5wcm90b3R5cGUucmVqZWN0KXtcbiAgICB3YXJuKCdPYmplY3QnLCAncmVqZWN0Jyk7XG4gIH1cblxuICBPYmplY3QucHJvdG90eXBlLnJlamVjdCA9IGZ1bmN0aW9uKGNiKXtcbiAgICB2YXIgb2JqID0ge307XG4gICAgZm9yKHZhciBrIGluIHRoaXMpe1xuICAgICAgdmFyIHZhbCA9IHRoaXNba107XG4gICAgICBpZighY2IoaywgdmFsKSl7XG4gICAgICAgIG9ialtrXSA9IHZhbDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JqZWN0LnByb3RvdHlwZSwgXCJyZWplY3RcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKE9iamVjdC5wcm90b3R5cGUuc2VsZWN0KXtcbiAgICB3YXJuKCdPYmplY3QnLCAnc2VsZWN0Jyk7XG4gIH1cblxuICBPYmplY3QucHJvdG90eXBlLnNlbGVjdCA9IGZ1bmN0aW9uKGNiKXtcbiAgICB2YXIgb2JqID0ge307XG4gICAgZm9yKHZhciBrIGluIHRoaXMpe1xuICAgICAgdmFyIHZhbCA9IHRoaXNba107XG4gICAgICBpZihjYihrLCB2YWwpKXtcbiAgICAgICAgb2JqW2tdID0gdmFsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPYmplY3QucHJvdG90eXBlLCBcInNlbGVjdFwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoT2JqZWN0LnByb3RvdHlwZS52YWx1ZXMpe1xuICAgIHdhcm4oJ09iamVjdCcsICd2YWx1ZXMnKTtcbiAgfVxuXG4gIE9iamVjdC5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgYXJyID0gW107XG4gICAgZm9yKHZhciBrIGluIHRoaXMpe1xuICAgICAgYXJyLnB1c2godGhpc1trXSk7XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9iamVjdC5wcm90b3R5cGUsIFwidmFsdWVzXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCJyZXF1aXJlKCcuL3N0cmluZy9jYXBpdGFsaXplJyk7XG5yZXF1aXJlKCcuL3N0cmluZy9jYXNlQ21wJyk7XG5yZXF1aXJlKCcuL3N0cmluZy9jaGFycycpO1xucmVxdWlyZSgnLi9zdHJpbmcvZG93bmNhc2UnKTtcbnJlcXVpcmUoJy4vc3RyaW5nL2VtcHR5Jyk7XG5yZXF1aXJlKCcuL3N0cmluZy9lbmRzV2l0aCcpO1xucmVxdWlyZSgnLi9zdHJpbmcvZXhjbHVkZXMnKTtcbnJlcXVpcmUoJy4vc3RyaW5nL2dzdWInKTtcbnJlcXVpcmUoJy4vc3RyaW5nL2luY2x1ZGVzJyk7XG5yZXF1aXJlKCcuL3N0cmluZy9sc3RyaXAnKTtcbnJlcXVpcmUoJy4vc3RyaW5nL25vdEVtcHR5Jyk7XG5yZXF1aXJlKCcuL3N0cmluZy9yZXZlcnNlJyk7XG5yZXF1aXJlKCcuL3N0cmluZy9yc3RyaXAnKTtcbnJlcXVpcmUoJy4vc3RyaW5nL3N0YXJ0c1dpdGgnKTtcbnJlcXVpcmUoJy4vc3RyaW5nL3N0cmlwJyk7XG5yZXF1aXJlKCcuL3N0cmluZy9zdWInKTtcbnJlcXVpcmUoJy4vc3RyaW5nL3RpdGxlaXplJyk7XG5yZXF1aXJlKCcuL3N0cmluZy90b0Jvb2wnKTtcbnJlcXVpcmUoJy4vc3RyaW5nL3VwY2FzZScpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoU3RyaW5nLnByb3RvdHlwZS5jYXBpdGFsaXplKXtcbiAgICB3YXJuKCdTdHJpbmcnLCAnY2FwaXRhbGl6ZScpO1xuICB9XG5cbiAgU3RyaW5nLnByb3RvdHlwZS5jYXBpdGFsaXplID0gZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gdGhpcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRoaXMuc3Vic3RyKDEpO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcImNhcGl0YWxpemVcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcbiAgXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoU3RyaW5nLnByb3RvdHlwZS5jYXNlQ21wKXtcbiAgICB3YXJuKCdTdHJpbmcnLCAnY2FzZUNtcCcpO1xuICB9XG5cbiAgU3RyaW5nLnByb3RvdHlwZS5jYXNlQ21wID0gZnVuY3Rpb24oeCl7XG4gICAgcmV0dXJuIHRoaXMudG9Mb3dlckNhc2UoKSA9PT0geC50b0xvd2VyQ2FzZSgpO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcImNhc2VDbXBcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcbiAgXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoU3RyaW5nLnByb3RvdHlwZS5jaGFycyl7XG4gICAgd2FybignU3RyaW5nJywgJ2NoYXJzJyk7XG4gIH1cblxuICBTdHJpbmcucHJvdG90eXBlLmNoYXJzID0gZnVuY3Rpb24oKXtcbiAgICBpZihBcnJheS5wcm90b3R5cGUuZnJvbSl7XG4gICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzKTtcbiAgICB9ZWxzZXtcbiAgICAgIHZhciBhcnJheSA9IFtdO1xuXG4gICAgICBmb3IodmFyIGk9MDtpIDwgdGhpcy5sZW5ndGg7aSsrKXtcbiAgICAgICAgYXJyYXkucHVzaCh0aGlzLmNoYXJBdChpKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhcnJheTtcbiAgICB9XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwiY2hhcnNcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKFN0cmluZy5wcm90b3R5cGUuZG93bmNhc2Upe1xuICAgIHdhcm4oJ1N0cmluZycsICdkb3duY2FzZScpO1xuICB9XG5cbiAgU3RyaW5nLnByb3RvdHlwZS5kb3duY2FzZSA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHRoaXMudG9Mb3dlckNhc2UoKTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJkb3duY2FzZVwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIGlmKCFTdHJpbmcucHJvdG90eXBlLmVtcHR5KXtcbiAgICBTdHJpbmcucHJvdG90eXBlLmVtcHR5ID0gZnVuY3Rpb24oKXtcbiAgICAgIHJldHVybiB0aGlzLmxlbmd0aCA9PT0gMDtcbiAgICB9O1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwiZW1wdHlcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG4gIH1cbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIGlmKCFTdHJpbmcucHJvdG90eXBlLmVuZHNXaXRoKXtcbiAgICBTdHJpbmcucHJvdG90eXBlLmVuZHNXaXRoID0gZnVuY3Rpb24oeCl7XG4gICAgICByZXR1cm4gdGhpcy5zdWJzdHIoKHRoaXMubGVuZ3RoIC0geC5sZW5ndGgpLCB0aGlzLmxlbmd0aCkgPT09IHg7XG4gICAgfTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcImVuZHNXaXRoXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xuICB9XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcbiAgXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoU3RyaW5nLnByb3RvdHlwZS5leGNsdWRlcyl7XG4gICAgd2FybignU3RyaW5nJywgJ2V4Y2x1ZGVzJyk7XG4gIH1cblxuICBTdHJpbmcucHJvdG90eXBlLmV4Y2x1ZGVzID0gZnVuY3Rpb24oeCl7XG4gICAgcmV0dXJuIHRoaXMuaW5kZXhPZih4KSA9PT0gLTE7XG4gIH1cblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJleGNsdWRlc1wiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoU3RyaW5nLnByb3RvdHlwZS5nc3ViKXtcbiAgICB3YXJuKCdTdHJpbmcnLCAnZ3N1YicpO1xuICB9XG5cbiAgU3RyaW5nLnByb3RvdHlwZS5nc3ViID0gZnVuY3Rpb24oYSxiKXtcbiAgICByZXR1cm4gdGhpcy5zcGxpdChhKS5qb2luKGIpO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcImdzdWJcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBpZighU3RyaW5nLnByb3RvdHlwZS5pbmNsdWRlcyl7XG4gICAgU3RyaW5nLnByb3RvdHlwZS5pbmNsdWRlcyA9IGZ1bmN0aW9uKHgpe1xuICAgICAgcmV0dXJuIHRoaXMuaW5kZXhPZih4KSAhPT0gLTE7XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwiaW5jbHVkZXNcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG4gIH1cbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoU3RyaW5nLnByb3RvdHlwZS5sc3RyaXApe1xuICAgIHdhcm4oJ1N0cmluZycsICdsc3RyaXAnKTtcbiAgfVxuXG4gIFN0cmluZy5wcm90b3R5cGUubHN0cmlwID0gZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlKC9eXFxzKy9nLCcnKTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJsc3RyaXBcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKFN0cmluZy5wcm90b3R5cGUubm90RW1wdHkpe1xuICAgIHdhcm4oJ1N0cmluZycsICdub3RFbXB0eScpO1xuICB9XG5cbiAgU3RyaW5nLnByb3RvdHlwZS5ub3RFbXB0eSA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHRoaXMubGVuZ3RoICE9PSAwO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcIm5vdEVtcHR5XCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihTdHJpbmcucHJvdG90eXBlLnJldmVyc2Upe1xuICAgIHdhcm4oJ1N0cmluZycsICdyZXZlcnNlJyk7XG4gIH1cblxuICBTdHJpbmcucHJvdG90eXBlLnJldmVyc2UgPSBmdW5jdGlvbigpe1xuICAgIHZhciBhcnJheTtcblxuICAgIGlmKEFycmF5LnByb3RvdHlwZS5mcm9tKXtcbiAgICAgIGFycmF5ID0gQXJyYXkuZnJvbSh0aGlzKS5yZXZlcnNlKCk7XG4gICAgfWVsc2V7XG4gICAgICB2YXIgYXJyYXkgPSBbXTtcblxuICAgICAgZm9yKHZhciBpPTA7aSA8IHRoaXMubGVuZ3RoO2krKyl7XG4gICAgICAgIGFycmF5LnVuc2hpZnQodGhpcy5jaGFyQXQoaSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhcnJheS5qb2luKCcnKTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJyZXZlcnNlXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihTdHJpbmcucHJvdG90eXBlLnJzdHJpcCl7XG4gICAgd2FybignU3RyaW5nJywgJ3JzdHJpcCcpO1xuICB9XG5cbiAgU3RyaW5nLnByb3RvdHlwZS5yc3RyaXAgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiB0aGlzLnJlcGxhY2UoL1xccyskL2csJycpO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInJzdHJpcFwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIGlmKCFTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGgpe1xuICAgIFN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aCA9IGZ1bmN0aW9uKHgpe1xuICAgICAgcmV0dXJuIHRoaXMuc3Vic3RyKDAsIHgubGVuZ3RoKSA9PT0geDtcbiAgICB9O1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwic3RhcnRzV2l0aFwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbiAgfVxufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihTdHJpbmcucHJvdG90eXBlLnN0cmlwKXtcbiAgICB3YXJuKCdTdHJpbmcnLCAnc3RyaXAnKTtcbiAgfVxuXG4gIFN0cmluZy5wcm90b3R5cGUuc3RyaXAgPSBmdW5jdGlvbigpe1xuICAgIGlmKFN0cmluZy5wcm90b3R5cGUudHJpbSl7XG4gICAgICByZXR1cm4gdGhpcy50cmltKCk7XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gdGhpcy5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCcnKTtcbiAgICB9XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwic3RyaXBcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICAvKlxuICBpZihTdHJpbmcucHJvdG90eXBlLnN1Yil7XG4gICAgY29uc29sZS53YXJuKFwiUmVhcm1lZC1qcyBPdmVycmlkaW5nIFN0cmluZyBtZXRob2Q6IHN1Yi4gVGhlIG9yaWdpbmFsIHN1YiBtZXRob2QgaXMgdXNlbGVzcyBhbmQgaGFzIGJlZW4gcmVtb3ZlZCBmcm9tIHRoZSBKUyBzdGFuZGFyZC4gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvU3RyaW5nL3N1YicpO1xuICB9XG4gICovXG5cbiAgU3RyaW5nLnByb3RvdHlwZS5zdWIgPSBmdW5jdGlvbihhLGIpe1xuICAgIHJldHVybiB0aGlzLnJlcGxhY2UoYSwgYik7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwic3ViXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihTdHJpbmcucHJvdG90eXBlLnRpdGxlaXplKXtcbiAgICB3YXJuKCdTdHJpbmcnLCAndGl0bGVpemUnKTtcbiAgfVxuXG4gIFN0cmluZy5wcm90b3R5cGUudGl0bGVpemUgPSBmdW5jdGlvbihvbmx5Rmlyc3RMZXR0ZXIpe1xuICAgIHJldHVybiB0aGlzLnNwbGl0KCcgJykubWFwKGZ1bmN0aW9uKHN0cil7XG4gICAgICB2YXIgcyA9IHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKTtcbiAgICAgIGlmKG9ubHlGaXJzdExldHRlciA9PT0gZmFsc2Upe1xuICAgICAgICBzICs9IHN0ci5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKTtcbiAgICAgIH1lbHNle1xuICAgICAgICBzICs9IHN0ci5zdWJzdHIoMSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcztcbiAgICB9KS5qb2luKCcgJyk7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwidGl0bGVpemVcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKFN0cmluZy5wcm90b3R5cGUudG9Cb29sKXtcbiAgICB3YXJuKCdTdHJpbmcnLCAndG9Cb29sJyk7XG4gIH1cblxuICBTdHJpbmcucHJvdG90eXBlLnRvQm9vbCA9IGZ1bmN0aW9uKCl7XG4gICAgaWYodGhpcyA9PT0gJ3RydWUnKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1lbHNlIGlmKHRoaXMgPT09ICdmYWxzZScpe1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJ0b0Jvb2xcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKFN0cmluZy5wcm90b3R5cGUudXBjYXNlKXtcbiAgICB3YXJuKCdTdHJpbmcnLCAndXBjYXNlJyk7XG4gIH1cblxuICBTdHJpbmcucHJvdG90eXBlLnVwY2FzZSA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHRoaXMudG9VcHBlckNhc2UoKTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJ1cGNhc2VcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiJdfQ==
