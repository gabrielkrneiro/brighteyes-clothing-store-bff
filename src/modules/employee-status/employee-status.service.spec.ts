import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { EmployeeStatus } from './entities/employee-status.entity';
import { EmployeeStatusRepository } from './employee-status.repository';
import { EmployeeStatusService } from './employee-status.service';

describe('EmployeeStatusService', () => {
  let service: EmployeeStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EmployeeStatusService,
        {
          provide: getRepositoryToken(EmployeeStatus),
          useClass: EmployeeStatusRepository,
        },
      ],
    }).compile();

    service = module.get<EmployeeStatusService>(EmployeeStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
