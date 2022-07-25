import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import {createStore} from 'redux';
import {Provider, useSelector, useDispatch} from 'react-redux';

import Header from './components/Header.js'
import Card from './components/Card.js'
import CardList from './components/CardList.js'
import Button from './components/Button.js'

import axios from 'axios'

function reducer(state, action){
	if(state===undefined){
		return {
			keyWord:"egypt",
			option:"default",
			pageIndex:1,
			words:["egypt"],
		}	
	}

	const newState = {...state};
	if(action.type==='SEARCH'){
		newState.keyWord=document.getElementById('search-input').value;
		let sel = document.getElementById("searchbar-options");
		newState.option=sel.options[sel.selectedIndex].value;
		newState.pageIndex=1;
		let copyArray = [...newState.words];
		if(copyArray.includes(newState.keyWord)){
			let idx = copyArray.indexOf(newState.keyWord);
			copyArray.splice(`${idx}`,1);
		}
		if(copyArray.length>7){
			copyArray.splice(0,1);
		}
		copyArray.push(newState.keyWord);
		newState.words=copyArray;
	}else if(action.type==='MORE'){
		newState.pageIndex=newState.pageIndex+1;
	}else if(action.type==='DELETEWORD'){
		if(newState.words.includes(newState.keyWord)){
			newState.words=newState.words.filter((element) => element !== newState.keyWord);
		}
	}else if(action.type==='RE-SEARCH'){
		newState.keyWord=action.text.history;
		newState.option="default";
		newState.pageIndex=1;

		let copyArray = [...newState.words];
		if(copyArray.includes(newState.keyWord)){
			let idx = copyArray.indexOf(newState.keyWord);
			copyArray.splice(`${idx}`,1);
		}
		if(copyArray.length>7){
			copyArray.splice(0,1);
		}
		copyArray.push(newState.keyWord);
		newState.words=copyArray;
	}
	return newState;
}

const store=createStore(reducer);

function App(){
	return(
	<Provider store={store}>
	<div className="App">
	<Header></Header>
	<section className="App-Section">
	<CardList></CardList>
	<Button></Button>
	</section>
	</div>
	</Provider>
	)
}

export default App;