import React from 'react';
import Navigation from './Navigation';
import styled from 'styled-components';

const Wrapper = styled.div`
	margin: 4rem auto;
	max-width: 500px;
	width: 100%;
`

const Input = styled.input`
	width: 30rem;
	height: 3rem;
	display: block;
	background: #fff;
	padding: 0 10px;
	margin: 10px 0;
	outline: 0;
	border-radius: 4px;
	font-size: 1rem;
`

const Button = styled.button`
	width: 5rem;
	height: 2.8rem;
	outline: 0;
	border: 0;
	background: #5CB75C;
	border-radius: 4px;
	font-size: 1rem;
	color: #fff;
	letter-spacing: 1px;
	margin-left: 26.5rem;
	`

class SignUp extends React.Component {
	state= {
		input: '',
	}
	render() {
		return (
			<React.Fragment>
				<Navigation />
				<Wrapper>
					<div style={{fontSize: "2.2rem", textAlign: "center", marginBottom:'4px'}}>Sign Up</div>
					<a style={{textDecoration:'none',}}href="#"><div style={{textAlign: 'center', color: '#5CB75C', }}>Need an account?</div></a>
					<Input type="username" name="username" placeholder="Username" />
					<Input type="email" name="email" placeholder="Email" />
					<Input type="password" name="password" placeholder="Password" />
					<Button type="submit">Sign Up</Button>
				</Wrapper>
			</React.Fragment>
		)
	}
}

export default SignUp;