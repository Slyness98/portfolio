import React from 'react';
import CustomVideo from './atoms/CustomVideo';

const CubeContainer = ({...props}) => {
  const {num, isFlipped, ...project} = props;
  const {videoSrc, title, description, thumbnail} = project;

  return (
    <div className="cubeContainer">
      <h2 className="projectTitle" data-text={`${title}`}>{title}</h2>
      <img 
        className="front"
        src={thumbnail} 
        alt={`A filtered snapshot of code from the featured project - ${title}`}
      />
      <p className="cubeContainer--text" >{description}</p>

      <div className="back">
        <CustomVideo 
          id={`projectVideo${num}`} 
          className={`cubeContainer__video cubeContainer__video--${num}`}
          tabIndex={isFlipped ? "0" : "-1"}
          src={videoSrc}
        />
      </div>
    </div>
  );
}

export default CubeContainer;