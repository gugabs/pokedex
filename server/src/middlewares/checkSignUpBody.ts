import { Request, Response, NextFunction } from "express";

import signUpSchema from "../schemas/signUp";

export default async function checkSignInBody(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const validation = signUpSchema.validate(req.body);

  if (validation.error || req.body.password !== req.body.confirmPassword)
    return res.sendStatus(400);

  next();
}
