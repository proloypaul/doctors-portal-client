import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import doctorImg from '../../images/doctor.png';
import ApponitmentBg from '../../images/appointment-bg.png'

const appointmentBanner = {
    background: `url(${ApponitmentBg})`,
    backgroundColor: 'rgb(43, 69, 80, 0.9)',
    backgroundBlendMode: 'darken'
}
const Apponitment = () => {
    return (
        <Box sx={{ flexGrow: 1, my:5 }} style={appointmentBanner}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img style={{width: "400px", marginTop:"-100px"}} src={doctorImg} alt="Empty"/>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                        <Box>
                            <Typography variant="p" sx={{fontSize:18, fontWeight:'bold', color:'#49F4CE'}} component="div">
                                Apponitment
                            </Typography>
                            <Typography variant="h4" sx={{fontWeight:'600', color:'white', my:2}} component="div">
                                Make an Appointment Today
                            </Typography>
                            <Typography variant="p" sx={{mb:2}} component="div">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, soluta, sunt expedita accusamus quibusdam nisi fugiat, a sit neque quaerat quia.
                            </Typography>
                            <Button variant="contained" style={{backgroundColor: '#49F4CE'}}>Appoinment</Button>
                        </Box>

                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Apponitment;