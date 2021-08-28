import { Request, Response, NextFunction } from "express";

import signInSchema from "../schemas/signIn";

export default async function checkSignInBody(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const validation = signInSchema.validate(req.body);

  if (validation.error) return res.sendStatus(400);

  next();
}
