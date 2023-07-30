import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClothesService } from '../../services/clothes/clothes.service';
import { ClothesController } from './clothes.controller';
import { Clothes } from './entities/clothes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Clothes])],
  controllers: [ClothesController],
  providers: [ClothesService],
})
export class ClothesModule {}
