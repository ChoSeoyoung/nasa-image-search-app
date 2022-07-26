import React, { useState } from 'react';
import {useDispatch} from 'react-redux';

function History(props){
	const {history} = props;
	const dispatch = useDispatch();

	
	return(<div style={{display:"inline-block", margin:"auto"}}>
		<button className="btn btn-secondary btn-sm" style={{textDecoration:"underline", border:"none", display:"inline-block", verticalAlignment:"top", height:"2rem", backgroundColor:"transparent", color:"black"}}>
			<span style={{display:"inline-block", color:"#888888", textDecoration:"underline"}} onClick={()=>dispatch({type:'RE-SEARCH', text:{history}})}>#{history[0]}</span>
			<span style={{display:"inline-block", color:"#888888"}} onClick={()=>dispatch({type:'DELETEWORD', text:{history}})}>&nbsp;-&nbsp;</span>
		</button>
		</div>
	)
}

export default History;