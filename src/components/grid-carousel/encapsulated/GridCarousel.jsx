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
  const [currentPage, setCurrentPage] = useState(parseInt(sessionStorage.getItem('currentPage')) || 1);
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
  const initialXCoord = useRef(0);

  useEffect(() => {
    sessionStorage.setItem('currentPage', currentPage); 
  }, [currentPage]);
  
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
  /* This comment-wrapped block is the only concession to encapsulation. 
     Necessary only for this project's implementation, as it's the only place 
     the sessionStorage will be updated in time to know whether the activeSkill 
     falls outside of the range of skillbuttons rendered on the currentPage, 
     in which case focus should be set to the new firstToRender child. 
     We don't want focus set to a item that is now offscreen, so as pages are 
     navigated, focus should correct itself to the first item to render, 
     which is what is done here */
    const ftr1Indexed = firstToRender + 1;
    const currentItem = sessionStorage.getItem("activeSkill") ? parseInt(sessionStorage.getItem("activeSkill").slice(10)) : 1;
    const currentNum = parseInt(currentItem); 
    const arrRange = [...Array(lastToRender-ftr1Indexed+1)].map((el, ind) => ind + ftr1Indexed);
    if(!arrRange.includes(currentNum)) {
      try {
        const node = document.getElementById(`${[...children][firstToRender].props.id}`);
        node.focus();
        sessionStorage.setItem("activeSkill", `${[...children][firstToRender].props.id}`);
      } catch {
        return null;
      }
    }
  /*remove the above before exporting for re-use.*/
    return () => {
      oldFirstToRender.current = firstToRender < 1 ? 1 : firstToRender;
    }
  }, [firstToRender, lastToRender, children]);

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
        aria-label = {`Previous slide - slide ${currentPage - 1 === 0 ? totalPages : currentPage - 1} of ${totalPages}`}
        {...arrowA}
      />
    
      <Carousel
        className={className}
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
        onTouchStart={(e) => {initialXCoord.current = utils.getClientX(e)}}
        onTouchEnd={(e) => {utils.swipeNavigation(e, initialXCoord.current, incrementPage, decrementPage)}}
        {...props}
      >
        {[...children].slice(firstToRender, lastToRender)}
      </Carousel>
      
      <PageDots 
        currentPage={currentPage} 
        numPages={totalPages} 
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
        aria-label = {`Next slide ${totalPages === currentPage ? 'slide 1' :  `slide ${currentPage + 1}`} of ${totalPages}`}
        {...arrowB}
      />
    </CarouselWrapper>
  )
};
export default GridCarousel;