import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from "@material-ui/core/Box";

import {useDispatch} from 'react-redux';

import withStyles,{css} from '../../withStyles';

function StartButton(props) {
  const {
    styles,
  } = props;
  const dispatch = useDispatch();

  const handleSearch = () => {
    window.location="./search";
  };

  return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight={{ xs: "20vh", md: "30vh" }}
        >
        <IconButton aria-label="more" size="medium" {...css(styles.default,)} onClick={handleSearch}>
            Start
        </IconButton>
      </Box>
  );
}


export default withStyles(({ color }) => ({
  default: {
    color: color.secondary,
  }
}))(StartButton);

