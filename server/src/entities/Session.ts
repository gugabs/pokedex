import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import User from "./User";

@Entity("sessions")
export default class Session {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  token: string;

  @ManyToOne(() => User, (user) => user.sessions)
  user: User;
}
