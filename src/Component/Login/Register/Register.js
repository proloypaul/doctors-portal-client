import { Button, Container,  TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import UseFirebase from '../../../Hooks/UseFirebase';
import Header from '../../Header/Header';

const Register = () => {
    const {registerWithEmailAndPassword, error, user} = UseFirebase()
    const [registerData, setRegisterData] = useState({})
    const history = useHistory()
    const collectUserData = event => {
        const field = event.target.name; 
        const value = event.target.value;
        const initialData = {...registerData}
        initialData[field] = value 
        setRegisterData(initialData)
    }
    const handleRegister = event => {
        event.preventDefault()
        // console.log(registerData)
        if(registerData.password === registerData.retypePassword){
            registerWithEmailAndPassword(registerData.email, registerData.password, registerData.name, history)
            event.target.reset()
            alert("account create successfully!")
        }else{
            alert("password and retype password don't match. Please try again")
        }
    }
    return (
        <>
            {user?.email ? <Header></Header>: ''}
            <Container sx={{my:10}}>
                <Typography variant="h4" component="div">
                    Create a new Account
                </Typography>
                <Box sx={{my:5}}>
                    <form onSubmit={handleRegister}>
                        <Typography variant="div" component="div" >
                            <TextField
                                id="filled-password-input"
                                label="User Name"
                                type="text"
                                autoComplete="current-password"
                                variant="filled"
                                onChange={collectUserData}
                                name="name"
                                style={{width: "50%"}}
                                
                            />
                        </Typography>
                        <Typography variant="div" component="div" sx={{my:2}}>
                            <TextField
                                id="filled-password-input"
                                label="abc@gmail.com"
                                type="email"
                                autoComplete="current-password"
                                variant="filled"
                                name="email"
                                onChange={collectUserData}
                                style={{width: "50%"}}
                                
                            />
                        </Typography>
                        <Typography variant="div" component="div">
                            <TextField
                                id="filled-password-input"
                                label="Create Password"
                                type="password"
                                autoComplete="current-password"
                                variant="filled"
                                name="password"
                                onChange={collectUserData}
                                style={{width: "50%"}}
                            />
                        </Typography>
                        <Typography variant="div" component="div" sx={{my:2}}>
                            <TextField
                                id="filled-password-input"
                                label="Retype password"
                                type="password"
                                autoComplete="current-password"
                                variant="filled"
                                name="retypePassword"
                                onChange={collectUserData}
                                style={{width: "50%"}}
                            />
                            {error}
                        </Typography>
                        <Button variant="contained" type="submit">Register</Button>
                        <Typography variant="p" component="div">
                            Already register click to <Link to="login">Login</Link>
                        </Typography>
                    
                    </form>
                </Box>
            </Container>
        </>
    );
};

export default Register;