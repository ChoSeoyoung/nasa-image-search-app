import * as React from 'react';
import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import BookIcon from '@mui/icons-material/Book';
import IconButton from '@mui/material/IconButton';

import withStyles,{css} from '../../withStyles';

function Footer(props){
  const {
    styles,
  } = props;

  const handleInfo = () => {
    window.location="../../Info.html";
  };

  const handleGithub= () => {
    window.location="https://github.com/ChoSeoyoung";
  };

  const handleBlog = () => {
    window.location="https://stonesy927.tistory.com/";
  };

  return (
    <Box maxWidth="xl" position="static" 
    justifyContent="center"
    alignItems="center"
    sx={{ minHeight: { xs: "30vh", md: "60vh" } }}{...css(styles.default,)}>
        <hr></hr>
        <Box>
            <Box
            display="flex"
            justifyContent="center"
            alignItems="flex-end"
            minHeight={{ xs: "6vh", md: "10vh" }}
            >
                NASAIMG
            </Box>
            <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight={{ xs: "6vh", md: "10vh" }}
            >
            <IconButton aria-label="more" size="medium" {...css(styles.default,)} onClick={handleInfo}>
                <BookIcon></BookIcon>
            </IconButton>
            </Box>
        </Box>
        <Box>
            <Box
            display="flex"
            justifyContent="center"
            alignItems="flex-end"
            minHeight={{ xs: "6vh", md: "10vh" }}
            >
                Contact me
            </Box>
            <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight={{ xs: "6vh", md: "10vh" }}
            >
            <IconButton aria-label="more" size="medium" {...css(styles.default,)} onClick={handleGithub}>
                <GitHubIcon></GitHubIcon>
            </IconButton>
            <IconButton aria-label="more" size="medium" {...css(styles.default,)} onClick={handleBlog}>
                <HomeIcon></HomeIcon>
            </IconButton>
            </Box>
        </Box>
    </Box>
  );
};

export default withStyles(({ color }) => ({
  default: {
    color: color.pLight,
  }
}))(Footer);

