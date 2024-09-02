import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Icon } from '@iconify/react';
import { Link, useNavigate } from 'react-router-dom';
import { Padding } from '@mui/icons-material';
import img from '../Assets/Cookies,Cake &Crunch1.png'


const pages = [
  { tab: 'Home', link: '/Home' },
  { tab: 'About', link: '/About' },
  { tab: 'Recipes', link: '/recipeMenu' },
  { tab: 'Start', link: '/Start' }
];



function Nav() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();



  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  const handleLogin = () => {
    navigate('/Login');


  }

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#9d4e79', height: 30 }}>
        <Toolbar>
          <Typography variant="h6" sx={{ mb: 3 }} >
            <Icon icon="material-symbols:mail-outline" color='black' /></Typography>
          <Typography sx={{ color: 'black', mb: 4, mr: 3, ml: 1 }}>bakedbliss@gmail.com</Typography>
          <Typography variant="h6" sx={{ mb: 3 }} > <Icon icon="ic:baseline-phone" color='black' /></Typography>
          <Typography sx={{ color: 'black', mb: 4, ml: 1 }}>8897654734</Typography>

        </Toolbar>
      </AppBar>
      <AppBar position="static" sx={{ backgroundColor: 'white', height: 70 }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'black',
                textDecoration: 'none',
              }}
            >
              <img src={img} height={100} width={300}></img>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{ color: 'black' }}
              >
                <MenuIcon />
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
                {pages.map((page, index) => (
                  
                  <Link to={`${page.link}`} style={{ textDecoration: 'none' }}>
                  <MenuItem key={index} onClick={handleCloseNavMenu} >
                    <Typography textAlign="center" sx={{ color: 'black' }}>{page.tab}</Typography>
                  </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'black',
                textDecoration: 'none',
              }}
            >
              BAKED BLISS
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{
              display: { xs: 'none', md: 'flex' }
              , alignItems: 'center'
            }}>
              {pages.map((page, index) => (
                <Link to={`${page.link}`} style={{ textDecoration: 'none' }}>
                  <Button
                    key={index}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'black', display: 'block', fontWeight: 600, fontSize: 16, mr: 4, font: 'open sans' }}
                  >
                    {page.tab}
                  </Button>
                </Link>
              ))}
              <IconButton size="large" aria-label="search" color="inherit">
                <SearchIcon sx={{ color: 'black' }} />
              </IconButton>

              <Button onClick={handleLogin} variant="contained" sx={{ mb: 2 }}>Login</Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Nav;
