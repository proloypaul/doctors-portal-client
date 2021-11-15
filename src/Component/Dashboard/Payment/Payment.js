import React from 'react';
import { useParams } from 'react-router';

const Payment = () => {
    const {appointmentId} = useParams()
    return (
        <div>
            <h1>Payment comming tommoro..... payment id {appointmentId}</h1>
        </div>
    );
};

export default Payment;