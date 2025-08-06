import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SellerModule } from './Seller/seller.module';
import { CustomerModule } from './Customer/customer.module';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [CustomerModule,SellerModule, TypeOrmModule.forRoot(
{ 
  name:'sellerConnection',
  type: 'postgres',
host: 'localhost',
port: 5432,
username: 'postgres',
password: 'root',
database: 'NestJsProject',//Change to your database name
autoLoadEntities: true,
synchronize: true,
} ),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
