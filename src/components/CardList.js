import React, { useState, useEffect } from 'react';
import Card from './Card.js';
import {Provider, useSelector, useDispatch} from 'react-redux';
import axios from 'axios'

function CardList(props) {
	const [cards, setCards] = useState([]);
	const keyWord = useSelector((state)=>state.keyWord);
	const option = useSelector((state)=>state.option);
	const pageIndex = useSelector((state)=>state.pageIndex);

	useEffect(() => {
		let url;
		
      	if (option == "default"){
        	url = `https://images-api.nasa.gov/search?q=${keyWord}&page=${pageIndex}`;
      	} else if (option == "title") {
        	url = `https://images-api.nasa.gov/search?title=${keyWord}&page=${pageIndex}`;
      	} else if (option == "location"){
        	url = `https://images-api.nasa.gov/search?location=${keyWord}&page=${pageIndex}`;
      	} else if (option == "year"){
        	let date_pattern = /$\d{4}$/;
        	if(!date_pattern.test(`${keyWord}`)){
            	alert("Input should be YYYY format.");
         		return;}
         	url = `https://images-api.nasa.gov/search?year=${keyWord}&page=${pageIndex}`;
      	}

      	axios.get(url)
      	.then(res => {
        	let filteredItems = [];
            res.data.collection.items.forEach(item => {
            if (item.data[0].media_type === "image" && item.links[0].href) {
            	filteredItems.push(item); //사진필수
            }});
			if(pageIndex==1){
				setCards(filteredItems);
			}else{
				setCards(cards.concat(filteredItems));
			}
		});
		
	}, [keyWord,pageIndex]);
	
	const cardItems1 = cards.map((item, i) => {
		if (item) {
			return (
				<Card
				key={item.data[0].nasa_id}
				image={item.links[0].href}
				title={item.data[0].title}
				date={item.data[0].date_created}
				description={item.data[0].description}
				/>
			);
		};
	});
	
	return (
		<div style={{margin:"auto", width: "75vw"}}>
			<div className="text-start m-2"><b>{cards.length}</b><span style={{color:"#888888"}}> image(s) in the search result.</span></div>
			{cardItems1}
		</div>
	);
};

export default CardList;