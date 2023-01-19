import React, { useState } from "react";
import NavBar from "./NavBar";
import '../../assets/css/products.css'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ReactWhatsapp from 'react-whatsapp';
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
      "id":1,
      "name":"Heart Chocolate Red",
      "img":Img1
    },
    {
      "id":2,
      "name":"Heart Chocolate Black",
      "img":Img2
    },
    {
      "id":3,
      "name":"Choco Bar Heart Pack",
      "img":Img3
    },
    {
      "id":4,
      "name":"Assorted Chocolate Pack",
      "img":Img4
    },
    {
      "id":5,
      "name":"Dark Chocolate BAR",
      "img":Img5
    },
    {
      "id":6,
      "name":"Mini Chocolate Hamper",
      "img":Img6
    },
    {
      "id":7,
      "name":"Milk Chocolate Hamper",
      "img":Img7
    }
  ];

let ProductComp = () => {
  const [searchTerm,setSearchTerm] = useState("");

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
                              {/* <Nav.Link href="#action1">Home</Nav.Link>
                              <Nav.Link href="#action2">Link</Nav.Link> */}
                          </Nav>
                          <Form className="d-flex">
                              <Form.Control
                              type="search"
                              placeholder="Search Product..."
                              className="me-2"
                              aria-label="Search"
                              onChange={(e)=>{
                                setSearchTerm(e.target.value);
                              }}
                              />
                              <Button variant="outline-success">Search</Button>
                          </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div className="cardsContainer">
                {
                  rows
                    .filter((row)=>{
                      if(searchTerm==""){
                        return row;
                      }
                      else if(row.name.toLowerCase().includes(searchTerm.toLowerCase())){
                        return row;
                      }
                    })
                    .map((row)=>(
                        <Card key={row.id} className="card" style={{ width: '18rem' }}>
                            <Card.Img className="cardImg" variant="top" src={row.img} />
                            <Card.Body style={{textAlign: "center"}}>
                                <Card.Title>{row.name}</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <ReactWhatsapp number="+91 9212104999" className="whatsAppBtn" message={`I am interested in buying ${row.name}`}>WhatsApp Enquiry</ReactWhatsapp>
                            </Card.Body>
                        </Card>
                    ))
                }    
                </div>
            </div>
        </>
    )
}

export default ProductComp;