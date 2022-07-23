import React from 'react';

class History extends React.Component{
	constructor(props) {
		super(props);
	}
	
	render(){
		return(<div style={{display:"inline-block", margin:"auto"}}>
			<button className="btn btn-secondary btn-sm" style={{textDecoration:"underline", border:"none", display:"inline-block", verticalAlignment:"top", height:"2rem", backgroundColor:"transparent", color:"black"}}>
				<span style={{display:"inline-block", color:"#888888", textDecoration:"underline"}} onClick={event=>this.props.imageSearch(`${this.props.history}`)}>#{this.props.history}</span>
				<span style={{display:"inline-block", color:"#888888"}} onClick={event=>this.props.deleteWord(`${this.props.history}`)}>&nbsp;-&nbsp;</span>
			</button>
			</div>
	)
	}
}

export default History;