// Deixa a primeira letra maiúscula (ex: "ivysaur" vira "Ivysaur")
export function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// Mostra o número no formato da Pokédex (ex: 1 vira "#001")
export function formatNumber(id) {
  return "#" + String(id).padStart(3, "0");
}
