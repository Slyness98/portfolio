import React from 'react';

const InternalLink = ({buttonClass, iClass, iContent}) => {
	return (
	  <button className={buttonClass}>  
	    <i className={iClass} content={iContent}></i> 
	  </button>
	);
}

export default InternalLink;