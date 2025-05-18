// src/pages/CadastroLivro.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import iconeIncluirLivro from "../assets/incluirlivro.svg";
import { createLivro } from "../api/client";

export default function CadastroLivro() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    titulo: "",
    categoria: "",
    quantidade: ""
  });
  const [error, setError] = useState("");

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError("");
    try {
      await createLivro({
        titulo: form.titulo,
        categoria: form.categoria,
        quantidade: Number(form.quantidade)
      });
      navigate("/home"); // ajuste para sua rota de listagem
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  return (
    <div className="bg-yellow-300 min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-yellow-300 p-4 rounded shadow-md flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6 text-black">Incluir Livro</h1>

        <div className="flex items-start w-full">
          <div className="flex-shrink-0 mr-6">
            <img
              src={iconeIncluirLivro}
              alt="Ícone Incluir Livro"
              className="w-28 h-28 object-contain"
            />
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full">
            {error && <p className="text-red-600 text-center">{error}</p>}

            <div>
              <label className="font-bold block mb-1">Título:</label>
              <input
                name="titulo"
                type="text"
                value={form.titulo}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 rounded bg-white focus:outline-none"
                placeholder="Digite o título"
              />
            </div>

            <div>
              <label className="font-bold block mb-1">Categoria:</label>
              <input
                name="categoria"
                type="text"
                value={form.categoria}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 rounded bg-white focus:outline-none"
                placeholder="Digite a categoria"
              />
            </div>

            <div>
              <label className="font-bold block mb-1">Quantidade:</label>
              <input
                name="quantidade"
                type="number"
                value={form.quantidade}
                onChange={handleChange}
                required
                min="0"
                className="w-full px-3 py-2 rounded bg-white focus:outline-none"
                placeholder="Digite a quantidade"
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
