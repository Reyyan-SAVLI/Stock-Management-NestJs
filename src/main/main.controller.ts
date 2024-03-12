import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MainService } from './main.service';
import { AddProductDto } from 'src/dtos/add-product.dto';

@Controller('main')
@ApiTags('Main')
export class MainController {

    constructor(private readonly mainService: MainService){}
    
    @Get()
    async getMain(){
        return await this.mainService.getProducts();
    }

    @Post()
    async addProduct(@Body() data: AddProductDto){
       return await this.mainService.addProduct(data);
    }

}