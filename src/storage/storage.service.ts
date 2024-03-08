import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddStorageDto } from 'src/dtos/add-storage.dto';
import { Storage } from 'src/entities/storage.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StorageService {
    constructor(
        @InjectRepository(Storage)
        private readonly storageRepository: Repository<Storage>){}
    
    async getStorages(){
            return await this.storageRepository.find();
    }

    async addStorage(addStorageDto: AddStorageDto){
        const newStorage = new Storage();
        newStorage.storageName = addStorageDto.storageName;
        newStorage.storageCode = addStorageDto.storageCode;
        newStorage.city = addStorageDto.city;
        newStorage.province = addStorageDto.province;
        newStorage.address = addStorageDto.address;
            

        return await this.storageRepository.save(newStorage);
    }
}
