// Cores do app, inspiradas na Pokédex vermelha dos jogos
export const colors = {
  red: "#DC0A2D",
  white: "#FFFFFF",
  bg: "#F3F1EC",
  panel: "#FFFFFF",
  line: "#E3DED4",
  text: "#1F1F1F",
  muted: "#6E6A63",
};

// Cor de cada tipo de Pokémon (as mesmas cores que as wikis usam)
export const typeColor = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

// Nome de cada tipo em português
export const typeLabel = {
  normal: "Normal",
  fire: "Fogo",
  water: "Água",
  electric: "Elétrico",
  grass: "Planta",
  ice: "Gelo",
  fighting: "Lutador",
  poison: "Venenoso",
  ground: "Terrestre",
  flying: "Voador",
  psychic: "Psíquico",
  bug: "Inseto",
  rock: "Pedra",
  ghost: "Fantasma",
  dragon: "Dragão",
  dark: "Sombrio",
  steel: "Aço",
  fairy: "Fada",
};

// Versão bem clarinha da cor de um tipo, pra usar de fundo.
// O "33" no final é a transparência da cor (mais ou menos 20%).
export function lightTypeColor(type) {
  return typeColor[type] + "33";
}
