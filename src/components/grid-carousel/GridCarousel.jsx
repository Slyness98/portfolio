import React, {useState, useEffect} from 'react';
import {useDebounce} from '../../assets/custom-hooks/hooks';

const GridCarousel = ({breakpointDisplayLimits, items, defaultDisplayLimit}) => {
  const [itemsPerPage, setItemsPerPage] = useState(defaultDisplayLimit || 5);
  const [gridItems, setGridItems] = useState(items);

  const screenWidth = window.innerWidth;
  
  const handleResize = useDebounce(() => {
    if(typeof breakpointDisplayLimits === "object" && Object.entries(breakpointDisplayLimits).length > 0) {
      let takeGreatestLimit = [];
      
      for (const [key, value] of Object.entries(breakpointDisplayLimits)) {
        let mql = window.matchMedia(`(min-width: ${key})`);
        if(mql.matches) {
          takeGreatestLimit.push(value);
        }
      }
       
      const max = takeGreatestLimit.length > 0
       ? Math.max.apply(null, takeGreatestLimit)
       : (defaultDisplayLimit || 5)
      console.log("max is: ", max);
      setItemsPerPage(max);
    };
  }, 300);

  useEffect(() => {
    window.addEventListener("load", handleResize);
    window.addEventListener("resize", handleResize);
    return () => {	
      window.removeEventListener("load", handleResize);
      window.removeEventListener("resize", handleResize);
    }
    
  }, [screenWidth, handleResize])

  useEffect(() => {
   console.log(itemsPerPage)
  }, [itemsPerPage])

  return (
    <div>
      <p>hi... I'm a placeholder while dynamic pagination variable calculation logistics get worked out</p>
    </div>
  )
}

export default GridCarousel