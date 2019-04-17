import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Button = styled.button`
	background: #687077;
	color: #fff;
	border-radius: 10px;
	padding: 6px;
	margin: 2px;
	outline: 0;
	cursor: pointer;
`

class Tags extends React.Component {

	componentDidMount = () => {
		fetch('https://conduit.productionready.io/api/tags').then(res => res.json()).then(data => 
			this.props.dispatch({
				type: 'ADD_TAGS', 
				payload: data
		})
	)
		// this.setState({tags: data})
	}

	handleTags = (item) => {
		console.log(item)
		fetch(`https://conduit.productionready.io/api/articles?tag=${item}`)
			.then(res => res.json()).then(obj =>  
				this.props.dispatch({
					type: 'FILTER_USING_TAGS',
					payload: obj.articles
				})
			)
	}

	render() {
		// console.log(this.props)
		return (
			<React.Fragment>
				<div className="tag-container">Popular Tags <br/>
				{
					this.props.tags ? this.props.tags.map(elm => elm.tags.map(item => <Button onClick={() => this.handleTags(item)}>{item}</Button>)) : ""
				}
				</div>	
			</React.Fragment>
		)
	}
}

function mapStateToProps(state) {
	return {
		tags: state.Tags,
		FilterTags: state.Articles[0]
	}
}

export default connect(mapStateToProps)(Tags);

