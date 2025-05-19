// src/pages/DevolucaoLivro.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import iconeIncluirLivro from "../assets/incluirlivro.svg";

import { listAlunos, listEmprestimos, deleteEmprestimo } from "../api/client";

export default function DevolucaoLivro() {
  const navigate = useNavigate();
  const [matricula, setMatricula] = useState("");
  const [emprestimos, setEmprestimos] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [error, setError] = useState("");

  // ao digitar matrícula, recarrega os empréstimos desse aluno
  useEffect(() => {
    if (!matricula) {
      setEmprestimos([]);
      return;
    }
    Promise.all([listAlunos(), listEmprestimos()])
      .then(([alunos, todas]) => {
        // opcional: verificar se a matrícula existe
        const existe = alunos.some(a => a.matricula === matricula);
        if (!existe) {
          setError("Matrícula não cadastrada");
          setEmprestimos([]);
          return;
        }
        setError("");
        setEmprestimos(todas.filter(e => e.matricula === matricula));
      })
      .catch(err => setError(err.message));
  }, [matricula]);

  const handleSubmit = async e => {
    e.preventDefault();
    if (!selectedId) {
      setError("Selecione um empréstimo para devolver");
      return;
    }
    try {
      await deleteEmprestimo(selectedId);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="bg-yellow-300 min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-yellow-300 p-4 rounded shadow-md flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6 text-black">Devolver Livro</h1>

        <div className="flex items-start w-full">
          <div className="flex-shrink-0 mr-6">
            <img
              src={iconeIncluirLivro}
              alt="Ícone Devolver"
              className="w-28 h-28 object-contain"
            />
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full">
            {error && <p className="text-red-600 text-center">{error}</p>}

            <div>
              <label className="font-bold block mb-1">Matrícula:</label>
              <input
                name="matricula"
                type="text"
                value={matricula}
                onChange={e => setMatricula(e.target.value)}
                required
                placeholder="Digite a matrícula"
                className="w-full px-3 py-2 rounded bg-white focus:outline-none"
              />
            </div>

            <div>
              <label className="font-bold block mb-1">Empréstimos Ativos:</label>
              <select
                value={selectedId}
                onChange={e => setSelectedId(e.target.value)}
                required
                className="w-full px-3 py-2 rounded bg-white focus:outline-none"
              >
                <option value="">Selecione...</option>
                {emprestimos.map(e => (
                  <option key={e.id} value={e.id}>
                    {e.titulo_livro} — {new Date(e.data_retirada).toLocaleDateString('pt-BR')}
                  </option>
                ))}
              </select>
            </div>
          </form>
        </div>

        <div className="flex space-x-4 mt-6 justify-center items-center">
          <Link to="/home" className="bg-black text-white px-6 py-2 rounded">
            Cancelar
          </Link>
          <button
            onClick={handleSubmit}
            className="bg-black text-white px-6 py-2 rounded"
          >
            Devolver
          </button>
        </div>
      </div>
    </div>
  );
}
