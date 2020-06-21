import React, {Component, Fragment} from 'react';
// import NavContainer from './atoms/NavContainer';
import Draggable from '../../dnd/Draggable';
import Droppable from '../../dnd/Droppable';
import Navbar from './atoms/Navbar';
import styled, {css} from 'styled-components';

// const containerTop = {

// }

// const containerRight = {

// }

// const containerBottom = {

// }

// const containerLeft = {

// }



class DesktopNavigation extends Component{
  constructor(props) {
	super(props);
  
  this.state = {
    position: 'left'
  }

  // this.positionNav = this.positionNav.bind(this);
  }


  render() {
    return(
      <React.Fragment>
    	<Droppable id="dr1" class="row navbar__container navbar__container--top">
        <Draggable id="dragItem"> <Navbar /> </Draggable>
      </Droppable>

      <Droppable id="dr2" class="navbar__container navbar__container--right">

      </Droppable>

      <Droppable id="dr3" class="row navbar__container navbar__container--bottom">

      </Droppable>

      <Droppable id="dr4" class="navbar__container navbar__container--left">

      </Droppable>
      </React.Fragment>
    );
  }
}

export default DesktopNavigation;