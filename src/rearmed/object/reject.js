(function(){
  "use strict";

  Object.rearmed.add({
    reject: function(cb){
      var obj = {};
      for(var k in this){
        var val = this[k];
        if(!cb(k, val)){
          obj[k] = val;
        }
      }
      return obj;
    }
  });
}(this));
