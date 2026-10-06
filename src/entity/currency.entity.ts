import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";

import { User } from "./user.entity";

//@Index("currency_pk", ["id"], { unique: true })
@Entity("currency")
export class Currency extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "country", length: 150 })
  country: string;

  @Column("character varying", { name: "code", length: 10 })
  code: string;

  @Column("character varying", { name: "symbol", length: 10, nullable:true })
  symbol: string;

  @Column("numeric", { name: "live_rate", precision: 8, scale: 3 })
  liveRate: string;

  @Column("boolean", { name: "status", default: () => "true" })
  status: boolean;

  @Column("boolean", { name: "is_deleted", default: () => "false" })
  isDeleted: boolean;

  @Column("date", { name: "created_date" })
  createdDate: string;

  @Column("date", { name: "updated_date" })
  updatedDate: Date;

  
  @OneToMany(
    () => User,
    user => user.preferredCurrency2
  )
  users: User[];
}
