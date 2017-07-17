(function(){
  "use strict";

  var warn = require('./../functions/warn');
  if(Array.prototype.all){
    warn('Array', 'all');
  }

  Array.prototype.all = function(cb){
    if(!cb){
      cb = function(){
        return true;
      }
    }
    return this.every(cb);
  };

  Object.defineProperty(Array.prototype, "all", {enumerable: false});
}(this));
