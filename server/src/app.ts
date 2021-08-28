import express, { Request, Response } from "express";
import cors from "cors";

import "reflect-metadata";
import "./setup";

import connect from "./database/connection";

import checkToken from "./middlewares/checkToken";
import checkSignUpBody from "./middlewares/checkSignUpBody";
import checkSignInBody from "./middlewares/checkSignInBody";

import * as userController from "./controllers/user";
import * as pokemonController from "./controllers/pokemon";

const app = express();

app.use(express.json());
app.use(cors());

app.post("/sign-up", checkSignUpBody, userController.signUp);
app.post("/sign-in", checkSignInBody, userController.signIn);

app.post("/my-pokemons/:id/add", checkToken, pokemonController.addToMyPokemons);
app.post("/my-pokemons/:id/remove", checkToken, pokemonController.removeFromMyPokemons);

app.get("/pokemons", checkToken, pokemonController.getAllPokemons);

export async function connectDatabase() {
  await connect();
}

export default app;
