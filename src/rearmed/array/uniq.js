(function(){
  "use strict";

  var simpleType = require('./../functions/simpleType');

  var warn = require('./../functions/warn');
  if(Array.prototype.uniq){
    warn('Array', 'uniq');
  }

  Array.prototype.uniq = function(cb){
    var uniqItems = [];
    var hasCallback = simpleType(cb) == 'Function';

    return this.filter(function(x,i){
      var val = hasCallback ? cb(x,i) : x;
      if(uniqItems.smartExcludes(val)){
        uniqItems.push(val);
        return true;
      }
    });
  };

  Object.defineProperty(Array.prototype, "uniq", {enumerable: false});
}(this));
