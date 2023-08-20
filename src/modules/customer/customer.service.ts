import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/core/abstract.service';
import { Repository } from 'typeorm';

import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomerService extends AbstractService<
  Customer,
  CreateCustomerDto,
  UpdateCustomerDto
> {
  constructor(
    @InjectRepository(Customer)
    customerRepository: Repository<Customer>,
  ) {
    super(customerRepository);
  }
}
