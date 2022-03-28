import Link from 'next/link';

const { Navbar, Container, Nav } = require('react-bootstrap');

const NavCustom = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Link href='/' className='navbar-brand'>
          <Navbar.Brand>JS CA</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls='basic-nav-bar' />
        <Navbar.Collapse id='basic-nav-bar'>
          <Nav className='me-auto'>
            <Link href='/' className='nav-link mr-5' passHref>
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link href='/contact' className='nav-link' passHref>
              <Nav.Link>Contact</Nav.Link>
            </Link>
            <Link href='/login' className='nav-link' passHref>
              <Nav.Link>Login</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavCustom;
