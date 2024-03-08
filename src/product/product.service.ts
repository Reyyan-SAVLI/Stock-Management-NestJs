import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddProductDto } from 'src/dtos/add-product.dto';
import { Product } from 'src/entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>){}
    
    async getProducts(){
            return await this.productRepository.find();
    }

    async addProduct(addProductDto: AddProductDto){
        const newProduct = new Product();
        newProduct.name = addProductDto.name;
        newProduct.imagepath = addProductDto.imagepath;
        newProduct.brand = addProductDto.brand;
        newProduct.barcode = addProductDto.barcode;
        newProduct.price = addProductDto.price;
        newProduct.kdvRatio = addProductDto.kdvRatio;
        newProduct.productCode = addProductDto.productCode;
        newProduct.quantity = addProductDto.quantity;
        newProduct.category = addProductDto.category;
        newProduct.subcategory = addProductDto.subcategory;

        return await this.productRepository.save(newProduct);
    }
}
