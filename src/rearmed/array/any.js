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
