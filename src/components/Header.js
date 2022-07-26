import React, { useState } from 'react';
import {Provider, useSelector, useDispatch} from 'react-redux';

import History from './History.js';

function Header(props){
	const words = useSelector((state)=>state.words);
	const dispatch = useDispatch();
	
	return(
		<>
			<header className="App-header">
			<div>
			<div className="m-5" style={{margin:"auto"}}>
				<h1 className="fw-normal"> NASA Image Searching</h1>
			</div>
			<div className="input-group" style={{width:"100%", margin:"auto"}}>
				<div className="input-group-prepend">
					<select id="searchbar-options" className="form-select" 
					aria-label="Default select example">
						<option defaultValue="default" value="default">Choose...</option>
						<option value="title">Title</option>
						<option value="location">Location</option>
						<option value="year">Year</option>
	  				</select>
				</div>
	  			<input id="search-input" placeholder="Please enter a search word..." type="text" className="form-control"></input>
	  			<div className="input-group-append">
					<button className="btn btn-outline-primary" onClick={()=>dispatch({type:'SEARCH'})}>
		 			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
			  			<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
				 	</svg>
	  				</button>
				</div>
			</div>
			{words ? words.map(c=>{return(<History history={c}/>);}) : ""}
			</div>
			</header>
		</>
	)
}

export default Header;
