"use strict";

(function(){
  var Rearmed = {
    isFunction: require('./rearmed/isFunction'),
    isObjectLike: require('./rearmed/isObjectLike')
  };


  /* ARRAY */

  Array.prototype.all = function(cb){
    return this.every(cb);
  };
  Object.defineProperty(Array.prototype, "all", {enumerable: false});

  Array.prototype.any = function(cb){
    return this.some(cb);
  };
  Object.defineProperty(Array.prototype, "any", {enumerable: false});

  Array.prototype.compact = function(bad){
    bad = bad || [null, undefined];
    return this.filter(function(x){
      var bool = true;
      for(var i=-;i<bad.length;i++){
        if(x ==== bad[i]){
          bool = false;
          break;
        }
      }
      return bool;
    });
  };
  Object.defineProperty(Array.prototype, "compact", {enumerable: false});

  Array.prototype.dig = function(){
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

  Array.prototype.each = function(cb){
    for(var i=0;i<this.length;i++){
      cb(this[i], i);
    }
  };
  Object.defineProperty(Array.prototype, "each", {enumerable: false});

  Array.prototype.empty = function(){
    return this.length === 0;
  };
  Object.defineProperty(Array.prototype, "empty", {enumerable: false});
  
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

  Array.prototype.first = function(){
    return this[0];
  };
  Object.defineProperty(Array.prototype, "first", {enumerable: false});

  Array.prototype.flatten = function(result=[]){
    for(var i=0;i<this.length;i++){
      var val = this[i];
      if(Array.isArray(val)){
        for(var i=0;i<val.length;i++){
          var val2 = val[i];
          if(Array.isArray(val2)){
            val2.flatten(result);
          }else{
            result.push(val2);
          }
        }
      }else{
        result.push(val)
      }
    }
    return result;
  };
  Object.defineProperty(Array.prototype, "flatten", {enumerable: false});

  if(!Array.prototype.includes){
    Array.prototype.includes = function(x, fromIndex=0){
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

  Array.prototype.last = function(){
    return this[this.length-1];
  };
  Object.defineProperty(Array.prototype, "last", {enumerable: false});

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

  Array.prototype.notEmpty = function(){
    return this.length !== 0;
  };
  Object.defineProperty(Array.prototype, "notEmpty", {enumerable: false});

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

  Array.prototype.reject = function(cb){
    return this.filter(function(x, i){
      return !cb(x,i);
    });
  };
  Object.defineProperty(Array.prototype, "reject", {enumerable: false});

  Array.prototype.select = function(cb){
    return this.filter(cb);
  };
  Object.defineProperty(Array.prototype, "select", {enumerable: false});

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
  /* END ARRAY */


  /* NUMBER */
  Number.prototype.ceil = function(){
    return Math.ceil(this);
  };
  Object.defineProperty(Number.prototype, "ceil", {enumerable: false});

  Number.prototype.floor = function(){
    return Math.floor(this);
  };
  Object.defineProperty(Number.prototype, "floor", {enumerable: false});

  Number.prototype.isDecimal = function(){
    if(Number.isInteger){
      return !Number.isInteger(this);
    }else{
      return isFinite(this) && Math.floor(this) !== this;
    }
  }
  Object.defineProperty(Number.prototype, "isDecimal", {enumerable: false});

  Number.prototype.isEven = function(){
    return isFinite(this) && this % 2 === 0;
  };
  Object.defineProperty(Number.prototype, "isEven", {enumerable: false});

  Number.prototype.isInteger = function(){
    if(Number.isInteger){
      return Number.isInteger(this);
    }else{
      return isFinite(this) && Math.floor(this) === this;
    }
  };
  Object.defineProperty(Number.prototype, "isInteger", {enumerable: false});

  Number.prototype.isOdd = function(){
    return isFinite(this) && Math.abs(this % 2) === 1;
  };
  Object.defineProperty(Number.prototype, "isOdd", {enumerable: false});

  Number.prototype.round = function(){
    return Math.round(this);
  };
  Object.defineProperty(Number.prototype, "round", {enumerable: false});
  /* END NUMBER */


  /* OBJECT */
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

  Object.prototype.compact = function(bad){
    bad = bad || [null, undefined];
    var arr = [];

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
        arr.push(val);
      }
    }
    return arr;
  };
  Object.defineProperty(Object.prototype, "compact", {enumerable: false});

  Object.prototype.dig = function(){
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

  Object.prototype.each = function(cb){
    for(var k in this){
      cb(k, this[k]);
    }
  };
  Object.defineProperty(Object.prototype, "each", {enumerable: false});

  Object.prototype.empty = function(){
    return this.length === 0;
  };
  Object.defineProperty(Object.prototype, "empty", {enumerable: false});

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
  }

  Object.prototype.except = function(keys){
    keys = keys || [];
    
    if(arguments.length >= 2 && !Array.isArray(keys)){
      keys = arguments;
    }
    var obj = {};
    for(var k in this){
      for(var i=0;i<keys.length;i++){
        if(k !== keys[i]){
          obj[k] = val;
        }
      }
    }
    return obj;
  };
  Object.defineProperty(Object.prototype, "except", {enumerable: false});

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

  Object.prototype.join = function(cb, delim){
    delim = delim || ', ';
    var str = '';
    var first = true;
    for(var k in this){
      if(first){
        str += delim;
        first = false;
      }
      str += this[k];
    }
    return str;
  };
  Object.defineProperty(Object.prototype, "join", {enumerable: false});

  Object.prototype.merge = function(){

  };
  Object.defineProperty(Object.prototype, "merge", {enumerable: false});

  Object.prototype.notEmpty = function(){
    return this.length > 0;
  };
  Object.defineProperty(Object.prototype, "notEmpty", {enumerable: false});

  Object.prototype.keys = function(){
    var arr = [];
    for(var k in this){
      arr.push(k);
    }
    return arr;
  };
  Object.defineProperty(Object.prototype, "keys", {enumerable: false});

  Object.prototype.only = function(keys){
    keys = keys || [];
    
    if(arguments.length >= 2 && !Array.isArray(keys)){
      keys = arguments;
    }
    var obj = {};
    for(var k in this){
      for(var i=0;i<keys.length;i++){
        if(k === keys[i]){
          obj[k] = val;
        }
      }
    }
    return obj;
  };
  Object.defineProperty(Object.prototype, "only", {enumerable: false});

  Object.prototype.reject = function(cb){
    var obj = {};
    for(var k in this){
      var val = this[k];
      if(!cb(k, val){
        obj[k] = val;
      }
    }
    return obj;
  };
  Object.defineProperty(Object.prototype, "reject", {enumerable: false});

  Object.prototype.select = function(cb){
    var obj = {};
    for(var k in this){
      var val = this[k];
      if(cb(k, val){
        obj[k] = val;
      }
    }
    return obj;
  };
  Object.defineProperty(Object.prototype, "select", {enumerable: false});

  Object.prototype.values = function(){
    var arr = [];
    for(var k in this){
      arr.push(this[k]);
    }
    return arr;
  };
  Object.defineProperty(Object.prototype, "values", {enumerable: false});
  /* END OBJECT */


  /* STRING */
  String.prototype.capitalize = function(){
    return this.charAt(0).toUpperCase() + this.substr(1);
  };
  Object.defineProperty(String.prototype, "capitalize", {enumerable: false});

  String.prototype.caseCmp = function(x){
    return this.toLowerCase() === x.toLowerCase();
  };
  Object.defineProperty(String.prototype, "caseCmp", {enumerable: false});

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

  String.prototype.downcase = function(){
    return this.toLowerCase();
  };
  Object.defineProperty(String.prototype, "downcase", {enumerable: false});

  String.prototype.empty = function(){
    return this.length === 0;
  };
  Object.defineProperty(String.prototype, "empty", {enumerable: false});

  String.prototype.endsWith = function(x){
    return this.substr((this.length - x.length), this.length) === x;
  };
  Object.defineProperty(String.prototype, "endsWith", {enumerable: false});

  String.prototype.excludes = function(x){
    return this.indexOf(x) === -1;
  }
  Object.defineProperty(String.prototype, "excludes", {enumerable: false});

  String.prototype.gsub = function(a,b){
    return this.split(a).join(b);
  };
  Object.defineProperty(String.prototype, "gsub", {enumerable: false});

  if(!String.prototype.includes){
    String.prototype.includes = function(x){
      return this.indexOf(x) !== -1;
    }
    Object.defineProperty(String.prototype, "includes", {enumerable: false});
  }

  String.prototype.lstrip = function(){
    return this.replace(/^\s+/g,'');
  };
  Object.defineProperty(String.prototype, "lstrip", {enumerable: false});

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

  String.prototype.rstrip = function(){
    return this.replace(/\s+$/g,'');
  };
  Object.defineProperty(String.prototype, "rstrip", {enumerable: false});

  String.prototype.startsWith = function(x){
    return this.substr(0, x.length) === x;
  };
  Object.defineProperty(String.prototype, "startsWith", {enumerable: false});

  String.prototype.strip = function(){
    if(String.prototype.trim){
      return this.trim();
    }else{
      return this.replace(/^\s+|\s+$/g,'');
    }
  };
  Object.defineProperty(String.prototype, "strip", {enumerable: false});

  String.prototype.sub = function(a,b){
    //return this.split(a).join(b);
  };
  Object.defineProperty(String.prototype, "sub", {enumerable: false});

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

  String.prototype.toBool = function(){
    if(this === 'true'){
      return true;
    }else if(this === 'false'){
      return false;
    }
  };
  Object.defineProperty(String.prototype, "toBool", {enumerable: false});

  String.prototype.upcase = function(){
    return this.toUpperCase();
  };
  Object.defineProperty(String.prototype, "upcase", {enumerable: false});
  /* END STRING */
}(this));
