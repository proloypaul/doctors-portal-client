import { Alert, Container, Grid, Typography } from '@mui/material';
import React, {useState} from 'react';
import Booking from './Booking';




const AvailableAppointment = ({date}) => {
    const [bookingSuccess, setBookingSuccess] = useState(false)
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
                {bookingSuccess && <Alert>Appointment submit successfully!</Alert>}
            </Typography>
            <Grid sx={{my:5}} container spacing={2}>
                {timing.map(time  => <Booking 
                key={time.id} 
                date={date} 
                time={time}
                setBookingSuccess={setBookingSuccess}
                ></Booking>)}
            </Grid>  
        </Container>
    );
};

export default AvailableAppointment;