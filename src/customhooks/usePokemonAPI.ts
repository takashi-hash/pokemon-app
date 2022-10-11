import { useState } from "react";
import { Resource } from "../type/Resource";

type PokemonAPI_State = {
  (): {
    pokemonData: Resource[];
    setPokemonData: React.Dispatch<React.SetStateAction<Resource[]>>;
    nextURL: string;
    setnextURL: React.Dispatch<React.SetStateAction<string>>;
    prevURL: string;
    setprevURL: React.Dispatch<React.SetStateAction<string>>;
  };
};

const usePokemonAPI: PokemonAPI_State = () => {
  const [pokemonData, setPokemonData] = useState<Array<Resource>>([]);
  const [prevURL, setprevURL] = useState<string>("");
  const [nextURL, setnextURL] = useState<string>("");

  return {
    pokemonData,
    setPokemonData,
    nextURL,
    setnextURL,
    prevURL,
    setprevURL,
  };
};

export default usePokemonAPI;
