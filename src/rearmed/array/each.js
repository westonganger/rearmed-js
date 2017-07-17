(function(){
  "use strict";

  var warn = require('./../functions/warn');
  if(Array.prototype.each){
    warn('Array', 'each');
  }

  Array.prototype.each = function(cb){
    for(var i=0;i<this.length;i++){
      cb(this[i], i);
    }
  };

  Object.defineProperty(Array.prototype, "each", {enumerable: false});
}(this));
