import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Button = styled.button`
	background: #687077;
	color: #fff;
	border-radius: 10px;
	padding: 4px;
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

	render() {
		// console.log(this.props)
		return (
			<React.Fragment>
				<div className="tag-container">Popular Tags <br/>
				{
					this.props.tags ? this.props.tags.map(elm => elm.tags.map(item => <Button>{item}</Button>)) : ""
				}
				</div>	
			</React.Fragment>
		)
	}
}

function mapStateToProps(state) {
	return {
		tags: state.Tags
	}
}

export default connect(mapStateToProps)(Tags);

