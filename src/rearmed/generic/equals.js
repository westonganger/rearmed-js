(function(){
  "use strict";

  var warn = require('./../functions/warn');
  var equals = require('./../functions/equals');

  if(Object.prototype.equals){
    warn('Object', 'equals');
  }

  Object.prototype.equals = function(x){
    return equals(this, x);
  };

  Object.defineProperty(Object.prototype, "equals", {enumerable: false});
}(this));
