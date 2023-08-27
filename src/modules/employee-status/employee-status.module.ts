import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EmployeeStatus } from './entities/employee-status.entity';
import { EmployeeStatusController } from './employee-status.controller';
import { EmployeeStatusService } from './employee-status.service';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeStatus])],
  controllers: [EmployeeStatusController],
  providers: [EmployeeStatusService],
})
export class EmployeeStatusModule {}
