import express from 'express'
const router = express.Router()
import {
  addOrderItems,
  getOrderById,
  updateOrderToDelivered,
  updateOrderToPaid,
  getMyOrders,
  getOrders,
  emailOrder,
} from '../controllers/orderController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders)
router.route('/myorders').get(protect, getMyOrders)
router.route('/:id').get(protect, getOrderById)
router.route('/:id/email').put(protect, admin, emailOrder)
router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered)
router.route('/:id/pay').put(protect, admin, updateOrderToPaid)

export default router
