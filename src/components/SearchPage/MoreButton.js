import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Box from "@material-ui/core/Box";

import {useDispatch} from 'react-redux';

import withStyles,{css} from '../../withStyles';

function MoreButton(props) {
  const {
    styles,
  } = props;
  const dispatch = useDispatch();

  return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight={{ xs: "30vh", md: "50vh" }}
        >
        <IconButton aria-label="more" size="large" {...css(styles.default,)} onClick={()=>dispatch({type:'MORE'})}>
            <AddIcon fontSize="inherit" />
        </IconButton>
      </Box>
  );
}


export default withStyles(({ color }) => ({
  default: {
    color: color.secondary,
  }
}))(MoreButton);

