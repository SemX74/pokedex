export function findTypeColor(givenPockemonType: string | undefined = "") {
  const pockemonTypes = [
    { color: "white", type: "normal" },
    { color: "red", type: "fighting" },
    { color: "aqua", type: "flying" },
    { color: "purple", type: "poison" },
    { color: "brown", type: "ground" },
    { color: "black", type: "rock" },
    { color: "red", type: "bug" },
    { color: "whiteblack", type: "ghost" },
    { color: "black", type: "steel" },
    { color: "orange", type: "fire" },
    { color: "blue", type: "water" },
    { color: "green", type: "grass" },
    { color: "aqua", type: "electric" },
    { color: "yellow", type: "psychic" },
    { color: "aqua", type: "ice" },
    { color: "black", type: "dragon" },
    { color: "black", type: "dark" },
    { color: "pink", type: "fairy" },
    { color: "white", type: "unknown" },
    { color: "black", type: "shadow" },
  ];
  for (let i = 0; i < pockemonTypes.length; i++) {
    if (givenPockemonType === pockemonTypes[i].type) {
      return pockemonTypes[i].color;
    }
  }
  return "white";
}
