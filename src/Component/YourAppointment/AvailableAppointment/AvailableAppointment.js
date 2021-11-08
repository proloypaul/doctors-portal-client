import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Booking from './Booking';




const AvailableAppointment = ({date}) => {
    const timing = [
        {
            id: 1,
            name: "Teeth Orthodontics",
            time: "800Am-900Am",
            space: 10
        }, 
        {
            id: 2,
            name: "Cosmetic Dentistry",
            time: "10:05Am-11:30Am",
            space: 10
        },
        {
            id: 3,
            name: "Teeth Cleaning",
            time: "500Am-6:30Am",
            space: 10
        },
        {
            id: 4,
            name: "Cavity Protection",
            time: "700Am-8:30Am",
            space: 10
        },
        {
            id: 5,
            name: "Teeth Orthodontics",
            time: "800Am-900Am",
            space: 10
        },
        {
            id: 6,
            name: "Teeth Orthodontics",
            time: "800Am-900Am",
            space: 10
        }
    ]
    
    return (
        <Container sx={{my:10}}>
            <Typography sx={{textAlign: "center", color:"#49F4CE", fontWeight:"bold"}} variant="h3" component="div">
                Appointment available  {date.toDateString()}
            </Typography>
            <Grid sx={{my:5}} container spacing={2}>
                {timing.map(time  => <Booking date={date} key={time.id} time={time}></Booking>)}
            </Grid>  
        </Container>
    );
};

export default AvailableAppointment;