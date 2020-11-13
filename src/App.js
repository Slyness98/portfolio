import React, {Component} from 'react';
import {ReactComponent as Logo} from './assets/images/lyness.svg';
import {debounce, ternary} from './assets/utilities';
import Navigation from './components/navigation/Navigation';
import Home from './pages/Home';


const initialState = {
	platform : '',
  route: 'home'
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
    this.detectMobile = this.detectMobile.bind(this);
  }


  detectMobile = function() {
	  let mql = window.matchMedia("(max-width: 899px)");
	  if(mql.matches) {
		  this.setState({platform: 'mobile'});
		  console.log(this.state);
	  } else {
		  this.setState({platform: 'desktop'});
		  console.log(this.state);
	  }
  };


  componentDidMount() {
  	window.addEventListener("load",   this.detectMobile);
    window.addEventListener("resize", debounce(this.detectMobile, 250));
  }
   
  componentWillUnmount() {
  	window.removeEventListener("load",   this.detectMobile);
    window.removeEventListener("resize", debounce(this.detectMobile, 250));
  }
  

  render() {
	const {platform, route} = this.state; 
	
	return (
	 <div className="App">
     <header className={ ternary(platform, 'mobile', 'headContainer', 'fullWindow') }>
       { ternary( platform, 'mobile', <Logo className="logo"/>, null ) }
	     <Navigation platform={platform} />	
     </header> 

     {
       {
        'home': <Home />

       }[route] || <Home />
     }

	 </div>
  );
 }
}

export default App;
