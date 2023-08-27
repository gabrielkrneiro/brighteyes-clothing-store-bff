import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { Clothes } from './entities/clothes.entity';
import { ClothesService } from './services/clothes.service';
import { ClothesController } from './clothes.controller';
import { ClothesRepository } from './clothes.repository';

describe('ClothesController', () => {
  let controller: ClothesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClothesController],
      providers: [
        ClothesService,
        {
          provide: getRepositoryToken(Clothes),
          useClass: ClothesRepository,
        },
      ],
    }).compile();

    controller = module.get<ClothesController>(ClothesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
