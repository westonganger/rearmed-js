(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Object.prototype.keepIf){
    warn('Object', 'keepIf');
  }

  Object.prototype.keepIf = function(cb){
    var obj = {};
    for(var k in this){
      var val = this[k];
      if(cb(k, val)){
        obj[k] = val;
      }
    }
    return obj;
  };

  Object.defineProperty(Object.prototype, "keepIf", {enumerable: false});
}(this));
