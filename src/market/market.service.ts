import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddMarketDto } from 'src/dtos/add-market.dto';
import { Market } from 'src/entities/market.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MarketService {
    constructor(
        @InjectRepository(Market)
        private readonly marketRepository: Repository<Market>){}
    
    async getMarkets(){
            return await this.marketRepository.find({
                where:{
                    
                }
            });
    }

    async addMarket(addMarketDto: AddMarketDto){
        const newMarket = new Market();
        newMarket.marketName = addMarketDto.marketName;
        newMarket.marketCode = addMarketDto.marketCode;
        newMarket.city = addMarketDto.city;
        newMarket.province = addMarketDto.province;
        newMarket.address = addMarketDto.address;        

        return await this.marketRepository.save(newMarket);
    }
}
