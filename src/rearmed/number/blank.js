(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Number.prototype.blank){
    warn('Number', 'blank');
  }

  Number.prototype.blank = function(){
    return false; // No number is considered blank, as rails
  };

  Object.defineProperty(Number.prototype, "blank", {enumerable: false});
}(this));
