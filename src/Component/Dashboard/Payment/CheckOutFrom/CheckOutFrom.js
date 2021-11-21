import { CircularProgress } from '@material-ui/core';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../Context/useAuth';

const CheckOutFrom = ({selectAppointment}) => {
    const {user} = useAuth() 
    const {price, patientName, _id} = selectAppointment
    const stripe = useStripe()
    const elements = useElements()
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [processing, setProcessing] = useState(false)
    const [clientSecret, setClientSecret] = useState('')

    useEffect(() => {
        const url = `http://localhost:3800/create-payment-intent`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({price})
        })
            .then(res => res.json())
            .then(data => {
                setClientSecret(data.clientSecret)
                console.log(data)
            })

    }, [price])
    const handleSubmit = async(event) => {
        event.preventDefault()

        if(!stripe || !elements){
            return;
        }
        const card = elements.getElement(CardElement)

        if(card === null) {
            return;
        }
        setProcessing(true)
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if(error){
            // console.log(error)
            setError(error.message)
            setSuccess('')

        }else{
            setError('')
            console.log(paymentMethod)
        }

        const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: patientName,
                  email: user.email 
                },
              },
            },
          );

          if(intentError){
              setError(intentError.message)
              setSuccess('')
          }else{
              setError('')
              setProcessing(false)
              setSuccess('Your payment successfully!')
              console.log(paymentIntent)
              
              const payment = {
                  amount: paymentIntent.amount,
                  created: paymentIntent.created,
                  last4: paymentMethod.card.last4,
                  transaction: paymentIntent.client_secret.slice("_secret")[0]

              }
              const url = `http://localhost:3800/appointmentorders/${_id}`;
              fetch(url, {
                  method: 'PUT',
                  headers: {
                      'content-type': 'application/json'
                  },
                  body: JSON.stringify(payment)
              })
                .then(res => res.json())
                .then(data => console.log(data))
          }

    }
    return (
        <div>
            <h1>CheckOutFrom</h1>
            <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                style: {
                    base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                        color: '#aab7c4',
                    },
                    },
                    invalid: {
                    color: '#9e2146',
                    },
                },
                }}
            />
            {processing ?<CircularProgress></CircularProgress>:<button type="submit" disabled={!stripe || success}>
                Pay ${price}
            </button>}
            </form>
            {error && <p>{error}</p>}
            {success && <p>{success}</p>}
        </div>
    );
};

export default CheckOutFrom;
