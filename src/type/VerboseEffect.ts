import { PokemonNamedAPIResource } from "./PokemonNamedAPIResource";

export type VerboseEffect = {
  effect: string;
  short_effect: string;
  language: PokemonNamedAPIResource[];
};
