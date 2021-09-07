import React from 'react'
import { Row, Navbar, Col, Nav, Button } from 'react-bootstrap'

export default function MenuCategories(props) {
  const categories = ['all', 'breakfast', 'morning/afternoon tea', 'lunch']
  const { currentCategory, setCategory } = props

  return (
    <aside>
      <Navbar collapseOnSelect expand='lg'>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Col>
            {categories.map((category) => (
              <Row key={category}>
                <Nav.Item>
                  <Button
                    onClick={() => setCategory(category)}
                    size='lg'
                    className='w-75 fs-5 py-4 my-1 rounded'
                    variant={
                      currentCategory === category
                        ? 'outline-dark'
                        : 'secondary'
                    }
                  >
                    {category}
                  </Button>
                </Nav.Item>
              </Row>
            ))}
          </Col>
        </Navbar.Collapse>
      </Navbar>
    </aside>
  )
}
