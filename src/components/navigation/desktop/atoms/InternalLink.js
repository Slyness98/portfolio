import React from 'react';

const InternalLink = ({icon, text}) => {
	return (
	   <li className="navbar__item"> 
	     <a className="navbar__link">  
	       <i className={`navbar__icon fas ${icon}`} content={text}></i> 
	     </a>
	   </li>

	);
}

export default InternalLink;