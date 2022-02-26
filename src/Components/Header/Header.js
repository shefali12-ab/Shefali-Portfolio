import React from 'react';
import { Navbar, Container,Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image1 from "../Header/home (1).png";
import Image2 from "../Header/account.png";
import Image3 from "../Header/graduation-cap.png";
import '../index.css';

function Header() {
    return (
        
        <Navbar bg="dark" collapseOnSelect expand="lg" variant="dark" className="main">
        <Container>
        <Navbar.Brand href="#">
                    
           <h3>Sk.</h3>
                    
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <img  src={Image1}
                    height="27px"
                    ></img>
                    <Nav.Link className="navLink" href="#home">Home</Nav.Link>
                    <img  src={Image2}
                    height="31px"
                    ></img>
                    
                    <Nav.Link className="navLink" href="#home">About</Nav.Link>
                    <img  src={Image3}
                    height="31px"
                    ></img>
                    
                    <Nav.Link className="navLink" href="#home">Education</Nav.Link>
                    
                   
                </Nav>
                
      </Container>
            </Navbar>
     
     )
 }

export default Header;