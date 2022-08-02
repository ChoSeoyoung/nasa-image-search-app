import React from 'react';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SwipeableViews from 'react-swipeable-views';
import ButtonBase from '@mui/material/ButtonBase';
import { autoPlay } from 'react-swipeable-views-utils';

import axios from 'axios';

import Title from './Title';
import Content from './Content';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function Carousel(props) {
    const {title, content, right} = props;
    const [images, setImages] = React.useState([]);

    axios.get(`https://images-api.nasa.gov/search?q=${title}&page=1`)
        .then(
            res => {
                let filteredItems = [];
                res.data.collection.items.forEach(item => {
                if (item.data[0].media_type === "image" && item.links[0].href) {
                    filteredItems.push(item); //사진필수
                }});
                setImages(filteredItems);
            });

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);

    const ImageButton = styled(ButtonBase)(({ theme }) => ({
        [theme.breakpoints.down('sm')]: {
            width: '100% !important', // Overrides inline-style
        },
        '&:hover, &.Mui-focusVisible': {
            zIndex: 1,
            '& .MuiImageBackdrop-root': {
            opacity: 0.15,
            },
            '& .MuiImageMarked-root': {
            opacity: 0,
            },
            '& .MuiTypography-root': {
            border: '4px solid currentColor',
            },
        },
    }));
    
    const Image = styled('span')(({ theme }) => ({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    }));
    
    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return(
        <React.Fragment>
            <Box sx={{ display: { xs:  'block', md: "flex" }, flexDirection: right==1?'row-reverse':'none' }}>
            <Box sx={{ width:{ xs: "100%", md: "60%" }, flexGrow: 1 }}>
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                {images.map((item, i) => (
                    <div key={item.data[0].nasa_id}>
                    <ImageButton
                    focusRipple
                    key={item.data[0].title}
                    >
                        {Math.abs(activeStep - i) <= 2 ? (
                        <Box
                            component="img"
                            sx={{
                            height: { xs: 255, md: 510 },
                            display: 'block',
                            overflow: 'hidden',
                            width: '100%',
                            }}
                            src={item.links[0].href}
                            alt={item.data[0].title}
                        />
                        ) : null}
                        <Image>
                            <Typography
                            component="span"
                            variant="subtitle1"
                            color="inherit"
                            sx={{
                                position: 'relative',
                                p: 4,
                                pt: 2,
                                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                            }}
                            >
                            {title}
                            </Typography>
                        </Image>
                    </ImageButton>
                    </div>
                ))}
                </AutoPlaySwipeableViews>
            </Box>
            <Box sx={{ alignSelf: 'flex-end' , width:{ xs: "100%", md: "40%" }, flexGrow: 1 }}>
                <Title>
                    {title}
                </Title>
                <Content>
                    {content}
                </Content>
            </Box>
            </Box>
        </React.Fragment>
    );
}

export default Carousel;

