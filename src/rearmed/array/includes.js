"use strict";

(function(){
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
}(this));
