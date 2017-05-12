(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Array.range){
    warn('Array', 'range', true);
  }

  Array.range = function(start, end, step){
    if(!(typeof start == 'number' && !isNaN(start) && isFinite(start)) || !(typeof end == 'number' && !isNaN(end) && isFinite(end))){
      throw TypeError("start/end arguments must be numbers");
    }

    if(step === 0){
      throw TypeError("step argument cannot be zero");
    }else if(!step){
      step = 1;
    }

    if(end < start){
      step = -step;
    }

    var range = [];

    while(step > 0 ? end >= start : end <= start){
      range.push(start);
      start += step;
    }

    return range;
  };
}(this));
