import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MarketModule } from './market/market.module';
import { StorageModule } from './storage/storage.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConfig } from './db/data-source.config';
import { AuthModule } from './auth/auth.module';
import { MainModule } from './main/main.module';

@Module({
  imports: [ TypeOrmModule.forRoot(getConfig()),
    UserModule,  
    MarketModule, 
    StorageModule, AuthModule, MainModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
