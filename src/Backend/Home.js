import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Gastos from './Gastos';
import Ingresos from './Ingresos';
import Resultados from './Resultados';
import '../Frontend/Home.css';

const Home = () => {
    const [step, setStep] = useState(0);

    const nextStep = () => {
        setStep(prevStep => prevStep + 1);  
    };

    const prevStep = () => {
        setStep(prevStep => prevStep - 1);  
    };

    return (
        <div>

            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#">Simulador Finanzas</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#">Inicio</Nav.Link>
                            <Nav.Link href="#">Acerca de</Nav.Link>
                            <Nav.Link href="#">Contacto</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="container my-4">
                {step === 0 && (
                    <div className="d-flex justify-content-center align-items-center" style={{ height: '60vh' }}>
                        <Button variant="primary" size="lg" onClick={nextStep}>
                            Empezar
                        </Button>
                    </div>
                )}
                {step === 1 && <Gastos nextStep={nextStep} />}
                {step === 2 && <Ingresos nextStep={nextStep} prevStep={prevStep} />}
                {step === 3 && <Resultados prevStep={prevStep} />}
            </div>
        </div>
    );
};

export default Home;
