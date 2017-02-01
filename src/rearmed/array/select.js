"use strict";

(function(){
  Array.prototype.select = function(cb){
    return this.filter(cb);
  };
  Object.defineProperty(Array.prototype, "select", {enumerable: false});
}(this));
