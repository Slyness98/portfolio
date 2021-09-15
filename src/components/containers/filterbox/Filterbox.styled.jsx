import React from 'react';
import styled, {css} from 'styled-components';
//default glossy grey/glassy overlay, but can be fed different filters on two layers for quick custom bg effects
const Container = styled.div`
  width: 100%;
  height: 100%;
//   position: absolute;
  background-color: rgba(255, 255, 255, .2);
  box-shadow: inset 0 0 2rem 0 rgb(255, 255, 255);
  border-radius: 5px;
  ${props => props.filter ? css`filter: ${props.filter};` : css`filter: opacity(0.75);`}; 
  
  &::before {
  content: "";
  position: relative;
  width: 100%;
  height: 100%;
  filter: blur(2px);
  box-shadow: inset 0 0 ${props => props.shadow ? props.shadow : '2rem'};
  ${props => props.filterBefore ? css`filter: ${props.filterBefore}` : css`filter: blur(15px);`};   
  }  
`;

export const FilterBox = ({children, ...props}) => {
  return(
    <Container {...props}>
        {children}
    </Container>
  );
};
export default FilterBox;