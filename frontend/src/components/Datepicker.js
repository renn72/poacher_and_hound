import React from 'react'
import { Form } from 'react-bootstrap'

export default function Datepicker({ deliveryDate, changeDateHandler }) {
  return (
    <div>
      <Form.Group controlId='dob'>
        <Form.Control
          type='date'
          name='dob'
          placeholder='Delivery Date'
          value={deliveryDate}
          onChange={(e) => changeDateHandler(e.target.value)}
        />
      </Form.Group>
    </div>
  )
}
