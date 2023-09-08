import { Test, TestingModule } from '@nestjs/testing';

import { ShoppingCartStatusService } from './shopping-cart-status.service';

describe('ShoppingCartStatusService', () => {
  let service: ShoppingCartStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShoppingCartStatusService],
    }).compile();

    service = module.get<ShoppingCartStatusService>(ShoppingCartStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
