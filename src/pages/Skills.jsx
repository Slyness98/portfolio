import React, {useEffect, useState} from 'react';
import Data from '../components/grid-carousel/gridCarousel.data.js'
import GridCarousel from '../components/grid-carousel/GridCarousel';
import SkillButton from '../components/buttons/skill-button/SkillButton';
import {useDebounce} from '../assets/custom-hooks/hooks';

const maxItemsPerPageByBp = {
  "27.5em": 6,
  "56.25em": 8,
  "87.5em": 9
};

const Skills = () => {
  const [gridWidth, setGridWidth] = useState('');
  
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
        wrapperClassName = "gridWrapper" //if really need be, wrapperClassName can be used to hook into the wrapper's styles, but it's best avoided. Chances are you want to configure one of the many grid options, add to the actual grid's styles with the regular className attribute, or the component you are mapping over as children to display needs its styles improved
        className = "gridCarousel" //className, along with any other props to be spread in, apply to the ACTUAL carousel, not its wrapper
        gridWidth = {gridWidth} //any valid CSS width value. Applied to the wrapper to control width of ENTIRE component
        defaultDisplayLimit = {4} //any positive integer > 0. Anything invalid will be set to 1
        gridRows = {2} // this determines the rows your content will feature. Combined with breakpointDisplayLimits and/or defaultDisplayLimit, it also dynamically determines the number of columns per row. Excessive, empty rows are truncated and invalid values will default to the defaultDisplayLimit. Worst case scenario, if even the default is too much, the truncation behavior will catch that and do its job
        strictRowsEnabled = {true}  //control item limit spillage behavior and decide to strictly adhere to the gridRows property value (and dynamically set columns) or to spill over into a new row as needed, prioritizing the determined number of columns per row
        breakpointDisplayLimits = {maxItemsPerPageByBp} // {"any_valid_css_breakpoint"[key]: positiveInteger[value] } --invalid values are set to 1. Matched against a min-width media query testing against window.innerWidth
        // alignLeftovers="start"//don't like the default centering behavior? So far the only other position is CSS grid's default behavior (one might call it "start", but anything other than "center" will work right now), but other behaviors, such as 'end', etc. could be added
        //overflowBehavior="auto" //any valid css overflow property value. Defaults to 'auto'
        // displayLeftoversInline = {true} // throw leftover children on last page into one row. Defaults to false
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