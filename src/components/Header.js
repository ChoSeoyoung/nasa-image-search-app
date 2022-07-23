import React from 'react';
import History from './History.js';

class Header extends React.Component{
	constructor(props) {
		super(props);
	}
	
	searchSubmit = event => {
		//옵션에 따라 검색 유형을 달리함
		let type = this.props.Option;
		this.props.imageSearch(this.props.keyWord);
	};
	
	render(){
	  return(
		<div>
			<div className="m-5" style={{width:"50vw"}}>
				<h1 className="fw-normal"> NASA Picture Searching</h1>
			</div>
			<div className="input-group" style={{width:"100%", margin:"auto"}}>
				<div className="input-group-prepend">
					<select id="searchbar-options" className="form-select" 
					aria-label="Default select example" onChange={event=>this.props.SelectBoxChange(event)}>
						<option defaultValue="default" value="default">Choose...</option>
						<option value="title">Title</option>
						<option value="location">Location</option>
						<option value="year">Year</option>
	  				</select>
				</div>
	  			<input id="search-input" type="text" className="form-control" value={this.props.keyWord} onChange={event=>this.props.InputTextChange(event.target.value)}></input>
	  			<div className="input-group-append">
					<button className="btn btn-outline-primary" onClick={this.searchSubmit}>
		 			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
			  			<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
				 	</svg>
	  				</button>
				</div>
			</div>
			{this.props.words ? this.props.words.map(c=>{return(<History history={c} imageSearch={this.props.imageSearch} deleteWord={this.props.deleteWord}/>);}) : ""}
		</div>
	)
    }
}

export default Header;
