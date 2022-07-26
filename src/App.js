import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import Header from './components/Header.js'
import CardList from './components/CardList.js'
import Button from './components/Button.js'

import reducer from './ruducers/reducer';

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