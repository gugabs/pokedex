import { getRepository } from "typeorm";

import Pokemon from "../entities/Pokemon";
import User from "../entities/User";
import UserPokemon from "../entities/UserPokemon";

import * as sessionService from "./session";

interface PokemonReturnFormat extends Pokemon {
  inMyPokemons: boolean;
}

export async function getAllPokemons(
  token: string
): Promise<PokemonReturnFormat[]> {
  const user = await sessionService.findUserByToken(token);

  const userRepository = getRepository(User);
  const myPokemons = await userRepository.findOne({
    where: {
      id: user.id,
    },
    relations: ["userPokemons", "userPokemons.pokemon"],
  });

  const myPokemonsIds = myPokemons.userPokemons.map(
    (userPokemon) => userPokemon.pokemon.id
  );

  const pokemonRepository = getRepository(Pokemon);
  const allPokemons = await pokemonRepository.find();

  return allPokemons.map((pokemon) => {
    if (myPokemonsIds.includes(pokemon.id)) {
      return { ...pokemon, inMyPokemons: true };
    } else {
      return { ...pokemon, inMyPokemons: false };
    }
  });
}

export async function addToMyPokemons(
  token: string,
  pokemonId: number
): Promise<boolean> {
  const user = await sessionService.findUserByToken(token);

  const myNewPokemon = new UserPokemon();
  myNewPokemon.userId = user.id;
  myNewPokemon.pokemonId = pokemonId;

  const repository = getRepository(UserPokemon);
  await repository.insert(myNewPokemon);
  return true;
}

export async function removeFromMyPokemons(
  token: string,
  pokemonId: number
): Promise<boolean> {
  const user = await sessionService.findUserByToken(token);

  const repository = getRepository(UserPokemon);

  const pokemonToDelete = await repository.find({
    where: {
      userId: user.id,
      pokemonId,
    },
  });

  repository.remove(pokemonToDelete);
  return true;
}
