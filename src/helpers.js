import { ARTWORK_URL } from "@config";

// Mostra o número no formato da Pokédex (ex: 1 vira "#001")
export function formatNumber(id) {
  return "#" + String(id).padStart(3, "0");
}

// Troca o ponto pela vírgula (ex: 0.7 vira "0,7")
export function formatDecimal(value) {
  return String(value).replace(".", ",");
}

// Link da imagem oficial de um Pokémon pelo número dele
export function getArtworkUrl(id) {
  return `${ARTWORK_URL}/${id}.png`;
}
