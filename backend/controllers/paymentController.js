import Stripe from 'stripe'
const stripe = new Stripe(
  'sk_test_51JTzUiL2YutZ2nAIIrIaaP09yJnyt4yhmTIxNFPII5RBiufBvMQmVnmT0uQN0BNIdc9OsRUrQDvNNrWmbEe8zygB00Rqus7szM'
)
// ('sk_test_51JTzUiL2YutZ2nAIIrIaaP09yJnyt4yhmTIxNFPII5RBiufBvMQmVnmT0uQN0BNIdc9OsRUrQDvNNrWmbEe8zygB00Rqus7szM')
import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'

// @desc pay order ID
// @route POST /api/payment/:id
// @access Private
const payOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id)
  const { totalPrice } = order
  const paymentIntent = await stripe.paymentIntents.create({
    amount: totalPrice,
    currency: 'aud',
    metadata: { integration_check: 'accept_a_payment' },
  })

  res.json({ client_secret: paymentIntent['client_secret'] })
})

export { payOrder }
