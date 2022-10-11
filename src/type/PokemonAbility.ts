import { PokemonNamedAPIResource } from "./PokemonNamedAPIResource";

export type PokemonAbility = {
    is_hidden: boolean;
    slot: number;
    ability: PokemonNamedAPIResource;
}