export default function reducer(state, action){
	if(state===undefined){
		return {
			keyWord:"egypt",
			pageIndex:1,
		}	
	}

	const newState = {...state};
	if(action.type==='SEARCH'){
		newState.keyWord=document.getElementById('search-input').value;
		let sel = document.getElementById("searchbar-options");
		newState.pageIndex=1;
	}else if(action.type==='MORE'){
		newState.pageIndex=newState.pageIndex+1;
	}
	return newState;
}

