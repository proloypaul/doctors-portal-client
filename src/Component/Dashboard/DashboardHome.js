import { Container, Grid } from '@mui/material';
import React from 'react';
import Calander from '../Calander/Calander';
import LogerAppointment from './LogerAppointment/LogerAppointment';

const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date().toLocaleDateString())
    return (
        <Container>
            <Grid container spacing={2}>
                {/* <Grid item xs={2} md={2}>
                
                </Grid> */}
                <Grid item sm={10} md={6}>
                <Calander
                date={date}
                setDate={setDate}
                ></Calander>
                </Grid>
                <Grid item sm={10} md={6}>
                <LogerAppointment date={date}></LogerAppointment>
                </Grid>
            </Grid>
        </Container>
    );
};

export default DashboardHome;