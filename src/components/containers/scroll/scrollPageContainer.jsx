import React from 'react';
import styled from 'styled-components';
import { bp } from '../../../assets/utilities';

const Container = styled.section`
  width: 100%;
  height: 85%;

  ${bp.tabmd`
    padding: 2vh 10vh;
  `}

`;

const ScrollPageContainer = ({children, ...props}) => {
  return(
    <Container className={props.className || ''}>
      {children}
    </Container> 
  );
}
export default ScrollPageContainer;