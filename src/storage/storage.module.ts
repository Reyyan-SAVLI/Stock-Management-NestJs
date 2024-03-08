import { Module } from '@nestjs/common';
import { StorageController } from './storage.controller';
import { StorageService } from './storage.service';
import { Storage } from 'src/entities/storage.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Storage])],
  controllers: [StorageController],
  providers: [StorageService]
})
export class StorageModule {}
