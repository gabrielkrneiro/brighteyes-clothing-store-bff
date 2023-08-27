import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { CustomerStatus } from './entities/customer-status.entity';
import { CustomerStatusRepository } from './customer-status.repository';
import { CustomerStatusService } from './customer-status.service';

describe('CustomerStatusService', () => {
  let service: CustomerStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CustomerStatusService,
        {
          provide: getRepositoryToken(CustomerStatus),
          useClass: CustomerStatusRepository,
        },
      ],
    }).compile();

    service = module.get<CustomerStatusService>(CustomerStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
