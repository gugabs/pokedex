import "reflect-metadata";

import axios from "axios";
import { connectDatabase } from "../app";
import { getRepository } from "typeorm";

import Pokemon from "../entities/Pokemon";

connectDatabase().then(() => {
  getPokemon(1);
});

async function getPokemon(pokemonId: number): Promise<void> {
  if (pokemonId > 151) return;

  await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then(async ({ data }) => {
      const pokemon = new Pokemon();
      pokemon.name = data.name;
      pokemon.number = data.id;
      pokemon.image = data.sprites.front_default;
      pokemon.weight = data.weight;
      pokemon.height = data.height;
      pokemon.baseExp = data.base_experience;
      pokemon.description = data.types[0].type.name;

      console.log(`Inserting ${pokemon.name}`);

      const repository = getRepository(Pokemon);
      await repository.insert(pokemon);
    });

  return await getPokemon(pokemonId + 1);
}
