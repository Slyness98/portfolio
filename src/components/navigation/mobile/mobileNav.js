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
	  <div className="mobileNav">	  	  	  
	    <MainButton toggleMenu = { this.toggleMenu } />
	    <div id="items">	
		  <MenuItem num = "5" icon = "fa-home"          toggleOpen={ toggleOpen } />
		  <MenuItem num = "4" icon = "fa-vector-square" toggleOpen={ toggleOpen } />  
		  <MenuItem num = "3" icon = "fa-laptop-code"   toggleOpen={ toggleOpen } /> 
		  <MenuItem num = "2" icon = "fa-user-secret"   toggleOpen={ toggleOpen } /> 
		  <MenuItem num = "1" icon = "fa-mail-bulk"     toggleOpen={ toggleOpen } />
	    </div>
	  </div>   
	);
  }
}
export default MobileNavigation;

