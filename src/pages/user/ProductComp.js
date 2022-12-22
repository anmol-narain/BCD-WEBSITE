import React from "react";
import NavBar from "./NavBar";
import '../../assets/css/products.css'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';

import Img1 from '../../assets/img/1.png'
import Img2 from '../../assets/img/2.png'
import Img3 from '../../assets/img/3.png'
import Img4 from '../../assets/img/4.png'
import Img5 from '../../assets/img/5.png'
import Img6 from '../../assets/img/6.png'
import Img7 from '../../assets/img/7.png'


const rows = [
    {
      "name":"Frozen yoghurt",
      "img":Img1
    },
    {
      "name":"Frozen yoghurt",
      "img":Img2
    },
    {
      "name":"Frozen yoghurt",
      "img":Img3
    },
    {
      "name":"Frozen yoghurt",
      "img":Img4
    },
    {
      "name":"Frozen yoghurt",
      "img":Img5
    },
    {
      "name":"Frozen yoghurt",
      "img":Img6
    },
    {
      "name":"Frozen yoghurt",
      "img":Img7
    }
  ];

let ProductComp = () => {
    return(
        <>
            <NavBar/>
            <div className="productContainer">
                <h1>PRODUCTS</h1>
                <Navbar className="searchNavContainer" bg="light" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#">All Products</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Link</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                            type="search"
                            placeholder="Search Product..."
                            className="me-2"
                            aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div className="cardsContainer">
                {rows.map((row)=>(
                    <Card className="card" style={{ width: '18rem' }}>
                        <Card.Img className="cardImg" variant="top" src={row.img} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Add To Cart</Button>
                        </Card.Body>
                    </Card>
                ))}    
                </div>
            </div>
        </>
    )
}

export default ProductComp;