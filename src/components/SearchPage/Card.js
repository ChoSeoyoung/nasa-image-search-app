import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

import {useSelector} from 'react-redux';

import axios from 'axios'

function IMGCard(props) {
    const [cards, setCards] = useState([]);
	const keyWord = useSelector((state)=>state.keyWord);
	const pageIndex = useSelector((state)=>state.pageIndex);

    useEffect(() => {
		let url = `https://images-api.nasa.gov/search?q=${keyWord}&page=${pageIndex}`;
		
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

    const CardList = cards.map((item, i) => {
        if (item) {
            return (
            <ImageListItem key={item.links[0].href}>
                <Card sx={{ minHeight: '280px', minWidth: 320 }}>
                <CardCover>
                    <img
                    src={item.links[0].href}
                    alt={item.data[0].title}
                    />
                </CardCover>
                <CardCover
                    sx={{
                    background:
                        'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                    }}
                />
                <CardContent sx={{ justifyContent: 'flex-end' }}>
                    <Typography level="h2" fontSize="lg" textColor="#ffffff" mb={1}>
                    {item.data[0].title}
                    </Typography>
                    <Typography level="h6" fontSize="xs" textColor="#ffffff" mb={1}>
                    {item.data[0].date_created}
                    </Typography>
                </CardContent>
                </Card>
            </ImageListItem>
            );
        };
    });

    return (
        
    <React.Fragment>
        <Container fixed>
        <Box sx={{ display: { xs: 'none', md: 'block' }}}>
            <ImageList cols={3}>
                {CardList}
            </ImageList>
        </Box>
        <Box sx={{ display: { xs: 'block', md: 'none' }}}>
            <ImageList cols={1}>
                {CardList}
            </ImageList>
        </Box>
        </Container>
    </React.Fragment>
    );
}

export default IMGCard;

