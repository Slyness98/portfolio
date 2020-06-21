import React, {Component} from 'react';
import MainButton from './atoms/mainButton';
import MenuItem from './atoms/menuItem';

const menuState = {toggleOpen: false};

class MobileNavigation extends Component{
  constructor(props) {
	super(props);
	this.state = {menuState};
	this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
	const currentState = this.state.toggleOpen;
	this.setState({toggleOpen: !currentState });
  }

  render() {
  	const { toggleOpen } = this.state;
    return(	
	    <nav className="mobileNav">	  	  	  
	      <MainButton toggleMenu = { this.toggleMenu } />
	      <div id="nav">	
	       <ul>
		    <MenuItem num = "5" icon = "fa-home"          text="home"    toggleOpen={ toggleOpen } />
		    <MenuItem num = "4" icon = "fa-vector-square" text="skills"  toggleOpen={ toggleOpen } />  
		    <MenuItem num = "3" icon = "fa-laptop-code"   text="work"    toggleOpen={ toggleOpen } /> 
		    <MenuItem num = "2" icon = "fa-user-secret"   text="about"   toggleOpen={ toggleOpen } /> 
		    <MenuItem num = "1" icon = "fa-mail-bulk"     text="contact" toggleOpen={ toggleOpen } />
	       </ul>
	      </div>
	    </nav>   
	);
  }
}
export default MobileNavigation;

