import React from 'react';
import MainButton from './atoms/mainButton';
import MenuItem from './atoms/menuItem';


const MobileNavigation = () => {
 
	return(
	  <div className="mobileNav">
	  	  <MainButton />
		  <MenuItem passClass="fa-bar-chart" position="1"/>
		  <MenuItem passClass="fa-plus"      position="2"/>
		  <MenuItem passClass="fa-heart"     position="3"/>
		  <MenuItem passClass="fa-envelope"  position="4" />
		  <MenuItem passClass="fa-cog"       position="5" />
	  </div>   
	);
}

export default MobileNavigation;

