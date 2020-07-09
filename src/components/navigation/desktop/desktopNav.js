import React, {Fragment} from 'react';

import Draggable from '../../dnd/Draggable';
import Droppable from '../../dnd/Droppable';
import Navbar from './Navbar';

const DesktopNavigation = () => {
  return(
    <React.Fragment>
  	<Droppable id="drop1" className="navbar__container">
      <Draggable id="dragItem"> <Navbar /> </Draggable>
    </Droppable>

    <Droppable id="drop2" className="navbar__container invertGrid">

    </Droppable>

    <Droppable id="drop3" className="navbar__container">

    </Droppable>

    <Droppable id="drop4" className="navbar__container invertGrid">

    </Droppable>
    </React.Fragment>
  );
}


export default DesktopNavigation;