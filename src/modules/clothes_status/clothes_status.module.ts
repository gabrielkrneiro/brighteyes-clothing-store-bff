import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ClothesStatus } from './entities/clothes_status.entity';
import { ClothesStatusController } from './clothes_status.controller';
import { ClothesStatusService } from './clothes_status.service';

@Module({
  imports: [TypeOrmModule.forFeature([ClothesStatus])],
  controllers: [ClothesStatusController],
  providers: [ClothesStatusService],
})
export class ClothesStatusModule {}
