import { Test, TestingModule } from '@nestjs/testing';

import { ClothesService } from './services/clothes.service';
import { ClothesController } from './clothes.controller';

describe('ClothesController', () => {
  let controller: ClothesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClothesController],
      providers: [ClothesService],
    }).compile();

    controller = module.get<ClothesController>(ClothesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
