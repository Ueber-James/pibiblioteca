// src/pages/Biblioteca.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { listLivros } from '../api/client';

export default function Biblioteca() {
  const [search, setSearch] = useState('');
  const [livros, setLivros] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    listLivros()
      .then(data => setLivros(data.map(l => l.titulo)))
      .catch(err => setError(err.message));
  }, []);

  // agrupa por letra inicial, filtrando por busca
  const grupos = livros.reduce((acc, titulo) => {
    if (!titulo.toLowerCase().includes(search.toLowerCase())) return acc;
    const letra = titulo[0].toUpperCase();
    if (!acc[letra]) acc[letra] = [];
    acc[letra].push(titulo);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-yellow-300 flex flex-col items-center p-6">
      <h1 className="text-5xl font-bold text-black mb-8">Biblioteca</h1>

      <div className="w-full max-w-xl relative mb-12">
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Buscar..."
          className="w-full py-3 pl-6 pr-12 rounded-full focus:outline-none"
        />
        <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black text-xl">
          🔍
        </span>
      </div>

      {error && (
        <p className="text-red-600 mb-4">{error}</p>
      )}

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12">
        {Object.keys(grupos)
          .sort()
          .map(letra => (
            <div key={letra} className="space-y-4">
              <h2 className="text-4xl font-semibold text-black">{letra}</h2>
              <ul className="space-y-3">
                {grupos[letra].map(titulo => (
                  <li
                    key={titulo}
                    className="flex items-center space-x-3 bg-white rounded-full px-4 py-2"
                  >
                    <span className="font-medium text-black">{titulo}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>

      <Link
        to="/home"
        className="mt-12 inline-block bg-black text-yellow-300 font-semibold px-8 py-3 rounded-full hover:opacity-90 transition"
      >
        Voltar
      </Link>
    </div>
  );
}
