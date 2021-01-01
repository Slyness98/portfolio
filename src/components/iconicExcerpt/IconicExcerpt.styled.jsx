import React from 'react';
import styled from 'styled-components';
import {bp} from '../../assets/utilities';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
`

const Icon = styled.i.attrs(props => ({
  className: props.icon
}))`
  font-size: 4rem;
  color: ${props => props.iconColor ? props.iconColor : "white"};
  margin: 2rem 0 1rem 0;
`;

const Heading = styled.h2.attrs(props => ({
 ...props
}))`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 3rem;
  color: whitesmoke;
  font-family: 'gruppo'; 

  &::after {
    content: "";
    width: 30vw;
    height: 2px;
    padding-top: .5rem;
    border-top: 2px solid ${props => props.underlineColor ? props.underlineColor : "white"};
    transform: translateY(1rem);
  }
`
const Excerpt = styled.p`
  font-family: 'gruppo';
  font-size: 2.5rem;
  font-weight: 400;
  text-align: center;
  color: white;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 5% 10%;
  margin-top: 5%;
  letter-spacing: .25px;
  line-height: 1.05;

  ${bp.phonelg`
    font-size: 3rem;
  `}

  ${bp.tab`
    font-size: 3.5rem;
  `}
`
export const IconicExcerpt = ({icon, accentColor, heading, excerpt}) => {
  return (
    <Container>
      <Icon icon={icon} iconColor={accentColor}></Icon>
      <Heading underlineColor={accentColor}>{heading}</Heading>
      <Excerpt>{excerpt}</Excerpt>
    </Container>
  );
};