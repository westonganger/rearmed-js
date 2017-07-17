(function(){
  "use strict";

  var warn = require('./../functions/warn');
  var isBlank = require('./../functions/isBlank');

  if(Object.prototype.presence){
    warn('Object', 'presence');
  }

  Object.prototype.presence = function(){
    return !isBlank(this) ? this : false;
  };

  Object.defineProperty(Object.prototype, "presence", {enumerable: false});
}(this));
