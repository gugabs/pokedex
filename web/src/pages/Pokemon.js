import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";

import axios from "axios";
import styled from "styled-components";

import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";

import PokemonsContext from "../contexts/PokemonsContext";
import UserContext from "../contexts/UserContext";

export default function PokemonPage() {
  const { id } = useParams();

  const [pokemon, setPokemon] = useState();

  const { pokemons } = useContext(PokemonsContext);
  const { token } = useContext(UserContext);

  const config = {
    headers: {
      Authorization: `Bearer ${token.token}`,
    },
  };

  useEffect(() => {
    if (pokemons) {
      setPokemon(pokemons.find((pokemon) => pokemon.id === parseInt(id)));
    }
  }, [id, pokemons]);

  function togglePokemon() {
    if (pokemon.inMyPokemons) removePokemon();
    else addPokemon();
  }

  function addPokemon() {
    axios
      .post(
        `${process.env.REACT_APP_API_BASE_URL}/my-pokemons/${id}/add`,
        null,
        config
      )
      .then(() => {
        pokemon.inMyPokemons = true;
        setPokemon({ ...pokemon });
      });
  }

  function removePokemon() {
    axios
      .post(
        `${process.env.REACT_APP_API_BASE_URL}/my-pokemons/${id}/remove`,
        null,
        config
      )
      .then(() => {
        pokemon.inMyPokemons = false;
        setPokemon({ ...pokemon });
      });
  }

  return (
    <>
      <Header />

      <Container>
        {!pokemon ? (
          "Pokémon not found!"
        ) : (
          <>
            <Section>
              <NavButton>
                {id > 1 && <Link to={`/pokemon/${parseInt(id) - 1}`}>‹</Link>}
              </NavButton>
              <PokemonContainer>
                <img src={pokemon.image} alt={pokemon.name} />
                <span className="name">{pokemon.name}</span>
                <span className="id">#{id}</span>
              </PokemonContainer>
              <NavButton>
                {id < 151 && <Link to={`/pokemon/${parseInt(id) + 1}`}>›</Link>}
              </NavButton>
            </Section>

            <Section center>
              <Row>
                <Card>
                  <div className="title">Weight</div>
                  <div>{pokemon.weight}</div>
                </Card>
                <Card>
                  <div className="title">Height</div>
                  <div>{pokemon.height}</div>
                </Card>
                <Card>
                  <div className="title">Base XP</div>
                  <div>{pokemon.baseExp}</div>
                </Card>
              </Row>
              <Row>
                <Card>
                  <div className="title">Description</div>
                  {pokemon.description}
                </Card>
              </Row>
            </Section>

            <Button onClick={togglePokemon}>
              {pokemon.inMyPokemons ? "Remove from" : "Add to"} My Pokémons
            </Button>
          </>
        )}
      </Container>

      <Footer />
    </>
  );
}

const Section = styled.div`
  width: 100%;
  background: #fff;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  display: flex;
  justify-content: ${(props) => (props.center ? "center" : "space-between")};
  align-items: center;
  margin-bottom: 20px;
  padding: 20px 0;
  flex-wrap: wrap;
`;

const Row = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 100%;
  justify-content: space-around;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  .title {
    color: #aaa;
    margin-bottom: 10px;
  }
`;

const Container = styled.div`
  margin: 85px 0 65px;
  padding: 25px 0;
  background-color: #f2f2f2;
  padding: 20px;
  min-height: calc(100vh - 150px);
`;

const PokemonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NavButton = styled.div`
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  font-size: 48px;
  color: #aaa;

  &:hover {
    filter: brightness(0.8);
  }
`;
