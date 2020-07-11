import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import VizSensor from 'react-visibility-sensor';

import ImageCard from '../components/ImageCard';
import VisibilitySpring from '../components/VisbilitySpring';
import AnimSpring from '../components/AnimSpring';

import scholar from '../assets/images/scholar.JPG';
import space from '../assets/images/space.jpg';
import spacerot from '../assets/images/spacerotated.jpg';
import baby from '../assets/images/baby.png';
import water from '../assets/images/water.jpg';
import dewalt from '../assets/images/dewalt.jpg';
import crocs from '../assets/images/crocs.jpg';
import wateringcan from '../assets/images/wateringcan.jpg';
import jhnvid from '../assets/videos/jhn.mp4';

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			spaceX: -10,
			spaceY: -10,
			itemsRevealed: 0
		};
		this.shiftSpaceImg = this.shiftSpaceImg.bind(this);
		this.scrollToNext = this.scrollToNext.bind(this);
	}

	shiftSpaceImg(e) {
		var dx = (e.nativeEvent.offsetX - window.innerWidth/2)/200;
		var dy = (e.nativeEvent.offsetY - window.innerHeight/2)/200;

		this.setState({
			spaceX: -10 + dx,
			spaceY: -10 + dy
		});
	}

	scrollToNext(dest) {
		var el = document.getElementsByClassName('home-section-container')[dest];
		var t = 0;
		if (el != null) {
			t = el.offsetTop;
		}
		window.scrollTo({
			top: t,
			behavior: 'smooth'
		});
	}

	render() {
		var bg = space;
		var bgSize = '120%'
		if (window.innerWidth < 768) {
			bg = spacerot;
			bgSize = '140%';
		}

		var spaceSectionStyle = {
			backgroundImage: 'url(' + bg + ')',
			backgroundSize: bgSize,
			backgroundPosition: this.state.spaceX + 'em ' + this.state.spaceY + 'em',
			// transform: `translate3d(${this.state.spaceX}em,${this.state.spaceY}em,0)`,
			transition: '0.75s ease'
		};

		return (
          <main className = "primary">
	          <section className = "main">
	          	<article className = "home-section-container">
		          	<AnimSpring config = {{delay: 1400, clamp: true, tension: 20}} from = {{overflow: "hidden", maxHeight: 0}} to = {{maxHeight: 1000}}>
		          		<span className = "home-heading">JONATHAN<br />HARRISON<br />NEVES</span>
	          			<span className = "subheading">The man, the myth, the legend...</span>

	          			<AnimSpring config = {{delay: 1750, clamp: true, tension: 40}} from = {{opacity: 0}} to = {{opacity: 1}}>
		          			<div className = "triangle-button bounce" onClick = {() => this.scrollToNext(1)}>⮟</div>
		          		</AnimSpring>
		          	</AnimSpring>

		          	<AnimSpring config = {{delay: 400, clamp: true, tension: 20}} from = {{opacity: 0}} to = {{opacity: 1}}>
	          			<img src = {scholar} alt = "Jonathan Harrison Neves the Scholar..." />
		          	</AnimSpring>
	          	</article>

	          	<article className = "home-section-container" style = {spaceSectionStyle} onMouseOver = {this.shiftSpaceImg} onMouseMove = {this.shiftSpaceImg}>
	          		<VisibilitySpring config = {{delay: 100, clamp: true, tension: 40}} from = {{opacity: 0}} to = {{opacity: 1}}>
	          			<span className = "home-heading">THE HERO</span>
					    <span className = "subheading">"I'm not the hero we need, but the hero we deserve..."<br />- Jonathan Harrison Neves upon creating the universe, circa 13.8 billion years ago.</span>
	          		</VisibilitySpring>
	          	</article>

	          	<article className = "home-section-container">
		          	<VisibilitySpring config = {{delay: 100, clamp: true, tension: 40}} from = {{opacity: 0}} to = {{opacity: 1}}>
						<span className = "home-heading">THE CREATOR</span>
					</VisibilitySpring>

		          	<VisibilitySpring config = {{delay: 100, clamp: true, tension: 40}} from = {{transform: "translateY(40%)", opacity: 0}} to = {{transform: "translateY(0%)", opacity: 1}}>
			          	<div className = "card-container">
			          		<Link to = "/work"><ImageCard imgSrc = {water} heading = "Water" subheading = "Yes, I invented water... You're welcome..." /></Link>
			          		<Link to = "/work"><ImageCard imgSrc = {dewalt} heading = "DCP580B 20V Max Lithium Ion Brushless Planer (Tool Only)" subheading = "It's a planer." /></Link>
			          		<Link to = "/work"><ImageCard imgSrc = {crocs} heading = "Crocs Gloves" subheading = "They're Crocs... But they're gloves..." /></Link>
			          		<Link to = "/work"><ImageCard imgSrc = {wateringcan} heading = "Watering Can" subheading = "I mean... What do you think it does?" /></Link>
			          	</div>
					</VisibilitySpring>
	          	</article>

	          	<article className = "home-section-container">
		          	<VisibilitySpring config = {{delay: 100, clamp: true, tension: 40}} from = {{transform: "translateX(-40%)", opacity: 0}} to = {{transform: "translateX(0%)", opacity: 1}}>
					    <img src = {baby} alt = "Jonathan Harrison Neves as a kid..." />
					</VisibilitySpring>

		          	<VisibilitySpring config = {{delay: 100, clamp: true, tension: 40}} from = {{transform: "translateX(40%)", opacity: 0}} to = {{transform: "translateX(0%)", opacity: 1}}>
		          		<span className = "home-heading">FROM HUMBLE BEGINNINGS</span>
	          			<span className = "subheading">"I built the hopsital that I was born in..."<br />- Jonathan Harrison Neves</span>
					</VisibilitySpring>
	          	</article>

	          	<article className = "home-section-container">
		          	<VisibilitySpring config = {{delay: 100, clamp: true, tension: 40}} from = {{opacity: 0}} to = {{opacity: 1}}>
	          			<span className = "home-heading">LEARN THE LEGEND</span>
					</VisibilitySpring>

					<VisibilitySpring config = {{delay: 400, clamp: true, tension: 100}} from = {{transform: "translateX(20%)", opacity: 0}} to = {{transform: "translateX(0%)", opacity: 1}}>
					    <div className = "content">
					    	<Link to = "/about">About Neves</Link>
						</div>
					</VisibilitySpring>

					<VisibilitySpring config = {{delay: 600, clamp: true, tension: 100}} from = {{transform: "translateX(20%)", opacity: 0}} to = {{transform: "translateX(0%)", opacity: 1}}>
					    <div className = "content">
					    	<Link to = "/bio">Neves' Biography</Link>
						</div>
					</VisibilitySpring>

					<VisibilitySpring config = {{delay: 800, clamp: true, tension: 100}} from = {{transform: "translateX(20%)", opacity: 0}} to = {{transform: "translateX(0%)", opacity: 1}}>
					    <div className = "content">
					    	<Link to = "/work">Neves' Work</Link>
						</div>
					</VisibilitySpring>

					<VisibilitySpring config = {{delay: 1400, clamp: true, tension: 40}} from = {{opacity: 0}} to = {{opacity: 1}}>
					    <Link className = "button" to = "/contact">CONTACT</Link>
					</VisibilitySpring>
	          	</article>
          	</section>
          </main>
		);
	}
}

export default HomePage;