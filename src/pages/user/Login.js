import React from "react";
import '../../assets/css/login.css'
import Register from "./Register";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logimg from '../../assets/img/landingImg.jpg'
import { NavLink } from "react-router-dom";


const Login = () => {

    return(
       <Container className="container">
            <Row className="row">

                {/*Form for Login ............*/}

                <Col className="inputCard">
                <div className="cardContainer">
                    <Card className="logCard">
                        <h4 className="heading">WELCOME TO BITES CHOCOLATE DELIGHTS</h4>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label className="labelTxt">USER ID</Form.Label>
                                <Form.Control className="mb-3" type="email" placeholder="Enter your email id..." />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label className="labelTxt">PASSWORD</Form.Label>
                                <Form.Control className="mb-3" type="password" placeholder="Enter your password..." />
                            </Form.Group>
                            <div className="forgotPassword">
                                <a href="http://" className="remove">Forgot Password?</a>
                            </div>
                            <div className="btnContainer">
                                <Button className="loginBtn mb-3" type="submit">
                                    LOGIN
                                </Button>
                                <NavLink className="signUpBtn mb-3" to='/signUp'>
                                    SIGN UP
                                </NavLink>
                            </div>
                        </Form>
                        
                    </Card>
                </div>
                </Col>

                {/* Right Image .............*/}

                <Col>
                    <Card className="logimg">
                        <Card.Img variant="top" className="imgLogin" src={logimg} />
                    </Card>
                </Col>
            </Row>
       </Container> 
    )
}

export default Login;