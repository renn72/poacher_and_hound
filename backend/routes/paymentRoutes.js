import express from 'express'
const router = express.Router()

import { payOrder } from '../controllers/paymentController.js'

import { protect } from '../middleware/authMiddleware.js'

router.route('/:id').post(payOrder)
router.route('/:id').get()
export default router
