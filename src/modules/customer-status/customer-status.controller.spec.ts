import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { CustomerStatus } from './entities/customer-status.entity';
import { CustomerStatusController } from './customer-status.controller';
import { CustomerStatusRepository } from './customer-status.repository';
import { CustomerStatusService } from './customer-status.service';

describe('CustomerStatusController', () => {
  let controller: CustomerStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerStatusController],
      providers: [
        CustomerStatusService,
        {
          provide: getRepositoryToken(CustomerStatus),
          useClass: CustomerStatusRepository,
        },
      ],
    }).compile();

    controller = module.get<CustomerStatusController>(CustomerStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
