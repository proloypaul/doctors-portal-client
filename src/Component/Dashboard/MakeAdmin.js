import { Alert } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../Context/useAuth';

const MakeAdmin = () => {
    const [adminEmail, setAdminEmail] = useState('')
    const [success, setSuccess] = useState(false)
    const {token} = useAuth()
    const handleAdminEmail = event => {
        setAdminEmail(event.target.value)
    }
    const setAdmintodb = event => {
        const admin = {email: adminEmail}
        // console.log(admin)
        const url = `http://localhost:3800/users/admin`
        fetch(url, {
            method: 'put',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(admin)
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount){
                    setSuccess(true)
                    // console.log(data)
                }
                
            })
        event.preventDefault()
        // alert("okay")
    }
    return (
        <div>
            <h1>Make Admin section</h1>
            <form onSubmit={setAdmintodb}> 
                <input onBlur={handleAdminEmail} type="email" placeholder="Enter email"/> 
                <button type="submit">Submit</button>
            </form>
            {success && <Alert severity="success">Admin create successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;