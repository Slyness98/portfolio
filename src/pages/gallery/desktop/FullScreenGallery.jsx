import React, {useState} from 'react';
import CustomVideo from '../../../components/containers/cube/atoms/CustomVideo';
import Data from '../gallery.data';
import ToggleProjectBtn from './atoms/ToggleProjectBtn';
import FAIcon from '../../../components/icon/FAIcon';
import {toggleOverlay} from './fullScreenGallery.functions';


const project = Data.map(project => project)
const vids = Data.map(project => project.videoSrc);
const projectTitleArr = Data.map(project => project.isTitleSwapped);
const FullScreenGallery = () => {
  const [currentProj, setCurrentProj] = useState(0);
  const [isOverlayVisible, setIsOverlayVisible]= useState(true);
  const [swappedTitles, setSwappedTitles] = useState(projectTitleArr);

  return (
    <main className="section-gallery">
      <h1 className="title--gallery">&#060;Project Gallery /&#062;</h1>
      
      <div className="eyeContainer">
        <button className="eye" onClick={() => {toggleOverlay(isOverlayVisible, setIsOverlayVisible);}}>
          <FAIcon className={"far fa-eye eye__icon"} />
        </button>
      </div>
      
      <CustomVideo src={vids[currentProj]} className="fsvid" autoPlay/>  
      
      <div className="overlay">
        <div className="overlay__titleContainer">
          {project.map((item, i) => {
            return (
              <ToggleProjectBtn
                className={`overlay__titleContainer__item overlay__titleContainer__item--${i}`}
                key={`projectTitle${i}`} 
                project={item} 
                i={i} 
                updateFn={setCurrentProj}
                swappedTitles={swappedTitles}
                setSwappedTitles={setSwappedTitles}
              />
            )
          })}
        </div>
        
        <div className="overlay__textContainer" >
          <p>{project[currentProj].description}</p>
        </div>
      </div>  
    </main>
  );
};

export default FullScreenGallery;