import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import cavity from '../../images/cavity.png';
import fluoride from '../../images/fluoride.png';
import whitening from '../../images/whitening.png'
import { Container, Typography } from '@mui/material';

const Services = () => {
    const servicesFackData = [
        {
            id: 1,
            img: fluoride,
            title: 'Fluorid Treatment',
            describtion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis expedita recusandae in. Soluta cumque ipsa quidem corporis aperiam quo, repudiandae aut modi"
        },
        {
            id: 2,
            img: cavity,
            title: 'Cavity Filling',
            describtion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis expedita recusandae in. Soluta cumque ipsa quidem corporis aperiam quo, repudiandae aut modi"
        },
        {
            id: 3,
            img: whitening,
            title: 'Treat Whitening',
            describtion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis expedita recusandae in. Soluta cumque ipsa quidem corporis aperiam quo, repudiandae aut modi"
        },
    ]
    return (
        <Box sx={{ flexGrow: 1, my:10 }}>
            <Container>
                <Typography sx={{textAlign:"center"}} variant="h6" component="div">
                     OUR SERVICES 
                </Typography>
                <Typography sx={{textAlign:"center", fontWeight:"bold"}} variant="h3" component="div">
                     Services We Provided
                </Typography>
                <Grid container spacing={2}>
                    {servicesFackData.map(service => <Grid item xs={6} md={4} key={service.id}>
                    <div style={{textAlign:'center'}}>
                        <img src={service.img} alt="Empty" />
                    </div>
                    <h4>{service.title}</h4>
                    <p>{service.describtion}</p>
                    </Grid>)}
                </Grid>
            </Container>
            
        </Box>
    );
};

export default Services;