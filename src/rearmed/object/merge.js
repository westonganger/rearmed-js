(function(){
  "use strict";

  Object.rearmed.add({
    merge: function(obj){
      var item = {};
      for(var k in this){
        item[k] = this[k];

        for(var k2 in obj){
          item[k2] = obj[k2];
        }
      }
      return item;
    }
  });
}(this));
