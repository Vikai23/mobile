import { API_URL, ARTWORK_URL } from "@config";

// Função base: faz a requisição na PokéAPI e já trata os erros
async function request(path) {
  let response;
  try {
    response = await fetch(`${API_URL}${path}`);
  } catch {
    throw new Error("Não foi possível conectar na PokéAPI. Confira a sua internet.");
  }

  if (!response.ok) {
    throw new Error(`Erro ${response.status} ao buscar os dados na PokéAPI.`);
  }
  return response.json();
}

// Dados do Pokémon: tipos, altura e peso
export function getPokemon(id) {
  return request(`/pokemon/${id}`);
}

// Dados da espécie: descrição da Pokédex, categoria e a cadeia de evolução
export function getSpecies(id) {
  return request(`/pokemon-species/${id}`);
}

// Cadeia de evolução (ex: Bulbasaur -> Ivysaur -> Venusaur)
export function getEvolutionChain(chainId) {
  return request(`/evolution-chain/${chainId}`);
}

// A PokéAPI manda links como "https://pokeapi.co/api/v2/pokemon-species/2/".
// Essa função pega só o número que fica no final do link.
export function getIdFromUrl(url) {
  const parts = url.split("/").filter((part) => part !== "");
  return Number(parts[parts.length - 1]);
}

// Link da imagem oficial do Pokémon pelo número dele
export function getArtworkUrl(id) {
  return `${ARTWORK_URL}/${id}.png`;
}
