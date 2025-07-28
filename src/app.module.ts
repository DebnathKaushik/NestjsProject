import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< HEAD
import { SellerModule } from './Seller/seller.module';

@Module({
  imports: [SellerModule],
=======
import { CustomerModule } from './Customer/customer.module';

@Module({
  imports: [CustomerModule],
>>>>>>> 4848534e775f15f43d619c19748b8f80a1bfaeba
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
