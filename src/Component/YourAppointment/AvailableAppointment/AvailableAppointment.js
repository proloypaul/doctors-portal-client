import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import BookingModal from '../../BookingModal/BookingModal';
import Paper from '@mui/material/Paper';




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
            space: 7
        },
        {
            id: 3,
            name: "Teeth Orthodontics",
            time: "800Am-900Am",
            space: 10
        },
        {
            id: 4,
            name: "Teeth Orthodontics",
            time: "800Am-900Am",
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
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    
    return (
        <Container sx={{my:10}}>
            <Typography sx={{textAlign: "center", color:"#49F4CE", fontWeight:"bold"}} variant="h3" component="div">
                Appointment available  {date.toDateString()}
            </Typography>
            <Grid sx={{my:5}} container spacing={2}>
                {timing.map(time => <Grid key={time.id} item xs={6} md={4}>
                    <Paper elevation={3}>
                            <Card sx={{ minWidth: 275, textAlign: 'center' }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 20, fontWeight:"600", color:"#11FDC8" }} variant="h6" color="text.secondary" gutterBottom>
                                        {time.name}
                                    </Typography>
                                    <Typography sx={{ mb: 1.5, fontSize:15, fontWeight:"bold", color: 'black'}} variant="h5" color="text.secondary">
                                        {time.time}
                                    </Typography>
                                    <Typography variant="p" sx={{fontSize: 17, fontWeight:"300", color: 'black'}}>
                                        {time.space} SPACES AVAILABLE 
                                    </Typography>
                                    <Typography variant="h3">
                                        <Button onClick={handleOpen} variant="contained" sx={{backgroundColor: '#49F4CE', fontWeight:'bold'}}>Book Appointment</Button>
                                    </Typography>
                                    
                                    
                                    <BookingModal handleClose={handleClose} open={open} sendBookingDtl={time} date={date.toDateString()}></BookingModal>
                                </CardContent>
                            </Card>
                    </Paper>
                            
                        </Grid>)
                        
                }
            </Grid>

        
        </Container>

    );
};

export default AvailableAppointment;