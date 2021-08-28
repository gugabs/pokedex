import { Request, Response } from "express";

import * as pokemonService from "../services/pokemon";

export async function getAllPokemons(req: Request, res: Response) {
  const token = req.headers.authorization.replace("Bearer ", "");

  const pokemons = await pokemonService.getAllPokemons(token);
  res.status(200).send(pokemons);
}

export async function addToMyPokemons(req: Request, res: Response) {
  const { id } = req.params;
  const token = req.headers.authorization.replace("Bearer ", "");

  if (pokemonService.addToMyPokemons(token, Number(id))) res.sendStatus(200);
}

export async function removeFromMyPokemons(req: Request, res: Response) {
  const { id } = req.params;
  const token = req.headers.authorization.replace("Bearer ", "");

  if (pokemonService.removeFromMyPokemons(token, Number(id)))
    res.sendStatus(200);
}
