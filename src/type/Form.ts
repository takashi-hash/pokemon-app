import { FormSprites } from "./FormSprites";
import { FormType } from "./FormType";
import { Name } from "./Name";
import { PokemonNamedAPIResource } from "./PokemonNamedAPIResource";

export type From = {
    id: number;
    name: string;
    order: number;
    form_order : number;
    is_default: boolean;
    is_battle_only: boolean;
    is_mega: boolean;
    form_name: string;
    pokemon: PokemonNamedAPIResource;
    types: FormType[];
    sprites: FormSprites[];
    version_group: PokemonNamedAPIResource;
    names: Name[];
    form_names: Name[];
}