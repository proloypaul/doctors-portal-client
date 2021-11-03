import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import doctorImg from '../../images/doctor.png';
import ApponitmentBg from '../../images/appointment-bg.png'
const Apponitment = () => {
    const appointmentBanner = {
        background: `url(${ApponitmentBg})`,
        backgroundColor: 'rgba(179, 157, 153, 0.6)',
        backgroundBlendMode: 'darken, luminocity'
    }
    return (
        <Box sx={{ flexGrow: 1, my:5 }} style={appointmentBanner}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img style={{width: "400px", marginTop:"-100px"}} src={doctorImg} alt="Empty"/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="p" component="div">
                            Apponitment
                        </Typography>
                        <Typography variant="h3" component="div">
                            Make an Appointment Today
                        </Typography>
                        <Typography variant="p" component="div">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, soluta, sunt expedita accusamus quibusdam nisi fugiat, a sit neque quaerat quia.
                        </Typography>
                        <Button variant="contained" style={{backgroundColor: '#49F4CE'}}>Appoinment</Button>

                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Apponitment;