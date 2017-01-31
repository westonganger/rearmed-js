"use strict";

(function(){
  /* ARRAY */

  Array.prototype.all = function(cb){
    return this.every(cb);
  };
  Object.defineProperty(Array.prototype, "all", {enumerable: false});

  Array.prototype.any = function(cb){
    return this.some(cb);
  };
  Object.defineProperty(Array.prototype, "any", {enumerable: false});

  Array.prototype.compact = function(){
    return this.filter(function(x){
      return (x !== null) && (x !== undefined) && (x !== '')
    });
  };
  Object.defineProperty(Array.prototype, "compact", {enumerable: false});

  Array.prototype.dig = function(){
    var val = this;
    for(var i=0;i<arguments.length;i++){
      if(val instanceof Array || (val instanceof Object && val !== null)){
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
      if(this[i] instanceof Array && other instanceof Array){
        if(!val.equals(other)){
          return false;
        }
      }else if(val instanceof Object && other instanceof Object){
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
      var hasCallback = cb instanceof Function
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
      var hasCallback = cb instanceof Function
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
    var hasCallback = cb instanceof Function;
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
    var hasCallback = cb instanceof Function;
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
    var hasCallback = cb instanceof Function;
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
    var hasCallback = cb instanceof Function;
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
      if(val instanceof Array || (val instanceof Object && val !== null)){
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
      if(val instanceof Array || (val instanceof Object && val !== null)){
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
    var hasCallback = cb instanceof Function;
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
    var hasCallback = cb instanceof Function;

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
  Object.prototype.equals = function(object2){
    for(propName in this){
      if(this.hasOwnProperty(propName) != object2.hasOwnProperty(propName)){
        return false;
      }else if(typeof this[propName] != typeof object2[propName]){
        return false;
      }
    }
    for(propName in object2){
      if(this.hasOwnProperty(propName) != object2.hasOwnProperty(propName)){
        return false;
      }else if(typeof this[propName] != typeof object2[propName]){
        return false;
      }

      if(!this.hasOwnProperty(propName)){
        continue;
      }

      if(this[propName] instanceof Array && object2[propName] instanceof Array){
        if(!this[propName].equals(object2[propName])){
          return false;
        }
      }else if(this[propName] instanceof Object && object2[propName] instanceof Object){
        if(!this[propName].equals(object2[propName])){
          return false;
        }
      }else if(this[propName] != object2[propName]){
       return false;
      }
    }
    return true;
  }
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
