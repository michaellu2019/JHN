import React from 'react';

import AnimSpring from '../components/AnimSpring';
import VisibilitySpring from '../components/VisbilitySpring';
import Dropdown from '../components/Dropdown';
import ImageCard from '../components/ImageCard';

import devourer from '../assets/images/devourer.JPG';
import hu from '../assets/images/hu.jpg';
import mariachi from '../assets/images/mariachi.jpg';
import spongebob from '../assets/images/spongebob.jpg';
import frozen from '../assets/images/frozen.jpg';
import ducks from '../assets/images/ducks.jpg';
import spongebobmovie from '../assets/images/spongebobmovie.jpg';
import mao from '../assets/images/mao.jpg';
import communism from '../assets/images/communism.jpg';
import friends from '../assets/images/friends.jpg';

class AboutPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
          <main className = "primary">
          	<article>
	          	<header>
	          		<AnimSpring config = {{delay: 100, clamp: true, tension: 20}} from = {{opacity: 0}} to = {{opacity: 1}}>
		          		<span className = "heading">Jonathan Harrison Neves</span>
		          		<span className = "subheading">The Man, the Myth, the Legend</span><br />
		          		<img src = {devourer} alt = "Jonathan Harrison Neves himself..." title = "Hinga Dinga Durgen!" height = {window.innerWidth/1.8} />
		          	</AnimSpring>
	          	</header>

	          	<AnimSpring  config = {{delay: 100, clamp: true, tension: 50}} from = {{transform: "translateY(40%)", opacity: 0}} to = {{transform: "translateY(0%)", opacity: 1}}>
		          	<div className = "content">
		          		<p>I'm not the hero we need, but the hero we deserve... My name is Jonathan Harrison Neves.</p>

		          		<p>Every since I was born, I knew that I wanted to be that one dude that other dudes would look up to and say to other dudes, 
		          		"Dude, I want to be that dude." Today, I can proudly say that I am indeed that dude. To put it simply, I am a paragon of 
		          		distinction. I am the Alpha and the Omega, the Beginning and the End, the First and the Last.</p>

		          		<p>Throughout my entire life, I have strived to become a master jack of all trades. That's right. I am a master jack too, 
		          		in addition to being a rocket scientist, successful entrepreneur, onion farmer, Crocs<sup>TM</sup> supermodel, Dewalt engineer, 
		          		certified bounty hunter, and five-star world-class school bus driver.</p>

		          		<p>Given my diverse range of expertise, it may surprise you that I did not go to college. I went to three: 
		          		Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch community college, SNHU online college, and MIT (Montanta Institute of Transportation). 
		          		The bottom line is that I am highly educated—a true scholar, if you will. Some call me smart, but being a humble guy, I tell them to call me 
		          		"the greatest genius ever" instead.</p>
		          	</div>
		        </AnimSpring>

		        <VisibilitySpring config = {{delay: 100, clamp: true, tension: 100}} from = {{transform: "translateX(20%)", opacity: 0}} to = {{transform: "translateX(0%)", opacity: 1}}>
					<Dropdown title = "Favorite Movies">
				        <div className = "card-container">
					        <ImageCard imgSrc = {frozen} heading = "Frozen" subheading = "I have a crush on Christof. He cute."/>
					        <ImageCard imgSrc = {ducks} heading = "Mighty Ducks" subheading = "Quack. Quack. Quack. Quack! Quack! Quack! QUACK! QUACK!! QUACK!!!"/>
					    	<ImageCard imgSrc = {spongebobmovie} heading = "The Spongebob Movie" subheading = "Don't ask..."/>
					    </div>
			        </Dropdown>
			    </VisibilitySpring>

		        <VisibilitySpring config = {{delay: 300, clamp: true, tension: 100}} from = {{transform: "translateX(20%)", opacity: 0}} to = {{transform: "translateX(0%)", opacity: 1}}>
					<Dropdown title = "Music Interests">
				        <div className = "card-container">
					        <ImageCard imgSrc = {hu} heading = "The Hu" subheading = "YUVE YUVE YU HU SHIREG SHIREG SHOOG SHOOG."/>
					        <ImageCard imgSrc = {mariachi} heading = "Mariachi Vargas de Tecalitlán" subheading = "I listen to Mariachi Music 24/7. A lot of people think that I'm weird, but Mariachi music is really good. In fact, I'm cool, so people who listen to Mariachi music are cool, including me."/>
					    	<ImageCard imgSrc = {spongebob} heading = "Spongebob Squarepants Soundtrack" subheading = "Don't ask..."/>
					    </div>
			        </Dropdown>
			    </VisibilitySpring>

		        <VisibilitySpring config = {{delay: 500, clamp: true, tension: 100}} from = {{transform: "translateX(20%)", opacity: 0}} to = {{transform: "translateX(0%)", opacity: 1}}>
					<Dropdown title = "Favorite Books">
				        <div className = "card-container">
					        <ImageCard imgSrc = {mao} heading = "Mao's Little Red Book" subheading = "Don't ask..." />
					        <ImageCard imgSrc = {communism} heading = "The Communist Manifesto" subheading = "Don't ask..."/>
					    	<ImageCard imgSrc = {friends} heading = "How Kids Make Friends" subheading = "Don't ask..."/>
					    </div>
			        </Dropdown>
			    </VisibilitySpring>
          	</article>
          </main>
		);
	}
}

export default AboutPage