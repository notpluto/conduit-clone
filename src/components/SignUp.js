import React from 'react';
import Navigation from './Navigation';
import styled from 'styled-components';
// import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import SignIn from './SignIn'

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
		username: '',
		email:'',
		password:''
	}

	handleUpdate = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

	handleSubmit = () => {
    fetch('https://conduit.productionready.io/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({user: this.state}),
    })
      .then(res => res.json())
      .then(d => {
      	if (d.user) {
      		let jwt = d.user.token
      		localStorage.setItem('jwt', jwt);
      	}
      	this.props.dispatch({type: 'ADD_USER', payload: d.user });
      	this.props.history.push('/');
      });
  };

	render() {
		return (
			<React.Fragment>
				<Navigation />
				<Wrapper>
					<div style={{fontSize: "2.2rem", textAlign: "center", marginBottom:'4px'}}>Sign Up</div>
					<a href='/signin' style={{textDecoration:'none',}}href="#"><div style={{textAlign: 'center', color: '#5CB75C', }}>Have an account?</div></a>
					<Input type="username" onChange={this.handleUpdate} name="username" placeholder="Username" value={this.state.username} />
					<Input type="email" onChange={this.handleUpdate} name="email" placeholder="Email" value={this.state.email} />
					<Input type="password" onChange={this.handleUpdate} name="password" placeholder="Password" value={this.state.password} />
					<Button onClick={this.handleSubmit} type="submit">Sign Up</Button>
				</Wrapper>
			</React.Fragment>
		)
	}
}

export default connect(({UserInfo}) => ({UserInfo}))(SignUp);