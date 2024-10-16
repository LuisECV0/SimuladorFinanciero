import React, { createContext, useState } from 'react';

export const FinanzasContext = createContext();

const Variables = ({ children }) => {

    const [salario, setSalario] = useState(0);
    const [otrosIngresos, setOtrosIngresos] = useState(0);
    const [vivienda, setVivienda] = useState(0);
    const [alimentacion, setAlimentacion] = useState(0);
    const [transporte, setTransporte] = useState(0);
    const [entretenimiento, setEntretenimiento] = useState(0);
    const [gastosFijos, setGastosFijos] = useState(0);
    const [ahorroMensual, setAhorroMensual] = useState(0);
    const [deudas, setDeudas] = useState(0);

    // Cálculos
    const totalIngresos = parseFloat(salario) + parseFloat(otrosIngresos);
    const totalGastos = parseFloat(vivienda) + parseFloat(alimentacion) + parseFloat(transporte) + parseFloat(entretenimiento) + parseFloat(gastosFijos);
    const balance = totalIngresos - totalGastos;
    const porcentajeAhorro = (ahorroMensual / 100) * totalIngresos;
    const porcentajeEndeudamiento = totalIngresos > 0 ? (deudas / totalIngresos) * 100 : 0;

    return (
        <FinanzasContext.Provider value={{
            salario, setSalario,
            otrosIngresos, setOtrosIngresos,
            vivienda, setVivienda,
            alimentacion, setAlimentacion,
            transporte, setTransporte,
            entretenimiento, setEntretenimiento,
            gastosFijos, setGastosFijos,
            ahorroMensual, setAhorroMensual,
            deudas, setDeudas,
            totalIngresos, totalGastos, balance, porcentajeAhorro, porcentajeEndeudamiento
        }}>
            {children}
        </FinanzasContext.Provider>
    );
};

export default Variables;
