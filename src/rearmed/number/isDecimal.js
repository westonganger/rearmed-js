(function(){
  "use strict";

  var warn = require('./../functions/warn');
  if(Number.prototype.isDecimal){
    warn('Number', 'isDecimal');
  }

  Number.prototype.isDecimal = function(){
    if(Number.isInteger){
      return !Number.isInteger(this);
    }else{
      return isFinite(this) && Math.floor(this) !== this;
    }
  }

  Object.defineProperty(Number.prototype, "isDecimal", {enumerable: false});
}(this));
