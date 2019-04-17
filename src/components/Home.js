import React from 'react';
import Hero from './Hero';
import Articles from './Articles';
import Navigation from './Navigation'

class Home extends React.Component {

	render() {
		// console.log(this.props)
		return (
			<React.Fragment>
				<Navigation />
				<Hero />
				<Articles />
			</React.Fragment>
		)
	}
}


export default Home;

