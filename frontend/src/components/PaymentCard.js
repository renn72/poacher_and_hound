import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import axios from 'axios'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import Loader from '../components/Loader'

export default function PaymentCard(props) {
  const stripe = useStripe()
  const elements = useElements()

  const [loadingPay, setLoadingPay] = useState(false)

  const { orderId, userName } = props

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!stripe || !elements) {
      // wait for strip and elements to load
      return
    }
    setLoadingPay(true)
    console.log('set true')

    const res = await axios.post(`/api/payment/${orderId}`)
    const clientSecret = res.data.client_secret
    console.log('sent to server.... send to stripe')
    console.log(orderId)
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: userName,
        },
        metadata: {
          id: orderId.toString(),
        },
      },
    })
    console.log('sent to stripe')

    if (result.error) {
      console.log(result.error.message)
    } else {
      console.log('payment processing')

      if (result.paymentIntent.status === 'succeeded') {
        console.log('in the bank')
      }
    }
    setLoadingPay(false)
  }

  return (
    <div>
      <Card className='p-3'>
        <CardElement className='p-3' />
        {loadingPay ? (
          <Loader />
        ) : (
          <Button onClick={handleSubmit} className='my-2'>
            Pay
          </Button>
        )}
      </Card>
    </div>
  )
}
