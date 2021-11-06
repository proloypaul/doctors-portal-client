import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import treatmentImg from '../../images/treatment.png' 

const Health = () => {
    return (
        <Container sx={{my:10}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img src={treatmentImg} alt="Empty!" style={{width: "400px"}}/>
                </Grid>
                <Grid item xs={12} md={6} sx={{display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                    <Grid>
                        <Typography variant="h3" component="div" sx={{fontWeight:"bold"}}>
                            Exceptional Dental Care, on Your Terms
                        </Typography>
                        <Typography variant="p" component="div" sx={{my:2}}>
                            It is  along established fact that a reader will be distracted by the readable content of a page when looking at it's layout. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, aliquam, illum quae ratione rem officia est totam laudantium optio laborum explicabo facere veniam autem ad similique molestias commodi quisquam. Maxime.
                        </Typography>
                        <Button variant="contained">Learn More</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Health;