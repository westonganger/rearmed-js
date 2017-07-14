(function(){
  "use strict";

  Object.rearmed.add({
    notEmpty: function(){
      return Object.keys(this).length > 0;
    }
  });
}(this));
