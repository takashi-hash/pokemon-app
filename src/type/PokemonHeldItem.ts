import { PokemonHeldItemVersion } from "./PokemonHeldItemVersion";
import { PokemonNamedAPIResource } from "./PokemonNamedAPIResource"

export type PokemonHeldItem = {
    item: PokemonNamedAPIResource;
    version_details:PokemonHeldItemVersion[];
}