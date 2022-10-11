import { Effect } from "./Effect "
import { PokemonNamedAPIResource } from "./PokemonNamedAPIResource";

export type AbilityEffectChange = {
    effect_entries: Effect[];
    version_group: PokemonNamedAPIResource;
}