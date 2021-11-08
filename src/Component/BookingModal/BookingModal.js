import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button, TextField, Typography, FormGroup  } from '@mui/material';
import useAuth from '../../Context/useAuth';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '0',
    boxShadow: 24,
    borderRadius: '10px',
    p: 4,
  };

const BookingModal = ({handleClose, open, sendBookingDtl, date}) => {
    const {user} = useAuth()  


    const handleAppointmentData = event => {
        event.preventDefault();
        alert("wow")
        handleClose()
        
    }
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box 
            sx={style}
            component="form"
            noValidate
            autoComplete="off"
            >
                <Typography variant="h6" component="div" sx={{textAlign: 'center'}}>
                    {sendBookingDtl.name}
                </Typography>
                <form onSubmit={handleAppointmentData}>
                    
                    <TextField
                    disabled
                    id="outlined-name"
                    value={sendBookingDtl.time}
                    sx={{width:"100%"}}  
                    />
                    <TextField
                        id="outlined-password-input"
                        defaultValue={user.displayName}
                        type="text"
                        name="name"
                        autoComplete="current-password"
                        style={{width:'100%', margin:"10px 0"}}
                    />
                    <TextField
                        id="outlined-password-input"
                        defaultValue={user.email}
                        type="email"
                        name="password"
                        autoComplete="current-password"
                        style={{width:'100%'}}
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Phone"
                        type="number"
                        name="phone"
                        autoComplete="current-password"
                        style={{width:'100%', margin:"10px 0"}}
                    />
                    <TextField
                        disabled
                        id="outlined-name"
                    value={date}
                    sx={{width:"100%"}}  
                    />
                    <Button variant="contained" type="submit">Submit</Button>
                    <Typography sx={{ mt: 2, textAlign:"center" }}>
                        
                    </Typography>
                </form>
            </Box>
        </Modal>
    );
};

export default BookingModal;