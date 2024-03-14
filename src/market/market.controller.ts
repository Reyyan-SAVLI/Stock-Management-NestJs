import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MarketService } from './market.service';
import { AddMarketDto } from 'src/dtos/add-market.dto';
import { UpdateMarketDto } from 'src/dtos/update-market.dto';

@Controller('market')
@ApiTags('Market')
export class MarketController {
    constructor(private readonly marketService: MarketService){}

    @Get()
    async getMarkets(){
        return await this.marketService.getMarkets();
    }

    @Post()
    async addMarket(@Body() data: AddMarketDto){
       return await this.marketService.addMarket(data);
    }

    @Put()
    updateMarket(
        @Body() updateMarketDto: UpdateMarketDto){

        return this.marketService.updateMarket(updateMarketDto);
    }
}
