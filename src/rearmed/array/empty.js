(function(){
  "use strict";

  var warn = require('./../functions/warn');
  if(Array.prototype.empty){
    warn('Array', 'empty');
  }

  Array.prototype.empty = function(){
    return this.length === 0;
  };

  Object.defineProperty(Array.prototype, "empty", {enumerable: false});
}(this));
