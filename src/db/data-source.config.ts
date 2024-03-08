import { Market } from "src/entities/market.entity";
import { Product } from "src/entities/product.entity";
import { Storage } from "src/entities/storage.entity";
import { User } from "src/entities/user.entity";
import { DataSourceOptions } from "typeorm";

export function getConfig(){
    return{
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '1234',
    database: 'stock_management',
    entities: [User, Product, Market, Storage],
    synchronize: true,
   } as DataSourceOptions;
}