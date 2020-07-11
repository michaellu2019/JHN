import React from 'react';

import tyson from '../assets/images/tyson.jpg';

class ContactPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<main className = "primary">
				<article>
					<header>
						<span className = "heading">Speak to the Legend</span><br /><br />
						<img src = {tyson} width = {window.innerWidth/1.5}/>
					</header>
				</article>
			</main>
		);
	}
}

export default ContactPage;