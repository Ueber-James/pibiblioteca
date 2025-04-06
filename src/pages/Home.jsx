// src/App.jsx
import React from "react";

// Importando os ícones (verifique os caminhos conforme sua estrutura)
import perfilIcon from '../assets/perfil.svg';
import cadastrarIcon from '../assets/cadastrar.svg';
import emprestarIcon from '../assets/emprestar.svg';
import devolucaoIcon from '../assets/devolucao.svg';
import bibliotecaIcon from '../assets/biblioteca.svg';
import incluirLivroIcon from '../assets/incluir.svg';
import mesaIcon from '../assets/mesa.svg';
import { Link } from "react-router";


function App() {
  return (
    <div className="bg-yellow-300 min-h-screen flex flex-col items-center p-5 justify-center items-center">
      <h1 className="text-3xl font-bold my-5 text-black">Seja bem vindo!</h1>

      {/* Container para a mesa e os ícones dispostos ao redor */}
      <div className="relative w-96 h-96">
        {/* Imagem central da mesa */}
        <img 
          src={mesaIcon} 
          alt="Mesa" 
          className="w-32 h-32 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />

        {/* Ícone 1 - Topo central */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
          <img src={perfilIcon} alt="Perfil" className="w-16 h-16" />
<p className=" flex justify-center items-center text-black font-bold"> Perfil</p>        
</div>

        {/* Ícone 2 - Canto superior direito */}
        <Link to="/cadastro"> <div className="absolute top-1/4 right-0 transform -translate-y-1/2">
          <img src={cadastrarIcon} alt="Cadastrar" className="w-16 h-16" />
          <p className=" flex justify-center items-center text-black font-bold"> Cadastro</p>        
        </div></Link>
       

        {/* Ícone 3 - Canto inferior direito */}
        <div className="absolute bottom-1/4 right-0 transform translate-y-1/2">
          <img src={emprestarIcon} alt="Emprestar" className="w-16 h-16" />
          <p className=" flex justify-center items-center text-black font-bold"> Emprestar</p>        
        </div>

        {/* Ícone 4 - Base central */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <img src={devolucaoIcon} alt="Devolução" className="w-16 h-16" />
          <p className=" flex justify-center items-center text-black font-bold"> Devolução</p>        
        </div>

        {/* Ícone 5 - Canto inferior esquerdo */}
        <div className="absolute bottom-1/4 left-0 transform translate-y-1/2">
          <img src={bibliotecaIcon} alt="Biblioteca" className="w-16 h-16" />
          <p className=" flex justify-center items-center text-black font-bold"> Biblioteca</p>        
        </div>

        {/* Ícone 6 - Canto superior esquerdo */}
        <div className="absolute top-1/4 left-0 transform -translate-y-1/2">
          <img src={incluirLivroIcon} alt="Incluir Livro" className="w-16 h-16" />
          <p className=" flex justify-center items-center text-black font-bold"> Incluir</p>        

        </div>
      </div>
    </div>
  );
}

export default App;
