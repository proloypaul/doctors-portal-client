import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckOutFrom from './CheckOutFrom/CheckOutFrom';


const stripePromise = loadStripe('pk_test_51Jw3gdEH4cjCOsqlyXKLwPzNqoAWEiPhxmwqJMdNB1vI4hspq4lRJZNXY090C04WLLaYKOtv011BQ5tytrjgO1Hi00XxqVl4Mq')
const Payment = () => {
    const {appointmentId} = useParams()
    const [selectAppointment, setSelectAppointment] = useState({})

    useEffect(() => {
        const url = `http://localhost:3800/appointmentorders/${appointmentId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setSelectAppointment(data)
                // console.log(data)
            })
    }, [appointmentId])
    return (
        <div>
            <h1>Payment comming tommoro..... payment id {appointmentId}</h1>
            <h1>Price: {selectAppointment.price}</h1>
            {selectAppointment?.price && <Elements stripe={stripePromise}>
                <CheckOutFrom selectAppointment={selectAppointment}/>
            </Elements>}
        </div>
    );
};

export default Payment;