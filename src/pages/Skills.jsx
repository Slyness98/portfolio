import React from 'react';
import Data from '../components/grid-carousel/gridCarousel.data.js'
import GridCarousel from '../components/grid-carousel/GridCarousel';

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
        defaultDisplayLimit = {4}
        breakpointDisplayLimits = {maxItemsPerPageByBp}
        items = {Data}
      />
    </main>
  );
};

export default Skills;