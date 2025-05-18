// src/api/client.js
const BASE = import.meta.env.VITE_API_URL;  
// ex: "https://apibiblioteca-ni8u.onrender.com/api"

async function request(path, options = {}) {
  const url = `${BASE}${path}`;
  const token = localStorage.getItem('token'); // ← Adicione esta linha
  
  const headers = {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` }), // ← Adicione
    ...options.headers
  };

  const res = await fetch(url, {
    headers,
    ...options
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || res.statusText);
  }
  if (options.method === 'DELETE' || res.status === 204) return;
  return res.json();
}

export function register(nome, username, password) {
  return request('/users/register', {
    method: 'POST',
    body: JSON.stringify({ nome, username, password })
  });
}

export function login(username, password) {
  return request('/users/login', {
    method: 'POST',
    body: JSON.stringify({ username, password })
  }).then(data => {
    localStorage.setItem('token', data.token);
    return data;
  });
}

/** cria aluno */
export function criarAluno({ matricula, nome }) {
  return request('/alunos', {
    method: 'POST',
    body: JSON.stringify({ matricula, nome })
  });
}

/** lista todos os alunos */
export function listAlunos() {
  return request('/alunos', { method: 'GET' });
}
export function createLivro({ titulo, categoria, quantidade }) {
  return request('/livros', {
    method: 'POST',
    body: JSON.stringify({ titulo, categoria, quantidade })
  });
}

export function listLivros() {
  return request('/livros', { method: 'GET' });
}

export function createEmprestimo({ matricula, livro_id, data_retirada }) {
  return request('/emprestimos', {
    method: 'POST',
    body: JSON.stringify({ matricula, livro_id, data_retirada })
  });
}

export function listEmprestimos() {
  return request('/emprestimos', { method: 'GET' });
}

export function deleteEmprestimo(id) {
  return request(`/emprestimos/${id}`, { method: 'DELETE' });
}
