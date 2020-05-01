import React, {Component} from 'react';
import './assets/css/style.css';
import {ReactComponent as Logo} from './assets/images/lyness.svg';

class App extends Component {
render() {
return (
	<div className="App">
		<div className="row">
		   <div className="col-fourth logoContainer">
	     		<Logo className="logo"/>
	  	   </div>
		</div>
	</div>
);
}

}

export default App;
