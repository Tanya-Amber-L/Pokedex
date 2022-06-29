export const getAccordingBackground = (type) => {
	switch (type) {
		case "grass":
			return "bg-pokeGrass";
		case "water":
			return "bg-pokeWater";
		case "ghost":
			return "bg-pokeGhost";
		case "fire":
			return "bg-pokeFire";
		case "poison":
			return "bg-pokePoison";
		case "flying":
			return "bg-pokeFlying";
		case "ground":
			return "bg-pokeGround";
		case "rock":
			return "bg-pokeRock";
		case "bug":
			return "bg-pokeBug";
		case "electric":
			return "bg-pokeElectric";
		case "fairy":
			return "bg-pokeFairy";
		case "fighting":
			return "bg-pokeFighting";
		case "psychic":
			return "bg-pokePsychic";
		case "steel":
			return "bg-pokeSteel";
		case "ice":
			return "bg-pokeIce";
		case "dragon":
			return "bg-pokeDragon";
		default:
			return "bg-pokeNormal";
	}
};
