import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';

import { ClothesModule } from './modules/clothes/clothes.module';
import { ClothesStatusModule } from './modules/clothes_status/clothes_status.module';
import { CustomerModule } from './modules/customer/customer.module';
import { CustomerStatusModule } from './modules/customer-status/customer-status.module';
import { ShoppingCartModule } from './modules/shopping-cart/shopping-cart.module';
import { ShoppingCartStatusModule } from './modules/shopping-cart-status/shopping-cart-status.module';
import { AppController } from './app.controller';

const config: SqliteConnectionOptions = {
  type: 'sqlite',
  database: 'database.db',
  // Setting synchronize: true shouldn't be used in production - otherwise you can lose production data.
  synchronize: true,
};

@Module({
  imports: [
    TypeOrmModule.forRoot({ ...config, autoLoadEntities: true }),
    ClothesModule,
    ClothesStatusModule,
    CustomerModule,
    CustomerStatusModule,
    ShoppingCartModule,
    ShoppingCartStatusModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
