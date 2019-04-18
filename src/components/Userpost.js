import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Navigation from './Navigation';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';
import CommentInput from './CommentInput';


const Userhead = styled.div`
	background: #333333;
	text-align: left;
	color: #fff;
	height: 180px;
	`

const CommentBox = styled.div`
	border: 1px solid #E5E5E5;
	width: 750px;
	margin: 2rem 20rem;
	`

class Userpost extends React.Component {
	render() {
	console.log(this.props.comments)
		return(
			<React.Fragment>
				<Navigation />

			{ this.props.comments ? 
				<div>
					<Userhead>
						<p style={{margin: '0 11rem', padding: '3rem 0', fontSize: '24px', fontweight: 'bold' }}>Hello</p>
						{// <img src={this.props.comments[0].author.image} height="25px" width="25px" style={{margin: '0.4rem 0rem 0.2rem 1rem'}} />
						// <div style={{padding: '0.8rem', margin: '0.4rem 0', color: '#5CB65C', fontSize: '0.8rem'}}>{this.props.comments.author.username}</div>
					}
					</Userhead><br />
					<div style={{borderBottom: '1px solid #E5E5E5', margin: '4rem 11rem'}}></div>
					<p style={{margin: '2rem 20rem'}}><NavLink to= '/signin'><small className= "register">Sign in</small></NavLink> or <NavLink to= '/signup'><small>sign up</small></NavLink> to add comments on this article.</p>
				</div>
				: ""
			}

			{
				this.props.comments ? this.props.comments.map(obj => 
				<CommentBox>
					<p style={{margin: '1rem',}}>{obj.body}</p>
					<div style={{background: '#F5F5F5', display: 'flex', }}>
						<img src={obj.author.image} height="25px" width="25px" style={{margin: '0.4rem 0rem 0.2rem 1rem'}} />
						<div style={{padding: '0.8rem', margin: '0.4rem 0', color: '#5CB65C', fontSize: '0.8rem'}}>{obj.author.username}</div>
						<div>{obj.author.updatedAt}</div>
					</div>
				</CommentBox>
					)
				: ""
			}
			<CommentInput />
			</React.Fragment>
			)
	}

}

function mapStateToProps({UserInfo, User}) {
	return {
		comments: User,
		UserInfo
	}
}
export default connect(mapStateToProps)(Userpost);