import React from 'react';
import Navigation from './Navigation';
import styled from 'styled-components';

const Wrapper = styled.div`
	margin: 5rem auto;
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
	color: #ABABAB;
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

class SignIn extends React.Component {
	state = {
		email: '',
		password: ''
	}

	handleSignIn = () => {
		fetch('https://conduit.productionready.io/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({user: this.state}),
    })
    .then(res => res.json())
    .then(d => {
    	let jwt = localStorage.getItem('jwt');
    	if (d.user && d.user.token == jwt) {
    		this.props.history.push('/');
    	}
    })
	}

	render() {
		return (
			<React.Fragment>
				<Navigation />
				<Wrapper>
					<div style={{fontSize: "2.2rem", paddingBottom: '10px', textAlign: "center", marginBottom:'4px'}}>Sign In</div>
					<a href='/signup' style={{textDecoration:'none',}}href="#"><div style={{textAlign: 'center', color: '#5CB75C', }}>Need an account?</div></a>
					<Input type="email" name="email" placeholder="Email" />
					<Input type="password" name="password" placeholder="Password" />
					<Button onClick={this.handleSignIn} type="submit">Sign In</Button>
				</Wrapper>
			</React.Fragment>
		)
	}
}

export default SignIn;