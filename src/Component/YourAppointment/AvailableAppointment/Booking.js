import { Button, Card, CardContent, Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../../BookingModal/BookingModal';

const Booking = (props) => {
    const {name, time, space} = props.time 


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <Container>
                <Grid sx={{my:5}} container spacing={2}>
                    <Grid item xs={6} md={4}>
                        <Paper elevation={3}>
                                <Card sx={{ minWidth: 275, textAlign: 'center' }}>
                                    <CardContent>
                                        <Typography sx={{ fontSize: 20, fontWeight:"600", color:"#11FDC8" }} variant="h6" color="text.secondary" gutterBottom>
                                            {name}
                                        </Typography>
                                        <Typography sx={{ mb: 1.5, fontSize:15, fontWeight:"bold", color: 'black'}} variant="h5" color="text.secondary">
                                            {time}
                                        </Typography>
                                        <Typography variant="p" sx={{fontSize: 17, fontWeight:"300", color: 'black'}}>
                                            {space} SPACES AVAILABLE 
                                        </Typography>
                                        <Typography variant="h3">
                                            <Button onClick={handleOpen} variant="contained" sx={{backgroundColor: '#49F4CE', fontWeight:'bold'}}>Book Appointment</Button>
                                        </Typography> 
                                    </CardContent>
                                </Card>
                        </Paper>    
                    </Grid>
                </Grid>
            </Container>
            <BookingModal
            handleClose={handleClose} 
            open={open} sendBookingDtl={props.time} 
            date={props.date.toDateString()} 
            setBookingSuccess={props.setBookingSuccess}
            ></BookingModal>
        </div>
    );
};

export default Booking;