import { combineReducers } from 'redux';
import TodoitemReducer from './reducer_todo_item';
import Todocategory from './reducer_todo_category';

//Define the properties of our App State here

	const rootReducer = combineReducers({
		todoitem: TodoitemReducer,
		todocategory: TodocategoryReducer,
	});

	export default rootReducer;