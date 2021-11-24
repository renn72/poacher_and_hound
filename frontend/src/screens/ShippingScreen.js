import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { saveShippingAddress } from '../actions/cartActions'

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  const [address, setAddress] = useState(shippingAddress.address || '')
  const [suburb, setSuburb] = useState(shippingAddress.suburb || '')
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode || '')
  const [phone, setPhone] = useState(shippingAddress.phone || '')
  const [alertText, setAlertText] = useState('')
  const [pickup, setPickup] = useState('')

  const dispatch = useDispatch()

  const validPostCodes = ['3171', '3149', '3150', '3168', '3166']

  const submitHandler = (e) => {
    e.preventDefault()

    if (
      validPostCodes.filter((c) => c === postalCode).length === 0 &&
      pickup === ''
    ) {
      console.log('invalid')
      setAlertText(`we only deliver to the following postcodes
      3171, 3149, 3150, 3168, 3166`)
    } else {
      setAlertText('')
      if (pickup === '') {
        dispatch(saveShippingAddress({ address, suburb, postalCode, phone }))
      }
      history.push('/placeorder')
    }
  }

  return (
    <div>
      <FormContainer>
        <CheckoutSteps step1 step2 />
        <h1>Shipping</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className={pickup} controlId='address'>
            <Form.Label>Address</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter address'
              value={address}
              required={pickup === '' ? true : false}
              onChange={(e) => setAddress(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group className={pickup} controlId='suburb'>
            <Form.Label>Suburb</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter suburb'
              value={suburb}
              required={pickup === '' ? true : false}
              onChange={(e) => setSuburb(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group className={pickup} controlId='postalCode'>
            <Form.Label>Postal Code</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter postal code'
              value={postalCode}
              required={pickup === '' ? true : false}
              onChange={(e) => setPostalCode(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group className={pickup} controlId='phone'>
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter phone number'
              value={phone}
              required={pickup === '' ? true : false}
              onChange={(e) => setPhone(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button type='submit' variant='primary'>
            Continue
          </Button>
        </Form>
        <div>{alertText}</div>
        <Form.Group controlId='pickup'>
          <Form.Check
            label='pickup'
            onChange={(e) =>
              pickup === '' ? setPickup('d-none') : setPickup('')
            }
          />
        </Form.Group>
      </FormContainer>
    </div>
  )
}

export default ShippingScreen
