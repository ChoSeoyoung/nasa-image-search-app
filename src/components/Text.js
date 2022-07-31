import React from 'react';
import withStyles,{css} from './withStyles';

function Text(props){
    const {children, styles} = props;

    return(
        <span {...css(styles.default)}>
            {children}
        </span>
    )
}

export default withStyles(({color,size})=>({
    default:{
        color:color.default,
        fontSize:size.md,
    },
}))(Text);

