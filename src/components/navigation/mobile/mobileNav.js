import React, {Component} from 'react';
import MainButton from './atoms/mainButton';
import MenuItem from './atoms/menuItem';

const buttonState = { toggleOpen: false };


class MobileNavigation extends Component{
 	constructor(props) {
 		super(props);
 		this.state = {buttonState};
 		this.toggleMenu = this.toggleMenu.bind(this);
 	}

 	toggleMenu = () => {
 		const currentState = this.state.toggleOpen;
 		this.setState({toggleOpen: !currentState });
 		console.log(this.state);
 	}



	render() {
		const { toggleOpen } = this.state;
		return(
		  <div className="mobileNav">	  	  	  
		  	  <MainButton toggleMenu={this.toggleMenu} />

		  	  <div id="mobileMenu" className={toggleOpen ? 'menu--open' : 'menu'}>
				  <MenuItem passClass="fa-home"          position="5" animateToggle={toggleOpen ? 'fab__icon__animate--5'  : 'fab__icon__animate__reverse--5' } />
				  <MenuItem passClass="fa-vector-square" position="4" animateToggle={toggleOpen ? 'fab__icon__animate--4'  : 'fab__icon__animate__reverse--4' } />
				  <MenuItem passClass="fa-laptop-code"   position="3" animateToggle={toggleOpen ? 'fab__icon__animate--3'  : 'fab__icon__animate__reverse--3' } />
				  <MenuItem passClass="fa-user-secret"   position="2" animateToggle={toggleOpen ? 'fab__icon__animate--2'  : 'fab__icon__animate__reverse--2' } />
				  <MenuItem passClass="fa-mail-bulk"     position="1" animateToggle={toggleOpen ? 'fab__icon__animate--1'  : 'fab__icon__animate__reverse--1' } />
			  </div> 
		  </div>   
		);
	}
}

export default MobileNavigation;

