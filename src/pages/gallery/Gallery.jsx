import React from 'react';
import FullScreenGallery from './desktop/FullScreenGallery';
import ScrollGallery from './mobile/ScrollGallery.styled';
import {usePlatformContext} from '../../contexts/Platform.context'
const Gallery = () => {
  const platform = usePlatformContext();

  return (
   <>
    {platform === true
      ? <ScrollGallery />
      : <FullScreenGallery />
    }
   </>
  );
};

export default Gallery;