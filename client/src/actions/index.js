
//Acion Constant Names
const SELECT_BAND = 'SELECT_BAND';


export function selectBand(band){
	//selectBand is an Action Creator, it needs to return an action
	//which is an object that must have a type property
	
	console.log("You have selected:", band.name);
	return{
		type: SELECT_BAND,
		payload: band
	};
}
