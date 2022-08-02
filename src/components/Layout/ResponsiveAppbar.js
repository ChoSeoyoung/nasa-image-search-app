import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import InputBase from '@mui/material/InputBase';
import RocketIcon from '@mui/icons-material/Rocket';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import withStyles,{css} from '../../withStyles';

function ResponsiveAppBar(props){
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const {
    styles,
  } = props;

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    window.location="/";
  };

  const handleCloseNavMenuSearch = () => {
    setAnchorElNav(null);
    window.location="./search";
  };

  const handleInfo = () => {
    window.location="../../Info.html";
  };

  return (
    <Container maxWidth="xl" position="static" {...css(styles.default,)}>
      <Toolbar disableGutters>
        <RocketIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: '#f50057' }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'Sans-serif',
            fontWeight: 700,
            color: '#f50057',
            letterSpacing: '.1rem',
            textDecoration: 'none',
          }}
        >
          NASAIMG
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon sx={{ color: 'white' }} />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            <MenuItem key='Home' onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Home</Typography>
            </MenuItem>
            <MenuItem key='Sub' onClick={handleCloseNavMenuSearch}>
                <Typography textAlign="center">Search</Typography>
            </MenuItem>
          </Menu>
        </Box>
        <RocketIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: '#f50057' }} />
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'Sans-serif',
            fontWeight: 700,
            letterSpacing: '.1rem',
            color: '#f50057',
            textDecoration: 'none',
          }}
        >
          NASAIMG
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Button
            key='Home'
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'white', display: 'block' }}
            >
            Home
          </Button>
          <Button
            key='Sub'
            onClick={handleCloseNavMenuSearch}
            sx={{ my: 2, color: 'white', display: 'block' }}
            >
            Search
          </Button>
        </Box>
        
        <Box>
          <IconButton color="inherit" onClick={handleInfo}>
            <HelpOutlineIcon sx={{ color: 'white' }}/>
          </IconButton>
        </Box>
      </Toolbar>
    </Container>
  );
};

export default withStyles(({ color }) => ({
  default: {
    backgroundColor: color.primary,
  }
}))(ResponsiveAppBar);

