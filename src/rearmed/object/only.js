"use strict";

(function(){
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
}(this));
