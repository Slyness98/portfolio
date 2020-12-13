import React from 'react';
import styled from 'styled-components';
import { bp } from '../../../assets/utilities';

const Block = styled.div`
  min-height: 80vh;
  height: auto;
  background: rgba(0, 0, 0, 0.842);
  position: relative;
  overflow: hidden;
  z-index: 0;  

  ${bp.tabmd`
    min-height: 100vh;
  `}
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  };
`;
const ScrollPageBlock = ({children, ...props}) => {
  return(
    <Block {...props} >
      {children}
    </Block> 
  );
}
export default ScrollPageBlock;