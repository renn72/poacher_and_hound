import React from 'react'
import { Form } from 'react-bootstrap'

export default function DatePicker({ setDeliveryDate }) {
  return (
    <div>
      <Form.Group controlId='dob'>
        <Form.Control
          type='date'
          name='dob'
          placeholder='Delivery Date'
          onChange={(e) => setDeliveryDate(e.target.value)}
        />
      </Form.Group>
    </div>
  )
}
