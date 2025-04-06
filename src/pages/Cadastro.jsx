// src/pages/SelecaoCadastro.jsx
import React from "react";
import iconeColaborador from "../assets/usuario.svg";
import iconeAluno from "../assets/aluno.svg";
import { Link } from "react-router-dom";

function SelecaoCadastro() {
  return (
    <div className="bg-yellow-300 min-h-screen flex flex-col items-center justify-center p-4">
      {/* Container principal */}
      <div className="max-w-2xl w-full p-4 flex flex-col items-center">
        {/* Título */}
        <h1 className="text-3xl font-bold mb-6 text-black">Cadastrar</h1>

        {/* Seção dos ícones */}
        <div className="flex flex-wrap justify-center items-center gap-12">
          {/* Card Colaborador */}
          <Link to="/usuario"><div className="flex flex-col items-center cursor-pointer">
            <img
              src={iconeColaborador}
              alt="Ícone Colaborador"
              className="w-28 h-28 mb-2 object-contain"
            />
            <p className="font-bold">Colaborador</p>
          </div></Link>
          

          {/* Card Aluno */}
          <Link to="/aluno"> <div className="flex flex-col items-center cursor-pointer">
            <img
              src={iconeAluno}
              alt="Ícone Aluno"
              className="w-28 h-28 mb-2 object-contain"
            />
            <p className="font-bold">Aluno</p>
          </div></Link>
         
        </div>

        {/* Botão Voltar */}
        <div className="flex justify-end w-full mt-8">
          <Link to="/" className="bg-black text-yellow-300 px-6 py-2 rounded">
            Voltar
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SelecaoCadastro;
