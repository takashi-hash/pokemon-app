import { MoveVersion } from "./MoveVersion";
import { PokemonNamedAPIResource } from "./PokemonNamedAPIResource";

export type Move = {
  move: PokemonNamedAPIResource;
  version_group_details: MoveVersion[];
};
