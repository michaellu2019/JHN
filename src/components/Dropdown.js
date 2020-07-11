import React from 'react';

class Dropdown extends React.Component {
	constructor(props) {
		super(props);
		this.title = props.title;
		this.children = props.children;
		this.state = {
			open: false
		};
		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState({
			open: !this.state.open
		});
	}

	render() {
		return (
			<div className = "dropdown">
				<div className = {this.state.open ? "dropdown-heading active" : "dropdown-heading"} onClick = {this.toggle}>
					<span className = "dropdown-arrow">&#10148;</span>
					<span>{this.title}</span>
				</div>
				
				<div className = {this.state.open ? "dropdown-content active" : "dropdown-content"}>
					{this.children}
				</div>
			</div>
		);
	}
}

export default Dropdown;