import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Droppable extends Component {

	drop = (e) => {
		e.preventDefault();
		e.target.appendChild(document.getElementById('dragItem'));
	}

	allowDrop = (e) => {
		e.preventDefault();

	}

	render() {
		return(
			<div id={this.props.id} className={this.props.className} onDrop={this.drop} onDragOver={this.allowDrop}>
				{this.props.children}
			
			</div>
		);
	}
}

Droppable.propTypes = {
	id: PropTypes.string,
	style: PropTypes.object,
	children: PropTypes.node
}
