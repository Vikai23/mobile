// As 5 primeiras gerações e os 3 iniciais de cada uma.
// O "id" de cada Pokémon é o número dele na Pokédex Nacional,
// que é o mesmo número usado na PokéAPI.
export const generations = [
  {
    number: 1,
    region: "Kanto",
    games: "Red, Blue e Yellow",
    starters: [
      { id: 1, name: "Bulbasaur", type: "grass" },
      { id: 4, name: "Charmander", type: "fire" },
      { id: 7, name: "Squirtle", type: "water" },
    ],
  },
  {
    number: 2,
    region: "Johto",
    games: "Gold, Silver e Crystal",
    starters: [
      { id: 152, name: "Chikorita", type: "grass" },
      { id: 155, name: "Cyndaquil", type: "fire" },
      { id: 158, name: "Totodile", type: "water" },
    ],
  },
  {
    number: 3,
    region: "Hoenn",
    games: "Ruby, Sapphire e Emerald",
    starters: [
      { id: 252, name: "Treecko", type: "grass" },
      { id: 255, name: "Torchic", type: "fire" },
      { id: 258, name: "Mudkip", type: "water" },
    ],
  },
  {
    number: 4,
    region: "Sinnoh",
    games: "Diamond, Pearl e Platinum",
    starters: [
      { id: 387, name: "Turtwig", type: "grass" },
      { id: 390, name: "Chimchar", type: "fire" },
      { id: 393, name: "Piplup", type: "water" },
    ],
  },
  {
    number: 5,
    region: "Unova",
    games: "Black, White, Black 2 e White 2",
    starters: [
      { id: 495, name: "Snivy", type: "grass" },
      { id: 498, name: "Tepig", type: "fire" },
      { id: 501, name: "Oshawott", type: "water" },
    ],
  },
];
