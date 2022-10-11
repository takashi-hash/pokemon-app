import { PokemonNamedAPIResource } from "./PokemonNamedAPIResource";

export type MoveVersion = {
  move_learn_method: PokemonNamedAPIResource;
  version_group: PokemonNamedAPIResource;
  level_learned_at: number;
};
