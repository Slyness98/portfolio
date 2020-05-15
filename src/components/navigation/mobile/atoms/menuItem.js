import React from 'react';

const MenuItem = ({passClass, position, animateToggle}) => {

	return (
		<a href="#" className={`fab__item fab__item--${position} ${animateToggle}`}> <i className={`fab__item__icon fa ${passClass}`}></i> </a>
	);
}

export default MenuItem;