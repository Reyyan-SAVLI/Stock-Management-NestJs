import { Column, ManyToOne} from "typeorm";
import { Market } from "./market.entity";



export abstract class Product{

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
    category: string;

    @Column()
    subcategory: string;

    @ManyToOne(()=>Market, (market)=> market.products)
    market: Market;
}