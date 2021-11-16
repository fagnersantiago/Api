import {
  PrimaryColumn,
  Column,
  Entity,
  CreateDateColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { v4 as uuidv4 } from "uuid";
import City from "../../../../city/infra/typeorm/entities/City";

@Entity("client")
class Client {
  @PrimaryColumn()
  id: string;

  @Column()
  full_name: string;

  @Column()
  gender: string;

  @Column()
  birth_date: Date;

  @Column()
  age: string;

  @OneToOne(() => City, (client) => client.name)
  @JoinColumn({ name: "city_id" })
  @JoinColumn({ name: "name" })
  city: City;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export default Client;
