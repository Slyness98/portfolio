import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Box = styled.div`
  width: 8rem;
  height: 8rem;
  position: fixed;
  display: flex;
  justify-content: center;
  align-itmes: center;
  transform: translate(85vw, 58vh);
  border: 1px solid whitesmoke;
  z-index: 5000;
`;

const Icon = styled.i.attrs(() => ({
	id: `lazyScrollerIcon`
}))`
  color: blue;
  font-size: 8rem;
`;

export const LazyScroller = ({watchNode, icon, pageRootId}) => {
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
          scrollerIcon.className = `${styledClassname} fa fa-angle-down`;
          count.current = 0;
          
          pageRootId
          ? document.getElementById(`${pageRootId}`).scrollTo(0, 0)
          : window.scrollTo(0,0);
        break;

        case nodes.length - 2:
          setTimeout(() => {return scrollerIcon.className = `${styledClassname} fa fa-angle-up`}, 400);
          count.current = count.current + 1;
          currentNode = nodes[count.current];
          currentNode.scrollIntoView(); 
        break;
        
        default: 
          scrollerIcon.className = `${styledClassname} fa fa-angle-down`;
          count.current = count.current + 1;
          currentNode = nodes[count.current];
          currentNode.scrollIntoView();
      }
    });

    if ('IntersectionObserver' in window) {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.25
      }
      
      var callback = function(entries) { 
        let intersectingElement;
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            intersectingElement = document.getElementsByClassName(entry.target.className)[0];
          };
        });
          
        if((intersectingElement !== undefined) && (typeof intersectingElement === "object")){
          let manualCountUpdate = [...nodes].indexOf(intersectingElement, 0);
          count.current = manualCountUpdate;
          
          manualCountUpdate === [...nodes].length - 1
            ? setTimeout(() => {return scrollerIcon.className = `${styledClassname} fa fa-angle-up`}, 400)
            : scrollerIcon.className = `${styledClassname} fa fa-angle-down`;
        }
      };
      
      const observer = new IntersectionObserver(callback, options);
      [...nodes].forEach(target => 
        observer.observe(target)
      );
    };
  }, [count, watchNode, pageRootId]);
 
  return (
    <Box id="lazyScroller">
      <Icon className={icon}/>
    </Box>
  );
};