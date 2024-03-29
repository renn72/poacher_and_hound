import React, { useEffect, useState } from 'react'
import {createPortal} from 'react-dom'
import { Link } from 'react-router-dom'
import { Button, Row, Col, ListGroup, Image, Card, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import CheckoutSteps from '../components/CheckoutSteps'
import { createOrder } from '../actions/orderActions'
import { ORDER_CREATE_RESET } from '../constants/orderConstants'
import { USER_DETAILS_RESET } from '../constants/userConstants'
import 'react-datepicker/src/stylesheets/datepicker.scss'
import DatePicker from 'react-datepicker'

const timesArray = [
  '0700',
  '0730',
  '0800',
  '0830',
  '0900',
  '0930',
  '1000',
  '1030',
  '1100',
  '1130',
  '1200',
  '1230',
  '1300',
  '1330',
  '1400',
  '1430',
  '1500',
]

const PlaceOrderScreen = ({ history }) => {
  const dispatch = useDispatch()
  const [deliveryTime, setDeliveryTime] = useState('')
  const [deliveryDate, setDeliveryDate] = useState('')
  const [deliveryDetails, setDeliveryDetails] = useState('')

  const cart = useSelector((state) => state.cart)
  const user = useSelector((state) => state.userLogin.userInfo)

// () => {
//     const d = new Date()
//     return (
//       `${d.getUTCFullYear()}` +
//       '-' +
//       `${d.getUTCMonth() + 1}` +
//       '-' +
//       `${d.getUTCDate()}`
//     )
//   }

  // if (!cart.shippingAddress.address) {
  //   history.push('/shipping')
  // } else if (!cart.paymentMethod) {
  //   // history.push('/payment');
  // }
  //   Calculate prices
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
  }

  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  )
  cart.shippingPrice = addDecimals(cart.shippingAddress.isPickup ? 0 : 10)
  cart.totalPrice = (
    Number(cart.itemsPrice) + Number(cart.shippingPrice)
  ).toFixed(2)

  const orderCreate = useSelector((state) => state.orderCreate)
  const { order, success, error } = orderCreate

  useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`)
      dispatch({ type: USER_DETAILS_RESET })
      dispatch({ type: ORDER_CREATE_RESET })
    }
    // eslint-disable-next-line
  }, [history, success])

  const changeDateHandler = (d) => {
    console.log(d)
    setDeliveryDate(d)
  }

  const isWeekday = (date) => {
    const day = date.getDay()
    return day !== 0 && day !== 6;
  }

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        totalPrice: cart.totalPrice,
        user: user,
        deliveryTime: deliveryTime,
        deliveryDate: deliveryDate,
        deliveryDetails: deliveryDetails === '' ? 'Nil' : deliveryDetails,
      })
    )
  }

  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4 />
      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            {/* <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Address:</strong>
                {cart.shippingAddress.address}, {cart.shippingAddress.suburb}{' '}
                {cart.shippingAddress.postalCode}, {cart.shippingAddress.phone}
              </p>
            </ListGroup.Item> */}

            <ListGroup.Item>
              <h2>Order</h2>
              <hr />
              {cart.cartItems.length === 0 ? (
                <Message>Your cart is empty</Message>
              ) : (
                <ListGroup variant='flush'>
                  {cart.cartItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} x ${item.price} = $
                          {(item.qty * item.price).toFixed(2)}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <h3>Delivery Info</h3>
                </Row>
                {cart.shippingAddress.isPickup ? (
                  <div>
                    <Row>
                      <Col className='h5'>Pickup</Col>
                    </Row>
                    <Row>
                      <Col xs={4}>Phone</Col>
                      <Col>{cart.shippingAddress.phone}</Col>
                    </Row>
                  </div>
                ) : (
                  <div>
                    <Row>
                      <Col xs={4}>Address</Col>
                      <Col>{cart.shippingAddress.address}</Col>
                    </Row>
                    <Row>
                      <Col xs={4}>Suburb</Col>
                      <Col>{cart.shippingAddress.suburb}</Col>
                    </Row>
                    <Row>
                      <Col xs={4}>PostCode</Col>
                      <Col>{cart.shippingAddress.postalCode}</Col>
                    </Row>
                    <Row>
                      <Col xs={4}>Phone</Col>
                      <Col>{cart.shippingAddress.phone}</Col>
                    </Row>
                  </div>
                )}
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Form>
                    <Form.Control
                      as='select'
                      onChange={(e) => setDeliveryTime(e.target.value)}
                    >
                      <option>Select a Time</option>
                      {timesArray.map((t) => (
                        <option value={t} key={t}>
                          {t}
                        </option>
                      ))}
                    </Form.Control>
                  </Form>
                </Row>
                <Row className='position-relative'>
                  <Col className='d-inline'>
                  <DatePicker
                    selected={deliveryDate}
                    onChange={(d) => changeDateHandler(d)}
                    popperContainer={({children}) => createPortal(children,document.body)}
                    isClearable
                    minDate={new Date()}
                    filterDate={isWeekday}
                    excludeDateIntervals={[{start: new Date('12/28/21'), end: new Date('1/10/22')}]}
                    />
                  </Col>
                </Row>
                <Row className='my-1'>
                  <Form>
                    <Form.Control
                      as='textarea'
                      placeholder='extra information'
                      rows={3}
                      onChange={(e) => setDeliveryDetails(e.target.value)}
                    />
                  </Form>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>${cart.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>${cart.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>${cart.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                {error && <Message variant='danger'>{error}</Message>}
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type='button'
                  className='btn-block'
                  disabled={
                    cart.cartItems === 0 ||
                    deliveryTime === '' ||
                    deliveryDate === ''
                  }
                  onClick={placeOrderHandler}
                >
                  Place Order
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default PlaceOrderScreen
