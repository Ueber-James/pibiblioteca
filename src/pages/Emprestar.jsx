// src/pages/CadastroAluno.jsx
import React from "react";
import iconeAEmprestar from "../assets/empresta.svg";
import { Link } from "react-router-dom";

function Emprestar() {
    return (
        <div className="bg-yellow-300 min-h-screen flex flex-col items-center justify-center p-4">
            <div className="max-w-md w-full bg-yellow-300 p-4 rounded shadow-md flex flex-col items-center">
                <h1 className="text-3xl font-bold mb-6 text-black">Emprestar</h1>

                {/* Conteúdo principal: Ícone e formulário */}
                <div className="flex items-start w-full">
                    <div className="flex-shrink-0 mr-6">
                        <img
                            src={iconeAEmprestar}
                            alt="Ícone Aluno"
                            className="w-28 h-100 object-contain"
                        />
                    </div>

                    <form className="flex flex-col space-y-4 w-full">
                        <div>
                            <label className="font-bold block mb-1">Nome:</label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 rounded bg-white focus:outline-none"
                                placeholder="Digite o nome"
                            />
                        </div>
                        <div>
                            <label className="font-bold block mb-1">Titulo:</label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 rounded bg-white focus:outline-none"
                                placeholder="Digite o nome do Livro"
                            />
                        </div>
                        <div>
                            <label className="font-bold block mb-1">Matrícula:</label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 rounded bg-white focus:outline-none"
                                placeholder="Digite a matrícula"
                            />
                        </div>
                        <div>
                            <label className="font-bold block mb-1">Data do Emprestimo:</label>
                            <input
                                type="date"
                                className="w-full px-3 py-2 rounded bg-white focus:outline-none"
                                placeholder="Data"
                            />
                        </div>
                        <div>
                            <label className="font-bold block mb-1">Data da Devolução:</label>
                            <input
                                type="date"
                                className="w-full px-3 py-2 rounded bg-white focus:outline-none"
                                placeholder="Data"
                            />
                        </div>
                    </form>
                </div>

                <div className="flex space-x-4 mt-6 justify-center items-center">
                    <Link to="/" className="bg-black text-white px-6 py-2 rounded">
                        Cancelar
                    </Link>
                    <button className="bg-black text-white px-6 py-2 rounded">
                        Salvar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Emprestar;
