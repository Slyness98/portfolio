import React from 'react';
import styled from 'styled-components';

const Circle = styled.div`
  width: 14rem;
  height: 14rem;

  & img {
    border-radius: 50%;
    width: 100%; 
    height: 100%; 
    object-fit: contain; 
  }
`;

export const ProfileImage = ({src, ...props}) => {
  return (
    <Circle {...props} >
      <img src={src} alt="profile" />
    </Circle>
  );
};