import { getRepository } from "typeorm";

import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

import User from "../entities/User";
import Session from "../entities/Session";

export async function signUp(
  email: string,
  password: string
): Promise<boolean> {
  const repository = getRepository(User);
  const existingUser = await repository.findOne({ email });

  if (existingUser) return false;

  const hashedPassword = bcrypt.hashSync(password, 10);

  const user = new User();
  user.email = email;
  user.password = hashedPassword;

  await repository.insert(user);
  return true;
}

export async function signIn(
  email: string,
  password: string
): Promise<boolean | string> {
  const userRepository = getRepository(User);
  const user = await userRepository.findOne({ email });

  if (!bcrypt.compareSync(password, user.password)) return false;

  const token = uuidv4();

  const session = new Session();
  session.userId = user.id;
  session.token = token;

  const sessionRepository = getRepository(Session);
  await sessionRepository.insert(session);
  return session.token;
}
