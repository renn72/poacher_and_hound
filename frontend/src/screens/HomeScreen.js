import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import MenuCategories from '../components/MenuCategories'
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
          <Col sm={2} lg={3} xl={3} className='center px-0'>
            <MenuCategories
              setCategory={setCategory}
              currentCategory={category}
            />
          </Col>
          <Col xs={12} sm={10} lg={9} className='center'>
            <Row>
              {category === 'all'
                ? products.map((product) => (
                    <Col key={product._id} sm={9} md={6} lg={4} xl={3} xxl={3}>
                      <Product product={product} />
                    </Col>
                  ))
                : products
                    .filter((product) => product.category.includes(category))
                    .map((product) => (
                      <Col
                        key={product._id}
                        sm={9}
                        md={6}
                        lg={6}
                        xl={4}
                        xxl={3}
                      >
                        <Product product={product} />
                      </Col>
                    ))}
            </Row>
          </Col>
        </Row>
      )}
    </div>
  )
}

export default HomeScreen
