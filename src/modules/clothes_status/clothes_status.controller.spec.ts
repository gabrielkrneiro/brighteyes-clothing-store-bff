import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { ClothesStatus } from './entities/clothes_status.entity';
import { ClothesStatusController } from './clothes_status.controller';
import { ClothesStatusRepository } from './clothes_status.repository';
import { ClothesStatusService } from './clothes_status.service';

export type MockType<T> = {
  [P in keyof T]?: jest.Mock<any>;
};

describe('ClothesStatusController', () => {
  let controller: ClothesStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClothesStatusController],
      providers: [
        ClothesStatusService,
        {
          provide: getRepositoryToken(ClothesStatus),
          useClass: ClothesStatusRepository,
        },
      ],
    }).compile();

    controller = module.get<ClothesStatusController>(ClothesStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
