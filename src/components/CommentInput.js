import React from 'react';

class CommentInput extends React.Component {
	handleSubmit = () => {
		const {jwt} = localStorage;
		const comment = {"comment":{"body":"This is a test comment from react"}};
		fetch('https://conduit.productionready.io/api/articles/react-m5hwle/comments', {
			method: 'POST',
		headers: {
	    "Content-Type": "application/json",
	    "authorization": `Token ${jwt}`
	  },
	  body: JSON.stringify(comment)
	}).then(res => res.json()).then(data => {
	  	console.log(data,'in comment')
	  })
	}
	render(){
		return (
		<div>
			<textarea />
			<button onClick={this.handleSubmit}>Submit</button>
		</div>
	)
	}
	
}

export default CommentInput;