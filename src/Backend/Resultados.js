import React, { useContext } from 'react';
import { FinanzasContext } from './Variables';
import Button from 'react-bootstrap/Button';

const Resultados = ({ prevStep }) => {
    const { totalIngresos, totalGastos, balance, porcentajeAhorro, porcentajeEndeudamiento } = useContext(FinanzasContext);

    return (
        <div className="text-light">
            <h2>Resultados</h2>
            <p>Total de Ingresos: {totalIngresos}</p>
            <p>Total de Gastos: {totalGastos}</p>
            <p>Balance: {balance}</p>
            <p>Porcentaje de Ahorro: {porcentajeAhorro}%</p>
            <p>Porcentaje de Endeudamiento: {porcentajeEndeudamiento}%</p>
            <Button variant="secondary" onClick={prevStep}>Atrás</Button>
        </div>
    );
};

export default Resultados;
