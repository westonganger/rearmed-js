(function(){
  "use strict";

  var warn = require('./../functions/warn');
  var isBlank = require('./../functions/isBlank');

  if(Object.prototype.isPresent){
    warn('Object', 'isPresent');
  }

  Object.prototype.isPresent = function(){
    return !isBlank(this);
  };

  Object.defineProperty(Object.prototype, "isPresent", {enumerable: false});
}(this));
