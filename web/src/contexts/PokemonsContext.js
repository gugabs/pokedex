import { useState, createContext, useContext, useEffect } from "react";
import axios from "axios";

import UserContext from "../contexts/UserContext";

const PokemonsContext = createContext();
export default PokemonsContext;

export function PokemonsProvider({ children }) {
  const { token } = useContext(UserContext);

  const [pokemons, setPokemons] = useState();

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token?.token}`,
      },
    };

    updatePokemons();

    function updatePokemons() {
      axios
        .get(`${process.env.REACT_APP_API_BASE_URL}/pokemons`, config)
        .then((response) => {
          setPokemons(response.data);
        });
    }
  }, [token?.token]);

  return (
    <PokemonsContext.Provider value={{ pokemons }}>
      {children}
    </PokemonsContext.Provider>
  );
}
