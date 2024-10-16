import React from 'react';
import { useContext } from 'react';
import { FinanzasContext } from './Variables'; // Asegúrate de que la ruta sea correcta

const Resultados = () => {
    const { totalIngresos, totalGastos, balance } = useContext(FinanzasContext);

    return (
        <div className="container my-4">
            <h2 className="text-light">Resultados</h2>
            <div className="alert alert-info">
                <strong>Total Ingresos:</strong> {totalIngresos} <br />
                <strong>Total Gastos:</strong> {totalGastos} <br />
                <strong>Balance:</strong> {balance}
            </div>
        </div>
    );
};

export default Resultados;
