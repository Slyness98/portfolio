import React from 'react';
import styled from 'styled-components';

const Circle = styled.img`
  width: ${props => props.width || '14rem'};
  height: ${props => props.height || '14rem'};
  border-radius: 50%;
  object-fit: contain; 
`;

export const CircleImg = ({src, ...props}) => {
  return (
      <Circle src={src} {...props} />
  );
};