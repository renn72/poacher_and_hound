import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

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
            <LinkContainer to='/'>
              <Nav.Link>
                <i className='fab fa-facebook-square fa-2x'></i>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/'>
              <Nav.Link>
                <i className='fab fa-twitter-square fa-2x'></i>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/'>
              <Nav.Link>
                <i className='fab fa-tiktok fa-2x'></i>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
