import Stripe from 'stripe'
import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'
import dotenv from 'dotenv'
dotenv.config()

const stripe = new Stripe(process.env.STRIPE_KEY)

// @desc pay order ID
// @route POST /api/payment/:id
// @access Private
const payOrder = asyncHandler(async (req, res) => {
  const orderId = req.params.id
  const order = await Order.findById(orderId)

  if (order) {
    const { totalPrice } = order
    const paymentIntent = await stripe.paymentIntents.create({
      amount: +totalPrice * 100,
      currency: 'aud',
      payment_method_types: ['card'],
    })

    console.log(paymentIntent.amount)

    res.json({ client_secret: paymentIntent.client_secret })
  } else {
    res.status(404)
    throw new Error('Order not found')
  }
})

export { payOrder }
