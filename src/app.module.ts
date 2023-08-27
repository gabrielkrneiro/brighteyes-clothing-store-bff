import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';

import { ClothesModule } from './modules/clothes/clothes.module';
import { ClothesStatusModule } from './modules/clothes_status/clothes_status.module';
import { CustomerModule } from './modules/customer/customer.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeStatusModule } from './modules/employee-status/employee-status.module';
import { CustomerStatusModule } from './modules/customer-status/customer-status.module';

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
    EmployeeStatusModule,
    CustomerStatusModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
