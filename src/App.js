import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';

import reducer from './ruducers/reducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainPage from './components/main/MainPage.js';
import NotFound from './components/NotFound';

const store=createStore(reducer);

function App(){
	return(
	<Provider store={store}>
	<Router>
	<div className="App">
		<Switch>
			<Route path="/" exact render={()=><MainPage/>}/>
			<Route path="*" component={NotFound}/>
		</Switch>
	</div>
	</Router>
	</Provider>
	)
}

export default App;