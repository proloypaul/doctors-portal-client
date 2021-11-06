import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { NavLink } from 'react-router-dom';
import UseFirebase from '../../Hooks/UseFirebase';

// import MenuIcon from '@mui/icons-material/Menu';


const Header = () => {
    const {user, logOutProces} = UseFirebase()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
            <Toolbar>
                <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                >
                {/* <MenuIcon/> */}
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                News
                </Typography>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/yourAppointment" sx={{textDecoration: 'none', color: "white"}}><Button color="inherit">Appointment</Button></NavLink>
                {user?.email ? <NavLink to='/login' sx={{textDecoration: 'none', color: "white"}}><Button color="inherit" onClick={logOutProces} >LogOut</Button></NavLink> : <NavLink to='/login' sx={{textDecoration: 'none', color: "white"}}><Button color="inherit" >LogIn</Button></NavLink>}
                
            </Toolbar>
            </AppBar>
      </Box>
    );
};

export default Header;