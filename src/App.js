import React, {Component} from 'react';
import {ReactComponent as Logo} from './assets/images/lyness.svg';
import MobileNavigation from './components/navigation/mobile/mobileNav.js';

const initialState = {
	platform : 'desktop'
};


class App extends Component {
	constructor() {
	  super();
	  this.state = initialState;
	}

	detectMobile = () => {
		let mql = window.matchMedia("(max-width: 550px)");
		console.log(mql.matches);
		if(mql.matches) {
			this.setState({platform: 'mobile'});
			console.log(this.state);
		}else {
			this.setState({platform: 'desktop'});
			console.log(this.state);
		}
	}

  componentDidMount() {
  	window.addEventListener("load", this.detectMobile.bind(this));
    window.addEventListener("resize", this.detectMobile.bind(this));
  }
   
  componentWillUnmount() {
  	window.removeEventListener("load", this.detectMobile.bind(this));
    window.removeEventListener("resize", this.detectMobile.bind(this));
  }

	render() {
	const {platform} = this.state; //platform property of state object imported into render() method and read as current state. Render now has local reference to this property.
	
	return (
		<div className="App">
			<div className="row">
			   <div className="col-fourth logoContainer">
		     		<Logo className="logo"/>
	  	       </div>
		    </div>
			
			
	 		<MobileNavigation /> 
			
 
	</div>
);
}

}

export default App;
