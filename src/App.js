import './App.css';
import Variables from './Backend/Variables';  
import Ingresos from './Backend/Ingresos';    
import Gastos from './Backend/Gastos';        
import Resultados from './Backend/Resultados';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Variables>
      <div className="App">
        <h1>Simulador Financiero</h1>
        <Ingresos />
        <Gastos />
        <Resultados />
      </div>
      
    </Variables>
  );
}

export default App