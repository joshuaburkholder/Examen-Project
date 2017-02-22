import React, { Component } from 'react';
import NavBarHeader from './Nav';
import Video from './video/video';
import TodoList from '../containers/TodoList'

	export default class App extends Component {
		render(){

			return (
				<div>
				  <NavBarHeader />
				  <TodoList />
				</div>
			);
		}
	}