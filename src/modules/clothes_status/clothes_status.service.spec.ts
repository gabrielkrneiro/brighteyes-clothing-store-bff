import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { ClothesStatus } from './entities/clothes_status.entity';
import { ClothesStatusRepository } from './clothes_status.repository';
import { ClothesStatusService } from './clothes_status.service';

describe('ClothesStatusService', () => {
  let service: ClothesStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClothesStatusService,
        {
          provide: getRepositoryToken(ClothesStatus),
          useClass: ClothesStatusRepository,
        },
      ],
    }).compile();

    service = module.get<ClothesStatusService>(ClothesStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
