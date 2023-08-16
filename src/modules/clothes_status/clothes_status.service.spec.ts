import { Test, TestingModule } from '@nestjs/testing';

import { ClothesStatusService } from './clothes_status.service';

describe('ClothesStatusService', () => {
  let service: ClothesStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClothesStatusService],
    }).compile();

    service = module.get<ClothesStatusService>(ClothesStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
