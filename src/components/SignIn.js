import React from 'react';
import Navigation from './Navigation';
import { connect} from 'react-redux';
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
		email: 'ukngukng',
		password: 'ukngukng'
	}
	handleChange = ({target}) => {
		this.setState({[target.name]: target.value})
	}

	handleSignIn = () => {
		// fetch('https://conduit.productionready.io/api/users/login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({user: this.state}),
  //   })
  //   .then(res => res.json())
  //   .then(d => {
  //   	let jwt = localStorage.getItem('jwt');
  //   	if (d.user && d.user.token == jwt) {
  //   		this.props.history.push('/');
  //   	}
  //   })
  var jwt = localStorage.jwt;
  fetch('https://conduit.productionready.io/api/user',{
		headers: {
	    "Content-Type": "application/json",
	    "authorization": `Token ${jwt}`
	  }}).then(res => res.json()).then(data => {
	  	console.log(data,'in signin');
	  	this.props.dispatch({type: 'ADD_USER', payload: data.user});
	  	this.props.history.push('/')
	  })
	}

	render() {
		return (
			<React.Fragment>
				<Navigation />
				<Wrapper>
					<div style={{fontSize: "2.2rem", paddingBottom: '10px', textAlign: "center", marginBottom:'4px'}}>Sign In</div>
					<a href='/signup' style={{textDecoration:'none',}}href="#"><div style={{textAlign: 'center', color: '#5CB75C', }}>Need an account?</div></a>
					<Input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
					<Input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
					<Button onClick={this.handleSignIn} type="submit">Sign In</Button>
				</Wrapper>
			</React.Fragment>
		)
	}
}

export default connect()(SignIn);