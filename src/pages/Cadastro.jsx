// src/pages/CadastroAluno.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { criarAluno } from '../api/client'; 
import iconeAluno from '../assets/aluno.svg';

export default function CadastroAluno() {
  const navigate = useNavigate();
  const [matricula, setMatricula] = useState('');
  const [nome, setNome] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();
    setError(null);
    try {
    await criarAluno({ matricula, nome }); 
      navigate('/home');  
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  return (
    <div className="bg-yellow-300 min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-yellow-300 p-6 rounded shadow-md flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6 text-black">Cadastrar Aluno</h1>
        <img src={iconeAluno} alt="Ícone Aluno" className="w-24 h-24 mb-6" />

        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <div>
            <label className="block font-bold mb-1">Matrícula:</label>
            <input
              type="text"
              value={matricula}
              onChange={e => setMatricula(e.target.value)}
              required
              placeholder="Digite a matrícula"
              className="w-full px-3 py-2 rounded bg-white focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-bold mb-1">Nome:</label>
            <input
              type="text"
              value={nome}
              onChange={e => setNome(e.target.value)}
              required
              placeholder="Digite o nome"
              className="w-full px-3 py-2 rounded bg-white focus:outline-none"
            />
          </div>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <button
            type="submit"
            className="w-full bg-black text-white px-6 py-2 rounded"
          >
            Salvar
          </button>
        </form>

        <button
                                    type="submit"

          onClick={() => navigate(-1)}
          className="mt-4 text-black hover:underline"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}