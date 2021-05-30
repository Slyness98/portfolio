import React, {useEffect, useState} from 'react';
import {navControlConfig, maxItemsPerPageByBp} from '../components/grid-carousel/gridCarousel.config';
import Data from '../components/grid-carousel/gridCarousel.data.js'
import GridCarousel from '../components/grid-carousel/GridCarousel';
import SkillButton from '../components/buttons/skill-button/SkillButton';
import {useDebounce} from '../assets/custom-hooks/hooks';

const Skills = () => {
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
    <main className="section-skills">
      <h1 className="title title--skills">&#060;Skills /&#062;</h1>
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
      { /*Map over whatever you want displayed in the gridCarousel. Dump & Forget! Read the documentation in 
          the grid-carousel folder for more on how this component works. */
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
    </main>
  );
};

export default Skills;