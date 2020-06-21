import React from 'react';
import styled, {css} from 'styled-components';
import {Spin, Floating} from '../../../animations/animations';


// Styled components are used here to build in animations rather than attach them. This is to make animations more convenient to apply in a component life-cycle setting. Only animation properties are specified here. Everything else is associated with the component's respective .scss file.
const FabItem = styled.li.attrs(props => ({
	className: `fab__item fab__item--${props.num}`,

}))`
	display: none;
	position: fixed;
	height: 6rem;
	width: 6rem;
    background-color: #01353F;
	border-radius: 50%;
	z-index: 2000;
	box-shadow: 0.14rem 0.14rem 0rem 0rem #1ebba3 inset, -0.14rem -0.14rem 0rem 0rem violet inset;
	text-align: center;
	cursor: pointer;
	animation-name: ${Floating};
	animation-duration: 5s;
	animation-timing-function: ease-in-out;
	animation-iteration-count: infinite;
	animation-delay: .55s;
	transition: ${Floating} 2s;
	${props => props.toggleOpen ? css`display: block;` : css`display: none;`};
`;

const Icon = styled.i.attrs(props => ({
	className: `fa ${props.icon}`
}))`
	animation-name: ${Spin};
	animation-duration: .5s;
	animation-timing-function: ease-in-out;
    transition: ${Spin} .5s;
	margin-top: 2.5rem;
	color: #white;
	transform: scale(3);
    background: #fff;
    background: -webkit-linear-gradient(to right bottom, #fff, #1ebba3);
    background: linear-gradient(to right bottom, #fff, #1ebba3); 
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

const MenuItem = ({icon, num, toggleOpen, text}) => {
	return(
	  <FabItem num={num} toggleOpen={toggleOpen ? true : false}> 
		<Icon icon={icon}></Icon> <a href="#" alt="menu icons">{text}</a>
	  </FabItem>
	);
}



export default MenuItem;