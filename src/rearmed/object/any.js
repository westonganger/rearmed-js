(function(){
  "use strict";

  Object.rearmed.add({
    any: function(cb){
      var bool = false;

      if(!cb){
        cb = function(){
          return true;
        }
      }

      for(var k in this){
        if(cb(k, this[k])){
          bool = true;
          break;
        }
      }
      return bool;
    }
  });
}(this));
