import { Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";

import Session from "../entities/Session";

export default async function checkToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authorization = req.headers.authorization;
  const token = authorization.replace("Bearer ", "");

  const repository = getRepository(Session);
  const existingSession = await repository.findOne({ token });

  if (!existingSession) return res.sendStatus(401);

  next();
}
