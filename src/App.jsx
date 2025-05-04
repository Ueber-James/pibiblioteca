import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro'
import Aluno from './pages/CadAluno'
import Emprestar from './pages/Emprestar'
import Login from './pages/Login'
import CadastroColaborador from './pages/cadastroColaborador'
import PrivateRoute from './components/PrivateRoute'







function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={ <PrivateRoute> <Home /></PrivateRoute>}></Route>
        <Route path="/cadastro" element={<PrivateRoute> <Cadastro /></PrivateRoute> }></Route>
        <Route path="/aluno" element={<PrivateRoute><Aluno /></PrivateRoute>}></Route>
        <Route path="/emprestar" element={<PrivateRoute><Emprestar /></PrivateRoute>}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/cadastrocolaborador" element={<PrivateRoute><CadastroColaborador /></PrivateRoute>}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;

