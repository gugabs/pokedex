import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import UserPokemon from "./UserPokemon";

@Entity("pokemons")
export default class Pokemon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  number: number;

  @Column()
  image: string;

  @Column()
  weight: number;

  @Column()
  height: number;

  @Column()
  baseExp: number;

  @Column()
  description: string;

  @OneToMany(() => UserPokemon, (userPokemon) => userPokemon.pokemon)
  userPokemons: UserPokemon[];
}
