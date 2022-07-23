import React from 'react';
import Card from './Card.js';

const CardList = props => {
	let id, image, title, date, description,keywords;
	const realCardLength = (props.cards.length);
	const cardLength = 12 * (props.cardIndex);
	
	const cardItems1 = new Array(cardLength).fill(1).map((m, i) => {
		const index = i;
		const items = props.cards[index];
		if (items) {
			id = items.data[0].nasa_id
			image = items.links[0].href;
			title = items.data[0].title;
			date = items.data[0].date_created;
			description = items.data[0].description;
			return (
				<Card
				key={id}
				image={image}
				title={title}
				date={date}
				description={description}
				/>
			);
		};
	});
	
	return (
		<div style={{margin:"auto", width: "75vw"}}>
			<div className="text-start m-2"><b>{realCardLength}</b><span style={{color:"#888888"}}> image(s) in the search result.</span></div>
			{cardItems1}
		</div>
	);
};

export default CardList;