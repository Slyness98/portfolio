import React, {useState} from 'react';
import styled from 'styled-components'
import ScrollPageContainer from '../../../components/containers/scroll/ScrollPageContainer.styled';
import ScrollPageBlock from '../../../components/containers/scroll/ScrollPageBlock.styled';
import CubeContainer from '../../../components/containers/cube/CubeContainer';
import Data from '../gallery.data';
import ArrowBtn from '../../../components/buttons/arrow/ArrowBtn';
import FAIcon from '../../../components/icon/FAIcon';
import {bp} from '../../../assets/utilities';
import {toggleFullScreen, toggleProjectBlock} from './scrollGallery.functions';

const VidCtrlPanel = styled.div`
  width: 90%;
  margin: 5% auto 0 auto;
  background-color: transparent; 
  display: flex;
  justify-content: space-between;

  ${bp.standardland`
    width: 100%;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    max-height: 75%;
    direction: initial;
  `}

  & > * {
    color: white;
    background-color: transparent; 
    border-color: transparent; 
    font-size: 4.5rem;
    width: 7rem;
    height: 7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }
`;

const ScrollGallery = () => {
  const [activeItem, setActiveItem] = useState(Data.map((projectBlock) => {return projectBlock.isOpen})); //get an array of all boolean 'active' properties. All default to false

  return (
    <ScrollPageContainer>
      <h1 className="title">&#060;Project Gallery /&#062;</h1>
      {
        Data.map((project, idx) => {
         let i = idx+1;
         return (
          <ScrollPageBlock className={`projectBlock projectBlock--${i}`} key={`project-${i}`}>
            
            <CubeContainer 
              num={i} 
              isFlipped={activeItem[i]} 
              {...project} 
            />
    
            <VidCtrlPanel>
              <a href="/gallery" tabIndex={activeItem[i] ? "1" : "0"}>
                <FAIcon className="fab fa-github"/>
              </a>
              
              <a href="/gallery" tabIndex={activeItem[i] ? "1" : "0"}>
                <FAIcon className="fas fa-link" />
              </a>

              <button
                onClick={() => toggleFullScreen(i)} 
                disabled={!activeItem[i]}
                style={{cursor: `${activeItem[i] ? "pointer" : "initial"}`}}
                tabIndex={activeItem[i] ? "1" : "-1"}
              >
                <FAIcon className="fas fa-expand fullScreenIcon" />
              </button>

              <ArrowBtn 
                onClick={() => toggleProjectBlock(activeItem, setActiveItem, i)} 
                tabIndex="0"
              />
            </VidCtrlPanel>
          </ScrollPageBlock>
         );
        })
      }
    </ScrollPageContainer>
  );
};

export default ScrollGallery;