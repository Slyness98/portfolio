import React from 'react';

const MenuItem = ({passClass, position}) => {

	return (
		<a href="#" className={`fab__item fab__item--${position}`}> <i className={`fab__item__icon fa ${passClass}`}></i> </a>
	);
}

export default MenuItem;