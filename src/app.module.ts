import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClothesModule } from './modules/clothes/clothes.module';
import { Clothes } from './modules/clothes/entities/clothes.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.db',
      autoLoadEntities: true,
      // Setting synchronize: true shouldn't be used in production - otherwise you can lose production data.
      synchronize: true,
    }),
    ClothesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
