import React, { useEffect } from "react";
import "./App.css";
import Card from "./components/card/Card";
import Navbar from "./components/navbar/Navbar";
import useLoading from "./customhooks/useLoading";
import usePokemonAPI from "./customhooks/usePokemonAPI";
import { PokemonNamedAPIResource } from "./type/PokemonNamedAPIResource";
import { PokemonResourceList } from "./type/PokemonResourceList";

import { getAllPokemon, getPokemon } from "./util/pokemon";

function App() {
  const initialUrl = "https://pokeapi.co/api/v2/pokemon";
  const { loading, setLoading } = useLoading(true);
  const {
    pokemonData,
    setPokemonData,
    nextURL,
    setnextURL,
    prevURL,
    setprevURL,
  } = usePokemonAPI();

  useEffect(() => {
    const fetchPokemonData = async () => {
      let res: PokemonResourceList = await getAllPokemon(initialUrl);
      loadPokemon(res.results);
      setnextURL(res.next);
      setprevURL(res.previous);
      setLoading(false);
    };

    fetchPokemonData();
    // eslint-disable-next-line
  }, []);

  const loadPokemon = async (
    data: PokemonNamedAPIResource[]
  ): Promise<void> => {
    let _pokemonData = await Promise.all(
      data.map((pokemon) => {
        let pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };

  const handlePrevPage = async (): Promise<void> => {
    if (!prevURL) {
      return;
    }
    setLoading(true);
    let res: PokemonResourceList = await getAllPokemon(prevURL);
    loadPokemon(res.results);
    setprevURL(res.previous);
    setLoading(false);
  };

  const handleNextPage = async (): Promise<void> => {
    setLoading(true);
    let res: PokemonResourceList = await getAllPokemon(nextURL);
    loadPokemon(res.results);
    setnextURL(res.next);
    setprevURL(res.previous);
    setLoading(false);
  };

  return (
    <div className="App">
      <Navbar />
      {loading ? (
        <h1>ロード中</h1>
      ) : (
        <>
          <div className="pokemonCardContainer">
            {pokemonData.map((pokemon, index) => {
              return <Card key={index} pokemon={pokemon} />;
            })}
          </div>
          <div className="btn">
            <button onClick={handlePrevPage}>前へ</button>
            <button onClick={handleNextPage}>次へ</button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
