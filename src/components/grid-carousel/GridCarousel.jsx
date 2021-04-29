import React, {useState, useEffect} from 'react';
import {useDebounce} from '../../assets/custom-hooks/hooks';
import * as utils from './gridCarousel.functions';
import {Carousel} from './Carousel.styled';

const GridCarousel = ({breakpointDisplayLimits, children, defaultDisplayLimit = 5, gridRows = 1, strictRowsEnabled = false, ...props}) => {
  const calculatePerPageLimit = () => utils.calculatePerPageLimit(breakpointDisplayLimits, defaultDisplayLimit);
  const [itemsPerPage, setItemsPerPage] = 
   useState(
    Object.entries(breakpointDisplayLimits).length > 0 //if dev specified a breakpointDisplayLimit map
      ? calculatePerPageLimit() //run the imported utility function above with the preconfigured variables
      : defaultDisplayLimit //else return the default
   );
  const [currentPage, setCurrentPage] = useState(1);
  const lastToRender = currentPage * itemsPerPage;
  const firstToRender = lastToRender - itemsPerPage;
  const screenWidth = window.innerWidth;

  const handleResize = useDebounce(() => {
    const limit = calculatePerPageLimit(); 
    setItemsPerPage(limit);
  }, 300);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {	
      window.removeEventListener("resize", handleResize);
    }   
  }, [screenWidth, handleResize]);

  const totalChildren = [...children].slice(firstToRender, lastToRender).length; 
  /*the following variable controls item spillage behavior. If strictRowsEnabled is true, columns are forced to tack on extra entries 
    to the quotient of limit/rows in order to maintain the specified value of rows. If it's false, 
    the quotient assigned to columns will be kept and content may spill over into extra rows if needed
  */
  const gridColumns = strictRowsEnabled ? Math.ceil(itemsPerPage / gridRows) : Math.floor(itemsPerPage / gridRows); 
  return (
    <Carousel
      gridColumns = {gridColumns}
      gridRows = {gridRows}
      gridLimit = {itemsPerPage}
      totalChildren = {totalChildren}
      leftoverItemCount = {
        utils.hasLessChildrenThanLimit(totalChildren, itemsPerPage)
          ? totalChildren % gridColumns 
          : itemsPerPage % gridColumns
      }
      alignLeftovers = {props.alignLeftovers || "center"}
      {...props}
    >
      {[...children].slice(firstToRender, lastToRender)}
    </Carousel>
  )
}

export default GridCarousel