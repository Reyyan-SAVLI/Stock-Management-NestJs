import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Market{
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   marketName: string;

   @Column()
   marketCode: number;

   @Column()
   city: string;

   @Column()
   province: string;

   @Column()
   address: string;
}