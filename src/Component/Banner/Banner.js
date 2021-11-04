import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../images/chair.png'
import { Button, Container, Typography } from '@mui/material';
import bannerBg from '../../images/chair.png'

const bannerBgAdded = {
    background: `url(${bannerBg})`,
    backgroundColor: 'rgba(156, 226, 197 , 0.7)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: "cover",
    backgroundBlendMode: 'darken, luminosity',   
    height: '400px',
    display: "flex",
    alignItems: 'center'
}
const Banner = () => {

    return (
        <Box sx={{ flexGrow: 1, py: 10}} style={bannerBgAdded}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} style={{display: "flex",alignItems:"center"}}>
                        <Box>
                            <Typography variant="h4" component="div" sx={{color:'white', fontWeight:'bold'}}>
                                Your New Smile Start's Here
                            </Typography>
                            <Typography variant="p" component="div">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus numquam aperiam, tenetur, assumenda quas, delectus beatae velit excepturi libero ad minus?
                            </Typography>
                            <Typography variant="h1" component="div">
                                <Button variant="contained" sx={{backgroundColor: '#49F4CE', fontWeight:'bold'}}>Book Appointment</Button>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{textAlign: 'center'}}>
                        <img src={chair} alt="Empty!" style={{width: "400px"}}/>
                    </Grid>
                </Grid>
            </Container>
        </Box>                     
    );
};

export default Banner;