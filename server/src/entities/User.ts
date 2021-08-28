import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Pokemon from "./Pokemon";

import Session from "./Session";
import UserPokemon from "./UserPokemon";

@Entity("users")
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Session, (session) => session.user)
  sessions: Session[];

  @OneToMany(() => UserPokemon, (userPokemon) => userPokemon.user)
  userPokemons: UserPokemon[];
}
