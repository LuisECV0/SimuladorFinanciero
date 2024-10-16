import React, { useContext } from 'react';
import { FinanzasContext } from './Variables';
import '../Frontend/Gastos.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Gastos = () => {
    const { vivienda, setVivienda, alimentacion, setAlimentacion, transporte, setTransporte, entretenimiento, setEntretenimiento, gastosFijos, setGastosFijos } = useContext(FinanzasContext);

    return (
        <Form>
            <h2>Gastos</h2>
            <Form.Label>
                Vivienda:
                <Form.Control
                    type="number"
                    value={vivienda}
                    onChange={(e) => setVivienda(parseFloat(e.target.value))}
                />
            </Form.Label>

            <Form.Label>
                Alimentación:
                <Form.Control
                    type="number"
                    value={alimentacion}
                    onChange={(e) => setAlimentacion(parseFloat(e.target.value))}
                />
            </Form.Label>

            <Form.Label>
                Transporte:
                <Form.Control
                    type="number"
                    value={transporte}
                    onChange={(e) => setTransporte(parseFloat(e.target.value))}
                />
            </Form.Label>

            <Form.Label>
                Entretenimiento:
                <Form.Control
                    type="number"
                    value={entretenimiento}
                    onChange={(e) => setEntretenimiento(parseFloat(e.target.value))}
                />
            </Form.Label>

            <Form.Label>
                Gastos Fijos:
                <Form.Control
                    type="number"
                    value={gastosFijos}
                    onChange={(e) => setGastosFijos(parseFloat(e.target.value))}
                />
            </Form.Label>

        </Form>
    );
};

export default Gastos;
