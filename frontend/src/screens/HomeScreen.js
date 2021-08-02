import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import MenuCategories from '../components/MenuCategories'
// import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import { listProducts } from '../actions/productActions'

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()
  const [category, setCategory] = useState('all')

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <div className='py-4'>
      <Meta />

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          <Col sm={2} lg={3} className='center'>
            <MenuCategories
              setCategory={setCategory}
              currentCategory={category}
            />
          </Col>
          <Col xs={12} sm={10} lg={8} className='center'>
            <Row>
              {category === 'all'
                ? products.map((product) => (
                    <Col key={product._id} sm={9} md={6} lg={6} xl={4}>
                      <Product product={product} />
                    </Col>
                  ))
                : products
                    .filter((product) => product.category === category)
                    .map((product) => (
                      <Col key={product._id} sm={9} md={6} lg={6} xl={4}>
                        <Product product={product} />
                      </Col>
                    ))}
            </Row>
            <Paginate
              pages={pages}
              page={page}
              keyword={keyword ? keyword : ''}
            />
          </Col>
          <Col className='d-none d-lg-block center'>cart</Col>
        </Row>
      )}
    </div>
  )
}

export default HomeScreen
