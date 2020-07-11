import React from 'react';

class ImageCard extends React.Component {
	constructor(props) {
		super(props);
		this.imgSrc = props.imgSrc;
		this.heading = props.heading;
		this.subheading = props.subheading;
	}

	render() {
		return (
			<div className = "image-card">
				<img src = {this.imgSrc} />
				<div className = "card-overlay">
					<span className = "heading">{this.heading}</span>
					<span className = "subheading">{this.subheading}</span>
				</div>
			</div>
		);
	}
}

export default ImageCard;