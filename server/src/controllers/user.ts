import { Request, Response } from "express";

import * as userService from "../services/user";

export async function signUp(req: Request, res: Response) {
  const { email, password, confirmPassword } = req.body;

  if (await userService.signUp(email, password)) res.sendStatus(201);
  else res.sendStatus(409);
}

export async function signIn(req: Request, res: Response) {
  const { email, password } = req.body;

  const token = await userService.signIn(email, password);

  if (token) {
    res.status(200).send({
      token,
    });
  } else res.sendStatus(401);
}
