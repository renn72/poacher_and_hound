import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
// import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded product-card overflow-auto h-auto'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>

      <Card.Body className='px-0'>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='h4' className='product-title-height'>
            {product.name}
          </Card.Title>
        </Link>
      </Card.Body>
      <Card.Footer as='h3'>${product.prices[0]}</Card.Footer>
    </Card>
  )
}

export default Product
