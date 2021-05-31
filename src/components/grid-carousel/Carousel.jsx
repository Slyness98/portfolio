import {useEffect, useState} from 'react';
import {useDebounce} from '../../assets/custom-hooks/hooks';
import Data from './carouselChildren.data';
import {navControlConfig, maxItemsPerPageByBp} from './gridCarousel.config'
import GridCarousel from './encapsulated/GridCarousel';
import SkillButton from '../buttons/skill-button/SkillButton';

const Carousel = () => {
  const [gridWidth, setGridWidth] = useState(window.matchMedia("max-width: 899px").matches ? "100%" : "85%");
  
  const handleResize = useDebounce(() => {
    setGridWidth(window.matchMedia("max-width: 899px").matches ? "100%" : "85%");
  }, 300);

  useEffect(() => {
    window.addEventListener("load", handleResize);
    window.addEventListener("resize", handleResize);
    return () => {	
      window.removeEventListener("load", handleResize);
      window.removeEventListener("resize", handleResize);
    }   
  }, [handleResize]);
  return (
    <GridCarousel 
      wrapperClassName = "gridWrapper" 
      className = "gridCarousel"
      gridWidth = {gridWidth} 
      defaultDisplayLimit = {4}
      gridRows = {2} 
      strictRowsEnabled = {true}  
      breakpointDisplayLimits = {maxItemsPerPageByBp}
      navControls = {navControlConfig}
      overflowBehavior="hidden"
    > 
    { /*Map over whatever you want displayed in the GridCarousel. Dump & Forget! Read the documentation included 
       in this folder for more on how this component works. */
      Data.map((item, idx) => {  
        return(
          <SkillButton 
            key={`skillBtn--${idx+1}`}
            src="./images/profile.jpg"
            subtitle={item.skillName}
          />
        );
      })
    }
  </GridCarousel>
  )
};
export default Carousel;