import React from 'react';

import VisibilitySpring from '../components/VisbilitySpring';

import water from '../assets/images/water.jpg';
import dewalt from '../assets/images/dewaltwork.jpg';
import crocs from '../assets/images/crocswork.jpg';
import wateringcan from '../assets/images/wateringcanwork.jpg';
import nails from '../assets/images/utilitynailswork.jpg';
import wheel from '../assets/images/wheelwork.jpg';
import robot from '../assets/images/robotwork.gif';
import catfood from '../assets/images/catfoodwork.jpg';

class WorkPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showInfo: "none"
		};
		this.toggleInfo = this.toggleInfo.bind(this);
	}

	toggleInfo(info) {
		this.setState({
			showInfo: info
		});
	}

	render() {
		return (
			<main className = "primary">
				<article className = "work-section-container">
	          		<VisibilitySpring config = {{delay: 100, clamp: true, tension: 40}} from = {{opacity: 0}} to = {{opacity: 1}}>
						<header>
							<span className = "heading">The Work of the Genius</span>
						</header>
					</VisibilitySpring>
				</article>

				<VisibilitySpring config = {{delay: 100, clamp: true, tension: 40}} from = {{transform: "translateY(5%)", opacity: 0}} to = {{transform: "translateY(0%)", opacity: 1}}>
					<div className = "work-grid">
						<div className = "work-cell big1" onClick = {() => this.toggleInfo("crocs")}><img src = {crocs} /></div>
						<div className = "work-cell" onClick = {() => this.toggleInfo("nails")}><img src = {nails} /></div>
						<div className = "work-cell" onClick = {() => this.toggleInfo("dewalt")}><img src = {dewalt} /></div>
						<div className = "work-cell" onClick = {() => this.toggleInfo("wateringcan")}><img src = {wateringcan} /></div>
						<div className = "work-cell" onClick = {() => this.toggleInfo("robot")}><img src = {robot} /></div>
						<div className = "work-cell tall1" onClick = {() => this.toggleInfo("water")}><img src = {water} /></div>
						<div className = "work-cell big2" onClick = {() => this.toggleInfo("wheel")}><img src = {wheel} /></div>
						<div className = "work-cell" onClick = {() => this.toggleInfo("catfood")}><img src = {catfood} /></div>
					</div>
				</VisibilitySpring>

				<div className = {this.state.showInfo == "crocs" ? "work-info show" : "work-info"}>
					<span className = "close-work-info" onClick = {() => this.toggleInfo("none")}>×</span>
					<span className = "subheading">Crocs Gloves</span>
					<div className = "content">
						<p>Why have Crocs just for your feet when you can have Crocs for your hands as well? Think about it...</p>
					</div>
				</div>

				<div className = {this.state.showInfo == "nails" ? "work-info show" : "work-info"}>
					<span className = "close-work-info" onClick = {() => this.toggleInfo("none")}>×</span>
					<span className = "subheading">Utility Nails</span>
					<div className = "content">
						<p>Nails are useless. Imagine if they could be useful? Think about it...</p>
					</div>
				</div>

				<div className = {this.state.showInfo == "dewalt" ? "work-info show" : "work-info"}>
					<span className = "close-work-info" onClick = {() => this.toggleInfo("none")}>×</span>
					<span className = "subheading">DCP580B 20V Max Lithium Ion Brushless Planer (Tool Only)</span>
					<div className = "content">
						<p>It's a planer... What else is there to know?</p>
					</div>
				</div>

				<div className = {this.state.showInfo == "wateringcan" ? "work-info show" : "work-info"}>
					<span className = "close-work-info" onClick = {() => this.toggleInfo("none")}>×</span>
					<span className = "subheading">Watering Can</span>
					<div className = "content">
						<p>I've used it, and it works. Trust me...</p>
					</div>
				</div>

				<div className = {this.state.showInfo == "robot" ? "work-info show" : "work-info"}>
					<span className = "close-work-info" onClick = {() => this.toggleInfo("none")}>×</span>
					<span className = "subheading">Self-Terminating Robot</span>
					<div className = "content">
						<p>Aren't you tired of robots that don't turn themselves off? That's why I built a robot that can turn itself off.</p>
					</div>
				</div>

				<div className = {this.state.showInfo == "water" ? "work-info show" : "work-info"}>
					<span className = "close-work-info" onClick = {() => this.toggleInfo("none")}>×</span>
					<span className = "subheading">Water</span>
					<div className = "content">
						<p>Yeah... I invented water, but it's a pretty useless invention to be honest...</p>
					</div>
				</div>

				<div className = {this.state.showInfo == "wheel" ? "work-info show" : "work-info"}>
					<span className = "close-work-info" onClick = {() => this.toggleInfo("none")}>×</span>
					<span className = "subheading">Wheel</span>
					<div className = "content">
						<p>I invented the wheel too, but it's still another pretty useless invention...</p>
					</div>
				</div>

				<div className = {this.state.showInfo == "catfood" ? "work-info show" : "work-info"}>
					<span className = "close-work-info" onClick = {() => this.toggleInfo("none")}>×</span>
					<span className = "subheading">Purrfect Bistro Chicken Recipe Pâté Catfood</span>
					<div className = "content">
						<p>Yum. This is my favorite food, by the way.</p>
					</div>
				</div>
			</main>
		);
	}
}

export default WorkPage;