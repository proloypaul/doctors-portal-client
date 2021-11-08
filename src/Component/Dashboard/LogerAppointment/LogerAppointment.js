import React, { useEffect, useState } from 'react';
import useAuth from '../../../Context/useAuth';

const LogerAppointment = () => {
    const {user} = useAuth()
    const [logerOrder, setLogerOrder] = useState([])

    useEffect(() => {
        const url = `http://localhost:3800/appointmentorders?email=${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setLogerOrder(data)
            })
    }, [])
    return (
        <div>
            <h1>Appointment {logerOrder.length}</h1>
        </div>
    );
};

export default LogerAppointment;