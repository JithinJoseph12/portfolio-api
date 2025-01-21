import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <>
         <Navbar className='position-fixed w-100' style={{zIndex:1}}  bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">JITHIN.</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="#tools">Tools</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>


          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header