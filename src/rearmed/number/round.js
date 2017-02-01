(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Number.prototype.round){
    warn(Number, 'round');
  }

  Number.prototype.round = function(){
    return Math.round(this);
  };

  Object.defineProperty(Number.prototype, "round", {enumerable: false});
}(this));
