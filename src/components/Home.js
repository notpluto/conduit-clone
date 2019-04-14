import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Hero from './Hero';
import Tags from './Tags';
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

