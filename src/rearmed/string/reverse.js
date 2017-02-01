(function(){
  "use strict";

  String.prototype.reverse = function(){
    var array;

    if(Array.prototype.from){
      array = Array.from(this).reverse();
    }else{
      var array = [];

      for(var i=0;i < this.length;i++){
        array.unshift(this.charAt(i));
      }
    }

    return array.join('');
  };
  Object.defineProperty(String.prototype, "reverse", {enumerable: false});
}(this));
