import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductService } from './product.service';
import { AddProductDto } from 'src/dtos/add-product.dto';

@Controller('product')
@ApiTags('Product')
export class ProductController {
    constructor(private readonly productService: ProductService){}

    @Get()
    async getUser(){
        return await this.productService.getProducts();
    }

    @Post()
    async addProduct(@Body() data: AddProductDto){
       return await this.productService.addProduct(data);
    }
}
