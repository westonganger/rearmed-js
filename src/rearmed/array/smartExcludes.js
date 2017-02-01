(function(){
  "use strict";

  require('./equals');
  require('./../object/equals');

  var Rearmed = {
    isObjectLike: require('./../core/isObjectLike')
  };

  var warn = require('./../core/warn');
  if(Array.prototype.smartExcludes){
    warn(Array, 'smartExcludes');
  }

  Array.prototype.smartExcludes = function(x, fromIndex){
    var fromIndex = fromIndex || 0;
    var bool = true;
    for(var i=fromIndex;i<this.length;i++){
      var val = this[i];
      if(Rearmed.isObjectLike(val)){
        if(val.equals(x)){
          bool = false;
          break;
        }
      }else if(val === x){
        bool = false;
        break;
      }
    }
    return bool;
  };

  Object.defineProperty(Array.prototype, "smartExcludes", {enumerable: false});
}(this));
