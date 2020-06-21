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

 //  positionNav = (string) => {
//  if ( string ) {
//   switch ( string ) {    
//     case 'top':  
//       return(
//       <div className="row nav__container nav__container--top">        
//       <DesktopNavigation />
//       </div>
//     );
//     break;

//     case 'bottom':  
//       return(
//       <div className="row nav__container nav__container--bottom">        
//       <DesktopNavigation />
//       </div>
//     );
//     break;

//   case 'left': 
//     return(
//       <div className="col-twelfth nav__container nav__container--left">        
//         <DesktopNavigation />
//       </div>
//     );
//       break;

//     case 'right': 
//     return(
//       <div className="col-twelfth nav__container nav__container--right">        
//         <DesktopNavigation />
//       </div>
//     );
//       break;

//   default: this.setState({position: 'top'});      
//   }
//  }
// }

  // componentDidMount() {
  // }

  // componentWillUnmount() {

  // }
