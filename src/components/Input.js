import React from 'react';

function Input(props){
	const {name, label} = props;
    return(
		<div>
            {label}
            <input placeholder={name}/>
		</div>
	)
}

export default Input;