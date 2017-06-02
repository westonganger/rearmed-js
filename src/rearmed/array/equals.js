(function(){
  "use strict";

  var Rearmed = {
    isObjectLike: require('./../core/isObjectLike'),
    equals: require('./../core/equals')
  };

  var warn = require('./../core/warn');
  if(Array.prototype.equals){
    warn('Array', 'equals');
  }

  Array.prototype.equals = function(array){
    return Rearmed.equals(this, array);
  }

  Object.defineProperty(Array.prototype, "equals", {enumerable: false});
}(this));
