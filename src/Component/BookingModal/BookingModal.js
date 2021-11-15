import React, { useState } from 'react';
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

const BookingModal = ({handleClose, open, sendBookingDtl, date, setBookingSuccess}) => {
    const {user} = useAuth()  
    const {name, time, price} = sendBookingDtl
    const initialData = {patientName: user.displayName, email: user.email, phone: '' }
    const [appointmentData, setAppointmentData] = useState(initialData)
    
    const collectData = event => {
        const field = event.target.name
        const value = event.target.value 
        const allData = {...appointmentData}
        allData[field] = value;
        setAppointmentData(allData)
    } 

    const handleAppointmentData = event => {
        // alert("wow")
        const allAppointmentData = {
            ...appointmentData,
            time,
            price,
            serviceName: name,
            date: new Date(date).toLocaleDateString()      //date: date.toLocaleDateString()
        }
        console.log(allAppointmentData)
        const url = `http://localhost:3800/appointmentorders`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allAppointmentData)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId > 0){
                    setBookingSuccess(true)
                    handleClose()
                }
                handleClose()
            })
     
        
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
                    {name}
                </Typography>
                <FormGroup>
                    
                    <TextField
                    disabled
                    id="outlined-name"
                    value={time}
                    sx={{width:"100%"}} 
                    onBlur={collectData} 
                    />
                    <TextField
                        id="outlined-password-input"
                        defaultValue={user.displayName}
                        type="text"
                        name="patientName"
                        autoComplete="current-password"
                        style={{width:'100%', margin:"10px 0"}}
                        onBlur={collectData}
                    />
                    <TextField
                        id="outlined-password-input"
                        defaultValue={user.email}
                        type="email"
                        name="email"
                        autoComplete="current-password"
                        style={{width:'100%'}}
                        onBlur={collectData}
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Phone"
                        type="number"
                        name="phone"
                        autoComplete="current-password"
                        style={{width:'100%', margin:"10px 0"}}
                        onBlur={collectData}
                    />
                    <TextField
                        disabled
                        id="outlined-name"
                        value={date}
                        sx={{width:"100%"}}
                        onBlur={collectData}  
                    />
                    <Typography sx={{ mt: 2, textAlign:"center" }}>
                        <Button variant="contained" onClick={handleAppointmentData}>Submit</Button>
                    </Typography>
                </FormGroup>
            </Box>
        </Modal>
    );
};

export default BookingModal;