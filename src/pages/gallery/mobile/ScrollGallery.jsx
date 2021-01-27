import React from 'react';
import ScrollPageContainer from '../../../components/containers/scroll/scrollPageContainer.styled';
import ScrollPageBlock from '../../../components/containers/scroll/scrollPageBlock.styled';
import CubeContainer from '../../../components/containers/cube/CubeContainer';
import Data from '../gallery.data';
const ScrollGallery = () => {
  return (
    <ScrollPageContainer>
      {
        Data.map((project, idx) => {
         return (
          <ScrollPageBlock className={`projectBlock--${idx+1}`} key={`project-${idx+1}`}>
            <CubeContainer>
    
            </CubeContainer>
          </ScrollPageBlock>
         );
        })
      }
    </ScrollPageContainer>
  );
};

export default ScrollGallery;