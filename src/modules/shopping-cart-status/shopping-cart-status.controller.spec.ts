import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingCartStatusController } from './shopping-cart-status.controller';
import { ShoppingCartStatusService } from './shopping-cart-status.service';

describe('ShoppingCartStatusController', () => {
  let controller: ShoppingCartStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShoppingCartStatusController],
      providers: [ShoppingCartStatusService],
    }).compile();

    controller = module.get<ShoppingCartStatusController>(ShoppingCartStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
