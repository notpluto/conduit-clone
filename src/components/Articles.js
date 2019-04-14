import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Tags from './Tags';
import FontAwesome from 'react-fontawesome';

const Image = styled.img`
	width: 30px;
	height: 30px;
	border-radius: 50%;
`

const Post = styled.div`
	display: flex;
	`
const SingleArticle = styled.div`
	width: 800px;
	margin: 1rem 4rem 1rem 10rem;
	border-top: 1px solid #9B9B9B;
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

	render() {
		console.log(this.props.articles)
		return (
			<React.Fragment>
			<div style={{margin:'2rem 10rem 0rem 10rem', color: '#5CB75C',}}>Global Feed </div>
			<section style={{display:'flex'}}>
			<div>
				{
					this.props.articles ? this.props.articles.map(item => 
						<SingleArticle>
							<div>
								<div style={{display: 'flex', justifyContent: 'space-between'}}>
									<div style={{display: "flex"}}>
										<Image src={item.author.image} />
										<div style={{margin: '8px 0 0 10px'}}>
											<div style={{color: "#5CB75C", fontSize: '0.8rem', marginBottom: '0.2rem'}}>{item.author.username} </div>
											<div style={{fontSize: '0.8rem'}}>{item.updatedAt}</div>
										</div>
									</div>
									<button className="fav"><FontAwesome className="far fa-heart" />{item.favoritesCount}</button>
									</div>
										<div style={{marginTop: "10px", fontWeight:'bold', fontSize: '1.2rem'}}>{item.title}</div>
										<div style={{padding: '10px 0', color: '#9B9B9B'}}>{item.description}</div>
										<div style={{color: '#9B9B9B', fontSize: '0.8rem', fontWeight: '300',}}>Read More</div>
							</div>
						</SingleArticle>
					) 

					: 
					""
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

	return {
		articles: state.Articles[0]

	}
}

export default connect(mapStateToProps)(Articles)