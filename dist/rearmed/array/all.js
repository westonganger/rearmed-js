(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Array.prototype.all){
    warn(Array, 'all');
  }

  Array.prototype.all = function(cb){
    return this.every(cb);
  };

  Object.defineProperty(Array.prototype, "all", {enumerable: false});
}(this));
