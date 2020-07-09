import React from 'react';
import styled, {css} from 'styled-components';
import {Spin, Floating} from '../../../animations/animations';


// Styled components are used here to build in animations rather than attach them. This is to make animations more convenient to apply in a component life-cycle setting. Only animation properties are specified here. Everything else is associated with the component's respective .scss file.
const MobItem = styled.li.attrs(props => ({
	className: `mobMenu__item mobMenu__item--${props.num}`,

}))`
	animation-name: ${Floating};
	animation-duration: 5s;
	animation-timing-function: ease-in-out;
	animation-iteration-count: infinite;
	animation-delay: .55s;
	transition: ${Floating} 2s;
	${props => props.toggleOpen ? css`display: block;` : css`display: none;`};
`;

const Icon = styled.i.attrs(props => ({
	className: `fa ${props.icon} mobMenu__item__icon`
}))`
	animation-name: ${Spin};
	animation-duration: .5s;
	animation-timing-function: ease-in-out;
    transition: ${Spin} .5s;
	transform: scale(3);
`;

const MenuItem = ({icon, num, toggleOpen, text}) => {
	return(
	  <MobItem num={num} toggleOpen={toggleOpen ? true : false}> 
		<Icon icon={icon}></Icon> <a href="#" alt="menu icons">{text}</a>
	  </MobItem>
	);
}



export default MenuItem;