import React from 'react';
import styled from 'styled-components';
import { bp } from '../../../assets/utilities';

const Block = styled.div`
  min-height: 80vh;
  height: auto;
  background-color: rgba(10, 13, 14, 0.84);
  position: relative;
  overflow: hidden;
  z-index: 0;  
  scroll-behavior: smooth;
  transition: all 1.3s ease-in;

  ${bp.tabmd`
    min-height: 100vh;
  `}
`;
const ScrollPageBlock = ({children, ...props}) => {
  return(
    <Block {...props} >
      {children}
    </Block> 
  );
}
export default ScrollPageBlock;