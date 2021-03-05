import React from 'react';
import PropTypes from 'prop-types';

const Droppable = ({className, id, children}) =>{
  const drop = (e) => {
	e.preventDefault();
	let newId = e.target.id;
	sessionStorage.setItem('navbarPosition', newId);
	e.target.appendChild(document.getElementById('dragItem'));
  };
  
  const allowDrop = (e) => {
	e.dataTransfer.dropEffect= "copy";
	e.preventDefault();
  };

  return(
	<div 
	  id={id} 
	  className={className} 
	  onDrop={drop} 
	  onDragOver={allowDrop}
	>
		{children}
	</div>
  );
};

Droppable.propTypes = {
	id: PropTypes.string,
	style: PropTypes.object,
	children: PropTypes.node
}

export default Droppable;