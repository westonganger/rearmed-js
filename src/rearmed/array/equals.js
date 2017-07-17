(function(){
  "use strict";

  var equals = require('./../functions/equals');

  var warn = require('./../functions/warn');
  if(Array.prototype.equals){
    warn('Array', 'equals');
  }

  Array.prototype.equals = function(array){
    return equals(this, array);
  }

  Object.defineProperty(Array.prototype, "equals", {enumerable: false});
}(this));
