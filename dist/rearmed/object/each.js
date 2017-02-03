(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Object.prototype.each){
    warn(Object, 'each');
  }

  Object.prototype.each = function(cb){
    for(var k in this){
      cb(k, this[k]);
    }
  };

  Object.defineProperty(Object.prototype, "each", {enumerable: false});
}(this));
