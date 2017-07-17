(function(){
  "use strict";

  var warn = require('./../functions/warn');
  if(Array.prototype.tap){
    warn('Array', 'tap');
  }

  Array.prototype.tap = function(cb){
    for(var i=0; i < this.length; i++){
      cb(this[i], i);
    }
    return this;
  };

  Object.defineProperty(Array.prototype, "tap", {enumerable: false});
}(this));
