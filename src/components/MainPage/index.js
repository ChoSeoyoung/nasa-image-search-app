import React from 'react';

import Layout from "../Layout";
import Carousel from "./Carousel";
import StartButton from './StartButton';

function MainPage(props){
    return(
        <React.Fragment>
        <Layout>
            <Carousel title="Korea" content="South Korea, 
            an East Asian nation on the southern half of the Korean Peninsula, 
            shares one of the world’s most heavily militarized borders with North Korea.
             It’s equally known for its green,
              hilly countryside dotted with cherry trees and centuries-old Buddhist temples,
               plus its coastal fishing villages, 
               sub-tropical islands and high-tech cities such as Seoul,
                the capital. " right="0"></Carousel>
            <Carousel title="Seoul" content="Seoul, the capital of South Korea, 
                    is a huge metropolis where modern skyscrapers, 
                    high-tech subways and pop culture meet Buddhist temples, 
                    palaces and street markets. 
                    Notable attractions include futuristic Dongdaemun Design Plaza, 
                    a convention hall with curving architecture and a rooftop park; 
                    Gyeongbokgung Palace, which once had more than 7,000 rooms; 
                    and Jogyesa Temple, site of ancient locust and pine trees." right="1"></Carousel>
            <StartButton></StartButton>
        </Layout>
        </React.Fragment>   
    )
}

export default MainPage;

