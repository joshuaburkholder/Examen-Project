import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';

// import { connect } from 'react-redux';
// import { selectBand } from '../actions/index';
// import { bindActionCreators } from 'redux';

class ListItem extends Component{
	handleFormSubmit(formProps){
		//call action creator to sign up the user
		console.log(formProps);
	}	
	render(){
		const { fields: {title, topic, url, content }, handleSubmit } = this.props;
		return (
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<h3>Create a New Post</h3>

			<fieldset className="form-group">
				<label>Title</label>
				<input type="text" className="form-control" {...title} />
			</fieldset>

			<fieldset className="form-group">
				<label>Category</label>
				<input type="text" className="form-control" {...topic} />
			</fieldset>

			<fieldset className="form-group">
				<label>URL</label>
				<input type="text" className="form-control" {...url} />
			</fieldset>

			<fieldset className="form-group">
				<label>Content</label>
				<textarea type="text" rows="8" className="form-control text" {...content} />
			</fieldset>

			<button type="submit" className="btn btn-primary">Submit</button>
			<button className="btn btn-danger"> Cancel</button>
		</form>
		);
	}
}

export default reduxForm({
	form: 'PostsNewForm',
	fields: ['title', 'topic', 'url', 'content']
})(ListItem);