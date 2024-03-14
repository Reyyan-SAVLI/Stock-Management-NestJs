import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { StorageService } from './storage.service';
import { AddStorageDto } from 'src/dtos/add-storage.dto';
import { UpdateStorageDto } from 'src/dtos/update-storage.dto';

@Controller('storage')
@ApiTags('Storage')
export class StorageController {
    constructor(private readonly storageService: StorageService){}

    @Get()
    async getStorages(){
        return await this.storageService.getStorages();
    }

    @Post()
    async addStorage(@Body() data: AddStorageDto){
       return await this.storageService.addStorage(data);
    }

    @Put()
    updateStorage(
        @Body() updateStorageDto: UpdateStorageDto){

        return this.storageService.updateStorage(updateStorageDto);
    }
}
