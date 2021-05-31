import React, {useState, useEffect, useCallback, useRef} from 'react';
import {useDebounce, usePrevious, useKeyDown} from '../../../assets/custom-hooks/hooks';
import * as utils from './gridCarousel.functions';
import {CarouselWrapper} from './CarouselWrapper.styled';
import {Carousel} from './Carousel.styled';
import {FABtn} from './FABtn.styled';
import {PageDots} from './PageDots.styled';

const GridCarousel = ({
 autoAdjustPages = true,
 breakpointDisplayLimits = {}, 
 children, 
 className = 'gridCarousel',
 defaultDisplayLimit = 5, 
 displayLeftoversInline = false, 
 gridRows = 1, 
 gridWidth = "100%", 
 navControls,
 overflowBehavior = "auto",
 strictRowsEnabled = false, 
 wrapperClassName = '',
 ...props
}) => {
  const defaultLimit = utils.checkDefaultDisplayLimit(defaultDisplayLimit);
  const calculatePerPageLimit = () => utils.calculatePerPageLimit(breakpointDisplayLimits, defaultLimit);
  const [itemsPerPage, setItemsPerPage] = 
   useState(
    Object.entries(breakpointDisplayLimits).length > 0 //if dev specified a breakpointDisplayLimit map
      ? calculatePerPageLimit() //run the imported utility function above with the preconfigured variables
      : defaultLimit //else return the default
   );
  const [currentPage, setCurrentPage] = useState(1);
  const navControlConfig = utils.mergeNavControlConfigObj(navControls);
  //configureGridVars() is passed two state variables and the component config props we expose; these are the dependencies of extracted mathematical expressions aptly represented by their destructured variable name
  const gridConfigVars = utils.configureGridVars(children, currentPage, defaultLimit, displayLeftoversInline, gridRows, itemsPerPage, navControlConfig, strictRowsEnabled);
  const { arrows, dots, firstToRender, gridColumns, hasEmptyRows, keyboard, lastToRender, leftoverItemCount, numRowsEmpty, screenWidth, shouldDisplayLeftoversInline, totalChildren, totalPages } = gridConfigVars;
  const {arrowA, arrowB} = arrows;
  const prevTotalPages = usePrevious(totalPages); //in the previous render, how many TOTAL pages were there (NOT the current page)? This value only changes on resizing into a new, defined breakpoint range. It only serves as a comparison value for the adjustPages() function
  const prevPage = usePrevious(currentPage);
  const oldFirstToRender = useRef(firstToRender < 1 ? 1 : firstToRender);

  const handleResize = useDebounce(() => {
    const limit = calculatePerPageLimit(); 
    setItemsPerPage(limit);
  }, 300);


  const adjustPages = useCallback(() => {
    if(autoAdjustPages && (prevTotalPages !== totalPages)) { //need this check because useEffect() requires currentPage in dependancy array but that would mean the page would never change. It is only if our total number of pages has changed on a resize that we would want to intervene, take the previous render's first child that we've been tracking, and find out what page that child is now on
      //get first child rendered on previous render and find out what page it's on now after a resize put us in a new breakpoint with a new itemsPerPage limit, thereby redefining the current value of totalPages
      let autoAdjustPage = Math.ceil(oldFirstToRender.current / itemsPerPage);
      setCurrentPage(autoAdjustPage);
    } else if (currentPage > totalPages) {
      // ex; page limit went from 6 to 4 and we're still on 6... catch that and set it to the new limit 4. Otherwise, keep the same page number regardless of recalculated display limits
      setCurrentPage(totalPages);
    }
  }, [itemsPerPage, totalPages, prevTotalPages ,currentPage, autoAdjustPages, setCurrentPage]);


  const incrementPage = useCallback(() => {
    setCurrentPage(prevState => prevState + 1 > totalPages ? 1 : prevState + 1);
  }, [setCurrentPage, totalPages]) 
  
  const decrementPage = useCallback(() => {
    setCurrentPage(prevState => prevState - 1 < 1 ? totalPages : prevState - 1);
  }, [setCurrentPage, totalPages])

  useKeyDown(keyboard.decrementalKeys, decrementPage);
  useKeyDown(keyboard.incrementalKeys, incrementPage);
  
  
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {	
      window.removeEventListener("resize", handleResize);
    }   
  }, [screenWidth, handleResize]);

  
  useEffect(() => {
    adjustPages();
  }, [itemsPerPage, adjustPages]);

  
  useEffect(() => {
    return () => {
      oldFirstToRender.current = firstToRender < 1 ? 1 : firstToRender;
    }
  }, [firstToRender]);

  return (
    <CarouselWrapper 
     gridWidth={gridWidth} 
     overflowBehavior={overflowBehavior}
     className = {wrapperClassName}
    >
      
      <FABtn 
        show = {arrows.display}
        icon={arrowA.icon || "fas fa-angle-left"}
        iconColor={arrowA.iconColor || "white"}
        onClick={() => {
          currentPage >= 2
            ? decrementPage()
            : setCurrentPage(totalPages);
        }}
        {...arrowA}
      />
    
      <Carousel
        $currentPage = {currentPage}
        $gridColumns = {gridColumns}
        $gridRows = {gridRows}
        $prevPage = {prevPage}
        $totalChildren = {totalChildren}
        $totalPages = {totalPages}
        $shouldTruncateRow = {hasEmptyRows}
        $rowsToTruncate= {hasEmptyRows ? numRowsEmpty : 0}
        $leftoverItemCount = {leftoverItemCount}
        $alignLeftovers = {props.alignLeftovers || "center"}
        $displayLeftoversInline = {shouldDisplayLeftoversInline}
        {...props}
      >
        {[...children].slice(firstToRender, lastToRender)}
      </Carousel>
      
      <PageDots 
        currentPage={currentPage} 
        numPages={totalPages} 
        show={dots.display}
        updatePage={value => setCurrentPage(value)}
        {...dots}
      />
       
      <FABtn 
        show = {arrows.display}
        icon={arrowB.icon || "fas fa-angle-right"}
        iconcolor={arrowB.iconColor || "white"}
        onClick={() => {
          currentPage < totalPages
            ? incrementPage()
            : setCurrentPage(1);
        }}
        {...arrowB}
      />
    </CarouselWrapper>
  )
};
export default GridCarousel;