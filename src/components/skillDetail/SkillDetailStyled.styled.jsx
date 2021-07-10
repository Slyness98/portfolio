import styled from 'styled-components';

export const SkillDetailStyled = styled.section`
  height: auto;
  width: 93%;
  margin: 4rem auto 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  visibility: ${props => props.out ? 'hidden' : 'visible'};
  animation: ${props => props.out ? 'fadeOut' : 'fadeIn'} 1s linear;
  transition: visibility 1s linear;
`;

export const Icon = styled.i`
  height: 5rem;
  width: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #D72638;
  filter: brightness(0.5) drop-shadow(0px 0px 1px white);
  font-size: 6rem;
  cursor: pointer;
`;