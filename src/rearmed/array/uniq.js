(function(){
  "use strict";

  var Rearmed = {
    isFunction: require('./../core/isFunction')
  };

  Array.prototype.uniq = function(cb){
    var uniqItems = [];
    var hasCallback = Rearmed.isFunction(cb);

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
