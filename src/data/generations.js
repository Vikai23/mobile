// As 5 primeiras gerações e os 3 iniciais de cada uma.
// O "id" de cada Pokémon é o número dele na Pokédex Nacional,
// que é o mesmo número usado na PokéAPI.
//
// Cada geração também tem:
// - starterLocation: onde conseguir os iniciais no jogo
// - map: o mapa da região (imagem do Serebii.net) e o tamanho dela em pixels
// - gymLeaders: os 8 líderes de ginásio, na ordem das insígnias
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
    starterLocation:
      "No laboratório do Professor Oak, em Pallet Town, logo no começo do jogo. " +
      "No Yellow você começa com um Pikachu e ganha os três depois: o Bulbasaur em Cerulean City, " +
      "o Charmander na Route 24 e o Squirtle em Vermilion City.",
    map: {
      url: "https://www.serebii.net/pokearth/kanto.png",
      width: 200,
      height: 618,
      // Essa imagem também tem as Sevii Islands embaixo.
      // Só os primeiros 150 pixels de altura são de Kanto, então o app mostra só essa parte.
      visibleHeight: 150,
    },
    gymGames: "Red, Blue e Yellow",
    gymLeaders: [
      { name: "Brock", city: "Pewter City", types: ["rock"] },
      { name: "Misty", city: "Cerulean City", types: ["water"] },
      { name: "Lt. Surge", city: "Vermilion City", types: ["electric"] },
      { name: "Erika", city: "Celadon City", types: ["grass"] },
      { name: "Koga", city: "Fuchsia City", types: ["poison"] },
      { name: "Sabrina", city: "Saffron City", types: ["psychic"] },
      { name: "Blaine", city: "Cinnabar Island", types: ["fire"] },
      { name: "Giovanni", city: "Viridian City", types: ["ground"] },
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
    starterLocation: "No laboratório do Professor Elm, em New Bark Town, logo no começo do jogo.",
    map: {
      url: "https://www.serebii.net/pokearth/johto.png",
      width: 166,
      height: 144,
    },
    gymGames: "Gold, Silver e Crystal",
    gymLeaders: [
      { name: "Falkner", city: "Violet City", types: ["flying"] },
      { name: "Bugsy", city: "Azalea Town", types: ["bug"] },
      { name: "Whitney", city: "Goldenrod City", types: ["normal"] },
      { name: "Morty", city: "Ecruteak City", types: ["ghost"] },
      { name: "Chuck", city: "Cianwood City", types: ["fighting"] },
      { name: "Jasmine", city: "Olivine City", types: ["steel"] },
      { name: "Pryce", city: "Mahogany Town", types: ["ice"] },
      { name: "Clair", city: "Blackthorn City", types: ["dragon"] },
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
    starterLocation:
      "Na Route 101, logo ao sair de Littleroot Town. O Professor Birch está sendo atacado " +
      "por um Pokémon selvagem e você pega um dos três na bolsa dele para ajudar.",
    map: {
      url: "https://www.serebii.net/pokearth/hoenn.png",
      width: 306,
      height: 221,
    },
    gymGames: "Ruby, Sapphire e Emerald",
    gymLeaders: [
      { name: "Roxanne", city: "Rustboro City", types: ["rock"] },
      { name: "Brawly", city: "Dewford Town", types: ["fighting"] },
      { name: "Wattson", city: "Mauville City", types: ["electric"] },
      { name: "Flannery", city: "Lavaridge Town", types: ["fire"] },
      { name: "Norman", city: "Petalburg City", types: ["normal"] },
      { name: "Winona", city: "Fortree City", types: ["flying"] },
      { name: "Tate e Liza", city: "Mossdeep City", types: ["psychic"] },
      { name: "Wallace (Juan no Emerald)", city: "Sootopolis City", types: ["water"] },
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
    starterLocation:
      "Na Route 201, perto do Lake Verity. Você escolhe um dos três da maleta do Professor Rowan.",
    map: {
      url: "https://www.serebii.net/pokearth/sinnoh.png",
      width: 216,
      height: 168,
    },
    gymGames: "Diamond e Pearl",
    gymLeaders: [
      { name: "Roark", city: "Oreburgh City", types: ["rock"] },
      { name: "Gardenia", city: "Eterna City", types: ["grass"] },
      { name: "Maylene", city: "Veilstone City", types: ["fighting"] },
      { name: "Crasher Wake", city: "Pastoria City", types: ["water"] },
      { name: "Fantina", city: "Hearthome City", types: ["ghost"] },
      { name: "Byron", city: "Canalave City", types: ["steel"] },
      { name: "Candice", city: "Snowpoint City", types: ["ice"] },
      { name: "Volkner", city: "Sunyshore City", types: ["electric"] },
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
    starterLocation:
      "Na sua casa, em Nuvema Town. A Professora Juniper manda uma caixa de presente com os três " +
      "e você escolhe primeiro, antes do Cheren e da Bianca. No Black 2 e White 2 quem entrega " +
      "é a Bianca, em Aspertia City.",
    map: {
      url: "https://www.serebii.net/pokearth/unova.png",
      width: 256,
      height: 168,
    },
    gymGames: "Black e White",
    gymLeaders: [
      // Em Striaton City o líder muda conforme o seu inicial:
      // é sempre o que tem vantagem de tipo contra ele
      { name: "Cilan, Chili e Cress", city: "Striaton City", types: ["grass", "fire", "water"] },
      { name: "Lenora", city: "Nacrene City", types: ["normal"] },
      { name: "Burgh", city: "Castelia City", types: ["bug"] },
      { name: "Elesa", city: "Nimbasa City", types: ["electric"] },
      { name: "Clay", city: "Driftveil City", types: ["ground"] },
      { name: "Skyla", city: "Mistralton City", types: ["flying"] },
      { name: "Brycen", city: "Icirrus City", types: ["ice"] },
      { name: "Drayden (Iris no White)", city: "Opelucid City", types: ["dragon"] },
    ],
  },
];
