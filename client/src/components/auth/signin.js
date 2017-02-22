import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
// import { Link } from 'react-router';

class Signin extends Component{
	handleFormSubmit({ email, password }) {
		console.log({email, password});
		//need to do something to log user in
		}
	render(){
			const { handleSubmit, fields: { email, password }}=this.props;
			console.log(email, password);

			return(
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<fieldset className="form group">
					<label>Email:</label>
					<input {...email} className="form-control" />
				</fieldset>

				<fieldset className="form-group">
					<label>Password:</label>
					<input {...password} className="form-control" />
				</fieldset>

			  <button action="submit" className="btn btn-primary">Sign In</button>
			</form>
		);
	}
}

export default reduxForm({
	form: 'signin', fields: ['email', 'password']
})(Signin);
