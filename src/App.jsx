import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro'
import Emprestar from './pages/Emprestar'
import Login from './pages/Login'
import CadastroColaborador from './pages/cadastroColaborador'
import IncluirLivro from './pages/IncluirLivro'
import Devolucao from './pages/DevolucaoLivro'
import Biblioteca from './pages/Biblioteca'

import PrivateRoute from './components/PrivateRoute'







function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={ <PrivateRoute> <Home /></PrivateRoute>}></Route>
        <Route path="/cadastro" element={<PrivateRoute> <Cadastro /></PrivateRoute> }></Route>
        <Route path="/emprestar" element={<PrivateRoute><Emprestar /></PrivateRoute>}></Route>
        <Route path="/incluir" element={<PrivateRoute><IncluirLivro /></PrivateRoute>}></Route>
        <Route path="/biblioteca" element={<PrivateRoute><Biblioteca /></PrivateRoute>}></Route>
                <Route path="/devolucao" element={<PrivateRoute><Devolucao /></PrivateRoute>}></Route>

        <Route path="/" element={<Login />}></Route>
        <Route path="/cadastrocolaborador" element={<PrivateRoute><CadastroColaborador /></PrivateRoute>}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;

