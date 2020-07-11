// CODE FROM https://codesandbox.io/s/8nvw32lw39?from-embed
import React from 'react';
import {VSensor, VizSensor} from 'react-visibility-sensor';
import {Spring} from 'react-spring/renderprops';

import VisbilitySensor from './VisibilitySensor';

class VisibilitySpring extends React.Component {
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
			<VisbilitySensor partialVisibility once>
      			{({isVisible}) => (
	          		<Spring config = {this.config} from = {this.from} to = {isVisible ? this.to : this.from}>
	          			{props => (
	          				<div style = {props}>
	          					{this.children}
	          				</div>
			          	)}
          			</Spring>
          		)}
      		</VisbilitySensor>
		);
	}
}

export default VisibilitySpring;