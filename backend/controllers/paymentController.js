import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_KEY)
import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'

// @desc pay order ID
// @route POST /api/payment/:id
// @access Private
const payOrder = asyncHandler(async (req, res) => {
  const orderId = req.params.id
  const order = await Order.findById(orderId)

  if (order) {
    const { totalPrice } = order
    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalPrice,
      currency: 'aud',
      payment_method_types: ['card'],
    })

    console.log(paymentIntent.client_secret)

    res.json({ client_secret: paymentIntent.client_secret })
  } else {
    res.status(404)
    throw new Error('Order not found')
  }
})

export { payOrder }
