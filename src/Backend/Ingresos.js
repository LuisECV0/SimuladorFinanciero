import React, { useContext } from 'react';
import { FinanzasContext } from './Variables';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Ingresos = ({ nextStep, prevStep }) => {
    const { salario, setSalario, otrosIngresos, setOtrosIngresos } = useContext(FinanzasContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        nextStep();
    };

    return (
        <Form onSubmit={handleSubmit}>
            <h2 className="text-light">Ingresos</h2>
            <Form.Group className="mb-3">
                <Form.Label className="text-light">Salario</Form.Label>
                <Form.Control 
                    type="number" 
                    value={salario} 
                    onChange={(e) => setSalario(e.target.value)} 
                    placeholder="Ingrese su salario"
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className="text-light">Otros Ingresos</Form.Label>
                <Form.Control 
                    type="number" 
                    value={otrosIngresos} 
                    onChange={(e) => setOtrosIngresos(e.target.value)} 
                    placeholder="Ingrese otros ingresos"
                />
            </Form.Group>
            <Button variant="secondary" onClick={prevStep} className="me-2">Atrás</Button>
            <Button variant="primary" type="submit">Siguiente</Button>
        </Form>
    );
};

export default Ingresos;
