import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { error } from 'console';
import { AddMarketDto } from 'src/dtos/add-market.dto';
import { AddProductDto } from 'src/dtos/add-product.dto';
import { UpdateMarketDto } from 'src/dtos/update-market.dto';
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
        newMarket.name = addMarketDto.name;
        newMarket.imagepath = addMarketDto.imagepath;
        newMarket.brand = addMarketDto.brand;
        newMarket.barcode = addMarketDto.barcode;
        newMarket.price = addMarketDto.price;
        newMarket.kdvRatio = addMarketDto.kdvRatio;
        newMarket.productCode = addMarketDto.productCode;
        newMarket.quantity = addMarketDto.quantity;
        newMarket.category = addMarketDto.category;
        newMarket.subcategory = addMarketDto.subcategory;

        return await this.marketRepository.save(newMarket);
    }

    async updateMarket(updateMarketDto: UpdateMarketDto){
        const market = await this.marketRepository.findOne({
            where:{marketCode: updateMarketDto.marketCode,
                   productCode: updateMarketDto.productCode}
        });

        if (market) {
            market.marketName = updateMarketDto.marketName;
            market.marketCode = updateMarketDto.marketCode;
            market.productCode = updateMarketDto.productCode;
            market.name = updateMarketDto.productName;
            market.quantity = market.quantity + updateMarketDto.quantity;
        }else{
            throw error;
        }
        await this.marketRepository.save(market);

    }
}
