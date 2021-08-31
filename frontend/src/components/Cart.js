import React, { useEffect } from 'react'
import {
  Container,
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import { Link } from 'react-router-dom'

import { addToCart, removeFromCart } from '../actions/cartActions'

export default function Cart() {
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart
  const dispatch = useDispatch()

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  // const checkoutHandler = () => {
  //   history.push('/login?redirect=shipping')
  // }

  return (
    <div>
      {cartItems.length === 0 ? (
        <>empty</>
      ) : (
        <ListGroup variant='flush' className='py-2'>
          {cartItems.map((item) => (
            <ListGroup.Item key={item.product}>
              <Row className='align-items-center'>
                <Col md={4}>
                  <Link to={`/product/${item.product}`}>{item.name}</Link>
                </Col>
                <Col md={3}>{item.price * item.qty}</Col>
                <Col md={2}>
                  <Form.Control
                    className='fs-6'
                    as='select'
                    size='sm'
                    value={item.qty}
                    onChange={(e) =>
                      dispatch(
                        addToCart(
                          item.product,
                          Number(e.target.value),
                          item.sizeId
                        )
                      )
                    }
                  >
                    {[...Array(item.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={2}>
                  {item.sizes.length > 1 ? (
                    <Form.Control
                      className='fs-6'
                      size='sm'
                      as='select'
                      value={item.sizeId}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, item.qty, e.target.value)
                        )
                      }
                    >
                      {item.sizes.map((size, i) => (
                        <option key={i} value={i}>
                          {size}
                        </option>
                      ))}
                    </Form.Control>
                  ) : (
                    <div>{item.sizes[0]}</div>
                  )}
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </div>
  )
}
