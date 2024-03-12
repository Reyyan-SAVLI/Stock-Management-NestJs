import { Module } from '@nestjs/common';
import { MainController } from './main.controller';
import { MainService } from './main.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Main } from 'src/entities/main.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Main])],
  controllers: [MainController],
  providers: [MainService]
})
export class MainModule {}

