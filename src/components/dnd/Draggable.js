import React from 'react';
import PropTypes from 'prop-types';

const Draggable = ({id, className, style, children}) => {
  const drag = (e) => {
    e.dataTransfer.setData('transfer', e.target.id);
  }
  
  const prohibitDrag = (e) => {
    e.stopPropagation();
  }
  
  return(
	<div 
	  id={id} 
	  className={className} 
	  draggable="true" 
	  onDragStart={drag} 
	  onDragOver={prohibitDrag} 
	  style={style}
	>
		{children}
	</div>
  );	
}

Draggable.propTypes = {
	id: PropTypes.string,
	style: PropTypes.object,
	children: PropTypes.node
}

export default Draggable;