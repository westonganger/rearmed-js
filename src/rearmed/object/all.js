"use strict";

(function(){
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
