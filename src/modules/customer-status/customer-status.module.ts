import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CustomerStatus } from './entities/customer-status.entity';
import { CustomerStatusController } from './customer-status.controller';
import { CustomerStatusService } from './customer-status.service';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerStatus])],
  controllers: [CustomerStatusController],
  providers: [CustomerStatusService],
})
export class CustomerStatusModule {}
