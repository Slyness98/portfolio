import React from 'react';

const ExternalLink = ({icon}) => {
	return(      
    	<li className="navbar__social"> 
    	  <a href="" className="navbar__link">  
    		<i className={`navbar__icon--social fab ${icon}`} ></i> 
    	  </a>
    	</li>
	);
} 

export default ExternalLink;