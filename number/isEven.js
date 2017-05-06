(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Number.prototype.isEven){
    warn('Number', 'isEven');
  }

  Number.prototype.isEven = function(){
    return isFinite(this) && this % 2 === 0;
  };

  Object.defineProperty(Number.prototype, "isEven", {enumerable: false});
}(this));
