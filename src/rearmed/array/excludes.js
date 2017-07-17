(function(){
  "use strict";

  var warn = require('./../functions/warn');
  if(Array.prototype.excludes){
    warn('Array', 'excludes');
  }

  Array.prototype.excludes = function(x, fromIndex){
    var fromIndex = fromIndex || 0;
    var bool = true;
    for(var i=fromIndex;i<this.length;i++){
      if(this[i] === x){
        bool = false;
        break;
      }
    }
    return bool;
  };

  Object.defineProperty(Array.prototype, "excludes", {enumerable: false});
}(this));
