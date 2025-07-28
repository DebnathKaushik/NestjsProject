import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SellerModule } from './Seller/seller.module';

@Module({
  imports: [SellerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
