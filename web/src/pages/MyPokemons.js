import { useContext } from 'react';
import styled from "styled-components";

import Header from "../components/Header";
import PokemonButton from '../components/PokemonButton';
import Footer from "../components/Footer";

import PokemonsContext from "../contexts/PokemonsContext";

export default function MyPokemons() {
    const { pokemons } = useContext(PokemonsContext);
    const myPokemons = pokemons?.filter(pokemon => pokemon.inMyPokemons);

    return (
        <>
            <Header />

            <Container>
                {pokemons === null && "Loading..."}
                {myPokemons && myPokemons.length === 0 && "No Pokémon found!"}
                {myPokemons && myPokemons.filter(pokemon => pokemon.inMyPokemons).map(p => <PokemonButton pokemon={p} key={p.name} />)}
            </Container>

            <Footer currentPage="my-pokemons" />
        </>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 85px 0 65px;
    padding: 25px 0;
    background-color: #F2F2F2;
    min-height: calc(100vh - 150px);
    align-items: flex-start;
    align-content: flex-start;
`;
