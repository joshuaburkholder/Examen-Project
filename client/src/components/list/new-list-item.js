import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../../actions/index';
import { Link } from 'react-router';


class ListItems extends Component{
	handleFormSubmit(formProps){
		//call action creator to sign up the user
		this.props.createPost(formProps);
	}	
	render(){
		const { fields: { title, topic, url, content }, handleSubmit } = this.props;
		return (
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<h3>Examen Your Day</h3>
				<p>Take some time to review the day. As your memories come forward, pay attention to how your body responds and what emotions you feel. When ready, complete the Examen form below.</p>

			<fieldset className="form-group">
				<label>Today's grace</label>
				<input type="text" className="form-control" placeholder="I am thankful for..." {...title} />
			</fieldset>

			<fieldset className="form-group">
				<label>Today's discomfort</label>
				<input type="text" className="form-control" placeholder="I was uncomfortable when..." {...topic} />
			</fieldset>

			<fieldset className="form-group">
				<label>Worth Remembering</label>
				<input type="text" className="form-control" placeholder="I want to hold onto..." {...url} />
			</fieldset>

			<fieldset className="form-group">
				<label>Tomorrow</label>
				<textarea type="text" rows="3" className="form-control text" placeholder="Look toward the day to come with hopeful resolution . . . " {...content} />
			</fieldset>

			<button action="submit" className="btn btn-primary">Submit</button>
			<button className="btn btn-danger"> Cancel</button>
		</form>
		);
	}
}

export default reduxForm({
	form: 'ListsNewForm',
	fields: ['title', 'topic', 'url', 'content']
}, null, { createPost })(ListItems);