"use strict";

(function(){
  Array.prototype.compact = function(bad){
    bad = bad || [null, undefined];
    
    if(arguments.length >= 2 && !Array.isArray(bad)){
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
