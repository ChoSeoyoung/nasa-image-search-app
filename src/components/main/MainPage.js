import React from 'react';

import Header from '../Header.js'
import CardList from '../CardList.js'
import Button from '../Button.js'

function MainPage(props){
    return(
        <React.Fragment>
            <Header></Header>
	        <section className="App-Section">
                <CardList></CardList>
                <Button></Button>
            </section>
        </React.Fragment>
    )
}

export default MainPage;