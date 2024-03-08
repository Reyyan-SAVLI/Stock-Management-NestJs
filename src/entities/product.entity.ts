import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product{
    @PrimaryGeneratedColumn()
    id: number;

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
}