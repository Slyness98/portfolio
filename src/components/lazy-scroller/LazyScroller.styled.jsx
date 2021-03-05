import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Box = styled.button`
  width: 7.5rem;
  height: 7.5rem;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  transform: translate(88vw, 70vh);
  border: 4px double whitesmoke;
  background-color: transparent;
  z-index: 5000;

  &:focus {
    border: 4px double rgb(0, 234, 255) !important;
    outline: none !important;
  }
`;

const Icon = styled.i.attrs(() => ({
	id: `lazyScrollerIcon`
}))`
  color: purple;
  font-size: 7rem;
`;

export const LazyScroller = ({watchNode, iconUp, iconDown, pageRootId, ...props}) => {
  let count = useRef(0);

  useEffect(() => {
    if(!watchNode || typeof watchNode !== "string") {
      console.error("provide a valid class name for the LazyScroller element to watch");
      return null;
    };

    let nodes = document.querySelectorAll(watchNode); 
    const scroller = document.getElementById("lazyScroller");
    const scrollerIcon = document.getElementById("lazyScrollerIcon");
    let styledClassname = scrollerIcon.getAttribute("class");// get styled component's generated class attribute so we can tack on to it without wiping the styled component

    scroller.addEventListener("click", () => {
      let currentNode;
      switch(count.current) {
        case nodes.length - 1: 
        setTimeout(() => {return scrollerIcon.className = `${styledClassname} ${iconDown}`}, 400);
          //Intersection Observer will automatically set count.current to zero. This will return a .current value re-assignment order of 2,1,0, instead of 0,1,0 as it is with manual re-assignment here.
          pageRootId
          ? document.getElementById(`${pageRootId}`).scrollTo(0, 0)
          : window.scrollTo(0,0);
        break;

        case nodes.length - 2:
          setTimeout(() => {return scrollerIcon.className = `${styledClassname} ${iconUp}`}, 400);
          count.current = count.current + 1;
          currentNode = nodes[count.current];
          currentNode.scrollIntoView({behavior:'smooth', inline: 'center', block: 'center'});  // these added properties help chrome's mobile implementation stay consistent with desktop experiences. After a full cycle of scrolling, Chrome won't listen to scrollIntoView() in the next to last watchNode item
        break;
        
        default: 
          scrollerIcon.className = `${styledClassname} ${iconDown}`;
          count.current = count.current + 1;
          currentNode = nodes[count.current];
          currentNode.scrollIntoView({behavior:'smooth', inline: 'center', block: 'center'});
      }
    });
    
    if ('IntersectionObserver' in window) {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: .2
      }
      
      var callback = function(entries) { 
        let intersectingElement;
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            intersectingElement = document.getElementsByClassName(entry.target.className)[0];
            let manualCountUpdate = [...nodes].indexOf(intersectingElement, 0);
            count.current = manualCountUpdate;
            manualCountUpdate === [...nodes].length - 1
              ? setTimeout(() => {return scrollerIcon.className = `${styledClassname} ${iconUp}`}, 400)
              : scrollerIcon.className = `${styledClassname} ${iconDown}`;
          };
        });
      };
      
      const observer = new IntersectionObserver(callback, options);
      [...nodes].forEach(target => 
        observer.observe(target)
      );
    };
  }, [count, watchNode, pageRootId, iconDown, iconUp]);
 
  return (
    <Box id="lazyScroller" {...props}>
      <Icon className={iconDown}/>
    </Box>
  );
};