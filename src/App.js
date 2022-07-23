import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';

import Header from './components/Header.js'
import Card from './components/Card.js'
import History from './components/History.js'
import CardList from './components/CardList.js'

import axios from 'axios';


class App extends React.Component{
	constructor(props) {
    	super(props);

    	this.state = {
      		cards: [],
			cardIndex: 1,
			Option: "default",
			keyWord: '',
			words: []
    	};
		
    	this.imageSearch("egypt");
  	}
	

	imageSearch = keyWord => {
		let url;
		if (this.state.Option == "default"){
			url = `https://images-api.nasa.gov/search?q=${keyWord}`;
		} else if (this.state.Option == "title") {
			url = `https://images-api.nasa.gov/search?title=${keyWord}`;
		} else if (this.state.Option == "location"){
			url = `https://images-api.nasa.gov/search?location=${keyWord}`;
		} else if (this.state.Option == "year"){
			let date_pattern = /$\d{4}$/;
			if(!date_pattern.test(`${keyWord}`)){
				alert("Input should be YYYY format.");
			return;}
			url = `https://images-api.nasa.gov/search?year=${keyWord}`;
		}
		axios.get(url)
		.then(res => {
      		const filteredItems = [];
      		res.data.collection.items.forEach(item => {
        	if (item.data[0].media_type === "image" && item.links[0].href) {
        		filteredItems.push(item); //사진필수
            }});
            this.setState({cards: filteredItems});
            this.setState({cardIndex: 1});
            if(this.state.words.includes(`${keyWord}`)){
                let idx = this.state.words.indexOf(`${keyWord}`);
                this.state.words.splice(`${idx}`,1);
            }
            if(this.state.words.length>7){
                this.state.words.splice(0,1);
            }
            this.state.words.push(`${keyWord}`);	
		});
  	};
		
	InputTextChange = keyWord => {
		this.setState({
			keyWord: keyWord
		});
	};

	SelectBoxChange = event => {
		let sel = document.getElementById("searchbar-options");
		this.setState({
			Option: sel.options[sel.selectedIndex].value
		});
	}

	deleteWord = keyWord => {
		if(this.state.words.includes(`${keyWord}`)){
			this.setState({words: this.state.words.filter((element) => element !== `${keyWord}`)});
		}
  	};
	
	morePages = event => {
		let data = this.state.cards.length;
		let dataIndex = this.state.cardIndex;
		if(data>12*dataIndex){
			var newIndex = dataIndex+1;
			this.setState({cardIndex: newIndex});
			if(data<=12*newIndex){
				var btn = document.getElementById("btn-more");
				btn.disabled="true";
				btn.innerText="end";
			}
		}
	}
	

    render(){
    	return(<div className="App">
		<header className="App-header">
        	<Header imageSearch={this.imageSearch} keyWord={this.state.keyWord} Option={this.state.Option} InputTextChange={this.InputTextChange} SelectBoxChange={this.SelectBoxChange} words={this.state.words} deleteWord={this.deleteWord}></Header>
		</header>
		<section className="App-Section">
        <CardList cards={this.state.cards} cardIndex={this.state.cardIndex}></CardList>
		<div style={{margin: "5rem"}}>
			<button id="btn-more" class="btn btn-default" aria-label="Left Align" onClick={event=>this.morePages(`${this.props.id}`)}>
				<i class="bi bi-plus-lg">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
					<path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
				</svg>
				</i>
			</button>
			<div className="m-3" style={{color:"#888888"}}>
				{this.state.cardIndex}/{Math.floor(this.state.cards.length/12+1)}
			</div>
		</div>
		</section>
    	</div>
      )
   }
}

export default App;