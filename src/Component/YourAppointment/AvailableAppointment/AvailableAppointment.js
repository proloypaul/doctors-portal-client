import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';



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
    return (
        <Container sx={{my:10}}>
            <Typography variant="h3" component="div">
                Appointment available  {date.toDateString()}
            </Typography>
            <Grid sx={{my:5}} container spacing={2}>
                {timing.map(time => <Grid key={time.id} item xs={6} md={4}>
                            <Card sx={{ minWidth: 275, textAlign: 'center' }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 16 }} variant="h6" color="text.secondary" gutterBottom>
                                        {time.name}
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} variant="h5" color="text.secondary">
                                        {time.time}
                                    </Typography>
                                    <Typography variant="p">
                                        {time.space} SPACES AVAILABLE 
                                    </Typography><br/>
                                    <Button variant="contained">Book Appointment</Button>
                                </CardContent>
                            </Card>
                        </Grid>)
                }
            </Grid>


        </Container>
        

    );
};

export default AvailableAppointment;