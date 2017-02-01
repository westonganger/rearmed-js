"use strict";

(function(){
  Array.prototype.flatten = function(result=[]){
    for(var i=0;i<this.length;i++){
      var val = this[i];
      if(Array.isArray(val)){
        for(var i=0;i<val.length;i++){
          var val2 = val[i];
          if(Array.isArray(val2)){
            val2.flatten(result);
          }else{
            result.push(val2);
          }
        }
      }else{
        result.push(val)
      }
    }
    return result;
  };
  Object.defineProperty(Array.prototype, "flatten", {enumerable: false});
}(this));
