// src/components/Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../api/client';

export default function Register() {
    const navigate = useNavigate();
    const [nome, setNome] = useState(''); // Novo estado para o nome
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await register(nome, username, password); // Passa o nome, username e password
            setSuccess('Cadastro realizado com sucesso! Você pode fazer login agora.');
            setError(null);
            navigate('/login'); // Redireciona para a página de login
        } catch (err) {
            console.error(err);
            setError(err.message);
            setSuccess(null);
        }
    };

    return (
        <div className="bg-yellow-300 min-h-screen flex flex-col items-center justify-center p-4">
            <div className="max-w-md w-full bg-yellow-300 p-4 rounded shadow-md flex flex-col items-center">
                <h1 className="text-3xl font-bold mb-6 text-black">Cadastro</h1>

                <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full">
                    <div>
                        <label className="font-bold block mb-1">Nome:</label>
                        <input
                            type="text"
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                            className="w-full px-3 py-2 rounded bg-white focus:outline-none"
                            placeholder="Digite seu nome"
                            required
                        />
                    </div>

                    <div>
                        <label className="font-bold block mb-1">Usuário:</label>
                        <input
                            type="text"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            className="w-full px-3 py-2 rounded bg-white focus:outline-none"
                            placeholder="Digite o nome de usuário"
                            required
                        />
                    </div>

                    <div>
                        <label className="font-bold block mb-1">Senha:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="w-full px-3 py-2 rounded bg-white focus:outline-none"
                            placeholder="Digite a senha"
                            required
                        />
                    </div>

                    {error && <p className="text-red-500">{error}</p>} {/* Exibe mensagem de erro */}
                    {success && <p className="text-green-500">{success}</p>} {/* Exibe mensagem de sucesso */}

                    <button 
                        type="submit"
                        className="bg-black text-white px-6 py-2 rounded">
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    );
}