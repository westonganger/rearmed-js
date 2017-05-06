(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Number.prototype.isOdd){
    warn('Number', 'isOdd');
  }

  Number.prototype.isOdd = function(){
    return isFinite(this) && Math.abs(this % 2) === 1;
  };

  Object.defineProperty(Number.prototype, "isOdd", {enumerable: false});
}(this));
