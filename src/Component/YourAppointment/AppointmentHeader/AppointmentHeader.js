import { Container, Grid } from '@mui/material';
import React from 'react';
import chairTwo from '../../../images/chair.png'
import Calander from '../../Calander/Calander';

const AppointmentHeader = ({date, setDate}) => {
    return (
        <Container sx={{my:5}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Calander date={date} setDate={setDate}></Calander>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={chairTwo} alt="Empty!" style={{width: '100%'}}/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppointmentHeader;