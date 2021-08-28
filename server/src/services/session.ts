import { getRepository } from "typeorm";

import Session from "../entities/Session";
import User from "../entities/User";

export async function findUserByToken(token: string): Promise<User> {
  const repository = getRepository(Session);
  const session = await repository.findOne({
    where: {
      token,
    },
    relations: ["user"],
  });

  return session.user;
}
