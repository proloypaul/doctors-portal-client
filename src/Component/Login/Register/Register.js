import { Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Register = () => {
    return (
        <Container sx={{my:10}}>
            <Typography variant="h4" component="div">
                Create a new Account
            </Typography>
            <Box sx={{my:5}}>
                <Grid>
                    <Typography variant="div" component="div" >
                        <TextField
                            id="filled-password-input"
                            label="User Name"
                            type="text"
                            autoComplete="current-password"
                            variant="filled"
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
                            style={{width: "50%"}}
                        />
                    </Typography>
                    <Typography variant="div" component="div">
                        <TextField
                            id="filled-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="filled"
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
                            style={{width: "50%"}}
                        />
                    </Typography>
                
                </Grid>
            </Box>
        </Container>
    );
};

export default Register;