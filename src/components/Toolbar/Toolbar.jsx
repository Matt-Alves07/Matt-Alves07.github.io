import styles from './Toolbar.module.css';

import React from 'react';
import { NavLink } from 'react-router-dom';

import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const ToolbarComponent = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div className="container">
      <AppBar position="sticky">
        <Toolbar disableGutters className={styles.toolbar}>
          {/* Responsive Menu Icon */}
          <ThemeProvider theme={darkTheme}>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
              sx={{ display: { xs: 'block', md: 'none' } }}
            >              
                <MenuItem onClick={handleCloseNavMenu}>
                  <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography sx={{ textAlign: 'center' }}>Home</Typography>
                  </NavLink>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <NavLink to="/experiences" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography sx={{ textAlign: 'center' }}>Experiences</Typography>
                  </NavLink>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <NavLink to="/stack" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography sx={{ textAlign: 'center' }}>Stack</Typography>
                  </NavLink>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <NavLink to="/projects" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography sx={{ textAlign: 'center' }}>Projects</Typography>
                  </NavLink>
                </MenuItem>
            </Menu>
          </Box>
          </ThemeProvider>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>            
            <NavLink to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'white' }}>
              <img
                src="/portfolio_new_icon.png"
                alt="Portfolio Icon"
                className={styles.icon}
              />
            </NavLink>
          </Box>

          {/* Desktop Navigation Links */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap:'.3rem' }} className={styles.navGroup}>
            <NavLink to="/" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>
              Home
            </NavLink>
            <NavLink to="/experiences" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>
              Experiences
            </NavLink>
            <NavLink to="/stack" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>
              Stack
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>
              Projects
            </NavLink>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ToolbarComponent