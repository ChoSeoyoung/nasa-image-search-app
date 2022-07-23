import React from 'react';

const backgroundDiv = {
	display: "inline-block",
	width: "25vw",
	height: "75vh",
	margin: "auto",
	verticalAlign: "bottom"
}

class Card extends React.Component{
	constructor(props) {
		super(props);
	}
	
	render(){
		return(
			<div className="card grid" style={backgroundDiv}>
				<img className="card-img" alt="img" name={this.props.id}
				src={this.props.image} style={{height: "40vh"}}>
				</img>
				<div class="card-body overflow-hidden" style={{maxHeight: "35vh"}}>
					<h5 class="card-title overflow-hidden" style={{maxHeight:"15vh"}}>{this.props.title}</h5>
					<p class="card-text overflow-hidden" style={{color:"#888888", maxHeight:"5vh"}}>{this.props.date}</p>
					<p class="card-text fst-italic overflow-hidden" style={{maxHeight:"20vh"}}>{this.props.description}</p>
				</div>
			</div>
	)
	}
}

export default Card;