import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Market } from "./market.entity";
import { Storage } from "./storage.entity";
import { Product } from "./product.entity";

@Entity()
export class Main extends Product{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    quantity: number;

}