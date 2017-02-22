import { combineReducers } from 'redux';
import BandsReducer from './reducer_bands';

//Define the properties of our App State here

	const rootReducer = combineReducers({
		bands: BandsReducer,
	});

	export default rootReducer;