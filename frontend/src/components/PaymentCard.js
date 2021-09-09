import React from 'react'
import { Card, Button } from 'react-bootstrap'
import axios from 'axios'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'

export default function PaymentCard(props) {
  const stripe = useStripe()
  const elements = useElements()

  const { orderId, payOrder, setSdkReady } = props

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!stripe || !elements) {
      // wait for strip and elements to load
      return
    }

    const res = await axios.post(`/api/payment/${orderId}`)
    const clientSecret = res.data.client_secret

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: 'test',
        },
      },
    })

    if (result.error) {
      console.log(result.error.message)
    } else {
      console.log('payment processing')

      if (result.paymentIntent.status === 'succeeded') {
        console.log('in the bank')
      }
    }
  }

  return (
    <div>
      <Card className='p-3'>
        <CardElement className='p-3' />
        <Button onClick={handleSubmit} className='my-2'>
          Pay
        </Button>
      </Card>
    </div>
  )
}
