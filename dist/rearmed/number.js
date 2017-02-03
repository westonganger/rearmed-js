(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function warn(type, method){
  console.warn("Rearmed-js Overriding " + type + " method: " + method, '. If this is a built-in browser method please report on Rearmed-js github issues.');
};

module.exports = warn;

},{}],2:[function(require,module,exports){
require('./number/ceil');
require('./number/floor');
require('./number/isDecimal');
require('./number/isEven');
require('./number/isInteger');
require('./number/isOdd');
require('./number/round');

},{"./number/ceil":3,"./number/floor":4,"./number/isDecimal":5,"./number/isEven":6,"./number/isInteger":7,"./number/isOdd":8,"./number/round":9}],3:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Number.prototype.ceil){
    warn(Number, 'ceil');
  }

  Number.prototype.ceil = function(){
    return Math.ceil(this);
  };

  Object.defineProperty(Number.prototype, "ceil", {enumerable: false});
}(this));

},{"./../core/warn":1}],4:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Number.prototype.floor){
    warn(Number, 'floor');
  }

  Number.prototype.floor = function(){
    return Math.floor(this);
  };

  Object.defineProperty(Number.prototype, "floor", {enumerable: false});
}(this));

},{"./../core/warn":1}],5:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Number.prototype.isDecimal){
    warn(Number, 'isDecimal');
  }

  Number.prototype.isDecimal = function(){
    if(Number.isInteger){
      return !Number.isInteger(this);
    }else{
      return isFinite(this) && Math.floor(this) !== this;
    }
  }

  Object.defineProperty(Number.prototype, "isDecimal", {enumerable: false});
}(this));

},{"./../core/warn":1}],6:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Number.prototype.isEven){
    warn(Number, 'isEven');
  }

  Number.prototype.isEven = function(){
    return isFinite(this) && this % 2 === 0;
  };

  Object.defineProperty(Number.prototype, "isEven", {enumerable: false});
}(this));

},{"./../core/warn":1}],7:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Number.prototype.isInteger){
    warn(Number, 'isInteger');
  }

  Number.prototype.isInteger = function(){
    if(Number.isInteger){
      return Number.isInteger(this);
    }else{
      return isFinite(this) && Math.floor(this) === this;
    }
  };

  Object.defineProperty(Number.prototype, "isInteger", {enumerable: false});
}(this));

},{"./../core/warn":1}],8:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Number.prototype.isOdd){
    warn(Number, 'isOdd');
  }

  Number.prototype.isOdd = function(){
    return isFinite(this) && Math.abs(this % 2) === 1;
  };

  Object.defineProperty(Number.prototype, "isOdd", {enumerable: false});
}(this));

},{"./../core/warn":1}],9:[function(require,module,exports){
(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Number.prototype.round){
    warn(Number, 'round');
  }

  Number.prototype.round = function(){
    return Math.round(this);
  };

  Object.defineProperty(Number.prototype, "round", {enumerable: false});
}(this));

},{"./../core/warn":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvcmVhcm1lZC9jb3JlL3dhcm4uanMiLCJzcmMvcmVhcm1lZC9udW1iZXIuanMiLCJzcmMvcmVhcm1lZC9udW1iZXIvY2VpbC5qcyIsInNyYy9yZWFybWVkL251bWJlci9mbG9vci5qcyIsInNyYy9yZWFybWVkL251bWJlci9pc0RlY2ltYWwuanMiLCJzcmMvcmVhcm1lZC9udW1iZXIvaXNFdmVuLmpzIiwic3JjL3JlYXJtZWQvbnVtYmVyL2lzSW50ZWdlci5qcyIsInNyYy9yZWFybWVkL251bWJlci9pc09kZC5qcyIsInNyYy9yZWFybWVkL251bWJlci9yb3VuZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJmdW5jdGlvbiB3YXJuKHR5cGUsIG1ldGhvZCl7XG4gIGNvbnNvbGUud2FybihcIlJlYXJtZWQtanMgT3ZlcnJpZGluZyBcIiArIHR5cGUgKyBcIiBtZXRob2Q6IFwiICsgbWV0aG9kLCAnLiBJZiB0aGlzIGlzIGEgYnVpbHQtaW4gYnJvd3NlciBtZXRob2QgcGxlYXNlIHJlcG9ydCBvbiBSZWFybWVkLWpzIGdpdGh1YiBpc3N1ZXMuJyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdhcm47XG4iLCJyZXF1aXJlKCcuL251bWJlci9jZWlsJyk7XG5yZXF1aXJlKCcuL251bWJlci9mbG9vcicpO1xucmVxdWlyZSgnLi9udW1iZXIvaXNEZWNpbWFsJyk7XG5yZXF1aXJlKCcuL251bWJlci9pc0V2ZW4nKTtcbnJlcXVpcmUoJy4vbnVtYmVyL2lzSW50ZWdlcicpO1xucmVxdWlyZSgnLi9udW1iZXIvaXNPZGQnKTtcbnJlcXVpcmUoJy4vbnVtYmVyL3JvdW5kJyk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihOdW1iZXIucHJvdG90eXBlLmNlaWwpe1xuICAgIHdhcm4oTnVtYmVyLCAnY2VpbCcpO1xuICB9XG5cbiAgTnVtYmVyLnByb3RvdHlwZS5jZWlsID0gZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gTWF0aC5jZWlsKHRoaXMpO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOdW1iZXIucHJvdG90eXBlLCBcImNlaWxcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKE51bWJlci5wcm90b3R5cGUuZmxvb3Ipe1xuICAgIHdhcm4oTnVtYmVyLCAnZmxvb3InKTtcbiAgfVxuXG4gIE51bWJlci5wcm90b3R5cGUuZmxvb3IgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMpO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOdW1iZXIucHJvdG90eXBlLCBcImZsb29yXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHdhcm4gPSByZXF1aXJlKCcuLy4uL2NvcmUvd2FybicpO1xuICBpZihOdW1iZXIucHJvdG90eXBlLmlzRGVjaW1hbCl7XG4gICAgd2FybihOdW1iZXIsICdpc0RlY2ltYWwnKTtcbiAgfVxuXG4gIE51bWJlci5wcm90b3R5cGUuaXNEZWNpbWFsID0gZnVuY3Rpb24oKXtcbiAgICBpZihOdW1iZXIuaXNJbnRlZ2VyKXtcbiAgICAgIHJldHVybiAhTnVtYmVyLmlzSW50ZWdlcih0aGlzKTtcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBpc0Zpbml0ZSh0aGlzKSAmJiBNYXRoLmZsb29yKHRoaXMpICE9PSB0aGlzO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOdW1iZXIucHJvdG90eXBlLCBcImlzRGVjaW1hbFwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoTnVtYmVyLnByb3RvdHlwZS5pc0V2ZW4pe1xuICAgIHdhcm4oTnVtYmVyLCAnaXNFdmVuJyk7XG4gIH1cblxuICBOdW1iZXIucHJvdG90eXBlLmlzRXZlbiA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIGlzRmluaXRlKHRoaXMpICYmIHRoaXMgJSAyID09PSAwO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOdW1iZXIucHJvdG90eXBlLCBcImlzRXZlblwiLCB7ZW51bWVyYWJsZTogZmFsc2V9KTtcbn0odGhpcykpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB3YXJuID0gcmVxdWlyZSgnLi8uLi9jb3JlL3dhcm4nKTtcbiAgaWYoTnVtYmVyLnByb3RvdHlwZS5pc0ludGVnZXIpe1xuICAgIHdhcm4oTnVtYmVyLCAnaXNJbnRlZ2VyJyk7XG4gIH1cblxuICBOdW1iZXIucHJvdG90eXBlLmlzSW50ZWdlciA9IGZ1bmN0aW9uKCl7XG4gICAgaWYoTnVtYmVyLmlzSW50ZWdlcil7XG4gICAgICByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcih0aGlzKTtcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBpc0Zpbml0ZSh0aGlzKSAmJiBNYXRoLmZsb29yKHRoaXMpID09PSB0aGlzO1xuICAgIH1cbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTnVtYmVyLnByb3RvdHlwZSwgXCJpc0ludGVnZXJcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKE51bWJlci5wcm90b3R5cGUuaXNPZGQpe1xuICAgIHdhcm4oTnVtYmVyLCAnaXNPZGQnKTtcbiAgfVxuXG4gIE51bWJlci5wcm90b3R5cGUuaXNPZGQgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiBpc0Zpbml0ZSh0aGlzKSAmJiBNYXRoLmFicyh0aGlzICUgMikgPT09IDE7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE51bWJlci5wcm90b3R5cGUsIFwiaXNPZGRcIiwge2VudW1lcmFibGU6IGZhbHNlfSk7XG59KHRoaXMpKTtcbiIsIihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgd2FybiA9IHJlcXVpcmUoJy4vLi4vY29yZS93YXJuJyk7XG4gIGlmKE51bWJlci5wcm90b3R5cGUucm91bmQpe1xuICAgIHdhcm4oTnVtYmVyLCAncm91bmQnKTtcbiAgfVxuXG4gIE51bWJlci5wcm90b3R5cGUucm91bmQgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMpO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOdW1iZXIucHJvdG90eXBlLCBcInJvdW5kXCIsIHtlbnVtZXJhYmxlOiBmYWxzZX0pO1xufSh0aGlzKSk7XG4iXX0=
