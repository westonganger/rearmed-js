(function(){
  "use strict";

  var Rearmed = {
    isObjectLike: require('./../core/isObjectLike')
  };

  Object.rearmed.add({
    equals: function(obj2){
      for(var propName in this){
        if(this.hasOwnProperty(propName) != obj2.hasOwnProperty(propName)){
          return false;
        }else if(typeof this[propName] != typeof obj2[propName]){
          return false;
        }
      }
      for(var propName in obj2){
        var val = this[propName];
        var other = obj2[propName];
        if(this.hasOwnProperty(propName) != obj2.hasOwnProperty(propName)){
          return false;
        }else if(typeof val != typeof other){
          return false;
        }

        if(!this.hasOwnProperty(propName)){
          continue;
        }

        if(Array.isArray(val) && Array.isArray(other)){
          if(!val.equals(other)){
            return false;
          }
        }else if(Rearmed.isObjectLike(val) && Rearmed.isObjectLike(other)){
          if(!val.equals(other)){
            return false;
          }
        }else if(val != other){
         return false;
        }
      }
      return true;
    }
  });
}(this));
