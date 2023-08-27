import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/core/abstract.service';

import { CreateCustomerStatusDto } from './dto/create-customer-status.dto';
import { UpdateCustomerStatusDto } from './dto/update-customer-status.dto';
import { CustomerStatus } from './entities/customer-status.entity';
import { CustomerStatusRepository } from './customer-status.repository';

@Injectable()
export class CustomerStatusService extends AbstractService<
  CustomerStatus,
  CreateCustomerStatusDto,
  UpdateCustomerStatusDto
> {
  constructor(
    @InjectRepository(CustomerStatus)
    customerStatusRepository: CustomerStatusRepository,
  ) {
    super(customerStatusRepository);
  }
}
