import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Tags from './Tags';
import FontAwesome from 'react-fontawesome';
import {NavLink} from 'react-router-dom';

const Image = styled.img`
	width: 30px;
	height: 30px;
	border-radius: 50%;
`
const SingleArticle = styled.div`
	width: 800px;
	margin: 1rem 4rem 1rem 10rem;
	border-top: 1px solid #E5E5E5;
	padding: 10px;
	`

class Articles extends React.Component {

	componentDidMount = () => {
		fetch('https://conduit.productionready.io/api/articles').then(res => res.json()).then(articles => 
			// console.log(articles)
			this.props.dispatch({
				type: 'ADD_ARTICLES',
				payload: articles.articles
			})
		)
	}

	handleUser = (username) => {
		console.log(username)
		fetch(`https://conduit.productionready.io/api/articles?author=${username}`)
		.then(res => res.json())
		.then(data => this.props.dispatch({
			type: 'SHOW_USER_SECTION',
			payload: data.articles
		}))
	}

	handleUserPosts = (slug) => {
		console.log(slug)
		fetch(`https://conduit.productionready.io/api/articles/${slug}/comments`)
		.then(res => res.json())
		.then(data => this.props.dispatch({
			type: 'SHOW_USER_ARTICLES',
			payload: data.comments
		}))
	}

	render() {
		console.log(this.props);
		const { articles, filterTags } = this.props;
		const arr = filterTags.length ? filterTags : articles || [];


		console.log(this.props.articles)
		return (
			<React.Fragment>
			<div style={{margin:'2rem 10rem 0rem 12rem', color: '#5CB75C', fontSize:'0.9rem'}}>Global Feed</div>
			<section style={{display:'flex'}}>
			<div>
				{
					arr.map(item => 
						<SingleArticle>
							<div>
								<div style={{display: 'flex', justifyContent: 'space-between'}}>
									<div style={{display: "flex"}}>
										<Image src={item.author.image} />
										<div style={{margin: '8px 0 0 10px'}}>
											<div onClick={() => this.handleUser(item.author.username)} style={{color: "#5CB75C", fontSize: '0.8rem', marginBottom: '0.2rem'}}><NavLink style={{color: "#5CB75C"}} exact to='/user'>{item.author.username}</NavLink> </div>
											<div style={{fontSize: '0.8rem', color: '#D8D8D8', fontWeight: '500'}}>{item.updatedAt.slice(0, 10)}</div>
										</div>
									</div>
									<button className="fav"><FontAwesome className="far fa-heart" />{item.favoritesCount}</button>
									</div>
										<div onClick={() => this.handleUserPosts(item.slug)}><NavLink style={{color: "black"}} exact to='/userpost'>
											<div style={{marginTop: "10px", fontWeight:'bold', fontSize: '1.2rem'}}>{item.title}</div>
											<div style={{padding: '10px 0', color: '#9B9B9B'}}>{item.description}</div>
											<div style={{color: '#9B9B9B', fontSize: '0.8rem', fontWeight: '300',}}>Read More</div>
										</NavLink></div>
							</div>
						</SingleArticle>
					) 

				}
				</div>
				<div>
					<Tags />
				</div>
			</section>
			</React.Fragment>
		)
	}
}

function mapStateToProps(state) {
	console.log(state);
	return {
		articles: state.Articles[0],
		filterTags: state.FilterTags
	}
}

export default connect(mapStateToProps)(Articles)