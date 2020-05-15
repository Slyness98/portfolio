import React from 'react';

const MainButton = ({toggleMenu}) => {
	return(
	  <>
		<input type="checkbox" className="fab__checkbox" id="navi-toggle"></input>{/*checkbox serves as the functionality of rotating the :before and :after pseudo-elements of our icon*/}
	  	<label htmlFor="navi-toggle" className="fab fab__main" onClick={toggleMenu}><span className="fab__icon">&nbsp;</span></label>{/* __button defines the white button characteristics. __icon defines the middle bar of the icon while :before and :after define the top and bottom of the icon, respectively*/}
	  </>	
	);
}

export default MainButton;