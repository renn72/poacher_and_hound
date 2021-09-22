import React from 'react'
import { Container, Row, Col, Nav } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <div className='bg-main py-5'>
        <Container>
          <Row>
            <Col className='text-center py-3'>
              Copyright &copy; 2021 Poacher and Hound
            </Col>
          </Row>
          <Nav className='justify-content-end'>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://www.facebook.com/PoacherandHound'
              className='link-dark'
            >
              <i className='fab fa-facebook-square fa-2x'></i>
            </a>
          </Nav>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
