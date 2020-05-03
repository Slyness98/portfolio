import React from 'react';


const MobileNavigation = () => {
 
	return(
		<div className="mobileNav">
		<input type="checkbox" className="mobileNav__checkbox" id="navi-toggle"></input>
		<label htmlFor="navi-toggle" className="mobileNav__button"><span className="mobileNav__icon">&nbsp;</span></label>
		</div>
	   
	);
}

export default MobileNavigation;

