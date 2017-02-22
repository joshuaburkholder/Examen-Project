import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoList extends Component {
	renderList(){
		return this.props.todo.map((todo) => {
			return(
				<li key={todo.item} className="list-group-item">{todo.item}</li>
				);
		})
	}

	render() {
		return(
			<ul className="list-group col-sm-4">
			{this.renderList()}
			</ul>
		);
	}
}

function mapStateToProps(state){
	return{
		todo: state.todo
	};
}

export default connect(mapStateToProps)(TodoList);
