import React from 'react';
import { useContext } from 'react';
import { FinanzasContext } from './Variables'; // Asegúrate de que la ruta sea correcta

const Variables = () => {
    const { salario, setSalario, otrosIngresos, setOtrosIngresos } = useContext(FinanzasContext);

    return (
        <div className="container my-4">
            <h2 className="text-light">Ingresos</h2>
            <div className="mb-3">
                <label className="form-label text-light">Salario</label>
                <input type="number" className="form-control" value={salario} onChange={(e) => setSalario(e.target.value)} />
            </div>
            <div className="mb-3">
                <label className="form-label text-light">Otros Ingresos</label>
                <input type="number" className="form-control" value={otrosIngresos} onChange={(e) => setOtrosIngresos(e.target.value)} />
            </div>
        </div>
    );
};

export default Variables;
