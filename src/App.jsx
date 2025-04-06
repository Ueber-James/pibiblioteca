import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro'
import Aluno from './pages/CadAluno'
import Usuario from './pages/CadUsuario'




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cadastro" element={<Cadastro />}></Route>
        <Route path="/aluno" element={<Aluno />}></Route>
        <Route path="/usuario" element={<Usuario />}></Route>



      </Routes>
    </BrowserRouter>
  );
}

export default App;
