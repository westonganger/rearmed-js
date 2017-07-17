(function(){
  "use strict";

  var warn = require('./../functions/warn');
  var simpleType = require('./../functions/simpleType');

  if(Object.prototype.simpleType){
    warn('Object', 'simpleType');
  }

  Object.prototype.simpleType = function(){
    return simpleType(this);
  };

  Object.defineProperty(Object.prototype, "simpleType", {enumerable: false});
}(this));
