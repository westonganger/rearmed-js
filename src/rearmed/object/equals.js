(function(){
  "use strict";

  var Rearmed = {
    equals: require('./../functions/equals')
  };

  Object.rearmed.add({
    equals: function(obj2){
      return Rearmed.equals(this, obj2);
    }
  });
}(this));
