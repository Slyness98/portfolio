import React from 'react';
import MainButton from './atoms/mainButton';
import MenuItem from './atoms/menuItem';


const MobileNavigation = () => {
 
	return(
	  <div className="mobileNav">
	  	  <MainButton />
		  <MenuItem passClass="fa-home"      position="5"/>
		  <MenuItem passClass="fa-vector-square"      position="4"/>
		  <MenuItem passClass="fa-laptop-code"     position="3"/>
		  <MenuItem passClass="fa-user-secret"  position="2" />
		  <MenuItem passClass="fa-mail-bulk"       position="1" />
	  </div>   
	);
}

export default MobileNavigation;

