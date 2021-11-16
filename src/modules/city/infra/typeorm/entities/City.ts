import { PrimaryColumn, Column, Entity, CreateDateColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("city")
class City {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  state: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export default City;
