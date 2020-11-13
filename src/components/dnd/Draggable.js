import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Draggable extends Component {
  drag = (e) => {
    e.dataTransfer.setData('transfer', e.target.id);
  }
  
  prohibitDrag = (e) => {
    e.stopPropagation();
  }

  render() {
	return(
	<div 
	  id={this.props.id} 
	  className={this.props.className} 
	  draggable="true" onDragStart={this.drag} 
	  onDragOver={this.prohibitDrag} 
	  style={this.props.style}
	>
	  {this.props.children}
	</div>
	);
  }
}

Draggable.propTypes = {
	id: PropTypes.string,
	style: PropTypes.object,
	children: PropTypes.node
}