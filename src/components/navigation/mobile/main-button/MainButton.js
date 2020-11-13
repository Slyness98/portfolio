import React from 'react';

const MainButton = ({toggleMenu}) => {
	return(
	  <React.Fragment>
		<input type="checkbox" className="mobMenu__checkbox" id="navi-toggle"></input>{/*checkbox serves as the functionality of rotating the :before and :after pseudo-elements of our icon*/}
	  	<label htmlFor="navi-toggle" className="mobMenu mobMenu__main" onClick={toggleMenu}><span className="mobMenu__icon">&nbsp;</span></label>{/* __icon defines the middle bar of the icon while :before and :after define the top and bottom of the icon, respectively*/}	
	  </React.Fragment>
	);
}

export default MainButton;