import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Droppable extends Component {
	
	drop = (e) => {
		e.preventDefault();
		const data = e.dataTransfer.getData('transfer');
		// e.target.appendChild(document.getElementById('dr1')|| document.getElementById('dr2') || document.getElementById('dr3') || document.getElementById('dr4'));
		e.target.appendChild(document.getElementById('dragItem'));
		console.log(data);
	}

	allowDrop = (e) => {
		e.preventDefault();
	}

	render() {
		return(
			<div id={this.props.id} className={this.props.class} onDrop={this.drop} onDragOver={this.allowDrop}>
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
