import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { error } from 'console';
import { AddStorageDto } from 'src/dtos/add-storage.dto';
import { UpdateStorageDto } from 'src/dtos/update-storage.dto';
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
        newStorage.name = addStorageDto.name;
        newStorage.imagepath = addStorageDto.imagepath;
        newStorage.brand = addStorageDto.brand;
        newStorage.barcode = addStorageDto.barcode;
        newStorage.price = addStorageDto.price;
        newStorage.kdvRatio = addStorageDto.kdvRatio;
        newStorage.productCode = addStorageDto.productCode;
        newStorage.quantity = addStorageDto.quantity;
        newStorage.category = addStorageDto.category;
        newStorage.subcategory = addStorageDto.subcategory;
            
        return await this.storageRepository.save(newStorage);
    }

    async updateStorage(updateStorageDto: UpdateStorageDto){
        const storage = await this.storageRepository.findOne({
            where:{storageCode: updateStorageDto.storageCode,
                   productCode: updateStorageDto.productCode}
        });

        if (storage) {
            storage.storageName = updateStorageDto.storageName;
            storage.storageCode = updateStorageDto.storageCode;
            storage.productCode = updateStorageDto.productCode;
            storage.name = updateStorageDto.productName;
            storage.quantity = storage.quantity + updateStorageDto.quantity;
        }else{
            throw error;
        }
        await this.storageRepository.save(storage);

    }
}
