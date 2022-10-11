import { AbilityEffectChange } from "./AbilityEffectChange ";
import { AbilityFlavorText } from "./AbilityFlavorText";
import { AbilityPokemon } from "./AbilityPokemon";
import { Name } from "./Name";
import { PokemonNamedAPIResource } from "./PokemonNamedAPIResource";
import { VerboseEffect } from "./VerboseEffect";

export type Ability = {
  id: number;
  name: string;
  is_main_series: boolean;
  generation: PokemonNamedAPIResource;
  names: Name[];
  effect_entries: VerboseEffect[];
  effect_changes: AbilityEffectChange[];
  flavor_text_entries: AbilityFlavorText[];
  pokemon: AbilityPokemon[];
};
