export const getAccordingBackground = (type) => {
  switch (type) {
    case "grass":
      return "bg-gradient-to-r from-pokeGrass1 to-pokeGrass2";
    case "water":
      return "bg-gradient-to-r from-pokeWater1 to-pokeWater2";
    case "ghost":
      return "bg-gradient-to-r from-pokeGhost1 to-pokeGhost2";
    case "fire":
      return "bg-gradient-to-r from-pokeFire1 to-pokeFire2";
    case "poison":
      return "bg-gradient-to-r from-pokePoison1 to-pokePoison2";
    case "flying":
      return "bg-gradient-to-r from-pokeFlying1 to-pokeFlying2";
    case "ground":
      return "bg-gradient-to-r from-pokeGround1 to-pokeGround2";
    case "rock":
      return "bg-gradient-to-r from-pokeRock1 to-pokeRock2";
    case "bug":
      return "bg-gradient-to-r from-pokeBug1 to-pokeBug2";
    case "electric":
      return "bg-gradient-to-r from-pokeElectric1 to-pokeElectric2";
    case "fairy":
      return "bg-gradient-to-r from-pokeFairy1 to-pokeFairy2";
    case "fighting":
      return "bg-gradient-to-r from-pokeFighting1 to-pokeFighting2";
    case "psychic":
      return "bg-gradient-to-r from-pokePsychic1 to-pokePsychic2";
    case "steel":
      return "bg-gradient-to-r from-pokeSteel1 to-pokeSteel2";
    case "ice":
      return "bg-gradient-to-r from-pokeIce1 to-pokeIce2";
    case "dragon":
      return "bg-gradient-to-r from-pokeDragon1 to-pokeDragon2";
    default:
      return "bg-gradient-to-r from-pokeNormal1 to-pokeNormal2";
  }
};
