(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Array.prototype.last){
    warn(Array, 'last');
  }

  Array.prototype.last = function(){
    return this[this.length-1];
  };

  Object.defineProperty(Array.prototype, "last", {enumerable: false});
}(this));
