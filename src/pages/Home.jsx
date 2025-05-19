import React from "react";

import perfilIcon from '../assets/perfil.svg';
import cadastrarIcon from '../assets/cadastrar.svg';
import emprestarIcon from '../assets/emprestar.svg';
import devolucaoIcon from '../assets/devolucao.svg';
import bibliotecaIcon from '../assets/biblioteca.svg';
import incluirLivroIcon from '../assets/incluir.svg';

import LogoutButton from '../components/LogoutButton';

import mesaIcon from '../assets/mesa.svg';
import { Link } from "react-router";


function App() {
    const token = localStorage.getItem('token');
    return (
        <div className="bg-yellow-300 min-h-screen flex flex-col items-center p-5 justify-center items-center">
            <h1 className="text-3xl font-bold my-5 text-black">Seja bem vindo!</h1>

            <div className="relative w-96 h-96">
                <img
                    src={mesaIcon}
                    alt="Mesa"
                    className="w-32 h-32 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />

                <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                    <img src={perfilIcon} alt="Perfil" className="w-16 h-16" />
                    <p className=" flex justify-center items-center text-black font-bold"> Perfil</p>
                </div>

                <Link to="/cadastro"> <div className="absolute top-1/4 right-0 transform -translate-y-1/2">
                    <img src={cadastrarIcon} alt="Cadastrar" className="w-16 h-16" />
                    <p className=" flex justify-center items-center text-black font-bold"> Cadastro</p>
                </div></Link>


                <Link to="/emprestar" className="absolute bottom-1/4 right-0 transform translate-y-1/2">
                    <img src={emprestarIcon} alt="Emprestar" className="w-16 h-16" />
                    <p className=" flex justify-center items-center text-black font-bold"> Emprestar</p>
                </Link>

                <Link to="/devolucao"><div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                    <img src={devolucaoIcon} alt="Devolução" className="w-16 h-16" />
                    <p className=" flex justify-center items-center text-black font-bold"> Devolução</p>
                </div>
</Link>
                <Link to="/biblioteca"><div className="absolute bottom-1/4 left-0 transform translate-y-1/2">
                    <img src={bibliotecaIcon} alt="Biblioteca" className="w-16 h-16" />
                    <p className=" flex justify-center items-center text-black font-bold"> Biblioteca</p>
                </div>
</Link>
                 <Link to="/incluir"><div className="absolute top-1/4 left-0 transform -translate-y-1/2">
                    <img src={incluirLivroIcon} alt="Incluir Livro" className="w-16 h-16" />
                    <p className=" flex justify-center items-center text-black font-bold"> Incluir</p>


                </div>
                </Link>
            </div>
            {token && <LogoutButton />}
        </div>
    );
}

export default App;
