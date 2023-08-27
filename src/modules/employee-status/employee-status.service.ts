import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/core/abstract.service';
import { Repository } from 'typeorm';

import { CreateEmployeeStatusDto } from './dto/create-employee-status.dto';
import { UpdateEmployeeStatusDto } from './dto/update-employee-status.dto';
import { EmployeeStatus } from './entities/employee-status.entity';

@Injectable()
export class EmployeeStatusService extends AbstractService<
  EmployeeStatus,
  CreateEmployeeStatusDto,
  UpdateEmployeeStatusDto
> {
  constructor(
    @InjectRepository(EmployeeStatus)
    employeeStatusRepository: Repository<EmployeeStatus>,
  ) {
    super(employeeStatusRepository);
  }
}
