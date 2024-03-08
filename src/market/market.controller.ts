import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MarketService } from './market.service';
import { AddMarketDto } from 'src/dtos/add-market.dto';

@Controller('market')
@ApiTags('Market')
export class MarketController {
    constructor(private readonly marketService: MarketService){}

    @Get()
    async getMarkets(){
        return await this.marketService.getMarkets();
    }

    @Post()
    async addProduct(@Body() data: AddMarketDto){
       return await this.marketService.addMarket(data);
    }
}
