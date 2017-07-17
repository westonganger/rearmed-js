(function(){
  "use strict";

  var warn = require('./../functions/warn');
  if(Number.prototype.floor){
    warn('Number', 'floor');
  }

  Number.prototype.floor = function(){
    return Math.floor(this);
  };

  Object.defineProperty(Number.prototype, "floor", {enumerable: false});
}(this));
