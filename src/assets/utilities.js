/*A debounce function making event listeners, such as resize, 
fire less frequently so as to not overload the browser */
  export const debounce = function(func, wait, immediate) {
  	var timeout;
  	return function() {
  	var context = this, args = arguments;
  	var later = function () {
  		timeout = null;
  		if (!immediate) func.apply(context, args);
  	};
  	var callNow = immediate && !timeout;
  	clearTimeout(timeout);
  	timeout = setTimeout(later, wait);
  	if (callNow) func.apply(context, args);
    };
  };


  export const ternary = function (variable, condition, trueCode, falseCode) {
    return (
      variable === condition ? trueCode : (falseCode)
    )
  };