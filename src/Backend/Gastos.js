import React, { useContext } from 'react';
import { FinanzasContext } from './Variables';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Gastos = ({ nextStep }) => {
    const { vivienda, setVivienda, alimentacion, setAlimentacion, transporte, setTransporte, entretenimiento, setEntretenimiento, gastosFijos, setGastosFijos } = useContext(FinanzasContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        nextStep(); 
    };

    return (
        <Form onSubmit={handleSubmit}>
            <h2 className="text-light">Gastos</h2>
            <Form.Group className="mb-3">
                <Form.Label className="text-light">Vivienda</Form.Label>
                <Form.Control 
                    type="number" 
                    value={vivienda} 
                    onChange={(e) => setVivienda(e.target.value)} 
                    placeholder="Gastos de vivienda"
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className="text-light">Alimentación</Form.Label>
                <Form.Control 
                    type="number" 
                    value={alimentacion} 
                    onChange={(e) => setAlimentacion(e.target.value)} 
                    placeholder="Gastos de alimentación"
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className="text-light">Transporte</Form.Label>
                <Form.Control 
                    type="number" 
                    value={transporte} 
                    onChange={(e) => setTransporte(e.target.value)} 
                    placeholder="Gastos de transporte"
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className="text-light">Entretenimiento</Form.Label>
                <Form.Control 
                    type="number" 
                    value={entretenimiento} 
                    onChange={(e) => setEntretenimiento(e.target.value)} 
                    placeholder="Gastos de entretenimiento"
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className="text-light">Gastos Fijos</Form.Label>
                <Form.Control 
                    type="number" 
                    value={gastosFijos} 
                    onChange={(e) => setGastosFijos(e.target.value)} 
                    placeholder="Otros gastos fijos"
                />
            </Form.Group>
            <Button variant="primary" type="submit">Siguiente</Button>
            
        </Form>
    );
};

export default Gastos;
