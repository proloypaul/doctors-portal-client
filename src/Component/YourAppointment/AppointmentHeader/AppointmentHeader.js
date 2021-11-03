import { Container, Grid } from '@mui/material';
import React from 'react';
import chairTwo from '../../../images/chair.png'
import Calander from '../../Calander/Calander';

const AppointmentHeader = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <h1>Hellow grid</h1>
                    <Calander></Calander>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={chairTwo} alt="Empty!" style={{width: '100%'}}/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppointmentHeader;