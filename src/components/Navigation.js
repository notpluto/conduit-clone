import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import {connect} from 'react-redux';

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
						<Link to='/'><Button>Home</Button></Link>
						<Link to='/signin'><Button>Sign in</Button></Link>
						{
							this.props.UserInfo ? <Link to='/newpost'><Button>New Post</Button></Link> : ''
						}
						{
							this.props.UserInfo ? <Link to=''><Button>Logout</Button></Link> : <Link to='/signup'><Button>Sign up</Button></Link>
						}
						
					</div>
				</Nav>
			</React.Fragment>
		)
	}
}

export default connect(({UserInfo}) => ({UserInfo}))(Navigation);