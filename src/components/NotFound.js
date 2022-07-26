import React from 'react';
import {Link} from 'react-router-dom';

function NotFound(props){
    const {url} = props.match || {};

    return(
        <React.Fragment>
            <div>{url} 페이지를 찾을 수 없습니다.</div>
            <Link to="/">메인 페이지로 이동</Link>   
        </React.Fragment> 
    )
}

export default NotFound;