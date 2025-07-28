import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SellerModule } from './Seller/seller.module';
import { CustomerModule } from './Customer/customer.module';
@Module({
  imports: [SellerModule,CustomerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
