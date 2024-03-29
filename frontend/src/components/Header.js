import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown, Image } from 'react-bootstrap'
import { logout } from '../actions/userActions'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart
  const cartQty = cartItems.reduce((acc, idx) => acc + idx.qty, 0)

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header>
      <Navbar collapseOnSelect bg='dark' expand='xl'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <Image
                src='/images/P+H.LOGO_BOX.png'
                width='120'
                className=''
                alt='P + H logo'
              />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link
                href='https://www.mryum.com/poacher/dine-in'
                target='_blank'
              >
                Cafe Menu
              </Nav.Link>
              <LinkContainer to='/catering'>
                <Nav.Link>Catering</Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>

          <LinkContainer to='/cart'>
            <Nav.Link>
              <i className='fas fa-shopping-cart'></i> Cart ({cartQty})
            </Nav.Link>
          </LinkContainer>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
