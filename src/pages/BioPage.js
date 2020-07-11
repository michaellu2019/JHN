import React from 'react';

import space from '../assets/images/space.jpg';
import spacerot from '../assets/images/spacerotated.jpg';
import hospital from '../assets/images/hospital.jpg';
import galaxy from '../assets/images/galaxy.png';
import comet from '../assets/images/comet.png';
import babyearth from '../assets/images/babyearth.png';
import asteroid from '../assets/images/asteroid.png';
import book from '../assets/images/book.png';
import hug from '../assets/images/hug.JPG';

import VisibilitySpring from '../components/VisbilitySpring';
import AnimSpring from '../components/AnimSpring';

class BioPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			timelineVertical: false,
			timelineIndex: 0
		};
	  	this.handleScroll = this.handleScroll.bind(this);
	}

	changeTimeline(index) {
		var el = document.getElementsByClassName('bio-section-container')[index];
		var t = 0;

		if (el != null) {
			t = el.offsetTop;
		}

		window.scrollTo({
			top: t,
			behavior: 'smooth'
		});

		var thisTemp = this;
		setTimeout(function() {
			thisTemp.setState({
				timelineVertical: true,
				timelineIndex: index
			});
		}, 250);
	}

	handleScroll() {
		var els = document.getElementsByClassName('bio-section-container');
		var index = 0;

		for (var i = 0; i < els.length; i++) {
			var el = els[i];
			if (window.pageYOffset > el.offsetTop - window.innerHeight/2) {
				index = i;
			}
		}

		if (index > 0) {
			this.setState({
				timelineVertical: true,
				timelineIndex: index
			});
		} else {
			this.setState({
				timelineVertical: false,
				timelineIndex: index
			});
		}
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	};

	render() {
		return (
          <main className = "primary">
          	<article className = "bio-section-container">
	          	<header>
	          		<span className = "heading">The Story</span>
	          		<span className = "subheading">of the Hero Himself</span><br />
	          	</header>

	          	<div className = "content">
	          		<p>Click on any node in the timeline below to learn the story of the legend Jonathan Harrison Neves...</p>
	          		
	          		<div className = {this.state.timelineVertical ? "timeline vertical" : "timeline horizontal"}>
	          			<div className = {this.state.timelineIndex == 1 ? "timeline-node active" : "timeline-node"} onClick = {() => this.changeTimeline(1)}>13.9 BYA</div>
	          			<div className = {this.state.timelineIndex == 2 ? "timeline-node active" : "timeline-node"} onClick = {() => this.changeTimeline(2)}>13.8 BYA</div>
	          			<div className = {this.state.timelineIndex == 3 ? "timeline-node active" : "timeline-node"} onClick = {() => this.changeTimeline(3)}>4.5 BYA</div>
	          			<div className = {this.state.timelineIndex == 4 ? "timeline-node active" : "timeline-node"} onClick = {() => this.changeTimeline(4)}>65 MYA</div>
	          			<div className = {this.state.timelineIndex == 5 ? "timeline-node active" : "timeline-node"} onClick = {() => this.changeTimeline(5)}>3200 BC</div>
	          			<div className = {this.state.timelineIndex == 6 ? "timeline-node active" : "timeline-node"} onClick = {() => this.changeTimeline(6)}>2007 AD</div>
	          			<div className = {this.state.timelineIndex == 7 ? "timeline-node active" : "timeline-node"} onClick = {() => this.changeTimeline(7)}>2015 AD</div>
	          		</div>
	          	</div>	

				<footer>
					<p>BYA = Billion Years Ago <br />MYA = Million Years Ago</p>
				</footer>
			</article>

          	<article className = "bio-section-container">
          		<VisibilitySpring config = {{delay: 100, clamp: true, tension: 40}} from = {{opacity: 0}} to = {{opacity: 1}}>
          			<span className = "bio-heading">Birth</span>
				    <span className = "subheading">13.9 Billion Years Ago</span>
          		</VisibilitySpring>

          		<div>
		          	<VisibilitySpring config = {{delay: 100, clamp: true, tension: 40}} from = {{transform: "translateX(-40%)", opacity: 0}} to = {{transform: "translateX(0%)", opacity: 1}}>
					    <img src = {hospital} alt = "Jonathan Harrison Neves' Hospital..." />
						<footer>
							<p>A photo of the hospital that I was born in. While it may seem simple, this hospital is one of the most advanced hospitals ever built. This is no surprise as it was built by none other than Jonathan Harrison Neves...</p>
						</footer>
					</VisibilitySpring>

		          	<VisibilitySpring config = {{delay: 100, clamp: true, tension: 40}} from = {{transform: "translateX(40%)", opacity: 0}} to = {{transform: "translateX(0%)", opacity: 1}}>
	          			<div className = "content">
	          				<p>In the beginning, there was nothing... There was but darkness and void...</p>
	          				<p>Then, from nothing came everything. Alas! I had arrived! I, Jonathan Harrison Neves, the man, the myth, the legend, was born from the void. Be it by luck or by deliberation, a blessing had come...</p>
	          				<p>Sprung from shadow, I was now to commence my journey to greatness...</p>
	          			</div>
					</VisibilitySpring>
				</div>
          	</article>

          	<article className = "bio-section-container">
          		<VisibilitySpring config = {{delay: 100, clamp: true, tension: 40}} from = {{opacity: 0}} to = {{opacity: 1}}>
          			<span className = "bio-heading">Creation</span>
				    <span className = "subheading">13.8 Billion Years Ago</span>

				    <div className = "content">
          				<p>After 100 million years, I finally got bored of playing rock-paper-scissors with myself, so I decided to forge the entire universe with my bare hands.</p>
          				<p>Everything, from the stars to the planets to the asteroids and the laws of nature that governed them, was created by me.</p>
          			</div>
          		</VisibilitySpring>

	          	<VisibilitySpring config = {{delay: 2000, clamp: true, duration: 25000}} from = {{transform: "translateX(-100%) translateY(-50%)", opacity: 0}} to = {{transform: "translateX(100%) translateY(-100%)", opacity: 1}}>
          			<img src = {galaxy} />
				</VisibilitySpring>

	          	<VisibilitySpring config = {{delay: 1000, clamp: true, duration: 10000}} from = {{transform: "translateX(100%) translateY(-400%)", opacity: 0}} to = {{transform: "translateX(-200%) translateY(50%)", opacity: 1}}>
          			<img src = {comet} />
				</VisibilitySpring>
          	</article>

          	<article className = "bio-section-container">
          		<VisibilitySpring config = {{delay: 100, clamp: true, tension: 40}} from = {{opacity: 0}} to = {{opacity: 1}}>
          			<span className = "bio-heading">More Creation</span>
				    <span className = "subheading">4.5 Billion Years Ago</span>
          		</VisibilitySpring>

          		<div>
		          	<VisibilitySpring config = {{delay: 100, clamp: true, tension: 40}} from = {{transform: "translateX(40%)", opacity: 0}} to = {{transform: "translateX(0%)", opacity: 1}}>
					    <img src = {babyearth} alt = "Jonathan Harrison Neves playing with the Earth..." />
					</VisibilitySpring>

		          	<VisibilitySpring config = {{delay: 100, clamp: true, tension: 40}} from = {{transform: "translateX(-40%)", opacity: 0}} to = {{transform: "translateX(0%)", opacity: 1}}>
	          			<div className = "content">
	          				<p>I was now but a little young boy—just a couple billion years old.</p>
	          				<p>One day, I was playing with a little blue ball. It must have gotten a little dusty, because everytime I slapped it, it shed a layer of gray-colored particulate.</p>
	          				<p>Once, I slapped my ball so hard that a huge cloud of dust formed, so I had no choice but to suck it up, causing me to sneeze all over my ball.</p>
	          				<p>After the great sneeze, I noticed some green blobs on my ball, which after a couple billion years, started to change colors and got populated with little beings.</p>
	          				<p>I guess that's how I made the Earth...</p>
	          			</div>
					</VisibilitySpring>
				</div>
          	</article>

          	<article className = "bio-section-container">
          		<VisibilitySpring config = {{delay: 400, clamp: true, tension: 100}} from = {{transform: "translateX(20%)", opacity: 0}} to = {{transform: "translateX(0%)", opacity: 1}}>
          			<span className = "bio-heading">Destruction</span>
          		</VisibilitySpring>

          		<VisibilitySpring config = {{delay: 600, clamp: true, tension: 100}} from = {{transform: "translateX(20%)", opacity: 0}} to = {{transform: "translateX(0%)", opacity: 1}}>
          			<span className = "subheading">65 Million Years Ago</span>
          		</VisibilitySpring>

          		<VisibilitySpring config = {{delay: 800, clamp: true, tension: 100}} from = {{transform: "translateX(20%)", opacity: 0}} to = {{transform: "translateX(0%)", opacity: 1}}>
				    <div className = "content">
          				<p>The dinosaurs that started populating the Earth got annoying, so I killed them off.</p>
          			</div>
          		</VisibilitySpring>

	          	<VisibilitySpring config = {{delay: 600, clamp: true, duration: 25000}} from = {{transform: "translateX(-100%) translateY(-70%)", opacity: 1}} to = {{transform: "translateX(100%) translateY(50%)", opacity: 1}}>
          			<img src = {asteroid} />
				</VisibilitySpring>
          	</article>

          	<article className = "bio-section-container">
          		<VisibilitySpring config = {{delay: 100, clamp: true, tension: 40}} from = {{opacity: 0}} to = {{opacity: 1}}>
          			<span className = "bio-heading">Not That Much Going on Besides Humanity Developing I Guess.</span>
				    <span className = "subheading">3200 B.C. - 2000 A.D.</span>

          			<div className = "content">
          				<p>So humans show up and start civilizations. They're pretty boring and don't really do much, so I don't interact with them until later on...</p>
          			</div>
				</VisibilitySpring>
          	</article>

          	<article className = "bio-section-container">
          		<VisibilitySpring config = {{delay: 100, clamp: true, tension: 40}} from = {{opacity: 0}} to = {{opacity: 1}}>
          			<span className = "bio-heading">Exploration</span>
				    <span className = "subheading">2007</span>
				</VisibilitySpring>
				    
          		<div>
		          	<VisibilitySpring config = {{delay: 100, clamp: true, tension: 40}} from = {{transform: "translateX(-40%)", opacity: 0}} to = {{transform: "translateX(0%)", opacity: 1}}>
					    <img src = {book} alt = "A book I wrote." />
						<footer>
							<p>This is a book that I wrote recently. It became a New York Times bestseller before it was even published.</p>
						</footer>
					</VisibilitySpring>

		          	<VisibilitySpring config = {{delay: 100, clamp: true, tension: 40}} from = {{transform: "translateX(40%)", opacity: 0}} to = {{transform: "translateX(0%)", opacity: 1}}>
	          			<div className = "content">
          					<p>So humans start being somewhat cool. I start to try out some of there things.</p>
	          				<p>I go sky diving one day, and it's pretty fun. Unfortunately, my parachute malfunctions and does not open... The next day, I take it back to the store for a refund.</p>
	          				<p>I start writing some books in my spare time. My editor tells me that he is shocked at the lack of spelling errors in my work. I tell him that it's because everytime I "mispell" a word, the dictionary is updated.</p>
	          				<p>One day, I pay a visit to the Virgin Islands. Now, they are just called the "Islands."</p>
	          				<p>Eventually Google and Facebook update their user security settings so that you can't use "Jonathan Harrison Neves" as a password. Apparently, it's "too strong."</p>
	          			</div>
					</VisibilitySpring>
				</div>
          	</article>

          	<article className = "bio-section-container">
          		<VisibilitySpring config = {{delay: 100, clamp: true, tension: 40}} from = {{opacity: 0}} to = {{opacity: 1}}>
          			<span className = "bio-heading">Friendship</span>
				    <span className = "subheading">2015</span>
				</VisibilitySpring>
				    
          		<div>
		          	<VisibilitySpring config = {{delay: 100, clamp: true, tension: 40}} from = {{transform: "translateX(40%)", opacity: 0}} to = {{transform: "translateX(0%)", opacity: 1}}>
					    <img src = {hug} alt = "Me and my best friend." />
						<footer>
							<p>I'm trying to give my best friend a hug. He and I are pretty tight because we vibe well.</p>
						</footer>
					</VisibilitySpring>

		          	<VisibilitySpring config = {{delay: 100, clamp: true, tension: 40}} from = {{transform: "translateX(-40%)", opacity: 0}} to = {{transform: "translateX(0%)", opacity: 1}}>
	          			<div className = "content">
          					<p>I meet my best friend. He's a pretty cool dude, just like me. Just not as powerful, smart, or good looking as me.</p>
          					<p>He's kind of a sad story; he doesn't do much with his life. He's very unaccomplished too, but he's pretty chill I guess. I don't think he has many friends though...</p>
	          			</div>
					</VisibilitySpring>
				</div>
          	</article>
          </main>
		);
	}
}

export default BioPage;