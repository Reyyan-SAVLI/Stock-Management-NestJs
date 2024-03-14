import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Storage } from "./storage.entity";
import { Product } from "./product.entity";
import { Main } from "./main.entity";

@Entity()
export class Market extends Product{
   @PrimaryGeneratedColumn()
   MId: number;

   @Column()
   marketName: string;

   @Column()
   marketCode: number;

   @Column()
   quantity: number;

   @Column()
   city: string;

   @Column()
   province: string;

   @Column()
   address: string;

   @ManyToOne(()=>Storage, (storage)=> storage.markets)
   storage: Storage;

   @OneToMany(()=> Main, (product)=> product.storage)
   products: Product[];
}