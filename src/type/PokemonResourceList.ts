import { PokemonNamedAPIResource } from "./PokemonNamedAPIResource";

export type PokemonResourceList = {
  count: number;
  next: string;
  previous: string;
  results: PokemonNamedAPIResource[];
};