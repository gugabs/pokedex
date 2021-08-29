import { useContext } from "react";
import styled from "styled-components";

import Header from "../components/Header";
import PokemonButton from "../components/PokemonButton";
import Footer from "../components/Footer";

import PokemonsContext from "../contexts/PokemonsContext";

export default function PokemonListPage() {
  const { pokemons } = useContext(PokemonsContext);

  return (
    <>
      <Header />

      <Container>
        {pokemons === null && "Loading..."}
        {pokemons && pokemons.length === 0 && "No Pokémon found!"}
        {pokemons &&
          pokemons.map((p) => <PokemonButton pokemon={p} key={p.name} />)}
      </Container>

      <Footer currentPage="list" />
    </>
  );
}

const Container = styled.div`
  min-height: calc(100vh - 150px);
  padding: 25px 0;
  margin: 85px 0 65px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;

  background-color: #f2f2f2;
`;
