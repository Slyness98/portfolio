import React from 'react';
import styled, {css} from 'styled-components';

const MenuIcon = styled.span.attrs(() => ({
  className: "mobMenu__icon" 
  /* __icon defines the middle bar of the icon while ::before and ::after define 
	the top and bottom of the icon, respectively. Only styles of the main button icon directly tied to 
	the mobile navigation's open/close state are located here. Everything else is located in _menuItem.scss */
})
)`
 transition: top .4s ease;
 
 &::before {
  top: -2rem;
  
  .mobMenu:hover & {
	top: -2.5rem;
  }
 }
 &::after {
  top: 2rem;

  .mobMenu:hover &{
	top: 2.5rem;
  }
 }
  ${props => props.$isOpen
	? 
	  css`
	   & { 
         background-color: transparent;
	   }

	   &::before {
		 top: 0 !important;
	     transform: rotate(135deg);
		 background-color: #1ebba3;
	   }

	   &::after {
		 top: 0 !important;
	     transform: rotate(-135deg);
		 background-color: #1ebba3;
	   }
	  `
	: null
  }
`;

const MainButton = ({expanded, toggleMenu}) => {
	return(
	  <React.Fragment>
	  	<div className="mobMenu mobMenu__main" onClick={toggleMenu}>
		  <MenuIcon $isOpen={expanded}>&nbsp;</MenuIcon>
	    </div>	
	  </React.Fragment>
	);
}

export default MainButton;