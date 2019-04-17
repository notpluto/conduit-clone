import React from 'react';
import styled from 'styled-components';

const HeroWrapper = styled.div`
	background: #5CB75C;
	color: #fff;
	text-align: center;
`

class Hero extends React.Component {
	render() {
		return (
			<HeroWrapper>
				<div style={{fontSize: '3rem', padding: '3rem 0 1rem 0', textShadow: '0 1px 3px rgba(0,0,0,.3)', fontWeight: '700', fontFamily: 'Titillium Web, sans-serif'}}>conduit</div>
				<p style={{padding: '0 0 3rem 0', fontSize: '1.2rem', fontWeight: '300' }}>A place to share your knowledge</p>
			</HeroWrapper>
		)
	}
}

export default Hero;

// Stateless component