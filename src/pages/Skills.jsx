// import React, {useEffect, useState} from 'react';
import React from 'react';
import Data from '../components/grid-carousel/gridCarousel.data.js'
import GridCarousel from '../components/grid-carousel/GridCarousel';
import SkillButton from '../components/buttons/skill-button/SkillButton';

const maxItemsPerPageByBp = {
  "27.5em": 6,
  "56.25em": 8,
  "87.5em": 10
};

const Skills = () => {
 
  return (
    <main className="section-skills">
      <h1 className="title title--skills">&#060;Skills /&#062;</h1>
      <GridCarousel 
        className = "gridCarousel"
        defaultDisplayLimit = {4}
        gridRows = {2}
        strictRowsEnabled = {false}  //control item limit spillage behavior and decide to strictly adhere to the gridRows property value (and dynamically set columns) or to spill over into a new row as needed
        breakpointDisplayLimits = {maxItemsPerPageByBp} // {"any_valid_css_breakpoint"[key]: positiveInteger[value] } 
      > 
      { //Map over your subset of data that you map to whatever component you want to display (cards, imgs, or in this case my skillButtons), dump as many as you want in between the grid and it will limit, morph, and comply to your grid configurations. Dump & Forget!
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