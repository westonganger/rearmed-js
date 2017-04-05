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
    warn(Array, 'all');
  }

  Array.prototype.all = function(cb){
    return this.every(cb);
  };

  Object.defineProperty(Array.prototype, "all", {enumerable: false});
}(this));

},{"./../core/warn":33}],4:[function(require,module,exports){
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

},{"./../core/warn":33}],5:[function(require,module,exports){
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

},{"./../core/warn":33}],6:[function(require,module,exports){
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

},{"./../core/isObjectLike":32,"./../core/warn":33}],7:[function(require,module,exports){
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

},{"./../core/warn":33}],8:[function(require,module,exports){
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

},{"./../core/warn":33}],9:[function(require,module,exports){
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

},{"./../core/isObjectLike":32,"./../core/warn":33}],10:[function(require,module,exports){
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
    warn(Array, 'first');
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

},{"./../core/warn":33}],15:[function(require,module,exports){
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

},{"./../core/warn":33}],16:[function(require,module,exports){
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
    warn(Array, 'last');
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

},{"./../core/isFunction":31,"./../core/warn":33}],20:[function(require,module,exports){
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

},{"./../core/isFunction":31,"./../core/warn":33}],21:[function(require,module,exports){
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

},{"./../core/isFunction":31,"./../core/warn":33}],22:[function(require,module,exports){
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

},{"./../core/isFunction":31,"./../core/warn":33}],23:[function(require,module,exports){
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

},{"./../core/warn":33}],24:[function(require,module,exports){
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

},{"./../core/warn":33}],25:[function(require,module,exports){
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

},{"./../core/isObjectLike":32,"./../core/warn":33,"./../object/equals":49,"./equals":9}],28:[function(require,module,exports){
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

},{"./../core/isFunction":31,"./../core/warn":33}],29:[function(require,module,exports){
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
    warn(Number, 'ceil');
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
    warn(Number, 'floor');
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
    warn(Number, 'isDecimal');
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
    warn(Number, 'isEven');
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
    warn(Number, 'isInteger');
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
    warn(Number, 'isOdd');
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
    warn(Number, 'round');
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

},{"./../core/warn":33}],44:[function(require,module,exports){
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

},{"./../core/warn":33}],45:[function(require,module,exports){
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

},{"./../core/warn":33}],46:[function(require,module,exports){
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

},{"./../core/isObjectLike":32,"./../core/warn":33}],47:[function(require,module,exports){
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

},{"./../core/warn":33}],48:[function(require,module,exports){
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

},{"./../core/warn":33}],49:[function(require,module,exports){
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

},{"./../core/isObjectLike":32,"./../core/warn":33}],50:[function(require,module,exports){
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

},{"./../core/warn":33}],51:[function(require,module,exports){
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

},{"./../core/warn":33}],52:[function(require,module,exports){
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

},{"./../core/warn":33}],53:[function(require,module,exports){
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

},{"./../core/warn":33}],54:[function(require,module,exports){
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

},{"./../core/warn":33}],55:[function(require,module,exports){
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

},{"./../core/warn":33}],56:[function(require,module,exports){
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

},{"./../core/warn":33}],57:[function(require,module,exports){
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

},{"./../core/warn":33}],58:[function(require,module,exports){
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

},{"./../core/warn":33}],59:[function(require,module,exports){
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
    warn(String, 'capitalize');
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
    warn(String, 'caseCmp');
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
    warn(String, 'chars');
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
    warn(String, 'downcase');
  }

  String.prototype.downcase = function(){
    return this.toLowerCase();
  };

  Object.defineProperty(String.prototype, "downcase", {enumerable: false});
}(this));

},{"./../core/warn":33}],65:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(String.prototype.empty){
    warn(String, 'empty');
  }

  String.prototype.empty = function(){
    return this.length === 0;
  };

  Object.defineProperty(String.prototype, "empty", {enumerable: false});
}(this));

},{"./../core/warn":33}],66:[function(require,module,exports){
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
    warn(String, 'excludes');
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
    warn(String, 'gsub');
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
    warn(String, 'lstrip');
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
    warn(String, 'notEmpty');
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
    warn(String, 'reverse');
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
    warn(String, 'rstrip');
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
    warn(String, 'strip');
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

  var warn = require('./../core/warn');
  if(String.prototype.sub){
    warn(String, 'sub');
  }

  String.prototype.sub = function(a,b){
    return this.replace(a, b);
  };

  Object.defineProperty(String.prototype, "sub", {enumerable: false});
}(this));

},{"./../core/warn":33}],77:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(String.prototype.titleize){
    warn(String, 'titleize');
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
    warn(String, 'toBool');
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
    warn(String, 'upcase');
  }

  String.prototype.upcase = function(){
    return this.toUpperCase();
  };

  Object.defineProperty(String.prototype, "upcase", {enumerable: false});
}(this));

},{"./../core/warn":33}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvcmVhcm1lZC5qcyIsInNyYy9yZWFybWVkL2FycmF5LmpzIiwic3JjL3JlYXJtZWQvYXJyYXkvYWxsLmpzIiwic3JjL3JlYXJtZWQvYXJyYXkvYW55LmpzIiwic3JjL3JlYXJtZWQvYXJyYXkvY29tcGFjdC5qcyIsInNyYy9yZWFybWVkL2FycmF5L2RpZy5qcyIsInNyYy9yZWFybWVkL2FycmF5L2VhY2guanMiLCJzcmMvcmVhcm1lZC9hcnJheS9lbXB0eS5qcyIsInNyYy9yZWFybWVkL2FycmF5L2VxdWFscy5qcyIsInNyYy9yZWFybWVkL2FycmF5L2V4Y2x1ZGVzLmpzIiwic3JjL3JlYXJtZWQvYXJyYXkvZmluZC5qcyIsInNyYy9yZWFybWVkL2FycmF5L2ZpbmRJbmRleC5qcyIsInNyYy9yZWFybWVkL2FycmF5L2ZpcnN0LmpzIiwic3JjL3JlYXJtZWQvYXJyYXkvZmxhdHRlbi5qcyIsInNyYy9yZWFybWVkL2FycmF5L2dyb3VwQnkuanMiLCJzcmMvcmVhcm1lZC9hcnJheS9pbkdyb3Vwc09mLmpzIiwic3JjL3JlYXJtZWQvYXJyYXkvaW5jbHVkZXMuanMiLCJzcmMvcmVhcm1lZC9hcnJheS9sYXN0LmpzIiwic3JjL3JlYXJtZWQvYXJyYXkvbWF4LmpzIiwic3JjL3JlYXJtZWQvYXJyYXkvbWF4QnkuanMiLCJzcmMvcmVhcm1lZC9hcnJheS9taW4uanMiLCJzcmMvcmVhcm1lZC9hcnJheS9taW5CeS5qcyIsInNyYy9yZWFybWVkL2FycmF5L25vdEVtcHR5LmpzIiwic3JjL3JlYXJtZWQvYXJyYXkvcmVqZWN0LmpzIiwic3JjL3JlYXJtZWQvYXJyYXkvc2VsZWN0LmpzIiwic3JjL3JlYXJtZWQvYXJyYXkvc21hcnRFeGNsdWRlcy5qcyIsInNyYy9yZWFybWVkL2FycmF5L3NtYXJ0SW5jbHVkZXMuanMiLCJzcmMvcmVhcm1lZC9hcnJheS9zdW0uanMiLCJzcmMvcmVhcm1lZC9hcnJheS91bmlxLmpzIiwic3JjL3JlYXJtZWQvY29yZS5qcyIsInNyYy9yZWFybWVkL2NvcmUvaXNGdW5jdGlvbi5qcyIsInNyYy9yZWFybWVkL2NvcmUvaXNPYmplY3RMaWtlLmpzIiwic3JjL3JlYXJtZWQvY29yZS93YXJuLmpzIiwic3JjL3JlYXJtZWQvbnVtYmVyLmpzIiwic3JjL3JlYXJtZWQvbnVtYmVyL2NlaWwuanMiLCJzcmMvcmVhcm1lZC9udW1iZXIvZmxvb3IuanMiLCJzcmMvcmVhcm1lZC9udW1iZXIvaXNEZWNpbWFsLmpzIiwic3JjL3JlYXJtZWQvbnVtYmVyL2lzRXZlbi5qcyIsInNyYy9yZWFybWVkL251bWJlci9pc0ludGVnZXIuanMiLCJzcmMvcmVhcm1lZC9udW1iZXIvaXNPZGQuanMiLCJzcmMvcmVhcm1lZC9udW1iZXIvcm91bmQuanMiLCJzcmMvcmVhcm1lZC9vYmplY3QuanMiLCJzcmMvcmVhcm1lZC9vYmplY3QvYWxsLmpzIiwic3JjL3JlYXJtZWQvb2JqZWN0L2FueS5qcyIsInNyYy9yZWFybWVkL29iamVjdC9jb21wYWN0LmpzIiwic3JjL3JlYXJtZWQvb2JqZWN0L2RpZy5qcyIsInNyYy9yZWFybWVkL29iamVjdC9lYWNoLmpzIiwic3JjL3JlYXJtZWQvb2JqZWN0L2VtcHR5LmpzIiwic3JjL3JlYXJtZWQvb2JqZWN0L2VxdWFscy5qcyIsInNyYy9yZWFybWVkL29iamVjdC9leGNlcHQuanMiLCJzcmMvcmVhcm1lZC9vYmplY3QvaGFzS2V5LmpzIiwic3JjL3JlYXJtZWQvb2JqZWN0L2hhc1ZhbHVlLmpzIiwic3JjL3JlYXJtZWQvb2JqZWN0L2pvaW4uanMiLCJzcmMvcmVhcm1lZC9vYmplY3Qva2V5cy5qcyIsInNyYy9yZWFybWVkL29iamVjdC9tZXJnZS5qcyIsInNyYy9yZWFybWVkL29iamVjdC9vbmx5LmpzIiwic3JjL3JlYXJtZWQvb2JqZWN0L3JlamVjdC5qcyIsInNyYy9yZWFybWVkL29iamVjdC9zZWxlY3QuanMiLCJzcmMvcmVhcm1lZC9vYmplY3QvdmFsdWVzLmpzIiwic3JjL3JlYXJtZWQvc3RyaW5nLmpzIiwic3JjL3JlYXJtZWQvc3RyaW5nL2NhcGl0YWxpemUuanMiLCJzcmMvcmVhcm1lZC9zdHJpbmcvY2FzZUNtcC5qcyIsInNyYy9yZWFybWVkL3N0cmluZy9jaGFycy5qcyIsInNyYy9yZWFybWVkL3N0cmluZy9kb3duY2FzZS5qcyIsInNyYy9yZWFybWVkL3N0cmluZy9lbXB0eS5qcyIsInNyYy9yZWFybWVkL3N0cmluZy9lbmRzV2l0aC5qcyIsInNyYy9yZWFybWVkL3N0cmluZy9leGNsdWRlcy5qcyIsInNyYy9yZWFybWVkL3N0cmluZy9nc3ViLmpzIiwic3JjL3JlYXJtZWQvc3RyaW5nL2luY2x1ZGVzLmpzIiwic3JjL3JlYXJtZWQvc3RyaW5nL2xzdHJpcC5qcyIsInNyYy9yZWFybWVkL3N0cmluZy9ub3RFbXB0eS5qcyIsInNyYy9yZWFybWVkL3N0cmluZy9yZXZlcnNlLmpzIiwic3JjL3JlYXJtZWQvc3RyaW5nL3JzdHJpcC5qcyIsInNyYy9yZWFybWVkL3N0cmluZy9zdGFydHNXaXRoLmpzIiwic3JjL3JlYXJtZWQvc3RyaW5nL3N0cmlwLmpzIiwic3JjL3JlYXJtZWQvc3RyaW5nL3N1Yi5qcyIsInNyYy9yZWFybWVkL3N0cmluZy90aXRsZWl6ZS5qcyIsInNyYy9yZWFybWVkL3N0cmluZy90b0Jvb2wuanMiLCJzcmMvcmVhcm1lZC9zdHJpbmcvdXBjYXNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInJlcXVpcmUoJy4vcmVhcm1lZC9hcnJheScpO1xucmVxdWlyZSgnLi9yZWFybWVkL251bWJlcicpO1xucmVxdWlyZSgnLi9yZWFybWVkL29iamVjdCcpO1xucmVxdWlyZSgnLi9yZWFybWVkL3N0cmluZycpO1xuXG52YXIgUmVhcm1lZCA9IHJlcXVpcmUoJy4vcmVhcm1lZC9jb3JlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IFJlYXJtZWQ7XG4iLCJyZXF1aXJlKCcuL2FycmF5L2FsbCcpO1xucmVxdWlyZSgnLi9hcnJheS9hbnknKTtcbnJlcXVpcmUoJy4vYXJyYXkvY29tcGFjdCcpO1xucmVxdWlyZSgnLi9hcnJheS9kaWcnKTtcbnJlcXVpcmUoJy4vYXJyYXkvZWFjaCcpO1xucmVxdWlyZSgnLi9hcnJheS9lbXB0eScpO1xucmVxdWlyZSgnLi9hcnJheS9lcXVhbHMnKTtcbnJlcXVpcmUoJy4vYXJyYXkvZXhjbHVkZXMnKTtcbnJlcXVpcmUoJy4vYXJyYXkvZmluZCcpO1xucmVxdWlyZSgnLi9hcnJheS9maW5kSW5kZXgnKTtcbnJlcXVpcmUoJy4vYXJyYXkvZmlyc3QnKTtcbnJlcXVpcmUoJy4vYXJyYXkvZmxhdHRlbicpO1xucmVxdWlyZSgnLi9hcnJheS9pbmNsdWRlcycpO1xucmVxdWlyZSgnLi9hcnJheS9pbkdyb3Vwc09mJyk7XG5yZXF1aXJlKCcuL2FycmF5L2dyb3VwQnknKTtcbnJlcXVpcmUoJy4vYXJyYXkvbGFzdCcpO1xucmVxdWlyZSgnLi9hcnJheS9tYXgnKTtcbnJlcXVpcmUoJy4vYXJyYXkvbWF4QnknKTtcbnJlcXVpcmUoJy4vYXJyYXkvbWluJyk7XG5yZXF1aXJlKCcuL2FycmF5L21pbkJ5Jyk7XG5yZXF1aXJlKCcuL2FycmF5L25vdEVtcHR5Jyk7XG5yZXF1aXJlKCcuL2FycmF5L3NtYXJ0RXhjbHVkZXMnKTtcbnJlcXVpcmUoJy4vYXJyYXkvc21hcnRJbmNsdWRlcycpO1xucmVxdWlyZSgnLi9hcnJheS9yZWplY3QnKTtcbnJlcXVpcmUoJy4vYXJyYXkvc2VsZWN0Jyk7XG5yZXF1aXJlKCcuL2FycmF5L3N1bScpO1xucmVxdWlyZSgnLi9hcnJheS91bmlxJyk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihBcnJheS5wcm90b3R5cGUuYWxsKXtcbiAgICB3YXJuKEFycmF5LCAnYWxsJyk7XG4gIH1cblxuICBBcnJheS5wcm90b3R5cGUuYWxsID0gZnVuY3Rpb24oY2Ipe1xuICAgIHJldHVybiB0aGlzLmV2ZXJ5KGNiKTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCBcImFsbFwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoQXJyYXkucHJvdG90eXBlLmFueSl7XG4gICAgd2FybihBcnJheSwgJ2FueScpO1xuICB9XG5cbiAgQXJyYXkucHJvdG90eXBlLmFueSA9IGZ1bmN0aW9uKGNiKXtcbiAgICByZXR1cm4gdGhpcy5zb21lKGNiKTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCBcImFueVwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoQXJyYXkucHJvdG90eXBlLmNvbXBhY3Qpe1xuICAgIHdhcm4oQXJyYXksICdjb21wYWN0Jyk7XG4gIH1cblxuICBBcnJheS5wcm90b3R5cGUuY29tcGFjdCA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIGJhZDtcblxuICAgIGlmKGFyZ3VtZW50cy5sZW5ndGggPT09IDApe1xuICAgICAgYmFkID0gW251bGwsIHVuZGVmaW5lZF07XG4gICAgfWVsc2UgaWYoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSl7XG4gICAgICBpZihBcnJheS5pc0FycmF5KGFyZ3VtZW50c1swXSkpe1xuICAgICAgICBiYWQgPSBhcmd1bWVudHNbMF07XG4gICAgICB9ZWxzZXtcbiAgICAgICAgYmFkID0gW2FyZ3VtZW50c1swXV07XG4gICAgICB9XG4gICAgfWVsc2V7XG4gICAgICBiYWQgPSBhcmd1bWVudHM7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coYmFkKTtcblxuICAgIHJldHVybiB0aGlzLmZpbHRlcihmdW5jdGlvbih4KXtcbiAgICAgIHZhciBib29sID0gdHJ1ZTtcbiAgICAgIGZvcih2YXIgaT0wO2k8YmFkLmxlbmd0aDtpKyspe1xuICAgICAgICBpZih4ID09PSBiYWRbaV0pe1xuICAgICAgICAgIGJvb2wgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGJvb2w7XG4gICAgfSk7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSwgXCJjb21wYWN0XCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIFJlYXJtZWQgPSB7XG4gICAgaXNPYmplY3RMaWtlOiByZXF1aXJlKCcuLy4uL2NvcmUvaXNPYmplY3RMaWtlJylcbiAgfTtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKEFycmF5LnByb3RvdHlwZS5kaWcpe1xuICAgIHdhcm4oQXJyYXksICdkaWcnKTtcbiAgfVxuXG4gIEFycmF5LnByb3RvdHlwZS5kaWcgPSBmdW5jdGlvbigpe1xuICAgIHZhciBrZXlzO1xuICAgIGlmKGFyZ3VtZW50cy5sZW5ndGggPT09IDApe1xuICAgICAga2V5cyA9IFtdO1xuICAgIH1lbHNlIGlmKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpe1xuICAgICAgaWYoQXJyYXkuaXNBcnJheShhcmd1bWVudHNbMF0pKXtcbiAgICAgICAga2V5cyA9IGFyZ3VtZW50c1swXTtcbiAgICAgIH1lbHNle1xuICAgICAgICBrZXlzID0gW2FyZ3VtZW50c1swXV07XG4gICAgICB9XG4gICAgfWVsc2V7XG4gICAgICBrZXlzID0gYXJndW1lbnRzO1xuICAgIH1cblxuICAgIHZhciB2YWwgPSB0aGlzO1xuICAgIGZvcih2YXIgaT0wO2k8YXJndW1lbnRzLmxlbmd0aDtpKyspe1xuICAgICAgaWYoUmVhcm1lZC5pc09iamVjdExpa2UodmFsKSl7XG4gICAgICAgIHZhbCA9IHZhbFthcmd1bWVudHNbaV1dO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHZhbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWw7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSwgXCJkaWdcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKEFycmF5LnByb3RvdHlwZS5lYWNoKXtcbiAgICB3YXJuKEFycmF5LCAnZWFjaCcpO1xuICB9XG5cbiAgQXJyYXkucHJvdG90eXBlLmVhY2ggPSBmdW5jdGlvbihjYil7XG4gICAgZm9yKHZhciBpPTA7aTx0aGlzLmxlbmd0aDtpKyspe1xuICAgICAgY2IodGhpc1tpXSwgaSk7XG4gICAgfVxuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsIFwiZWFjaFwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoQXJyYXkucHJvdG90eXBlLmVtcHR5KXtcbiAgICB3YXJuKEFycmF5LCAnZW1wdHknKTtcbiAgfVxuXG4gIEFycmF5LnByb3RvdHlwZS5lbXB0eSA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHRoaXMubGVuZ3RoID09PSAwO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsIFwiZW1wdHlcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgUmVhcm1lZCA9IHtcbiAgICBpc09iamVjdExpa2U6IHJlcXVpcmUoJy4vLi4vY29yZS9pc09iamVjdExpa2UnKVxuICB9O1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoQXJyYXkucHJvdG90eXBlLmVxdWFscyl7XG4gICAgd2FybihBcnJheSwgJ2VxdWFscycpO1xuICB9XG5cbiAgQXJyYXkucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uKGFycmF5KXtcbiAgICBpZighYXJyYXkpe1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmKHRoaXMubGVuZ3RoICE9PSBhcnJheS5sZW5ndGgpe1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZvcih2YXIgaT0wO2k8dGhpcy5sZW5ndGg7aSsrKXtcbiAgICAgIHZhciB2YWwgPSB0aGlzW2ldO1xuICAgICAgdmFyIG90aGVyID0gYXJyYXlbaV1cbiAgICAgIGlmKEFycmF5LmlzQXJyYXkodGhpc1tpXSkgJiYgQXJyYXkuaXNBcnJheShvdGhlcikpe1xuICAgICAgICBpZighdmFsLmVxdWFscyhvdGhlcikpe1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfWVsc2UgaWYoUmVhcm1lZC5pc09iamVjdExpa2UodmFsKSAmJiBSZWFybWVkLmlzT2JqZWN0TGlrZShvdGhlcikpe1xuICAgICAgICBpZighdmFsLmVxdWFscyhvdGhlcikpe1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfWVsc2UgaWYodmFsICE9PSBvdGhlcil7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCBcImVxdWFsc1wiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoQXJyYXkucHJvdG90eXBlLmV4Y2x1ZGVzKXtcbiAgICB3YXJuKEFycmF5LCAnZXhjbHVkZXMnKTtcbiAgfVxuXG4gIEFycmF5LnByb3RvdHlwZS5leGNsdWRlcyA9IGZ1bmN0aW9uKHgsIGZyb21JbmRleCl7XG4gICAgdmFyIGZyb21JbmRleCA9IGZyb21JbmRleCB8fCAwO1xuICAgIHZhciBib29sID0gdHJ1ZTtcbiAgICBmb3IodmFyIGk9ZnJvbUluZGV4O2k8dGhpcy5sZW5ndGg7aSsrKXtcbiAgICAgIGlmKHRoaXNbaV0gPT09IHgpe1xuICAgICAgICBib29sID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYm9vbDtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCBcImV4Y2x1ZGVzXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIFJlYXJtZWQgPSB7XG4gICAgaXNGdW5jdGlvbjogcmVxdWlyZSgnLi8uLi9jb3JlL2lzRnVuY3Rpb24nKVxuICB9O1xuXG4gIGlmKCFBcnJheS5wcm90b3R5cGUuZmluZCl7XG4gICAgQXJyYXkucHJvdG90eXBlLmZpbmQgPSBmdW5jdGlvbihjYil7XG4gICAgICB2YXIgaXRlbTtcbiAgICAgIHZhciBoYXNDYWxsYmFjayA9IFJlYXJtZWQuaXNGdW5jdGlvbihjYik7XG4gICAgICBmb3IodmFyIGk9MDtpPHRoaXMubGVuZ3RoO2krKyl7XG4gICAgICAgIHZhciB2YWwgPSB0aGlzW2ldO1xuICAgICAgICBpZihoYXNDYWxsYmFjayA/IGNiKHZhbCwgaSkgOiAoY2IgPT09IHZhbCkpe1xuICAgICAgICAgIHZhbCA9IHZhbDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCBcImZpbmRcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG4gIH1cbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBSZWFybWVkID0ge1xuICAgIGlzRnVuY3Rpb246IHJlcXVpcmUoJy4vLi4vY29yZS9pc0Z1bmN0aW9uJylcbiAgfTtcblxuICBpZighQXJyYXkucHJvdG90eXBlLmZpbmRJbmRleCl7XG4gICAgQXJyYXkucHJvdG90eXBlLmZpbmRJbmRleCA9IGZ1bmN0aW9uKGNiKXtcbiAgICAgIHZhciBpbmRleCA9IC0xO1xuICAgICAgdmFyIGhhc0NhbGxiYWNrID0gUmVhcm1lZC5pc0Z1bmN0aW9uKGNiKTtcbiAgICAgIGZvcih2YXIgaT0wO2k8dGhpcy5sZW5ndGg7aSsrKXtcbiAgICAgICAgaWYoaGFzQ2FsbGJhY2sgPyBjYih0aGlzW2ldLCBpKSA6IChjYiA9PT0gdGhpc1tpXSkpe1xuICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH07XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCBcImZpbmRJbmRleFwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbiAgfVxufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihBcnJheS5wcm90b3R5cGUuZmlyc3Qpe1xuICAgIHdhcm4oQXJyYXksICdmaXJzdCcpO1xuICB9XG5cbiAgQXJyYXkucHJvdG90eXBlLmZpcnN0ID0gZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gdGhpc1swXTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCBcImZpcnN0XCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihBcnJheS5wcm90b3R5cGUuZmxhdHRlbil7XG4gICAgd2FybihBcnJheSwgJ2ZsYXR0ZW4nKTtcbiAgfVxuXG4gIEFycmF5LnByb3RvdHlwZS5mbGF0dGVuID0gZnVuY3Rpb24ocmVzdWx0KXtcbiAgICByZXN1bHQgPSByZXN1bHQgfHwgW107XG4gICAgZm9yKHZhciBpPTA7aTx0aGlzLmxlbmd0aDtpKyspe1xuICAgICAgdmFyIHZhbCA9IHRoaXNbaV07XG4gICAgICBpZihBcnJheS5pc0FycmF5KHZhbCkpe1xuICAgICAgICBmb3IodmFyIGo9MDtqPHZhbC5sZW5ndGg7aisrKXtcbiAgICAgICAgICB2YXIgdmFsMiA9IHZhbFtqXTtcbiAgICAgICAgICBpZihBcnJheS5pc0FycmF5KHZhbDIpKXtcbiAgICAgICAgICAgIHZhbDIuZmxhdHRlbihyZXN1bHQpO1xuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmVzdWx0LnB1c2godmFsMik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9ZWxzZXtcbiAgICAgICAgcmVzdWx0LnB1c2godmFsKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCBcImZsYXR0ZW5cIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKEFycmF5LnByb3RvdHlwZS5ncm91cEJ5KXtcbiAgICB3YXJuKEFycmF5LCAnZ3JvdXBCeScpO1xuICB9XG5cbiAgQXJyYXkucHJvdG90eXBlLmdyb3VwQnkgPSBmdW5jdGlvbihjYil7XG4gICAgdmFyIGhhc2ggPSB7fTtcbiAgICBmb3IodmFyIGk9MDtpPHRoaXMubGVuZ3RoO2krKyl7XG4gICAgICB2YXIgdmFsID0gdGhpc1tpXTtcbiAgICAgIHZhciBrZXkgPSBjYih2YWwsIGkpO1xuICAgICAgaGFzaFtrZXldID0gaGFzaFtrZXldIHx8IFtdO1xuICAgICAgaGFzaFtrZXldLnB1c2godmFsKTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc2g7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSwgXCJncm91cEJ5XCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihBcnJheS5wcm90b3R5cGUuaW5Hcm91cHNPZil7XG4gICAgd2FybihBcnJheSwgJ2luR3JvdXBzT2YnKTtcbiAgfVxuXG4gIEFycmF5LnByb3RvdHlwZS5pbkdyb3Vwc09mID0gZnVuY3Rpb24ocGVyLCBmaWxsV2l0aCl7XG4gICAgdmFyIGFyciA9IFtdXG4gICAgdmFyIHBlciA9IE51bWJlcihwZXIpO1xuICAgIHZhciBmaWxsV2l0aCA9IGZpbGxXaXRoIHx8IGZhbHNlO1xuICAgIHZhciBsZW5ndGggPSB0aGlzLmxlbmd0aDtcblxuICAgIGZvcih2YXIgaT0wO2k8bGVuZ3RoO2krKyl7XG4gICAgICB2YXIgY291bnQgPSAwO1xuICAgICAgdmFyIG9mZnNldDtcbiAgICAgIGlmKChpKzEpICUgcGVyID09PSAwKXtcbiAgICAgICAgY291bnQgPSBwZXI7XG4gICAgICAgIG9mZnNldCA9IHBlcjtcbiAgICAgIH1lbHNlIGlmKGkrMSA9PT0gbGVuZ3RoKXtcbiAgICAgICAgY291bnQgPSBwZXI7XG4gICAgICAgIG9mZnNldCA9IGxlbmd0aCAlIHBlcjtcbiAgICAgIH1cblxuICAgICAgaWYoY291bnQgPiAwKXtcbiAgICAgICAgdmFyIGdyb3VwID0gW107XG4gICAgICAgIGZvcih2YXIgaj0wO2o8Y291bnQ7aisrKXtcbiAgICAgICAgICB2YXIgdmFsID0gdGhpc1tpLW9mZnNldCtqKzFdO1xuICAgICAgICAgIGlmKHZhbCl7XG4gICAgICAgICAgICBncm91cC5wdXNoKHZhbCk7XG4gICAgICAgICAgfWVsc2UgaWYoZmlsbFdpdGggIT09IGZhbHNlKXtcbiAgICAgICAgICAgIGdyb3VwLnB1c2goZmlsbFdpdGgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhcnIucHVzaChncm91cClcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXJyO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsIFwiaW5Hcm91cHNPZlwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIGlmKCFBcnJheS5wcm90b3R5cGUuaW5jbHVkZXMpe1xuICAgIEFycmF5LnByb3RvdHlwZS5pbmNsdWRlcyA9IGZ1bmN0aW9uKHgsIGZyb21JbmRleCl7XG4gICAgICBmcm9tSW5kZXggPSBmcm9tSW5kZXggfHwgMDtcbiAgICAgIHZhciBib29sID0gZmFsc2U7XG4gICAgICBmb3IodmFyIGk9ZnJvbUluZGV4O2k8dGhpcy5sZW5ndGg7aSsrKXtcbiAgICAgICAgaWYodGhpc1tpXSA9PT0geCl7XG4gICAgICAgICAgYm9vbCA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBib29sO1xuICAgIH07XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCBcImluY2x1ZGVzXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xuICB9XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKEFycmF5LnByb3RvdHlwZS5sYXN0KXtcbiAgICB3YXJuKEFycmF5LCAnbGFzdCcpO1xuICB9XG5cbiAgQXJyYXkucHJvdG90eXBlLmxhc3QgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiB0aGlzW3RoaXMubGVuZ3RoLTFdO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsIFwibGFzdFwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBSZWFybWVkID0ge1xuICAgIGlzRnVuY3Rpb246IHJlcXVpcmUoJy4vLi4vY29yZS9pc0Z1bmN0aW9uJylcbiAgfTtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKEFycmF5LnByb3RvdHlwZS5tYXgpe1xuICAgIHdhcm4oQXJyYXksICdtYXgnKTtcbiAgfVxuXG4gIEFycmF5LnByb3RvdHlwZS5tYXggPSBmdW5jdGlvbihjYil7XG4gICAgdmFyIG1heDtcbiAgICB2YXIgaGFzQ2FsbGJhY2sgPSBSZWFybWVkLmlzRnVuY3Rpb24oY2IpO1xuICAgIGZvcih2YXIgaT0wO2k8dGhpcy5sZW5ndGg7aSsrKXtcbiAgICAgIHZhciB2YWwgPSBoYXNDYWxsYmFjayA/IGNiKHRoaXNbaV0sIGkpIDogdGhpc1tpXTtcblxuICAgICAgaWYobWF4ID09PSBudWxsIHx8IG1heCA9PT0gdW5kZWZpbmVkIHx8IHZhbCA+IG1heCl7XG4gICAgICAgIG1heCA9IHZhbDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1heDtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCBcIm1heFwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBSZWFybWVkID0ge1xuICAgIGlzRnVuY3Rpb246IHJlcXVpcmUoJy4vLi4vY29yZS9pc0Z1bmN0aW9uJylcbiAgfTtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKEFycmF5LnByb3RvdHlwZS5tYXhCeSl7XG4gICAgd2FybihBcnJheSwgJ21heEJ5Jyk7XG4gIH1cblxuICBBcnJheS5wcm90b3R5cGUubWF4QnkgPSBmdW5jdGlvbihjYil7XG4gICAgdmFyIGN1cnJlbnQsIG1heDtcbiAgICB2YXIgaGFzQ2FsbGJhY2sgPSBSZWFybWVkLmlzRnVuY3Rpb24oY2IpO1xuICAgIGZvcih2YXIgaT0wO2k8dGhpcy5sZW5ndGg7aSsrKXtcbiAgICAgIHZhciBpdGVtID0gdGhpc1tpXTtcbiAgICAgIHZhciB2YWwgPSBoYXNDYWxsYmFjayA/IGNiKGl0ZW0sIGkpIDogaXRlbTtcblxuICAgICAgaWYoY3VycmVudCA9PT0gbnVsbCB8fCBjdXJyZW50ID09PSB1bmRlZmluZWQgfHwgdmFsID4gbWF4KXtcbiAgICAgICAgY3VycmVudCA9IGl0ZW07XG4gICAgICAgIG1heCA9IHZhbDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGN1cnJlbnQ7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSwgXCJtYXhCeVwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBSZWFybWVkID0ge1xuICAgIGlzRnVuY3Rpb246IHJlcXVpcmUoJy4vLi4vY29yZS9pc0Z1bmN0aW9uJylcbiAgfTtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKEFycmF5LnByb3RvdHlwZS5taW4pe1xuICAgIHdhcm4oQXJyYXksICdtaW4nKTtcbiAgfVxuXG4gIEFycmF5LnByb3RvdHlwZS5taW4gPSBmdW5jdGlvbihjYil7XG4gICAgdmFyIG1pbjtcbiAgICB2YXIgaGFzQ2FsbGJhY2sgPSBSZWFybWVkLmlzRnVuY3Rpb24oY2IpO1xuICAgIGZvcih2YXIgaT0wO2k8dGhpcy5sZW5ndGg7aSsrKXtcbiAgICAgIHZhciB2YWwgPSBoYXNDYWxsYmFjayA/IGNiKHRoaXNbaV0sIGkpIDogdGhpc1tpXTtcblxuICAgICAgaWYobWluID09PSBudWxsIHx8IG1pbiA9PT0gdW5kZWZpbmVkIHx8IHZhbCA8IG1pbil7XG4gICAgICAgIG1pbiA9IHZhbDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1pbjtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCBcIm1pblwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBSZWFybWVkID0ge1xuICAgIGlzRnVuY3Rpb246IHJlcXVpcmUoJy4vLi4vY29yZS9pc0Z1bmN0aW9uJylcbiAgfTtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKEFycmF5LnByb3RvdHlwZS5taW5CeSl7XG4gICAgd2FybihBcnJheSwgJ21pbkJ5Jyk7XG4gIH1cblxuICBBcnJheS5wcm90b3R5cGUubWluQnkgPSBmdW5jdGlvbihjYil7XG4gICAgdmFyIGN1cnJlbnQsIG1pbjtcbiAgICB2YXIgaGFzQ2FsbGJhY2sgPSBSZWFybWVkLmlzRnVuY3Rpb24oY2IpO1xuICAgIGZvcih2YXIgaT0wO2k8dGhpcy5sZW5ndGg7aSsrKXtcbiAgICAgIHZhciBpdGVtID0gdGhpc1tpXTtcbiAgICAgIHZhciB2YWwgPSBoYXNDYWxsYmFjayA/IGNiKGl0ZW0sIGkpIDogaXRlbTtcblxuICAgICAgaWYoY3VycmVudCA9PT0gbnVsbCB8fCBjdXJyZW50ID09PSB1bmRlZmluZWQgfHwgdmFsIDwgbWluKXtcbiAgICAgICAgY3VycmVudCA9IGl0ZW07XG4gICAgICAgIG1pbiA9IHZhbDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGN1cnJlbnQ7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSwgXCJtaW5CeVwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoQXJyYXkucHJvdG90eXBlLm5vdEVtcHR5KXtcbiAgICB3YXJuKEFycmF5LCAnbm90RW1wdHknKTtcbiAgfVxuXG4gIEFycmF5LnByb3RvdHlwZS5ub3RFbXB0eSA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHRoaXMubGVuZ3RoICE9PSAwO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsIFwibm90RW1wdHlcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKEFycmF5LnByb3RvdHlwZS5yZWplY3Qpe1xuICAgIHdhcm4oQXJyYXksICdyZWplY3QnKTtcbiAgfVxuXG4gIEFycmF5LnByb3RvdHlwZS5yZWplY3QgPSBmdW5jdGlvbihjYil7XG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyKGZ1bmN0aW9uKHgsIGkpe1xuICAgICAgcmV0dXJuICFjYih4LGkpO1xuICAgIH0pO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsIFwicmVqZWN0XCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihBcnJheS5wcm90b3R5cGUuc2VsZWN0KXtcbiAgICB3YXJuKEFycmF5LCAnc2VsZWN0Jyk7XG4gIH1cblxuICBBcnJheS5wcm90b3R5cGUuc2VsZWN0ID0gZnVuY3Rpb24oY2Ipe1xuICAgIHJldHVybiB0aGlzLmZpbHRlcihjYik7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSwgXCJzZWxlY3RcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICByZXF1aXJlKCcuL2VxdWFscycpO1xuICByZXF1aXJlKCcuLy4uL29iamVjdC9lcXVhbHMnKTtcblxuICB2YXIgUmVhcm1lZCA9IHtcbiAgICBpc09iamVjdExpa2U6IHJlcXVpcmUoJy4vLi4vY29yZS9pc09iamVjdExpa2UnKVxuICB9O1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoQXJyYXkucHJvdG90eXBlLnNtYXJ0RXhjbHVkZXMpe1xuICAgIHdhcm4oQXJyYXksICdzbWFydEV4Y2x1ZGVzJyk7XG4gIH1cblxuICBBcnJheS5wcm90b3R5cGUuc21hcnRFeGNsdWRlcyA9IGZ1bmN0aW9uKHgsIGZyb21JbmRleCl7XG4gICAgdmFyIGZyb21JbmRleCA9IGZyb21JbmRleCB8fCAwO1xuICAgIHZhciBib29sID0gdHJ1ZTtcbiAgICBmb3IodmFyIGk9ZnJvbUluZGV4O2k8dGhpcy5sZW5ndGg7aSsrKXtcbiAgICAgIHZhciB2YWwgPSB0aGlzW2ldO1xuICAgICAgaWYoUmVhcm1lZC5pc09iamVjdExpa2UodmFsKSl7XG4gICAgICAgIGlmKHZhbC5lcXVhbHMoeCkpe1xuICAgICAgICAgIGJvb2wgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfWVsc2UgaWYodmFsID09PSB4KXtcbiAgICAgICAgYm9vbCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJvb2w7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSwgXCJzbWFydEV4Y2x1ZGVzXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgcmVxdWlyZSgnLi9lcXVhbHMnKTtcbiAgcmVxdWlyZSgnLi8uLi9vYmplY3QvZXF1YWxzJyk7XG5cbiAgdmFyIFJlYXJtZWQgPSB7XG4gICAgaXNPYmplY3RMaWtlOiByZXF1aXJlKCcuLy4uL2NvcmUvaXNPYmplY3RMaWtlJylcbiAgfTtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKEFycmF5LnByb3RvdHlwZS5zbWFydEluY2x1ZGVzKXtcbiAgICB3YXJuKEFycmF5LCAnc21hcnRJbmNsdWRlcycpO1xuICB9XG5cbiAgQXJyYXkucHJvdG90eXBlLnNtYXJ0SW5jbHVkZXMgPSBmdW5jdGlvbih4LCBmcm9tSW5kZXgpe1xuICAgIHZhciBmcm9tSW5kZXggPSBmcm9tSW5kZXggfHwgMDtcbiAgICB2YXIgYm9vbCA9IGZhbHNlO1xuICAgIGZvcih2YXIgaT1mcm9tSW5kZXg7aTx0aGlzLmxlbmd0aDtpKyspe1xuICAgICAgdmFyIHZhbCA9IHRoaXNbaV07XG4gICAgICBpZihSZWFybWVkLmlzT2JqZWN0TGlrZSh2YWwpKXtcbiAgICAgICAgaWYodmFsLmVxdWFscyh4KSl7XG4gICAgICAgICAgYm9vbCA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1lbHNlIGlmKHZhbCA9PT0geCl7XG4gICAgICAgIGJvb2wgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJvb2w7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSwgXCJzbWFydEluY2x1ZGVzXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIFJlYXJtZWQgPSB7XG4gICAgaXNGdW5jdGlvbjogcmVxdWlyZSgnLi8uLi9jb3JlL2lzRnVuY3Rpb24nKVxuICB9O1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoQXJyYXkucHJvdG90eXBlLnN1bSl7XG4gICAgd2FybihBcnJheSwgJ3N1bScpO1xuICB9XG5cbiAgQXJyYXkucHJvdG90eXBlLnN1bSA9IGZ1bmN0aW9uKGNiKXtcbiAgICB2YXIgc3VtID0gMDtcbiAgICB2YXIgaGFzQ2FsbGJhY2sgPSBSZWFybWVkLmlzRnVuY3Rpb24oY2IpO1xuICAgIGZvcih2YXIgaT0wO2k8dGhpcy5sZW5ndGg7aSsrKXtcbiAgICAgIHZhciB2YWwgPSBoYXNDYWxsYmFjayA/IGNiKHRoaXNbaV0sIGkpIDogdGhpc1tpXTtcblxuICAgICAgaWYoaXNGaW5pdGUodmFsKSl7XG4gICAgICAgIHN1bSArPSBOdW1iZXIodmFsKTtcbiAgICAgIH1lbHNle1xuICAgICAgICB0aHJvdyhcImBcIiArIHZhbCArIFwiYCBjYW5ub3QgYmUgY29lcmNlZCB0byBhIE51bWJlclwiKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN1bTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCBcInN1bVwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBSZWFybWVkID0ge1xuICAgIGlzRnVuY3Rpb246IHJlcXVpcmUoJy4vLi4vY29yZS9pc0Z1bmN0aW9uJylcbiAgfTtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKEFycmF5LnByb3RvdHlwZS51bmlxKXtcbiAgICB3YXJuKEFycmF5LCAndW5pcScpO1xuICB9XG5cbiAgQXJyYXkucHJvdG90eXBlLnVuaXEgPSBmdW5jdGlvbihjYil7XG4gICAgdmFyIHVuaXFJdGVtcyA9IFtdO1xuICAgIHZhciBoYXNDYWxsYmFjayA9IFJlYXJtZWQuaXNGdW5jdGlvbihjYik7XG5cbiAgICByZXR1cm4gdGhpcy5maWx0ZXIoZnVuY3Rpb24oeCxpKXtcbiAgICAgIHZhciB2YWwgPSBoYXNDYWxsYmFjayA/IGNiKHgsaSkgOiB4O1xuICAgICAgaWYodW5pcUl0ZW1zLnNtYXJ0RXhjbHVkZXModmFsKSl7XG4gICAgICAgIHVuaXFJdGVtcy5wdXNoKHZhbCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsIFwidW5pcVwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwidmFyIFJlYXJtZWQgPSB7XG4gIGlzRnVuY3Rpb246IHJlcXVpcmUoJy4vY29yZS9pc0Z1bmN0aW9uJyksXG4gIGlzT2JqZWN0TGlrZTogcmVxdWlyZSgnLi9jb3JlL2lzT2JqZWN0TGlrZScpXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYXJtZWQ7XG4iLCJmdW5jdGlvbiBpc0Z1bmN0aW9uKG9iail7XG4gIHJldHVybiAhIShvYmogJiYgb2JqLmNvbnN0cnVjdG9yICYmIG9iai5jYWxsICYmIG9iai5hcHBseSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRnVuY3Rpb247XG4iLCJmdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpe1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcbiIsImZ1bmN0aW9uIHdhcm4odHlwZSwgbWV0aG9kKXtcbiAgY29uc29sZS53YXJuKFwiUmVhcm1lZC1qcyBPdmVycmlkaW5nIFwiICsgdHlwZSArIFwiIG1ldGhvZDogXCIgKyBtZXRob2QsICcuIElmIHRoaXMgaXMgYSBidWlsdC1pbiBicm93c2VyIG1ldGhvZCBwbGVhc2UgcmVwb3J0IG9uIFJlYXJtZWQtanMgZ2l0aHViIGlzc3Vlcy4nKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gd2FybjtcbiIsInJlcXVpcmUoJy4vbnVtYmVyL2NlaWwnKTtcbnJlcXVpcmUoJy4vbnVtYmVyL2Zsb29yJyk7XG5yZXF1aXJlKCcuL251bWJlci9pc0RlY2ltYWwnKTtcbnJlcXVpcmUoJy4vbnVtYmVyL2lzRXZlbicpO1xucmVxdWlyZSgnLi9udW1iZXIvaXNJbnRlZ2VyJyk7XG5yZXF1aXJlKCcuL251bWJlci9pc09kZCcpO1xucmVxdWlyZSgnLi9udW1iZXIvcm91bmQnKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKE51bWJlci5wcm90b3R5cGUuY2VpbCl7XG4gICAgd2FybihOdW1iZXIsICdjZWlsJyk7XG4gIH1cblxuICBOdW1iZXIucHJvdG90eXBlLmNlaWwgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiBNYXRoLmNlaWwodGhpcyk7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE51bWJlci5wcm90b3R5cGUsIFwiY2VpbFwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoTnVtYmVyLnByb3RvdHlwZS5mbG9vcil7XG4gICAgd2FybihOdW1iZXIsICdmbG9vcicpO1xuICB9XG5cbiAgTnVtYmVyLnByb3RvdHlwZS5mbG9vciA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcyk7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE51bWJlci5wcm90b3R5cGUsIFwiZmxvb3JcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKE51bWJlci5wcm90b3R5cGUuaXNEZWNpbWFsKXtcbiAgICB3YXJuKE51bWJlciwgJ2lzRGVjaW1hbCcpO1xuICB9XG5cbiAgTnVtYmVyLnByb3RvdHlwZS5pc0RlY2ltYWwgPSBmdW5jdGlvbigpe1xuICAgIGlmKE51bWJlci5pc0ludGVnZXIpe1xuICAgICAgcmV0dXJuICFOdW1iZXIuaXNJbnRlZ2VyKHRoaXMpO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGlzRmluaXRlKHRoaXMpICYmIE1hdGguZmxvb3IodGhpcykgIT09IHRoaXM7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE51bWJlci5wcm90b3R5cGUsIFwiaXNEZWNpbWFsXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihOdW1iZXIucHJvdG90eXBlLmlzRXZlbil7XG4gICAgd2FybihOdW1iZXIsICdpc0V2ZW4nKTtcbiAgfVxuXG4gIE51bWJlci5wcm90b3R5cGUuaXNFdmVuID0gZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gaXNGaW5pdGUodGhpcykgJiYgdGhpcyAlIDIgPT09IDA7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE51bWJlci5wcm90b3R5cGUsIFwiaXNFdmVuXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihOdW1iZXIucHJvdG90eXBlLmlzSW50ZWdlcil7XG4gICAgd2FybihOdW1iZXIsICdpc0ludGVnZXInKTtcbiAgfVxuXG4gIE51bWJlci5wcm90b3R5cGUuaXNJbnRlZ2VyID0gZnVuY3Rpb24oKXtcbiAgICBpZihOdW1iZXIuaXNJbnRlZ2VyKXtcbiAgICAgIHJldHVybiBOdW1iZXIuaXNJbnRlZ2VyKHRoaXMpO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGlzRmluaXRlKHRoaXMpICYmIE1hdGguZmxvb3IodGhpcykgPT09IHRoaXM7XG4gICAgfVxuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOdW1iZXIucHJvdG90eXBlLCBcImlzSW50ZWdlclwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoTnVtYmVyLnByb3RvdHlwZS5pc09kZCl7XG4gICAgd2FybihOdW1iZXIsICdpc09kZCcpO1xuICB9XG5cbiAgTnVtYmVyLnByb3RvdHlwZS5pc09kZCA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIGlzRmluaXRlKHRoaXMpICYmIE1hdGguYWJzKHRoaXMgJSAyKSA9PT0gMTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTnVtYmVyLnByb3RvdHlwZSwgXCJpc09kZFwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoTnVtYmVyLnByb3RvdHlwZS5yb3VuZCl7XG4gICAgd2FybihOdW1iZXIsICdyb3VuZCcpO1xuICB9XG5cbiAgTnVtYmVyLnByb3RvdHlwZS5yb3VuZCA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIE1hdGgucm91bmQodGhpcyk7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE51bWJlci5wcm90b3R5cGUsIFwicm91bmRcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsInJlcXVpcmUoJy4vb2JqZWN0L2FsbCcpO1xucmVxdWlyZSgnLi9vYmplY3QvYW55Jyk7XG5yZXF1aXJlKCcuL29iamVjdC9jb21wYWN0Jyk7XG5yZXF1aXJlKCcuL29iamVjdC9kaWcnKTtcbnJlcXVpcmUoJy4vb2JqZWN0L2VhY2gnKTtcbnJlcXVpcmUoJy4vb2JqZWN0L2VtcHR5Jyk7XG5yZXF1aXJlKCcuL29iamVjdC9lcXVhbHMnKTtcbnJlcXVpcmUoJy4vb2JqZWN0L2V4Y2VwdCcpO1xucmVxdWlyZSgnLi9vYmplY3QvaGFzS2V5Jyk7XG5yZXF1aXJlKCcuL29iamVjdC9oYXNWYWx1ZScpO1xucmVxdWlyZSgnLi9vYmplY3Qvam9pbicpO1xucmVxdWlyZSgnLi9vYmplY3Qva2V5cycpO1xucmVxdWlyZSgnLi9vYmplY3QvbWVyZ2UnKTtcbnJlcXVpcmUoJy4vb2JqZWN0L29ubHknKTtcbnJlcXVpcmUoJy4vb2JqZWN0L3JlamVjdCcpO1xucmVxdWlyZSgnLi9vYmplY3Qvc2VsZWN0Jyk7XG5yZXF1aXJlKCcuL29iamVjdC92YWx1ZXMnKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKE9iamVjdC5wcm90b3R5cGUuYWxsKXtcbiAgICB3YXJuKE9iamVjdCwgJ2FsbCcpO1xuICB9XG5cbiAgT2JqZWN0LnByb3RvdHlwZS5hbGwgPSBmdW5jdGlvbihjYil7XG4gICAgdmFyIGJvb2wgPSB0cnVlO1xuXG4gICAgZm9yKHZhciBrIGluIHRoaXMpe1xuICAgICAgaWYoIWNiKGssIHRoaXNba10pKXtcbiAgICAgICAgYm9vbCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJvb2w7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9iamVjdC5wcm90b3R5cGUsIFwiYWxsXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihPYmplY3QucHJvdG90eXBlLmFueSl7XG4gICAgd2FybihPYmplY3QsICdhbnknKTtcbiAgfVxuXG4gIE9iamVjdC5wcm90b3R5cGUuYW55ID0gZnVuY3Rpb24oY2Ipe1xuICAgIHZhciBib29sID0gZmFsc2U7XG5cbiAgICBmb3IodmFyIGsgaW4gdGhpcyl7XG4gICAgICBpZihjYihrLCB0aGlzW2tdKSl7XG4gICAgICAgIGJvb2wgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJvb2w7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9iamVjdC5wcm90b3R5cGUsIFwiYW55XCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihPYmplY3QucHJvdG90eXBlLmNvbXBhY3Qpe1xuICAgIHdhcm4oT2JqZWN0LCAnY29tcGFjdCcpO1xuICB9XG5cbiAgT2JqZWN0LnByb3RvdHlwZS5jb21wYWN0ID0gZnVuY3Rpb24oYmFkKXtcbiAgICB2YXIgYmFkO1xuICAgIGlmKGFyZ3VtZW50cy5sZW5ndGggPT09IDApe1xuICAgICAgYmFkID0gW251bGwsIHVuZGVmaW5lZF07XG4gICAgfWVsc2UgaWYoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSl7XG4gICAgICBpZihBcnJheS5pc0FycmF5KGFyZ3VtZW50c1swXSkpe1xuICAgICAgICBiYWQgPSBhcmd1bWVudHNbMF07XG4gICAgICB9ZWxzZXtcbiAgICAgICAgYmFkID0gW2FyZ3VtZW50c1swXV07XG4gICAgICB9XG4gICAgfWVsc2V7XG4gICAgICBiYWQgPSBhcmd1bWVudHM7XG4gICAgfVxuXG4gICAgdmFyIG9iaiA9IHt9O1xuXG4gICAgZm9yKHZhciBrIGluIHRoaXMpe1xuICAgICAgdmFyIHZhbCA9IHRoaXNba107XG4gICAgICB2YXIgYm9vbCA9IHRydWU7XG4gICAgICBmb3IodmFyIGk9MDtpPGJhZC5sZW5ndGg7aSsrKXtcbiAgICAgICAgaWYodmFsID09PSBiYWRbaV0pe1xuICAgICAgICAgIGJvb2wgPSBmYWxzZTsgXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKGJvb2wpe1xuICAgICAgICBvYmpba10gPSB2YWw7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9iamVjdC5wcm90b3R5cGUsIFwiY29tcGFjdFwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBSZWFybWVkID0ge1xuICAgIGlzT2JqZWN0TGlrZTogcmVxdWlyZSgnLi8uLi9jb3JlL2lzT2JqZWN0TGlrZScpXG4gIH07XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihPYmplY3QucHJvdG90eXBlLmRpZyl7XG4gICAgd2FybihPYmplY3QsICdkaWcnKTtcbiAgfVxuXG4gIE9iamVjdC5wcm90b3R5cGUuZGlnID0gZnVuY3Rpb24oKXtcbiAgICB2YXIga2V5cztcbiAgICBpZihhcmd1bWVudHMubGVuZ3RoID09PSAwKXtcbiAgICAgIGtleXMgPSBbXTtcbiAgICB9ZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoID09PSAxKXtcbiAgICAgIGlmKEFycmF5LmlzQXJyYXkoYXJndW1lbnRzWzBdKSl7XG4gICAgICAgIGtleXMgPSBhcmd1bWVudHNbMF07XG4gICAgICB9ZWxzZXtcbiAgICAgICAga2V5cyA9IFthcmd1bWVudHNbMF1dO1xuICAgICAgfVxuICAgIH1lbHNle1xuICAgICAga2V5cyA9IGFyZ3VtZW50cztcbiAgICB9XG5cbiAgICB2YXIgdmFsID0gdGhpcztcbiAgICBmb3IodmFyIGsgaW4gYXJndW1lbnRzKXtcbiAgICAgIGlmKFJlYXJtZWQuaXNPYmplY3RMaWtlKHZhbCkpe1xuICAgICAgICB2YWwgPSB2YWxbYXJndW1lbnRzW2tdXTtcbiAgICAgIH1lbHNle1xuICAgICAgICB2YWwgPSB1bmRlZmluZWQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPYmplY3QucHJvdG90eXBlLCBcImRpZ1wiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoT2JqZWN0LnByb3RvdHlwZS5lYWNoKXtcbiAgICB3YXJuKE9iamVjdCwgJ2VhY2gnKTtcbiAgfVxuXG4gIE9iamVjdC5wcm90b3R5cGUuZWFjaCA9IGZ1bmN0aW9uKGNiKXtcbiAgICBmb3IodmFyIGsgaW4gdGhpcyl7XG4gICAgICBjYihrLCB0aGlzW2tdKTtcbiAgICB9XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9iamVjdC5wcm90b3R5cGUsIFwiZWFjaFwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoT2JqZWN0LnByb3RvdHlwZS5lbXB0eSl7XG4gICAgd2FybihPYmplY3QsICdlbXB0eScpO1xuICB9XG5cbiAgT2JqZWN0LnByb3RvdHlwZS5lbXB0eSA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMpLmxlbmd0aCA9PT0gMDtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JqZWN0LnByb3RvdHlwZSwgXCJlbXB0eVwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBSZWFybWVkID0ge1xuICAgIGlzT2JqZWN0TGlrZTogcmVxdWlyZSgnLi8uLi9jb3JlL2lzT2JqZWN0TGlrZScpXG4gIH07XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihPYmplY3QucHJvdG90eXBlLmVxdWFscyl7XG4gICAgd2FybihPYmplY3QsICdlcXVhbHMnKTtcbiAgfVxuXG4gIE9iamVjdC5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24ob2JqZWN0Mil7XG4gICAgZm9yKHZhciBwcm9wTmFtZSBpbiB0aGlzKXtcbiAgICAgIGlmKHRoaXMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpICE9IG9iamVjdDIuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKXtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfWVsc2UgaWYodHlwZW9mIHRoaXNbcHJvcE5hbWVdICE9IHR5cGVvZiBvYmplY3QyW3Byb3BOYW1lXSl7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yKHZhciBwcm9wTmFtZSBpbiBvYmplY3QyKXtcbiAgICAgIHZhciB2YWwgPSB0aGlzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBvdGhlciA9IG9iamVjdDJbcHJvcE5hbWVdO1xuICAgICAgaWYodGhpcy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkgIT0gb2JqZWN0Mi5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpe1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9ZWxzZSBpZih0eXBlb2YgdmFsICE9IHR5cGVvZiBvdGhlcil7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYoIXRoaXMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKXtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmKEFycmF5LmlzQXJyYXkodmFsKSAmJiBBcnJheS5pc0FycmF5KG90aGVyKSl7XG4gICAgICAgIGlmKCF2YWwuZXF1YWxzKG90aGVyKSl7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9ZWxzZSBpZihSZWFybWVkLmlzT2JqZWN0TGlrZSh2YWwpICYmIFJlYXJtZWQuaXNPYmplY3RMaWtlKG90aGVyKSl7XG4gICAgICAgIGlmKCF2YWwuZXF1YWxzKG90aGVyKSl7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9ZWxzZSBpZih2YWwgIT0gb3RoZXIpe1xuICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9iamVjdC5wcm90b3R5cGUsIFwiZXF1YWxzXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihPYmplY3QucHJvdG90eXBlLmV4Y2VwdCl7XG4gICAgd2FybihPYmplY3QsICdleGNlcHQnKTtcbiAgfVxuXG4gIE9iamVjdC5wcm90b3R5cGUuZXhjZXB0ID0gZnVuY3Rpb24oa2V5cyl7XG4gICAgdmFyIGtleXM7XG4gICAgaWYoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCl7XG4gICAgICBrZXlzID0gW107XG4gICAgfWVsc2UgaWYoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSl7XG4gICAgICBpZihBcnJheS5pc0FycmF5KGFyZ3VtZW50c1swXSkpe1xuICAgICAgICBrZXlzID0gYXJndW1lbnRzWzBdO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGtleXMgPSBbYXJndW1lbnRzWzBdXTtcbiAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgIGtleXMgPSBhcmd1bWVudHM7XG4gICAgfVxuXG4gICAgdmFyIG9iaiA9IHt9O1xuICAgIGZvcih2YXIgayBpbiB0aGlzKXtcbiAgICAgIHZhciBib29sID0gdHJ1ZTtcbiAgICAgIGZvcih2YXIgaT0wO2k8a2V5cy5sZW5ndGg7aSsrKXtcbiAgICAgICAgaWYoayA9PT0ga2V5c1tpXSl7XG4gICAgICAgICAgYm9vbCA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZihib29sKXtcbiAgICAgICAgb2JqW2tdID0gdGhpc1trXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JqZWN0LnByb3RvdHlwZSwgXCJleGNlcHRcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKE9iamVjdC5wcm90b3R5cGUuaGFzS2V5KXtcbiAgICB3YXJuKE9iamVjdCwgJ2hhc0tleScpO1xuICB9XG5cbiAgT2JqZWN0LnByb3RvdHlwZS5oYXNLZXkgPSBmdW5jdGlvbihrZXkpe1xuICAgIHZhciBib29sID0gZmFsc2U7XG4gICAgZm9yKHZhciBrIGluIHRoaXMpe1xuICAgICAgaWYoayA9PT0ga2V5KXtcbiAgICAgICAgYm9vbCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYm9vbDtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JqZWN0LnByb3RvdHlwZSwgXCJoYXNLZXlcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKE9iamVjdC5wcm90b3R5cGUuaGFzVmFsdWUpe1xuICAgIHdhcm4oT2JqZWN0LCAnaGFzVmFsdWUnKTtcbiAgfVxuXG4gIE9iamVjdC5wcm90b3R5cGUuaGFzVmFsdWUgPSBmdW5jdGlvbih2YWwpe1xuICAgIHZhciBib29sID0gZmFsc2U7XG4gICAgZm9yKHZhciBrIGluIHRoaXMpe1xuICAgICAgaWYodGhpc1trXSA9PT0gdmFsKXtcbiAgICAgICAgYm9vbCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYm9vbDtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JqZWN0LnByb3RvdHlwZSwgXCJoYXNWYWx1ZVwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoT2JqZWN0LnByb3RvdHlwZS5qb2luKXtcbiAgICB3YXJuKE9iamVjdCwgJ2pvaW4nKTtcbiAgfVxuXG4gIE9iamVjdC5wcm90b3R5cGUuam9pbiA9IGZ1bmN0aW9uKGNiLCBkZWxpbSl7XG4gICAgZGVsaW0gPSBkZWxpbSB8fCAnLCAnO1xuICAgIHZhciBzdHIgPSAnJztcbiAgICB2YXIgZmlyc3QgPSB0cnVlO1xuXG4gICAgZm9yKHZhciBrIGluIHRoaXMpe1xuICAgICAgaWYoZmlyc3Qpe1xuICAgICAgICBmaXJzdCA9IGZhbHNlO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHN0ciArPSBkZWxpbTtcbiAgICAgIH1cbiAgICAgIHN0ciArPSB0aGlzW2tdO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPYmplY3QucHJvdG90eXBlLCBcImpvaW5cIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKE9iamVjdC5wcm90b3R5cGUua2V5cyl7XG4gICAgd2FybihPYmplY3QsICdrZXlzJyk7XG4gIH1cblxuICBPYmplY3QucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbigpe1xuICAgIHZhciBhcnIgPSBbXTtcbiAgICBmb3IodmFyIGsgaW4gdGhpcyl7XG4gICAgICBhcnIucHVzaChrKTtcbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JqZWN0LnByb3RvdHlwZSwgXCJrZXlzXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihPYmplY3QucHJvdG90eXBlLm1lcmdlKXtcbiAgICB3YXJuKE9iamVjdCwgJ21lcmdlJyk7XG4gIH1cblxuICBPYmplY3QucHJvdG90eXBlLm1lcmdlID0gZnVuY3Rpb24ob2JqKXtcbiAgICB2YXIgaXRlbSA9IHt9O1xuICAgIGZvcih2YXIgayBpbiB0aGlzKXtcbiAgICAgIGl0ZW1ba10gPSB0aGlzW2tdO1xuXG4gICAgICBmb3IodmFyIGsyIGluIG9iail7XG4gICAgICAgIGl0ZW1bazJdID0gb2JqW2syXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGl0ZW07XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9iamVjdC5wcm90b3R5cGUsIFwibWVyZ2VcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKE9iamVjdC5wcm90b3R5cGUub25seSl7XG4gICAgd2FybihPYmplY3QsICdvbmx5Jyk7XG4gIH1cblxuICBPYmplY3QucHJvdG90eXBlLm9ubHkgPSBmdW5jdGlvbihrZXlzKXtcbiAgICB2YXIga2V5cztcbiAgICBpZihhcmd1bWVudHMubGVuZ3RoID09PSAwKXtcbiAgICAgIGtleXMgPSBbXTtcbiAgICB9ZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoID09PSAxKXtcbiAgICAgIGlmKEFycmF5LmlzQXJyYXkoYXJndW1lbnRzWzBdKSl7XG4gICAgICAgIGtleXMgPSBhcmd1bWVudHNbMF07XG4gICAgICB9ZWxzZXtcbiAgICAgICAga2V5cyA9IFthcmd1bWVudHNbMF1dO1xuICAgICAgfVxuICAgIH1lbHNle1xuICAgICAga2V5cyA9IGFyZ3VtZW50cztcbiAgICB9XG5cbiAgICB2YXIgb2JqID0ge307XG4gICAgZm9yKHZhciBrIGluIHRoaXMpe1xuICAgICAgdmFyIGJvb2wgPSBmYWxzZTtcbiAgICAgIGZvcih2YXIgaT0wO2k8a2V5cy5sZW5ndGg7aSsrKXtcbiAgICAgICAgaWYoayA9PT0ga2V5c1tpXSl7XG4gICAgICAgICAgYm9vbCA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKGJvb2wpe1xuICAgICAgICBvYmpba10gPSB0aGlzW2tdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPYmplY3QucHJvdG90eXBlLCBcIm9ubHlcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKE9iamVjdC5wcm90b3R5cGUucmVqZWN0KXtcbiAgICB3YXJuKE9iamVjdCwgJ3JlamVjdCcpO1xuICB9XG5cbiAgT2JqZWN0LnByb3RvdHlwZS5yZWplY3QgPSBmdW5jdGlvbihjYil7XG4gICAgdmFyIG9iaiA9IHt9O1xuICAgIGZvcih2YXIgayBpbiB0aGlzKXtcbiAgICAgIHZhciB2YWwgPSB0aGlzW2tdO1xuICAgICAgaWYoIWNiKGssIHZhbCkpe1xuICAgICAgICBvYmpba10gPSB2YWw7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9iamVjdC5wcm90b3R5cGUsIFwicmVqZWN0XCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihPYmplY3QucHJvdG90eXBlLnNlbGVjdCl7XG4gICAgd2FybihPYmplY3QsICdzZWxlY3QnKTtcbiAgfVxuXG4gIE9iamVjdC5wcm90b3R5cGUuc2VsZWN0ID0gZnVuY3Rpb24oY2Ipe1xuICAgIHZhciBvYmogPSB7fTtcbiAgICBmb3IodmFyIGsgaW4gdGhpcyl7XG4gICAgICB2YXIgdmFsID0gdGhpc1trXTtcbiAgICAgIGlmKGNiKGssIHZhbCkpe1xuICAgICAgICBvYmpba10gPSB2YWw7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9iamVjdC5wcm90b3R5cGUsIFwic2VsZWN0XCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihPYmplY3QucHJvdG90eXBlLnZhbHVlcyl7XG4gICAgd2FybihPYmplY3QsICd2YWx1ZXMnKTtcbiAgfVxuXG4gIE9iamVjdC5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgYXJyID0gW107XG4gICAgZm9yKHZhciBrIGluIHRoaXMpe1xuICAgICAgYXJyLnB1c2godGhpc1trXSk7XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9iamVjdC5wcm90b3R5cGUsIFwidmFsdWVzXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCJyZXF1aXJlKCcuL3N0cmluZy9jYXBpdGFsaXplJyk7XG5yZXF1aXJlKCcuL3N0cmluZy9jYXNlQ21wJyk7XG5yZXF1aXJlKCcuL3N0cmluZy9jaGFycycpO1xucmVxdWlyZSgnLi9zdHJpbmcvZG93bmNhc2UnKTtcbnJlcXVpcmUoJy4vc3RyaW5nL2VtcHR5Jyk7XG5yZXF1aXJlKCcuL3N0cmluZy9lbmRzV2l0aCcpO1xucmVxdWlyZSgnLi9zdHJpbmcvZXhjbHVkZXMnKTtcbnJlcXVpcmUoJy4vc3RyaW5nL2dzdWInKTtcbnJlcXVpcmUoJy4vc3RyaW5nL2luY2x1ZGVzJyk7XG5yZXF1aXJlKCcuL3N0cmluZy9sc3RyaXAnKTtcbnJlcXVpcmUoJy4vc3RyaW5nL25vdEVtcHR5Jyk7XG5yZXF1aXJlKCcuL3N0cmluZy9yZXZlcnNlJyk7XG5yZXF1aXJlKCcuL3N0cmluZy9yc3RyaXAnKTtcbnJlcXVpcmUoJy4vc3RyaW5nL3N0YXJ0c1dpdGgnKTtcbnJlcXVpcmUoJy4vc3RyaW5nL3N0cmlwJyk7XG5yZXF1aXJlKCcuL3N0cmluZy9zdWInKTtcbnJlcXVpcmUoJy4vc3RyaW5nL3RpdGxlaXplJyk7XG5yZXF1aXJlKCcuL3N0cmluZy90b0Jvb2wnKTtcbnJlcXVpcmUoJy4vc3RyaW5nL3VwY2FzZScpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoU3RyaW5nLnByb3RvdHlwZS5jYXBpdGFsaXplKXtcbiAgICB3YXJuKFN0cmluZywgJ2NhcGl0YWxpemUnKTtcbiAgfVxuXG4gIFN0cmluZy5wcm90b3R5cGUuY2FwaXRhbGl6ZSA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHRoaXMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnN1YnN0cigxKTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJjYXBpdGFsaXplXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIFxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKFN0cmluZy5wcm90b3R5cGUuY2FzZUNtcCl7XG4gICAgd2FybihTdHJpbmcsICdjYXNlQ21wJyk7XG4gIH1cblxuICBTdHJpbmcucHJvdG90eXBlLmNhc2VDbXAgPSBmdW5jdGlvbih4KXtcbiAgICByZXR1cm4gdGhpcy50b0xvd2VyQ2FzZSgpID09PSB4LnRvTG93ZXJDYXNlKCk7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwiY2FzZUNtcFwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuICBcbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihTdHJpbmcucHJvdG90eXBlLmNoYXJzKXtcbiAgICB3YXJuKFN0cmluZywgJ2NoYXJzJyk7XG4gIH1cblxuICBTdHJpbmcucHJvdG90eXBlLmNoYXJzID0gZnVuY3Rpb24oKXtcbiAgICBpZihBcnJheS5wcm90b3R5cGUuZnJvbSl7XG4gICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzKTtcbiAgICB9ZWxzZXtcbiAgICAgIHZhciBhcnJheSA9IFtdO1xuXG4gICAgICBmb3IodmFyIGk9MDtpIDwgdGhpcy5sZW5ndGg7aSsrKXtcbiAgICAgICAgYXJyYXkucHVzaCh0aGlzLmNoYXJBdChpKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhcnJheTtcbiAgICB9XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwiY2hhcnNcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKFN0cmluZy5wcm90b3R5cGUuZG93bmNhc2Upe1xuICAgIHdhcm4oU3RyaW5nLCAnZG93bmNhc2UnKTtcbiAgfVxuXG4gIFN0cmluZy5wcm90b3R5cGUuZG93bmNhc2UgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiB0aGlzLnRvTG93ZXJDYXNlKCk7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwiZG93bmNhc2VcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKFN0cmluZy5wcm90b3R5cGUuZW1wdHkpe1xuICAgIHdhcm4oU3RyaW5nLCAnZW1wdHknKTtcbiAgfVxuXG4gIFN0cmluZy5wcm90b3R5cGUuZW1wdHkgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiB0aGlzLmxlbmd0aCA9PT0gMDtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJlbXB0eVwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIGlmKCFTdHJpbmcucHJvdG90eXBlLmVuZHNXaXRoKXtcbiAgICBTdHJpbmcucHJvdG90eXBlLmVuZHNXaXRoID0gZnVuY3Rpb24oeCl7XG4gICAgICByZXR1cm4gdGhpcy5zdWJzdHIoKHRoaXMubGVuZ3RoIC0geC5sZW5ndGgpLCB0aGlzLmxlbmd0aCkgPT09IHg7XG4gICAgfTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcImVuZHNXaXRoXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xuICB9XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcbiAgXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoU3RyaW5nLnByb3RvdHlwZS5leGNsdWRlcyl7XG4gICAgd2FybihTdHJpbmcsICdleGNsdWRlcycpO1xuICB9XG5cbiAgU3RyaW5nLnByb3RvdHlwZS5leGNsdWRlcyA9IGZ1bmN0aW9uKHgpe1xuICAgIHJldHVybiB0aGlzLmluZGV4T2YoeCkgPT09IC0xO1xuICB9XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwiZXhjbHVkZXNcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKFN0cmluZy5wcm90b3R5cGUuZ3N1Yil7XG4gICAgd2FybihTdHJpbmcsICdnc3ViJyk7XG4gIH1cblxuICBTdHJpbmcucHJvdG90eXBlLmdzdWIgPSBmdW5jdGlvbihhLGIpe1xuICAgIHJldHVybiB0aGlzLnNwbGl0KGEpLmpvaW4oYik7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwiZ3N1YlwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIGlmKCFTdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzKXtcbiAgICBTdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzID0gZnVuY3Rpb24oeCl7XG4gICAgICByZXR1cm4gdGhpcy5pbmRleE9mKHgpICE9PSAtMTtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJpbmNsdWRlc1wiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbiAgfVxufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihTdHJpbmcucHJvdG90eXBlLmxzdHJpcCl7XG4gICAgd2FybihTdHJpbmcsICdsc3RyaXAnKTtcbiAgfVxuXG4gIFN0cmluZy5wcm90b3R5cGUubHN0cmlwID0gZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlKC9eXFxzKy9nLCcnKTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJsc3RyaXBcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKFN0cmluZy5wcm90b3R5cGUubm90RW1wdHkpe1xuICAgIHdhcm4oU3RyaW5nLCAnbm90RW1wdHknKTtcbiAgfVxuXG4gIFN0cmluZy5wcm90b3R5cGUubm90RW1wdHkgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiB0aGlzLmxlbmd0aCAhPT0gMDtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJub3RFbXB0eVwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoU3RyaW5nLnByb3RvdHlwZS5yZXZlcnNlKXtcbiAgICB3YXJuKFN0cmluZywgJ3JldmVyc2UnKTtcbiAgfVxuXG4gIFN0cmluZy5wcm90b3R5cGUucmV2ZXJzZSA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIGFycmF5O1xuXG4gICAgaWYoQXJyYXkucHJvdG90eXBlLmZyb20pe1xuICAgICAgYXJyYXkgPSBBcnJheS5mcm9tKHRoaXMpLnJldmVyc2UoKTtcbiAgICB9ZWxzZXtcbiAgICAgIHZhciBhcnJheSA9IFtdO1xuXG4gICAgICBmb3IodmFyIGk9MDtpIDwgdGhpcy5sZW5ndGg7aSsrKXtcbiAgICAgICAgYXJyYXkudW5zaGlmdCh0aGlzLmNoYXJBdChpKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycmF5LmpvaW4oJycpO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInJldmVyc2VcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKFN0cmluZy5wcm90b3R5cGUucnN0cmlwKXtcbiAgICB3YXJuKFN0cmluZywgJ3JzdHJpcCcpO1xuICB9XG5cbiAgU3RyaW5nLnByb3RvdHlwZS5yc3RyaXAgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiB0aGlzLnJlcGxhY2UoL1xccyskL2csJycpO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInJzdHJpcFwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIGlmKCFTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGgpe1xuICAgIFN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aCA9IGZ1bmN0aW9uKHgpe1xuICAgICAgcmV0dXJuIHRoaXMuc3Vic3RyKDAsIHgubGVuZ3RoKSA9PT0geDtcbiAgICB9O1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwic3RhcnRzV2l0aFwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbiAgfVxufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihTdHJpbmcucHJvdG90eXBlLnN0cmlwKXtcbiAgICB3YXJuKFN0cmluZywgJ3N0cmlwJyk7XG4gIH1cblxuICBTdHJpbmcucHJvdG90eXBlLnN0cmlwID0gZnVuY3Rpb24oKXtcbiAgICBpZihTdHJpbmcucHJvdG90eXBlLnRyaW0pe1xuICAgICAgcmV0dXJuIHRoaXMudHJpbSgpO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIHRoaXMucmVwbGFjZSgvXlxccyt8XFxzKyQvZywnJyk7XG4gICAgfVxuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInN0cmlwXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihTdHJpbmcucHJvdG90eXBlLnN1Yil7XG4gICAgd2FybihTdHJpbmcsICdzdWInKTtcbiAgfVxuXG4gIFN0cmluZy5wcm90b3R5cGUuc3ViID0gZnVuY3Rpb24oYSxiKXtcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlKGEsIGIpO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInN1YlwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoU3RyaW5nLnByb3RvdHlwZS50aXRsZWl6ZSl7XG4gICAgd2FybihTdHJpbmcsICd0aXRsZWl6ZScpO1xuICB9XG5cbiAgU3RyaW5nLnByb3RvdHlwZS50aXRsZWl6ZSA9IGZ1bmN0aW9uKG9ubHlGaXJzdExldHRlcil7XG4gICAgcmV0dXJuIHRoaXMuc3BsaXQoJyAnKS5tYXAoZnVuY3Rpb24oc3RyKXtcbiAgICAgIHZhciBzID0gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgaWYob25seUZpcnN0TGV0dGVyID09PSBmYWxzZSl7XG4gICAgICAgIHMgKz0gc3RyLnN1YnN0cigxKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHMgKz0gc3RyLnN1YnN0cigxKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzO1xuICAgIH0pLmpvaW4oJyAnKTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJ0aXRsZWl6ZVwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoU3RyaW5nLnByb3RvdHlwZS50b0Jvb2wpe1xuICAgIHdhcm4oU3RyaW5nLCAndG9Cb29sJyk7XG4gIH1cblxuICBTdHJpbmcucHJvdG90eXBlLnRvQm9vbCA9IGZ1bmN0aW9uKCl7XG4gICAgaWYodGhpcyA9PT0gJ3RydWUnKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1lbHNlIGlmKHRoaXMgPT09ICdmYWxzZScpe1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJ0b0Jvb2xcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKFN0cmluZy5wcm90b3R5cGUudXBjYXNlKXtcbiAgICB3YXJuKFN0cmluZywgJ3VwY2FzZScpO1xuICB9XG5cbiAgU3RyaW5nLnByb3RvdHlwZS51cGNhc2UgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiB0aGlzLnRvVXBwZXJDYXNlKCk7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwidXBjYXNlXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iXX0=
