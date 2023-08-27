import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { ClothesRepository } from '../clothes.repository';
import { Clothes } from '../entities/clothes.entity';

import { ClothesService } from './clothes.service';

describe('ClothesService', () => {
  let service: ClothesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClothesService,
        {
          provide: getRepositoryToken(Clothes),
          useClass: ClothesRepository,
        },
      ],
    }).compile();

    service = module.get<ClothesService>(ClothesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
