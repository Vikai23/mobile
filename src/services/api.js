import { API_URL } from "@config";

// Função base: faz a requisição na nossa API e já trata os erros.
// "options" serve para mandar o método (POST) e o corpo da requisição.
async function request(path, options = {}) {
  let response;
  try {
    response = await fetch(`${API_URL}${path}`, {
      headers: { "Content-Type": "application/json" },
      ...options,
    });
  } catch {
    throw new Error(
      `Não foi possível conectar na API (${API_URL}). Confira se a pokedex-api está rodando e o endereço no config.js.`,
    );
  }

  const body = await response.json().catch(() => null);

  if (!response.ok) {
    // Quando dá erro, a API manda a explicação no campo "message"
    throw new Error(body?.message ?? `Erro ${response.status} ao buscar os dados.`);
  }
  return body;
}

// Cria a conta só com o nome
export function createAccount(name) {
  return request("/trainers", {
    method: "POST",
    body: JSON.stringify({ name }),
  });
}

// Entra na conta: o nome precisa ser igual ao usado na hora de criar
export function login(name) {
  return request("/trainers/login", {
    method: "POST",
    body: JSON.stringify({ name }),
  });
}

// As 5 gerações
export function getGenerations() {
  return request("/generations");
}

// Uma geração
export function getGeneration(id) {
  return request(`/generations/${id}`);
}

// Os 3 iniciais de uma geração
export function getGenerationStarters(id) {
  return request(`/generations/${id}/starters`);
}

// Os 8 líderes de ginásio de uma geração
export function getGymLeaders(id) {
  return request(`/generations/${id}/gym-leaders`);
}

// Os 15 iniciais das 5 gerações
export function getStarters() {
  return request("/pokemon/starters");
}

// Um Pokémon
export function getPokemon(id) {
  return request(`/pokemon/${id}`);
}

// A linha de evolução de um Pokémon (do primeiro ao último estágio)
export function getEvolutions(id) {
  return request(`/pokemon/${id}/evolutions`);
}
