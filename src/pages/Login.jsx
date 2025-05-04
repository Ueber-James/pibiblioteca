import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/client';

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const { token } = await login(email, password);
            localStorage.setItem('token', token);
            navigate('/home'); // Navega para a página inicial
        } catch (err) {
            console.error(err);
            setError(err.message); // Exibe a mensagem de erro
        }
    };

    return (
        <div className="bg-yellow-300 min-h-screen flex flex-col items-center justify-center p-4">
            <div className="max-w-md w-full bg-yellow-300 p-4 rounded shadow-md flex flex-col items-center">
                <h1 className="text-3xl font-bold mb-6 text-black">Login</h1>

                <div className="flex items-start w-full">
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full">
                        <div>
                            <label className="font-bold block mb-1">Usuário:</label>
                            <input
                                type="text"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                className="w-full px-3 py-2 rounded bg-white focus:outline-none"
                                placeholder="Digite o login"
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
                            />
                        </div>

                        {error && <p className="text-red-500">{error}</p>} {/* Exibe mensagem de erro */}

                        <button 
                            type="submit"
                            className="bg-black text-white px-6 py-2 rounded">
                            Entrar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}