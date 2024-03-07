import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { MarketModule } from './market/market.module';
import { StorageModule } from './storage/storage.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConfig } from './db/data-source.config';

@Module({
  imports: [ TypeOrmModule.forRoot(getConfig()),
    UserModule, 
    ProductModule, 
    MarketModule, 
    StorageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
