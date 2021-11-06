import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button, TextField, Typography } from '@mui/material';
import Input from '@mui/material/Input';
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

const BookingModal = ({handleClose, open, sendBookingDtl}) => {
    const {user} = useAuth()
    const ariaLabel = { 'aria-label': 'description' };
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
            <TextField
                id="outlined-name"
               value={sendBookingDtl.time}
               sx={{width:"80%"}}
                
            />
            <Typography id="modal-modal-title" variant="h6" component="div">
                <Input defaultValue={user.displayName} inputProps={ariaLabel} sx={{width:"80%"}} />
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="div">
                <Input defaultValue={user.email} inputProps={ariaLabel} sx={{width:"80%"}} />
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="div">
                <Input placeholder="Phone" inputProps={ariaLabel} sx={{width:"80%"}}/>
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="div">
                <Input placeholder="date" inputProps={ariaLabel} sx={{width:"80%"}}/>
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2, textAlign:"center" }}>
               <Button variant="contained">Submit</Button>
            </Typography>
            </Box>
        </Modal>
    );
};

export default BookingModal;