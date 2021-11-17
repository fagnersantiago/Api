import {
  PrimaryColumn,
  Column,
  Entity,
  CreateDateColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
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

  @Column("date", { name: "birth_date" })
  birth_date: Date;

  @Column()
  age: string;

  @ManyToOne(() => City, (city) => city.id)
  @JoinColumn({ name: "city_id" })
  city: City;

  @Column()
  city_id: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export default Client;
