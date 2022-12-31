import React, { useState } from 'react';
import { useLocalState } from '../util/useLocalStorage';
import { Button, Container, Form } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import LogoFifaPrincipal from '../images/LogoFifaPrincipal.png'

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [jwt, setJwt] = useLocalState("", "jwt");
  
    function sendLoginRequest() {
        const reqBody = {
            username : username,
            password : password
        };

        fetch("api/auth/login", {
        headers: {
            "Content-type":"application/json",
        },
        method:"post",
        body: JSON.stringify(reqBody)
        })
        .then((response) => {
            if (response.status === 200)
                return Promise.all([response.json(), response.headers]);
            else
                return Promise.reject("Tentativa de login inválida");
        })
        .then(([body, headers]) => {
            setJwt(headers.get("AUTHORIZATION"));
            window.location.href = "dashboard";
        })
        .catch((message) => {
            alert(message);
        });
    }

    return (
        <>
            <Container className="d-flex flex-column flex-md-row mt-5">
                <Col>
                    <h1 className="mb-5">Fifa World Cup 2022</h1>
                    <h2 className="mb-5">Players Management</h2>
                    <img alt="Logo Fifa" src={LogoFifaPrincipal}/>
                </Col>
                <Col>
                    <Row className="justify-content-center">
                        <Col md="8" lg="6">
                            <Form.Group className="mb-3" controlId="username">
                                <Form.Label className='fs-4'>Login</Form.Label>
                                <Form.Control type="text" size="lg" placeholder="Digite o seu login de acesso" value={username} onChange={(e) => setUsername(e.target.value)} />
                            </Form.Group>
                        </Col> 
                    </Row>
                    <Row className="justify-content-center">
                        <Col md="8" lg="6">
                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label className='fs-4'>Password</Form.Label>
                                <Form.Control type="password" size="lg" placeholder="Digite a sua senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </Form.Group>
                        </Col> 
                    </Row>
                    <Row className="justify-content-center">
                        <Col md="8" lg="6" className="mt-2 d-flex flex-column gap-3 flex-md-row justify-content-md-between">
                            <Button 
                                id="submit" 
                                type="button" 
                                size="lg" 
                                variant="primary"
                                onClick={() => sendLoginRequest()}>
                                Login
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Container>
        </>
    );
};

export default Login;