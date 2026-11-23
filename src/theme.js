// Cores do app: tema escuro, com o vermelho da Pokédex nos detalhes
export const colors = {
  red: "#E3364B",
  white: "#FFFFFF",
  bg: "#0F1016",
  panel: "#1A1B24",
  panel2: "#232430",
  line: "#2C2D3A",
  text: "#F2F2F7",
  muted: "#9C9CB0",
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

// Cor do tipo com transparência, pra usar em fundos e bordas.
// O "alpha" é a transparência em hexadecimal: "26" fica bem fraquinho e "66" fica mais forte.
export function typeColorAlpha(type, alpha) {
  return typeColor[type] + alpha;
}
