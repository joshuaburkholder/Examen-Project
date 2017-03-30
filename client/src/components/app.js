import React, { Component } from 'react';
import NavBarHeader from './Nav';
import Video from './video/video';
import Signin from './auth/signin';
import Signup from './auth/signup';

// import ListItem from './list/new-list-item';

	export default class App extends Component {
		render(){

			return (
				<div>
				<NavBarHeader />
				<div className="wrapper">
  				  <Video />
   				  {this.props.children}
   				</div>
				</div>
			);
		}
	}