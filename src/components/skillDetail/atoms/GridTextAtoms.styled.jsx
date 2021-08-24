import styled, {css} from 'styled-components';
import {bp} from '../../../assets/utilities';
import { GridDisplay } from '../../grid-carousel/encapsulated/Carousel.styled';

export const TextWrapper = styled.div`
  height: auto;
  width: 93%;
  margin: 4rem auto 25vh auto;
  z-index: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  visibility: ${props => props.out ? 'hidden' : 'visible'};
  animation: ${props => props.out ? 'fadeOut' : 'fadeIn'} 1s linear;
  transition: visibility 1s linear;
  
  ${bp.tabmd`
    margin: 4rem auto 5vh auto;
  `}
`;

export const GridList = styled(GridDisplay)`
  height: auto;
  width: 100%;
  grid-gap: 5rem;
  filter: drop-shadow(2px 4px 6px black);
  grid-template-rows: unset;

  ${bp.tabmd`
    width: 90%;
  `}
`;

export const Excerpt = styled.li`
  min-height: 20vh;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 5%;
  border-radius: 10px;
  box-shadow: inset 1px 1px 20px ${window.matchMedia('(prefers-reduced-motion: reduce)').matches ? css`rgba(255, 255, 255, .85)` : css`rgba(0, 0, 0, ${props => props.shadowTint})`}; //if prefers reduced motion is set the gradient background will never scale and there'll only ever be a black background. Set the inset box shadow to an constant shade of white in that case
  color: white;
  font-family: 'gruppo', 'Courier New', Courier, monospace;
  font-size: 4rem;
  font-weight: 400;
  letter-spacing: 1px;

  ${bp.phonelg`
    min-height: 25vh;
  `}

  /* ${bp.tabmd`
    font-size: 3rem;
  `} */
`;