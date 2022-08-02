import React from 'react';

import Layout from "../Layout";
import Card from "./Card";
import MoreButton from './MoreButton';
import SearchBar from './SearchBar';

function SearchPage(props){
    return(
        <React.Fragment>
        <Layout>
            <SearchBar></SearchBar>
            <Card></Card>
            <MoreButton></MoreButton>
        </Layout>
        </React.Fragment>   
    )
}

export default SearchPage;

