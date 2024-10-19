import './App.css';
import Variables from './Backend/Variables';  
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Backend/Home';

function App() {
  return (
    <Variables>
      <Home />      
    </Variables>
  );
}

export default App