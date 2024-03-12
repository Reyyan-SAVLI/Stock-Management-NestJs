import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddProductDto } from 'src/dtos/add-product.dto';
import { Main } from 'src/entities/main.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MainService {
    constructor(
        @InjectRepository(Main)
        private readonly productRepository: Repository<Main>){}
    
    async getProducts(){
            return await this.productRepository.find();
    }

    async addProduct(addProductDto: AddProductDto){
        const newProduct = new Main();
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
