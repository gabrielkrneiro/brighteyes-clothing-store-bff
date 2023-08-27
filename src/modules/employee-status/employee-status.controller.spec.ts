import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { EmployeeStatus } from './entities/employee-status.entity';
import { EmployeeStatusController } from './employee-status.controller';
import { EmployeeStatusRepository } from './employee-status.repository';
import { EmployeeStatusService } from './employee-status.service';

describe('EmployeeStatusController', () => {
  let controller: EmployeeStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeeStatusController],
      providers: [
        EmployeeStatusService,
        {
          provide: getRepositoryToken(EmployeeStatus),
          useClass: EmployeeStatusRepository,
        },
      ],
    }).compile();

    controller = module.get<EmployeeStatusController>(EmployeeStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
