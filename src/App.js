import React from 'react';
import './App.css';

import reducer from './reducers/reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SearchPage from './components/SearchPage';
import MainPage from './components/MainPage';

const store=createStore(reducer);

function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" exact element={<MainPage/>}/>
        <Route path="/search" element={<SearchPage/>}/>
		  </Routes>
    </div>
    </Router>
    </Provider>
  );
}

export default App;

