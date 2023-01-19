import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import '../../assets/css/nav.css'
import logoImg from '../../assets/img/logobcd2.png'
import navImg from '../../assets/img/menu.png'

const NavBar = () =>{
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
        setShow(true);
    };

  return (
    <>
        <div>
            <div className='navContainer'>
                <div className='launchBtnContainer'>
                    <Button variant='white' className='launchBtn' onClick={handleShow}>
                        <img className='navImg' src={navImg} />
                    </Button>
                </div>

                <div className='logoContainer'>
                    <img className='logo' src={logoImg}  />
                </div>
            </div>
            
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                <div className='logoContainer2'>
                    <img className='logo2' src={logoImg}  />
                </div>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 items">
                  <Nav.Link className='links' href="/home">Home</Nav.Link>
                  <Nav.Link className='links' href="/gallery">Gallery</Nav.Link>
                  <Nav.Link className='links' href="/blog">Our Blog</Nav.Link>
                  <Nav.Link className='links' href="/products">Products</Nav.Link>
                  <Nav.Link className='links' href="/contactUs">Contact Us</Nav.Link>
                  <Nav.Link className='links' href="/testimonials">Testimonials</Nav.Link>
                  
                </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    </>
  );
}

export default NavBar;