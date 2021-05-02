import React, {useState, useEffect} from 'react';
import {useDebounce} from '../../assets/custom-hooks/hooks';
import * as utils from './gridCarousel.functions';
import {CarouselWrapper} from './CarouselWrapper.styled';
import {Carousel} from './Carousel.styled';
import {FABtn} from './FABtn.styled';

const GridCarousel = ({
 breakpointDisplayLimits = {}, 
 children, 
 defaultDisplayLimit = 5, 
 displayLeftoversInline = false, 
 gridRows = 1, 
 gridWidth = "100%", 
 strictRowsEnabled = false, 
 wrapperClassName = '',
 ...props
}) => {
  const calculatePerPageLimit = () => utils.calculatePerPageLimit(breakpointDisplayLimits, defaultDisplayLimit);
  const defaultLimit = utils.checkDefaultDisplayLimit(defaultDisplayLimit);
  const [itemsPerPage, setItemsPerPage] = 
   useState(
    Object.entries(breakpointDisplayLimits).length > 0 //if dev specified a breakpointDisplayLimit map
      ? calculatePerPageLimit() //run the imported utility function above with the preconfigured variables
      : defaultLimit //else return the default
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
    to the quotient of totalChildren/rows in order to maintain the specified value of rows. If it's false, 
    the quotient assigned to columns will be kept and content may spill over into extra rows if needed
  */
  const round = strictRowsEnabled ? Math.ceil : Math.floor;
  const gridColumns = round(totalChildren / gridRows) < 1
    ? defaultLimit  //can safely assume the set default limit instead of just setting to 1. Worst case scenario, shouldTruncateRow takes over and does its job. This'll avoid some ugly single column leftovers. 
    : round(totalChildren / gridRows);
  
  const leftoverItemCount = totalChildren % gridColumns;
  const totalPages = Math.ceil([...children].length / itemsPerPage);
  const numRowsEmpty = gridRows - (gridRows - Math.floor((gridColumns * gridRows - totalChildren) / gridColumns))  
  const hasEmptyRows = numRowsEmpty > 0 ? true : false;
  const shouldDisplayLeftoversInline = displayLeftoversInline && (currentPage === totalPages) ? true : false;

  return (
    <CarouselWrapper 
     gridWidth={gridWidth} 
     overflowBehavior={props.overflowBehavior || "auto"}
     className = {wrapperClassName}
    >
      <FABtn 
        className="fabtn fabtn--back"
        icon="fas fa-angle-left"
        iconcolor="white"
        onClick={() => {
          currentPage >= 2
            ? setCurrentPage(prevState => prevState - 1) 
            : setCurrentPage(totalPages)
        }}
      />
      <Carousel
        gridColumns = {gridColumns}
        gridRows = {gridRows}
        totalChildren = {totalChildren}
        shouldTruncateRow = {hasEmptyRows}
        rowsToTruncate= {hasEmptyRows ? numRowsEmpty : 0}
        leftoverItemCount = {leftoverItemCount}
        alignLeftovers = {props.alignLeftovers || "center"}
        displayLeftoversInline = {shouldDisplayLeftoversInline}
        {...props}
      >
        {[...children].slice(firstToRender, lastToRender)}
      </Carousel>
      <FABtn 
        className="fabtn fabtn--next"
        icon="fas fa-angle-right"
        iconcolor="white"
        onClick={() => {
          currentPage < totalPages
            ? setCurrentPage(prevState => prevState + 1) 
            : setCurrentPage(1) 
        }}
      />
    </CarouselWrapper>
  )
}

export default GridCarousel