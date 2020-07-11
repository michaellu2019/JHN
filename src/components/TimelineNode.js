import React from 'react';

import {Spring} from 'react-spring/renderprops';

class TimelineNode extends React.Component {
	constructor(props) {
		super(props);
		this.imgSrc = props.imgSrc;
		this.title = props.title;
		this.children = props.children;
		this.state = {
			open: false
		}
	}

	render() {
		return (
			<div className = "timeline-node">
				<header>
					<img src = {this.imgSrc} />
					<span className = "subheading">{this.title}</span>
				</header>

				<div className = "content">
					<Spring config = {{clamp: true, tension: 30}} from = {{overflow: "hidden", maxHeight: 0}} to = {{maxHeight: this.state.open ? 1000 : 0}}>
	          			{props => (
	          				<div style = {props}>
	          					{this.children}
	          				</div>
			          	)}
				    </Spring>
				</div>
			</div>
		);
	}
}

export default TimelineNode;