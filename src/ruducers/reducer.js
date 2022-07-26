export default function reducer(state, action){
	if(state===undefined){
		return {
			keyWord:"egypt",
			option:"default",
			pageIndex:1,
			words:[["egypt","default"]],
		}	
	}

	const newState = {...state};
	if(action.type==='SEARCH'){
		newState.keyWord=document.getElementById('search-input').value;
		let sel = document.getElementById("searchbar-options");
		newState.option=sel.options[sel.selectedIndex].value;
		newState.pageIndex=1;
		
		let copyArray = [];
		for(let i=0;i<newState.words.length;i++){
			if(newState.words[i][0]===newState.keyWord){
				continue;
			}
			copyArray.push(newState.words[i]);
		}
		if(copyArray.length>7){
			copyArray.splice(0,1);
		}
		copyArray.push([newState.keyWord,newState.option]);
		newState.words=copyArray;
	}else if(action.type==='MORE'){
		newState.pageIndex=newState.pageIndex+1;
	}else if(action.type==='DELETEWORD'){
		let copyArray = [];
		for(let i=0;i<newState.words.length;i++){
			if(newState.words[i][0]===action.text.history[0]){
				continue;
			}
			copyArray.push(newState.words[i]);
		}
		newState.words=copyArray;
	}else if(action.type==='RE-SEARCH'){
		newState.keyWord=action.text.history[0];
		newState.option=action.text.history[1];
		newState.pageIndex=1;

		let copyArray = [];
		for(let i=0;i<newState.words.length;i++){
			if(newState.words[i][0]===newState.keyWord){
				continue;
			}
			copyArray.push(newState.words[i]);
		}
		if(copyArray.length>7){
			copyArray.splice(0,1);
		}
		copyArray.push([newState.keyWord,newState.option]);
		newState.words=copyArray;
	}
	return newState;
}
