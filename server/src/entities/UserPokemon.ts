import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Pokemon from "./Pokemon";

import User from "./User";

@Entity("users-pokemons")
export default class UserPokemon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  pokemonId: number;

  @ManyToOne(() => User, (user) => user.userPokemons)
  user: User;

  @ManyToOne(() => Pokemon, (pokemon) => pokemon.userPokemons)
  pokemon: Pokemon;
}
