import React from 'react';
import {Spring} from 'react-spring/renderprops';

class AnimSpring extends React.Component {
	constructor(props) {
		super(props);
		this.config = props.config;
		this.from = props.from;
		this.to = props.to;
		this.children = props.children;
		this.state = {
			active: true
		}
	}

	render() {
		return (
      		<Spring config = {this.config} from = {this.from} to = {this.to}>
      			{props => (
      				<div style = {props}>
      					{this.children}
      				</div>
	          	)}
  			</Spring>
		);
	}
}

export default AnimSpring;