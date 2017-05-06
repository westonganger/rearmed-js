(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Array.prototype.groupBy){
    warn('Array', 'groupBy');
  }

  Array.prototype.groupBy = function(cb){
    var hash = {};
    for(var i=0;i<this.length;i++){
      var val = this[i];
      var key = cb(val, i);
      hash[key] = hash[key] || [];
      hash[key].push(val);
    }
    return hash;
  };

  Object.defineProperty(Array.prototype, "groupBy", {enumerable: false});
}(this));
