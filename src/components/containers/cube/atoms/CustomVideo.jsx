import React from 'react';

const CustomVideo = ({...props}) => {
  const {src} = props;

  return(
  <React.Fragment>
    <video 
      width={window.innerWidth}
      height={window.innerHeight}
      preload="metadata" 
      controls 
      loop
      {...props}
    >
      <source src={src} type="video/mp4"/>
    </video>
  </React.Fragment>
  );
}

export default CustomVideo;