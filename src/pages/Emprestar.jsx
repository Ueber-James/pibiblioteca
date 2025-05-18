// src/pages/Emprestimo.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import iconeAEmprestar from "../assets/empresta.svg";
import { listAlunos, listLivros, createEmprestimo } from "../api/client";

export default function Emprestimo() {
  const navigate = useNavigate();
  const [alunos, setAlunos] = useState([]);
  const [livros, setLivros] = useState([]);
  const [form, setForm] = useState({
    matricula: "",
    alunoNome: "",
    livroId: "",
    data_retirada: "",
    data_devolucao: ""
  });
  const [error, setError] = useState("");

  useEffect(() => {
    listAlunos().then(setAlunos).catch(err => setError(err.message));
    listLivros().then(setLivros).catch(err => setError(err.message));
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (name === "matricula") {
      const aluno = alunos.find(a => a.matricula === value);
      setForm(f => ({ ...f, alunoNome: aluno ? aluno.nome : "" }));
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError("");
    try {
      await createEmprestimo({
        matricula: form.matricula,
        livro_id: Number(form.livroId),
        data_retirada: form.data_retirada
      });
      navigate("/home");
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  return (
    <div className="bg-yellow-300 min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-yellow-300 p-4 rounded shadow-md flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6 text-black">Emprestar Livro</h1>

        <div className="flex items-start w-full">
          <div className="flex-shrink-0 mr-6">
            <img
              src={iconeAEmprestar}
              alt="Ícone Emprestar"
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
                value={form.matricula}
                onChange={handleChange}
                required
                placeholder="Digite a matrícula"
                className="w-full px-3 py-2 rounded bg-white focus:outline-none"
              />
              {form.alunoNome
                ? <p className="mt-1 text-gray-700">Aluno: {form.alunoNome}</p>
                : form.matricula && <p className="mt-1 text-red-500">Aluno não encontrado</p>}
            </div>

            <div>
              <label className="font-bold block mb-1">Livro:</label>
              <input
                list="livros-list"
                name="livroId"
                value={form.livroId}
                onChange={handleChange}
                required
                placeholder="Digite o ID ou título"
                className="w-full px-3 py-2 rounded bg-white focus:outline-none"
              />
              <datalist id="livros-list">
                {livros.map(l => (
                  <option key={l.id} value={l.id}>
                    {l.titulo} ({l.quantidade} disp.)
                  </option>
                ))}
              </datalist>
            </div>

            <div>
              <label className="font-bold block mb-1">Data do Empréstimo:</label>
              <input
                name="data_retirada"
                type="date"
                value={form.data_retirada}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 rounded bg-white focus:outline-none"
              />
            </div>

            <div>
              <label className="font-bold block mb-1">Data de Devolução:</label>
              <input
                name="data_devolucao"
                type="date"
                value={form.data_devolucao}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded bg-white focus:outline-none"
              />
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
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}