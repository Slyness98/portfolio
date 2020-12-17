import React, { useEffect } from 'react';
import Draggable from '../../dnd/Draggable';
import Droppable from '../../dnd/Droppable';
import Navbar from './atoms/Navbar';

const DesktopNavigation = () => {
  let position = sessionStorage.getItem('navbarPosition');
  
  useEffect(() => {
   let drag = document.getElementById('dragItem');
   let dropzone = document.getElementById(position);

   if(dropzone === null) {
     dropzone = document.getElementById('drop1');
   }
   dropzone.appendChild(drag);
  }, [position]);


  useEffect(() => {
    let path = window.location.pathname;

    switch(path) {
      case '/about': 
        let dropzone = document.getElementById(position);
        if(dropzone === null) {
          dropzone = document.getElementById('drop1');
        }
        dropzone.style.zIndex = "55000";
        
        document.getElementById('drop1').style.width = '99vw';
        
        document.getElementById('drop4').style.right = '3rem';  
        let nav = document.getElementById("dragItem");
        if(nav.parentElement.id === "drop4") {
          let links = document.querySelectorAll(".navbar__link");
          links.forEach(link => {
            link.style.marginLeft = '2rem';
          });
        };
      break;

      default: return;
    }
  }, [position])

  return(
    <React.Fragment>

      <Droppable id="drop1" className="navbar__container">
        <Draggable id="dragItem"> 
          
          <Navbar /> 
      
        </Draggable>
      </Droppable>

      <Droppable id="drop2" className="navbar__container invertGrid">

      </Droppable>

      {/* <Droppable id="drop3" className="navbar__container">

      </Droppable> */}

      <Droppable id="drop4" className="navbar__container invertGrid">

      </Droppable>
    </React.Fragment>
  );
};


export default DesktopNavigation;