import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Meta from '../components/Meta'
import { listProductDetails } from '../actions/productActions'
import { addToCart } from '../actions/cartActions'

const ProductScreen = ({ history, match }) => {
  const [qty, setQty] = useState(1)
  const [size, setSize] = useState(0)

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)

  const { loading, error, product } = productDetails

  useEffect(() => {
    if (!product._id || product._id !== match.params.id) {
      dispatch(listProductDetails(match.params.id))
    }
  }, [dispatch, match, product._id])

  const updateQty = (value) => {
    if (value > 999 || value < 0) {
      return
    }
    setQty(Math.floor(value))
  }

  const addToCartHandler = () => {
    // history.push('/catering')
    dispatch(addToCart(product._id, qty, size))
    // history.push(`/cart/${match.params.id}?qty=${qty}?size=${size}`)
  }

  return (
    <div>
      <Link className='btn btn-light my-3' to='/catering'>
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : product._id ? (
        <div>
          <Meta title={product.name} />
          <Row>
            <Col md={4}>
              <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={4}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  {product.unitsPerSize[size] === 1 ? (
                    <h3>{product.name}</h3>
                  ) : (
                    <h3>
                      {product.name} ({product.unitsPerSize[size]})
                    </h3>
                  )}
                </ListGroup.Item>

                <ListGroup.Item>{product.description}</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={4}>
              <Card>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col className='center'>
                        ${(product.prices[size] * qty).toFixed(2)}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Size:</Col>
                      <Col className='center'>
                        {product.sizes.length > 1 ? (
                          <Form.Control
                            size='sm'
                            as='select'
                            value={size}
                            onChange={(e) => setSize(+e.target.value)}
                          >
                            {product.sizes.map((size, i) => (
                              <option key={i} value={i}>
                                {size}
                              </option>
                            ))}
                          </Form.Control>
                        ) : (
                          <div>{product.sizes[0]}</div>
                        )}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col className='center'>
                        {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  {product.countInStock > 0 && (
                    <ListGroup.Item>
                      <Row className='align-items-center justify-content-around'>
                        <Col className=''>Qty:</Col>
                        <Col>
                          <Row className='align-items-center justify-content-center'>
                            <Col
                              className='center p-0 fs-1 pe-pointer'
                              onClick={() => updateQty(+qty + 1)}
                            >
                              +
                            </Col>
                            <Col fluid className='p-0'>
                              <div className='product-count-container mx-auto'>
                                <Form.Control
                                  className='border product-counter-input center'
                                  type='text'
                                  value={qty}
                                  onChange={(e) => updateQty(e.target.value)}
                                ></Form.Control>
                              </div>
                            </Col>
                            <Col
                              className='center p-0 fs-1 pe-pointer'
                              onClick={() => updateQty(+qty - 1)}
                            >
                              -
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}

                  <Button
                    onClick={addToCartHandler}
                    className='btn-block'
                    type='button'
                    disabled={product.countInStock === 0}
                  >
                    Add To Cart
                  </Button>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default ProductScreen
