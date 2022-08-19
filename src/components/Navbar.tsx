import { useState } from 'react';AppBar
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

const NavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3]
}));

const Navbar = (props: any) => {
  const { onSidebarOpen, ...other } = props;

  return (
    <>
      <NavbarRoot
        sx={{
          left: {
            lg: 280
          },
          width: {
            lg: 'calc(100% - 280px)'
          }
        }}
        {...other}>
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2
          }}
        >
          <IconButton
            onClick={onSidebarOpen}
            sx={{
              display: {
                xs: 'inline-flex',
                lg: 'none'
              }
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
        </Toolbar>
      </NavbarRoot>
    </>
  );
};

Navbar.propTypes = {
  onSidebarOpen: PropTypes.func
};

export default Navbar ;
