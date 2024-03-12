import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Storage } from "./storage.entity";
import { Market } from "./market.entity";

@Entity()
export abstract class Product{
    @PrimaryGeneratedColumn()
    pId: number;

    @Column()
    name: string;

    @Column()
    imagepath: string;

    @Column()
    brand: string;

    @Column()
    barcode: string;

    @Column("decimal",{precision: 5, scale: 2})
    price: number;

    @Column("decimal",{precision: 5, scale: 2})
    kdvRatio: number;

    @Column()
    productCode: number;

    @Column()
    quantity: number;

    @Column()
    category: string;

    @Column()
    subcategory: string;

    @ManyToOne(()=>Storage, (storage)=> storage.products)
    storage: Storage;

    @ManyToOne(()=>Market, (market)=> market.products)
    market: Market;
}