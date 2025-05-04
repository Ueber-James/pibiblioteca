// src/api/client.js
const BASE = import.meta.env.VITE_API_URL;

/** wrapper genérico */
async function request(path, options = {}) {
  const res = await fetch(`${BASE}${path}`, {
    headers: { 'Content-Type': 'application/json', ...options.headers },
    ...options
  });
  if (!res.ok) {
    // tenta extrair erro JSON, senão usa statusText
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || res.statusText);
  }
  return res.json();
}

/** registro de usuário (se ainda usar) */
export function register(nome, username, password) {
  return request('/users/register', {
    method: 'POST',
    body: JSON.stringify({ nome, username, password })
  });
}

/** login de usuário (se ainda usar) */
export function login(username, password) {
  return request('/users/login', {
    method: 'POST',
    body: JSON.stringify({ username, password })
  }).then(data => {
    localStorage.setItem('token', data.token);
    return data;
  });
}

/** cria agendamento sem token nem vínculo */
export function createAgendamento({ nome, telefone, servico, data, horario }) {
  return request('/agendamentos', {
    method: 'POST',
    body: JSON.stringify({ nome, telefone, servico, data, horario })
  });
}

/** lista todos os agendamentos */
export function listAgendamentos() {
  return request('/agendamentos', {
    method: 'GET'
  });
}
