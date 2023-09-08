import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ShoppingCartStatus } from './entities/shopping-cart-status.entity';
import { ShoppingCartStatusController } from './shopping-cart-status.controller';
import { ShoppingCartStatusService } from './shopping-cart-status.service';

@Module({
  imports: [TypeOrmModule.forFeature([ShoppingCartStatus])],
  controllers: [ShoppingCartStatusController],
  providers: [ShoppingCartStatusService],
})
export class ShoppingCartStatusModule {}
