import React from 'react';

const InternalLink = ({buttonClass, iClass, iContent, route}) => {
	return (
	  <a className={buttonClass} href={route}>  
	    <i className={iClass} content={iContent}></i> 
	  </a>
	);
};

export default InternalLink;