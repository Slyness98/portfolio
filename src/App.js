import React, {Component} from 'react';
import {ReactComponent as Logo} from './assets/images/lyness.svg';
import {debounce, ternary} from './assets/utilities';
import Navigation from './components/navigation/Navigation';

const initialState = {
	platform : ''
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
    this.detectMobile = this.detectMobile.bind(this);
  }


  detectMobile = debounce(function() {
	let mql = window.matchMedia("(max-width: 767px)");
	if(mql.matches) {
		this.setState({platform: 'mobile'});
		console.log(this.state);
	} else {
		this.setState({platform: 'desktop'});
		console.log(this.state);
	}
  },250);


  componentDidMount() {
  	window.addEventListener("load",   this.detectMobile);
    window.addEventListener("resize", this.detectMobile);
  }
   
  componentWillUnmount() {
  	window.removeEventListener("load",   this.detectMobile);
    window.removeEventListener("resize", this.detectMobile);
  }

  render() {
	const {platform} = this.state; 
	
	return (
	 <div className="App">
     <header className={ ternary(platform, 'mobile', 'headContainer', 'fullWindow') }>
       { ternary( platform, 'mobile', <Logo className="logo"/>, null ) }
	     <Navigation platform={platform} />	
     </header>    
	 </div>
    );
  }
}

export default App;
