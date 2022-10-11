import { PokemonNamedAPIResource } from "./PokemonNamedAPIResource";

export type AbilityPokemon = {
    is_hidden: boolean;
    slot: number;
    pokemon: PokemonNamedAPIResource;
}