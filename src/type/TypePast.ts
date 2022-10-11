import { PokemonNamedAPIResource } from "./PokemonNamedAPIResource";
import { PokemonType } from "./PokemonType";

export type TypePast = {
  generation: PokemonNamedAPIResource;
  types: PokemonType[];
};
