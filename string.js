(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function warn(type, method){
  console.warn("Rearmed-js Overriding " + type + " method: " + method, '. If this is a built-in browser method please report on Rearmed-js github issues.');
};

module.exports = warn;

},{}],2:[function(require,module,exports){
require('./string/capitalize');
require('./string/caseCmp');
require('./string/chars');
require('./string/downcase');
require('./string/empty');
require('./string/endsWith');
require('./string/excludes');
require('./string/gsub');
require('./string/includes');
require('./string/lstrip');
require('./string/notEmpty');
require('./string/reverse');
require('./string/rstrip');
require('./string/startsWith');
require('./string/strip');
require('./string/sub');
require('./string/titleize');
require('./string/toBool');
require('./string/upcase');

},{"./string/capitalize":3,"./string/caseCmp":4,"./string/chars":5,"./string/downcase":6,"./string/empty":7,"./string/endsWith":8,"./string/excludes":9,"./string/gsub":10,"./string/includes":11,"./string/lstrip":12,"./string/notEmpty":13,"./string/reverse":14,"./string/rstrip":15,"./string/startsWith":16,"./string/strip":17,"./string/sub":18,"./string/titleize":19,"./string/toBool":20,"./string/upcase":21}],3:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(String.prototype.capitalize){
    warn('String', 'capitalize');
  }

  String.prototype.capitalize = function(){
    return this.charAt(0).toUpperCase() + this.substr(1);
  };

  Object.defineProperty(String.prototype, "capitalize", {enumerable: false});
}(this));

},{"./../core/warn":1}],4:[function(require,module,exports){
(function(){
  "use strict";
  
  var warn = require('./../core/warn');
  if(String.prototype.caseCmp){
    warn('String', 'caseCmp');
  }

  String.prototype.caseCmp = function(x){
    return this.toLowerCase() === x.toLowerCase();
  };

  Object.defineProperty(String.prototype, "caseCmp", {enumerable: false});
}(this));

},{"./../core/warn":1}],5:[function(require,module,exports){
(function(){
  "use strict";
  
  var warn = require('./../core/warn');
  if(String.prototype.chars){
    warn('String', 'chars');
  }

  String.prototype.chars = function(){
    if(Array.prototype.from){
      return Array.from(this);
    }else{
      var array = [];

      for(var i=0;i < this.length;i++){
        array.push(this.charAt(i));
      }

      return array;
    }
  };

  Object.defineProperty(String.prototype, "chars", {enumerable: false});
}(this));

},{"./../core/warn":1}],6:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(String.prototype.downcase){
    warn('String', 'downcase');
  }

  String.prototype.downcase = function(){
    return this.toLowerCase();
  };

  Object.defineProperty(String.prototype, "downcase", {enumerable: false});
}(this));

},{"./../core/warn":1}],7:[function(require,module,exports){
(function(){
  "use strict";

  if(!String.prototype.empty){
    String.prototype.empty = function(){
      return this.length === 0;
    };

    Object.defineProperty(String.prototype, "empty", {enumerable: false});
  }
}(this));

},{}],8:[function(require,module,exports){
(function(){
  "use strict";

  if(!String.prototype.endsWith){
    String.prototype.endsWith = function(x){
      return this.substr((this.length - x.length), this.length) === x;
    };

    Object.defineProperty(String.prototype, "endsWith", {enumerable: false});
  }
}(this));

},{}],9:[function(require,module,exports){
(function(){
  "use strict";
  
  var warn = require('./../core/warn');
  if(String.prototype.excludes){
    warn('String', 'excludes');
  }

  String.prototype.excludes = function(x){
    return this.indexOf(x) === -1;
  }

  Object.defineProperty(String.prototype, "excludes", {enumerable: false});
}(this));

},{"./../core/warn":1}],10:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(String.prototype.gsub){
    warn('String', 'gsub');
  }

  String.prototype.gsub = function(a,b){
    return this.split(a).join(b);
  };

  Object.defineProperty(String.prototype, "gsub", {enumerable: false});
}(this));

},{"./../core/warn":1}],11:[function(require,module,exports){
(function(){
  "use strict";

  if(!String.prototype.includes){
    String.prototype.includes = function(x){
      return this.indexOf(x) !== -1;
    }

    Object.defineProperty(String.prototype, "includes", {enumerable: false});
  }
}(this));

},{}],12:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(String.prototype.lstrip){
    warn('String', 'lstrip');
  }

  String.prototype.lstrip = function(){
    return this.replace(/^\s+/g,'');
  };

  Object.defineProperty(String.prototype, "lstrip", {enumerable: false});
}(this));

},{"./../core/warn":1}],13:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(String.prototype.notEmpty){
    warn('String', 'notEmpty');
  }

  String.prototype.notEmpty = function(){
    return this.length !== 0;
  };

  Object.defineProperty(String.prototype, "notEmpty", {enumerable: false});
}(this));

},{"./../core/warn":1}],14:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(String.prototype.reverse){
    warn('String', 'reverse');
  }

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

},{"./../core/warn":1}],15:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(String.prototype.rstrip){
    warn('String', 'rstrip');
  }

  String.prototype.rstrip = function(){
    return this.replace(/\s+$/g,'');
  };

  Object.defineProperty(String.prototype, "rstrip", {enumerable: false});
}(this));

},{"./../core/warn":1}],16:[function(require,module,exports){
(function(){
  "use strict";

  if(!String.prototype.startsWith){
    String.prototype.startsWith = function(x){
      return this.substr(0, x.length) === x;
    };

    Object.defineProperty(String.prototype, "startsWith", {enumerable: false});
  }
}(this));

},{}],17:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(String.prototype.strip){
    warn('String', 'strip');
  }

  String.prototype.strip = function(){
    if(String.prototype.trim){
      return this.trim();
    }else{
      return this.replace(/^\s+|\s+$/g,'');
    }
  };

  Object.defineProperty(String.prototype, "strip", {enumerable: false});
}(this));

},{"./../core/warn":1}],18:[function(require,module,exports){
(function(){
  "use strict";

  /*
  if(String.prototype.sub){
    console.warn("Rearmed-js Overriding String method: sub. The original sub method is useless and has been removed from the JS standard. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/sub');
  }
  */

  String.prototype.sub = function(a,b){
    return this.replace(a, b);
  };

  Object.defineProperty(String.prototype, "sub", {enumerable: false});
}(this));

},{}],19:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(String.prototype.titleize){
    warn('String', 'titleize');
  }

  String.prototype.titleize = function(onlyFirstLetter){
    return this.split(' ').map(function(str){
      var s = str.charAt(0).toUpperCase();
      if(onlyFirstLetter === false){
        s += str.substr(1).toLowerCase();
      }else{
        s += str.substr(1);
      }
      return s;
    }).join(' ');
  };

  Object.defineProperty(String.prototype, "titleize", {enumerable: false});
}(this));

},{"./../core/warn":1}],20:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(String.prototype.toBool){
    warn('String', 'toBool');
  }

  String.prototype.toBool = function(){
    if(this === 'true'){
      return true;
    }else if(this === 'false'){
      return false;
    }
  };

  Object.defineProperty(String.prototype, "toBool", {enumerable: false});
}(this));

},{"./../core/warn":1}],21:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(String.prototype.upcase){
    warn('String', 'upcase');
  }

  String.prototype.upcase = function(){
    return this.toUpperCase();
  };

  Object.defineProperty(String.prototype, "upcase", {enumerable: false});
}(this));

},{"./../core/warn":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvcmVhcm1lZC9jb3JlL3dhcm4uanMiLCJzcmMvcmVhcm1lZC9zdHJpbmcuanMiLCJzcmMvcmVhcm1lZC9zdHJpbmcvY2FwaXRhbGl6ZS5qcyIsInNyYy9yZWFybWVkL3N0cmluZy9jYXNlQ21wLmpzIiwic3JjL3JlYXJtZWQvc3RyaW5nL2NoYXJzLmpzIiwic3JjL3JlYXJtZWQvc3RyaW5nL2Rvd25jYXNlLmpzIiwic3JjL3JlYXJtZWQvc3RyaW5nL2VtcHR5LmpzIiwic3JjL3JlYXJtZWQvc3RyaW5nL2VuZHNXaXRoLmpzIiwic3JjL3JlYXJtZWQvc3RyaW5nL2V4Y2x1ZGVzLmpzIiwic3JjL3JlYXJtZWQvc3RyaW5nL2dzdWIuanMiLCJzcmMvcmVhcm1lZC9zdHJpbmcvaW5jbHVkZXMuanMiLCJzcmMvcmVhcm1lZC9zdHJpbmcvbHN0cmlwLmpzIiwic3JjL3JlYXJtZWQvc3RyaW5nL25vdEVtcHR5LmpzIiwic3JjL3JlYXJtZWQvc3RyaW5nL3JldmVyc2UuanMiLCJzcmMvcmVhcm1lZC9zdHJpbmcvcnN0cmlwLmpzIiwic3JjL3JlYXJtZWQvc3RyaW5nL3N0YXJ0c1dpdGguanMiLCJzcmMvcmVhcm1lZC9zdHJpbmcvc3RyaXAuanMiLCJzcmMvcmVhcm1lZC9zdHJpbmcvc3ViLmpzIiwic3JjL3JlYXJtZWQvc3RyaW5nL3RpdGxlaXplLmpzIiwic3JjL3JlYXJtZWQvc3RyaW5nL3RvQm9vbC5qcyIsInNyYy9yZWFybWVkL3N0cmluZy91cGNhc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZnVuY3Rpb24gd2Fybih0eXBlLCBtZXRob2Qpe1xuICBjb25zb2xlLndhcm4oXCJSZWFybWVkLWpzIE92ZXJyaWRpbmcgXCIgKyB0eXBlICsgXCIgbWV0aG9kOiBcIiArIG1ldGhvZCwgJy4gSWYgdGhpcyBpcyBhIGJ1aWx0LWluIGJyb3dzZXIgbWV0aG9kIHBsZWFzZSByZXBvcnQgb24gUmVhcm1lZC1qcyBnaXRodWIgaXNzdWVzLicpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuO1xuIiwicmVxdWlyZSgnLi9zdHJpbmcvY2FwaXRhbGl6ZScpO1xucmVxdWlyZSgnLi9zdHJpbmcvY2FzZUNtcCcpO1xucmVxdWlyZSgnLi9zdHJpbmcvY2hhcnMnKTtcbnJlcXVpcmUoJy4vc3RyaW5nL2Rvd25jYXNlJyk7XG5yZXF1aXJlKCcuL3N0cmluZy9lbXB0eScpO1xucmVxdWlyZSgnLi9zdHJpbmcvZW5kc1dpdGgnKTtcbnJlcXVpcmUoJy4vc3RyaW5nL2V4Y2x1ZGVzJyk7XG5yZXF1aXJlKCcuL3N0cmluZy9nc3ViJyk7XG5yZXF1aXJlKCcuL3N0cmluZy9pbmNsdWRlcycpO1xucmVxdWlyZSgnLi9zdHJpbmcvbHN0cmlwJyk7XG5yZXF1aXJlKCcuL3N0cmluZy9ub3RFbXB0eScpO1xucmVxdWlyZSgnLi9zdHJpbmcvcmV2ZXJzZScpO1xucmVxdWlyZSgnLi9zdHJpbmcvcnN0cmlwJyk7XG5yZXF1aXJlKCcuL3N0cmluZy9zdGFydHNXaXRoJyk7XG5yZXF1aXJlKCcuL3N0cmluZy9zdHJpcCcpO1xucmVxdWlyZSgnLi9zdHJpbmcvc3ViJyk7XG5yZXF1aXJlKCcuL3N0cmluZy90aXRsZWl6ZScpO1xucmVxdWlyZSgnLi9zdHJpbmcvdG9Cb29sJyk7XG5yZXF1aXJlKCcuL3N0cmluZy91cGNhc2UnKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKFN0cmluZy5wcm90b3R5cGUuY2FwaXRhbGl6ZSl7XG4gICAgd2FybignU3RyaW5nJywgJ2NhcGl0YWxpemUnKTtcbiAgfVxuXG4gIFN0cmluZy5wcm90b3R5cGUuY2FwaXRhbGl6ZSA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHRoaXMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnN1YnN0cigxKTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJjYXBpdGFsaXplXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIFxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKFN0cmluZy5wcm90b3R5cGUuY2FzZUNtcCl7XG4gICAgd2FybignU3RyaW5nJywgJ2Nhc2VDbXAnKTtcbiAgfVxuXG4gIFN0cmluZy5wcm90b3R5cGUuY2FzZUNtcCA9IGZ1bmN0aW9uKHgpe1xuICAgIHJldHVybiB0aGlzLnRvTG93ZXJDYXNlKCkgPT09IHgudG9Mb3dlckNhc2UoKTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJjYXNlQ21wXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIFxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKFN0cmluZy5wcm90b3R5cGUuY2hhcnMpe1xuICAgIHdhcm4oJ1N0cmluZycsICdjaGFycycpO1xuICB9XG5cbiAgU3RyaW5nLnByb3RvdHlwZS5jaGFycyA9IGZ1bmN0aW9uKCl7XG4gICAgaWYoQXJyYXkucHJvdG90eXBlLmZyb20pe1xuICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcyk7XG4gICAgfWVsc2V7XG4gICAgICB2YXIgYXJyYXkgPSBbXTtcblxuICAgICAgZm9yKHZhciBpPTA7aSA8IHRoaXMubGVuZ3RoO2krKyl7XG4gICAgICAgIGFycmF5LnB1c2godGhpcy5jaGFyQXQoaSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYXJyYXk7XG4gICAgfVxuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcImNoYXJzXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihTdHJpbmcucHJvdG90eXBlLmRvd25jYXNlKXtcbiAgICB3YXJuKCdTdHJpbmcnLCAnZG93bmNhc2UnKTtcbiAgfVxuXG4gIFN0cmluZy5wcm90b3R5cGUuZG93bmNhc2UgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiB0aGlzLnRvTG93ZXJDYXNlKCk7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwiZG93bmNhc2VcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBpZighU3RyaW5nLnByb3RvdHlwZS5lbXB0eSl7XG4gICAgU3RyaW5nLnByb3RvdHlwZS5lbXB0eSA9IGZ1bmN0aW9uKCl7XG4gICAgICByZXR1cm4gdGhpcy5sZW5ndGggPT09IDA7XG4gICAgfTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcImVtcHR5XCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xuICB9XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBpZighU3RyaW5nLnByb3RvdHlwZS5lbmRzV2l0aCl7XG4gICAgU3RyaW5nLnByb3RvdHlwZS5lbmRzV2l0aCA9IGZ1bmN0aW9uKHgpe1xuICAgICAgcmV0dXJuIHRoaXMuc3Vic3RyKCh0aGlzLmxlbmd0aCAtIHgubGVuZ3RoKSwgdGhpcy5sZW5ndGgpID09PSB4O1xuICAgIH07XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJlbmRzV2l0aFwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbiAgfVxufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIFxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKFN0cmluZy5wcm90b3R5cGUuZXhjbHVkZXMpe1xuICAgIHdhcm4oJ1N0cmluZycsICdleGNsdWRlcycpO1xuICB9XG5cbiAgU3RyaW5nLnByb3RvdHlwZS5leGNsdWRlcyA9IGZ1bmN0aW9uKHgpe1xuICAgIHJldHVybiB0aGlzLmluZGV4T2YoeCkgPT09IC0xO1xuICB9XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwiZXhjbHVkZXNcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKFN0cmluZy5wcm90b3R5cGUuZ3N1Yil7XG4gICAgd2FybignU3RyaW5nJywgJ2dzdWInKTtcbiAgfVxuXG4gIFN0cmluZy5wcm90b3R5cGUuZ3N1YiA9IGZ1bmN0aW9uKGEsYil7XG4gICAgcmV0dXJuIHRoaXMuc3BsaXQoYSkuam9pbihiKTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJnc3ViXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgaWYoIVN0cmluZy5wcm90b3R5cGUuaW5jbHVkZXMpe1xuICAgIFN0cmluZy5wcm90b3R5cGUuaW5jbHVkZXMgPSBmdW5jdGlvbih4KXtcbiAgICAgIHJldHVybiB0aGlzLmluZGV4T2YoeCkgIT09IC0xO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcImluY2x1ZGVzXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xuICB9XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKFN0cmluZy5wcm90b3R5cGUubHN0cmlwKXtcbiAgICB3YXJuKCdTdHJpbmcnLCAnbHN0cmlwJyk7XG4gIH1cblxuICBTdHJpbmcucHJvdG90eXBlLmxzdHJpcCA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZSgvXlxccysvZywnJyk7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwibHN0cmlwXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihTdHJpbmcucHJvdG90eXBlLm5vdEVtcHR5KXtcbiAgICB3YXJuKCdTdHJpbmcnLCAnbm90RW1wdHknKTtcbiAgfVxuXG4gIFN0cmluZy5wcm90b3R5cGUubm90RW1wdHkgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiB0aGlzLmxlbmd0aCAhPT0gMDtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJub3RFbXB0eVwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoU3RyaW5nLnByb3RvdHlwZS5yZXZlcnNlKXtcbiAgICB3YXJuKCdTdHJpbmcnLCAncmV2ZXJzZScpO1xuICB9XG5cbiAgU3RyaW5nLnByb3RvdHlwZS5yZXZlcnNlID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgYXJyYXk7XG5cbiAgICBpZihBcnJheS5wcm90b3R5cGUuZnJvbSl7XG4gICAgICBhcnJheSA9IEFycmF5LmZyb20odGhpcykucmV2ZXJzZSgpO1xuICAgIH1lbHNle1xuICAgICAgdmFyIGFycmF5ID0gW107XG5cbiAgICAgIGZvcih2YXIgaT0wO2kgPCB0aGlzLmxlbmd0aDtpKyspe1xuICAgICAgICBhcnJheS51bnNoaWZ0KHRoaXMuY2hhckF0KGkpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXJyYXkuam9pbignJyk7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicmV2ZXJzZVwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoU3RyaW5nLnByb3RvdHlwZS5yc3RyaXApe1xuICAgIHdhcm4oJ1N0cmluZycsICdyc3RyaXAnKTtcbiAgfVxuXG4gIFN0cmluZy5wcm90b3R5cGUucnN0cmlwID0gZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlKC9cXHMrJC9nLCcnKTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJyc3RyaXBcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBpZighU3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRoKXtcbiAgICBTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGggPSBmdW5jdGlvbih4KXtcbiAgICAgIHJldHVybiB0aGlzLnN1YnN0cigwLCB4Lmxlbmd0aCkgPT09IHg7XG4gICAgfTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInN0YXJ0c1dpdGhcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG4gIH1cbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoU3RyaW5nLnByb3RvdHlwZS5zdHJpcCl7XG4gICAgd2FybignU3RyaW5nJywgJ3N0cmlwJyk7XG4gIH1cblxuICBTdHJpbmcucHJvdG90eXBlLnN0cmlwID0gZnVuY3Rpb24oKXtcbiAgICBpZihTdHJpbmcucHJvdG90eXBlLnRyaW0pe1xuICAgICAgcmV0dXJuIHRoaXMudHJpbSgpO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIHRoaXMucmVwbGFjZSgvXlxccyt8XFxzKyQvZywnJyk7XG4gICAgfVxuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInN0cmlwXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgLypcbiAgaWYoU3RyaW5nLnByb3RvdHlwZS5zdWIpe1xuICAgIGNvbnNvbGUud2FybihcIlJlYXJtZWQtanMgT3ZlcnJpZGluZyBTdHJpbmcgbWV0aG9kOiBzdWIuIFRoZSBvcmlnaW5hbCBzdWIgbWV0aG9kIGlzIHVzZWxlc3MgYW5kIGhhcyBiZWVuIHJlbW92ZWQgZnJvbSB0aGUgSlMgc3RhbmRhcmQuIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL1N0cmluZy9zdWInKTtcbiAgfVxuICAqL1xuXG4gIFN0cmluZy5wcm90b3R5cGUuc3ViID0gZnVuY3Rpb24oYSxiKXtcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlKGEsIGIpO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInN1YlwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoU3RyaW5nLnByb3RvdHlwZS50aXRsZWl6ZSl7XG4gICAgd2FybignU3RyaW5nJywgJ3RpdGxlaXplJyk7XG4gIH1cblxuICBTdHJpbmcucHJvdG90eXBlLnRpdGxlaXplID0gZnVuY3Rpb24ob25seUZpcnN0TGV0dGVyKXtcbiAgICByZXR1cm4gdGhpcy5zcGxpdCgnICcpLm1hcChmdW5jdGlvbihzdHIpe1xuICAgICAgdmFyIHMgPSBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCk7XG4gICAgICBpZihvbmx5Rmlyc3RMZXR0ZXIgPT09IGZhbHNlKXtcbiAgICAgICAgcyArPSBzdHIuc3Vic3RyKDEpLnRvTG93ZXJDYXNlKCk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgcyArPSBzdHIuc3Vic3RyKDEpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHM7XG4gICAgfSkuam9pbignICcpO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInRpdGxlaXplXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihTdHJpbmcucHJvdG90eXBlLnRvQm9vbCl7XG4gICAgd2FybignU3RyaW5nJywgJ3RvQm9vbCcpO1xuICB9XG5cbiAgU3RyaW5nLnByb3RvdHlwZS50b0Jvb2wgPSBmdW5jdGlvbigpe1xuICAgIGlmKHRoaXMgPT09ICd0cnVlJyl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9ZWxzZSBpZih0aGlzID09PSAnZmFsc2UnKXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwidG9Cb29sXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihTdHJpbmcucHJvdG90eXBlLnVwY2FzZSl7XG4gICAgd2FybignU3RyaW5nJywgJ3VwY2FzZScpO1xuICB9XG5cbiAgU3RyaW5nLnByb3RvdHlwZS51cGNhc2UgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiB0aGlzLnRvVXBwZXJDYXNlKCk7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwidXBjYXNlXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iXX0=
