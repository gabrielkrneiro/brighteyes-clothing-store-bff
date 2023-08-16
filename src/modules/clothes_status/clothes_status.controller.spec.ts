import { Test, TestingModule } from '@nestjs/testing';

import { ClothesStatusController } from './clothes_status.controller';
import { ClothesStatusService } from './clothes_status.service';

describe('ClothesStatusController', () => {
  let controller: ClothesStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClothesStatusController],
      providers: [ClothesStatusService],
    }).compile();

    controller = module.get<ClothesStatusController>(ClothesStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
