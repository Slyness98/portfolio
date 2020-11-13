import React from 'react';

const ExternalLink = ({icon, href}) => {
	return(      
    	<li className="navbar__social"> 
    	  <a href={href} target="_blank" rel="noopener noreferrer" className="navbar__link">  
    		<i className={`navbar__icon--social fab ${icon}`} ></i> 
    	  </a>
    	</li>
	);
} 

export default ExternalLink;