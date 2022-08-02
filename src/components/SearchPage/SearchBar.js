import * as React from 'react';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from "@material-ui/core/Box";
import Typography from '@mui/material/Typography';
import {Provider, useSelector, useDispatch} from 'react-redux';

function SearchBar(props){
	const dispatch = useDispatch();

    return(
        <React.Fragment>
            <Container fixed>
            <Box
            display="flex"
            justifyContent="center"
            alignItems="flex-end"
            minHeight={{ xs: "15vh", md: "30vh" }}
            >
                <Typography variant="h4" component="div" gutterBottom>
                    NASA Image Search
                </Typography>
            </Box>
            <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight={{ xs: "15vh", md: "30vh" }}
            >
                <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', width: { xs: 400, md: 800 } }}>
                    <InputBase
                        id="search-input"
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search Nasa image"
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                    <IconButton sx={{ p: '10px' }} aria-label="search"
                    onClick={()=>dispatch({type:'SEARCH'})}>
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </Box>
            </Container>
        </React.Fragment>
    );
}

export default SearchBar;

