import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './pages/Client/Home';
import 'bootstrap/dist/css/bootstrap.min.css';  // Importa o CSS do Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Importa o JS necessário para o toggle funcionar

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>

  )
}

export default App
