import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import LogoFifaPrincipal from '../images/LogoFifaPrincipal.png'

const Menu = () => {
    return (
        <>
            <Container className="mt-5">
                <Row className="justify-content-center">
                    <Col md="8" lg="6">
                        <h1>Fifa World Cup 2022</h1>
                    </Col> 
                </Row>
                <Row className="justify-content-center">
                    <Col md="8" lg="6">
                        <h2>Players Management</h2>
                    </Col> 
                </Row>
                <Row className="justify-content-center">
                    <Col md="8" lg="6">
                        <img src={LogoFifaPrincipal}/>
                    </Col> 
                </Row>
            </Container>
        </>
    );
};

export default Menu;