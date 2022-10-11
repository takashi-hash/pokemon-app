import { PokemonNamedAPIResource } from "./PokemonNamedAPIResource"

export type PokemonStat = {
    stat: PokemonNamedAPIResource;
    effort: number;
    base_stat: number;
}