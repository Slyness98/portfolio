import React from 'react';
import styled from 'styled-components';
import {Spin, EnlargedSpin, Floating} from '../../../animations/animations.styled';

// Styled components are used here to build in animations rather than attach them. This is to make animations more convenient to apply in a component life-cycle setting. Only animation properties are specified here. Everything else is associated with the component's respective .scss file.

const MobItem = styled.li.attrs(props => ({
  className: `mobMenu__item mobMenu__item--${props.num}`
}))`
  animation-name: ${Floating}, ${Spin};
  animation-duration: 5s, .5s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite , 1;
  animation-delay: .55s, 0;
  transition: ${Floating} 2s, ${Spin} .5s;
`;

const Icon = styled.i.attrs(props => ({
  className: `fa ${props.icon} mobMenu__item__icon`
}))`
  animation-name: ${EnlargedSpin};
  animation-duration: .5s;
  animation-timing-function: ease-in-out;
  transition: ${EnlargedSpin} .5s;
  transform: scale(3);
`;

const MenuItem = ({icon, num, text, route}) => {
	return(
	  <MobItem num={num} aria-label={`page link, ${route}`}>  
	    <a href={route} >
		    <Icon icon={icon} aria-hidden="true"></Icon> 
        <span aria-label={`link to ${text}`}>{text}</span>
		  </a>
	  </MobItem>
	);
};
export default MenuItem;