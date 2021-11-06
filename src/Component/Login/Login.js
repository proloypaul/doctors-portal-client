import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import UseFirebase from '../../Hooks/UseFirebase';
import loginImg from '../../images/login.png';
import Header from '../Header/Header';

const Login = () => {
    const {signInWithGoogle, loginEmailAndPassword, error} = UseFirebase()
    const [loginData, setLoginData] = useState({})
    const history = useHistory()
    const location = useLocation()
    const handleOnChange = event => {
        const filed = event.target.name
        const value = event.target.value 
        // console.log(filed, value)
        const newLoginData = {...loginData}
        newLoginData[filed] = value
        setLoginData(newLoginData)
    }
    const handleLogin = event => {
        event.preventDefault()
        loginEmailAndPassword(loginData.email, loginData.password, history, location)
        // alert("login btn working")
        // console.log(loginData)
    }
    return (
        <>
            <Header></Header>
            <Container>
                <Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} sx={{my:15}}>
                            <Grid>
                                <Typography variant="h4" component="div">
                                    Login Here 
                                </Typography>
                                <Grid sx={{my:5}}>
                                <form onSubmit={handleLogin}>
                                        <Typography variant="div" component="div">
                                            <TextField
                                                id="outlined-password-input"
                                                label="abc@gmail.com"
                                                type="email"
                                                name="email"
                                                autoComplete="current-password"
                                                onChange={handleOnChange}
                                                sx={{width:"80%"}}
                                            />
                                        </Typography>
                                        <Typography variant="h6" component="div" sx={{my:2}}>
                                            <TextField
                                                id="outlined-password-input"
                                                label="Password"
                                                type="password"
                                                name="password"
                                                autoComplete="current-password"
                                                onChange={handleOnChange}
                                                sx={{width:"80%"}}
                                            />  
                                        </Typography>
                                        <Typography variant="h6" component="div">
                                            {error}<br/>
                                            <Button type="submit" variant='contained'>Login</Button>
                                        </Typography>
                                        <Typography>
                                            You are new here click to <Link to="/register"><Button variant="contained">Register</Button></Link>
                                        </Typography>
                                        <Button variant="contained" onClick={signInWithGoogle}>Google SignIn</Button>
                                </form>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{display: "flex", justifyContent: "center", alignItems:"center"}}>
                            <img  src={loginImg} alt="Empty!" style={{width: "400px"}}/>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    );
};

export default Login;