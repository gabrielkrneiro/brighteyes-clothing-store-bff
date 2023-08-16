import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClothesModule } from './modules/clothes/clothes.module';
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
