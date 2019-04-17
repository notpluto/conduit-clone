import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Navigation from './Navigation';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';

const UserWrapper = styled.div`
	background: #F3F3F3;
	color: #373A3C;
	text-align: center;
	`

const UserSection = styled.div`
	width: 800px;
	margin: 1rem 4rem 1rem 10rem;
	border-top: 1px solid #E5E5E5;
	padding: 10px;
	`
const SingleArticle = styled.div`
	width: 1000px;
	margin: 1rem 6rem 1rem 15rem;
	border-top: 1px solid #E5E5E5;
	padding: 10px;
	`
const Image = styled.img`
	width: 30px;
	height: 30px;
	border-radius: 50%;
`

class User extends React.Component {

	render() {
		// console.log(this.props.userInfo)
		// const {author} = this.props.userInfo
		return (
			<React.Fragment>
				<Navigation />

			{ this.props.userInfo ? 
					<div>
						<UserWrapper>
							<img src={this.props.userInfo[0].author.image} style={{padding: '20px 0', borderRadius:'50%', height: '100px', width: '100px'}}/> 
							<p style={{paddingBottom: '20px', fontSize:'1.4rem', fontWeight: 'bold'}}>{this.props.userInfo[0].author.username}</p>
							<p style={{paddingBottom: '20px', fontSize:'1rem', fontWeight: 'bold', color: '#C3C3C3'}}>{this.props.userInfo[0].author.bio}</p>
						</UserWrapper>
						<div style={{margin:'2rem 10rem 0rem 15rem', color: '#5CB75C',}}>My Articles</div>
					</div>
						: ""
				}
					<div>
					{
						this.props.userInfo ? this.props.userInfo.map(obj =>
						<div>
								<section style={{display:'flex'}}>
									<div>
										<SingleArticle>
											<div>
												<div style={{display: 'flex', justifyContent: 'space-between'}}>
													<div style={{display: "flex"}}>
														<Image src={obj.author.image} />
														<div style={{margin: '8px 0 0 10px'}}>
															<div onClick={() => this.handleUser(obj.author.username)} style={{color: "#5CB75C", fontSize: '0.8rem', marginBottom: '0.2rem'}}><NavLink style={{color: "#5CB75C"}} to='/user'>{obj.author.username}</NavLink> </div>
															<div style={{fontSize: '0.8rem', color: '#D8D8D8', fontWeight: '500'}}>{obj.updatedAt.slice(0, 10)}</div>
														</div>
													</div>
													<button className="fav"><FontAwesome className="far fa-heart" />{obj.favoritesCount}</button>
												</div>
														<div style={{marginTop: "10px", fontWeight:'bold', fontSize: '1.2rem'}}>{obj.title}</div>
														<div style={{padding: '10px 0', color: '#9B9B9B'}}>{obj.description}</div>
														<div style={{color: '#9B9B9B', fontSize: '0.8rem', fontWeight: '300',}}>Read More</div>
											</div>
										</SingleArticle>
									</div>
								</section>
						</div>
								)	
						: ""
					}
					</div>
				</React.Fragment>
			)
	}
}

function mapStateToProps(state) {
	// console.log(state.User[0])
	return {
		userInfo: state.User[0]
	}
}

export default connect(mapStateToProps)(User);