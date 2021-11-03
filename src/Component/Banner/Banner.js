import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../images/chair.png'
const Banner = () => {
    const chairimg = {
        weight: "300px"
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={{display: "flex", alignItems:"center"}}>
                    <div>
                        <h1>Your New Smile Start's Here</h1>
                        <p  style={{margin: '40px 0', color: "blue"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus numquam aperiam, tenetur, assumenda quas, delectus beatae velit excepturi libero ad minus?</p>
                        <button>Get Appointment</button>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}  style={{chairimg}}>
                    <img src={chair} alt="Empty!"/>
                </Grid>
            </Grid>
        </Box>                     
    );
};

export default Banner;