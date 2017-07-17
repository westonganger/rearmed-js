(function(){
  "use strict";
  
  var warn = require('./../functions/warn');
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
