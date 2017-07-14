(function(){
  "use strict";

  Object.rearmed.add({
    all: function(cb){
      var bool = true;

      if(!cb){
        cb = function(k,v){
          return !!v;
        }
      }

      for(var k in this){
        if(!cb(k, this[k])){
          bool = false;
          break;
        }
      }

      return bool;
    }
  });
}(this));
