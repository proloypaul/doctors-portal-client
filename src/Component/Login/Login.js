import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import loginImg from '../../images/login.png';

const Login = () => {
    return (
        <Container>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} sx={{my:15}}>
                        <Typography>
                            <Typography variant="h4" component="div">
                                Login Here 
                            </Typography>
                            <Typography variant="div" component="div" sx={{my:5}}>
                               <form>
                                    <Typography variant="div" component="div">
                                        <TextField
                                            id="outlined-password-input"
                                            label="abc@gmail.com"
                                            type="email"
                                            name="email"
                                            autoComplete="current-password"
                                            sx={{width:"80%"}}
                                        />
                                    </Typography>
                                    <Typography variant="div" component="div" sx={{my:2}}>
                                        <TextField
                                            id="outlined-password-input"
                                            label="Password"
                                            type="password"
                                            name="password"
                                            autoComplete="current-password"
                                            sx={{width:"80%"}}
                                        />  
                                    </Typography>
                                    <Typography variant="div" component="div">
                                        <Button variant='contained'>Login</Button>
                                    </Typography>
                                    <Typography variant="p" component="div">
                                        You are new here click to <Button variant="contained">Register</Button>
                                    </Typography>
                                    
                               </form>
                            </Typography>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{display: "flex", justifyContent: "center", alignItems:"center"}}>
                        <img  src={loginImg} alt="Empty!" style={{width: "400px"}}/>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Login;