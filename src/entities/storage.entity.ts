import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Market } from "./market.entity";
import { Product } from "./product.entity";
import { Main } from "./main.entity";

@Entity()
export class Storage extends Product{
   @PrimaryGeneratedColumn()
   SId: number;

   @Column()
   storageName: string;

   @Column()
   storageCode: number;

   @Column()
   quantity: number;

   @Column()
   city: string;

   @Column()
   province: string;

   @Column()
   address: string;

   @OneToMany(()=> Market, (market)=> market.storage)
   markets: Market[];

   @OneToMany(()=> Main, (product)=> product.storage)
   products: Main[];
}