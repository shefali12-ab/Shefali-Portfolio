import React from 'react';
import { Navbar, Container,Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

function Header() {
    return (
        
        <Navbar bg="dark" collapseOnSelect expand="lg" variant="dark" className="main">
        <Container>
        <Navbar.Brand href="#">
                    
           <h3>Sk.</h3>
                    
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link className="navLink" href="#home">Home</Nav.Link>
                    <Nav.Link className="navLink" href="#home">About</Nav.Link>
                    <Nav.Link className="navLink" href="#home">Projects</Nav.Link>
                    <Nav.Link className="navLink" href="#home">Blog</Nav.Link>
                    <Nav.Link className="navLink" href="#features">Resume</Nav.Link>
                   
                </Nav>
                
      </Container>
            </Navbar>
     
     )
 }

export default Header;