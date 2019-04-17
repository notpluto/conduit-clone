import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Button = styled.button`
	border: 0;
	outline: 0;
	color: #B1B1B1;
	font-size: 0.9rem;
	cursor: pointer;
`
const Nav = styled.div`
	margin: 15px;
	display: flex;
	justify-content: space-between;
	`
class Navigation extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Nav>
					<h2 style={{color: '#5CB75C', fontSize: '1.4rem', fontWeight: 'bold', marginLeft: '10rem', letterSpacing: '1px'}}><NavLink to='/'><a href="#">conduit</a></NavLink></h2>
					<div style={{marginRight: '10rem'}}>
						<a href='/'><Button>Home</Button></a>
						<a href='/signin'><Button>Sign in</Button></a>
						<a href='/signup'><Button>Sign up</Button></a>
					</div>
				</Nav>
			</React.Fragment>
		)
	}
}

export default Navigation;