import { PokemonResourceList } from "../type/PokemonResourceList";
import { Resource } from "../type/Resource";

export const getAllPokemon = (url: string): Promise<PokemonResourceList> => {
  return new Promise((resolve, reject) => {
    // ポケモンデータを取得
    fetch(url)
      .then((res) => res.json())
      .then((data) => resolve(data));
  });
};

export const getPokemon = (url: string): Promise<Resource> => {
  return new Promise((resolve, reject) => {
    // ポケモンデータを取得
    fetch(url)
    fetch(url)
      .then((res) => res.json())
      .then((data) => resolve(data));
  });
};
