"use strict";

(function(){
  /* ARRAY */
  Array.prototype.any = function(cb){
    return _.some(this, cb);
  };

  Array.prototype.compact = function(cb){
    return _.compact(this, cb);
  };

  Array.prototype.empty = function(){
    return this.length === 0;
  };

  Array.prototype.not_empty = function(){
    return this.length !== 0;
  };

  if(!Array.prototype.map){
    Array.prototype.map = function(cb){
      return _.map(this, cb);
    };
  }

  if(!Array.prototype.delete_if){
    Array.prototype.delete_if = function(cb){

    };
  }

  Array.prototype.each = function(cb){
    this.forEach(cb);
  };
  /* END ARRAY */


  /* NUMBER */
  Number.prototype.ceil = function(){
    return Math.ceil(this);
  };

  Number.prototype.isEven = function(){
    return isFinite(this) && this % 2 === 0;
  };

  Number.prototype.floor = function(){
    return Math.floor(this);
  };

  Number.prototype.isOdd = function(){
    return isFinite(this) && Math.abs(this % 2) === 1;
  };

  Number.prototype.round = function(){
    return Math.round(this);
  };

  Number.prototype.isInteger = function(){
    if(Number.prototype.isInteger){
      return this.isInteger();
    }else{
      return isFinite(this) && Math.floor(this) === this;
    }
  };

  Number.prototype.isDecimal = function(){
    if(Number.prototype.isInteger){
      return !this.isInteger();
    }else{
      return isFinite(this) && Math.floor(this) !== this;
    }
  }

  /* END NUMBER */


  /* STRING */
  String.prototype.capitalize = function(){
    return this.charAt(0).toUpperCase() + this.substr(1);
  };

  String.prototype.caseCmp = function(x){
    return this.toLowerCase() === x.toLowerCase();
  };

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

  String.prototype.downcase = function(){
    return this.toLowerCase();
  };

  String.prototype.empty = function(){
    return this.length === 0;
  };

  String.prototype.endsWith = function(x){
    return this.substr((this.length - x.length), this.length) === x;
  };

  String.prototype.excludes = function(x){
    return this.indexOf(x) === -1;
  }

  String.prototype.gsub = function(a,b){
    return this.split(a).join(b);
  };

  if(!String.prototype.includes){
    String.prototype.includes = function(x){
      return this.indexOf(x) !== -1;
    }
  }

  String.prototype.lstrip = function(){
    return this.replace(/^\s+/g,'');
  };

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

  String.prototype.rstrip = function(){
    return this.replace(/\s+$/g,'');
  };

  String.prototype.startsWith = function(x){
    return this.substr(0, x.length) === x;
  };

  String.prototype.strip = function(){
    if(String.prototype.trim){
      return this.trim();
    }else{
      return this.replace(/^\s+|\s+$/g,'');
    }
  };

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

  String.prototype.toBool = function(){
    if(this === 'true'){
      return true;
    }else if(this === 'false'){
      return false;
    }
  };

  String.prototype.upcase = function(){
    return this.toUpperCase();
  };
  /* END STRING */
}(this));
