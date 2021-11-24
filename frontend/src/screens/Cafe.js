import React from 'react'
import { Row, Col, Image, Container, Button } from 'react-bootstrap'
// import { Image } from 'react-bootstrap';

const Cafe = () => {
  return (
    <div className='cafe-container'>
      <div id='hero-container'>
        <img alt='alt' id='poacher-package' src='images/poacher-package.jpg' />
        <div id='poacher-header-container'>
          <img alt='alt' id='poacher-header' src='images/poacher-header2.png' />
          <div className='my-4'>
            <p className='light center'>
              Providing great coffee, breakfast, lunch and catering to Mount
              Waverley and surrounds.
            </p>
          </div>
        </div>
      </div>
      <div className='cafe-info-box py-5'>
        <div className='opening-hours'>
          Breakfast and Lunch <br />
          Monday to Friday | 6:00am to 3:00pm <br />
          Saturday, Sunday | closed <br />
          Public Holiday's | closed <br />
        </div>
      </div>
      <div className='cafe-cards-container py-5 my-4'>
        <Container className='cafe-cards '>
          <Row className='center-me'>
            <Col xs={8} md={4} className='center'>
              <Image
                src='images/card-1.jpg'
                thumbnail
                className='cafe-card-img my-2'
              />
            </Col>
            <Col xs={8} md={4} className='center'>
              <Image
                src='images/card-2.jpg'
                thumbnail
                className='cafe-card-img my-2'
              />
            </Col>
            <Col xs={8} md={4} className='center'>
              <Image
                src='images/card-3.jpg'
                thumbnail
                className='cafe-card-img my-2'
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Cafe
