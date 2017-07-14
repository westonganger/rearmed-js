(function(){
  "use strict";

  Object.rearmed.add({
    each: function(cb){
      for(var k in this){
        cb(k, this[k]);
      }
    }
  });
}(this));
