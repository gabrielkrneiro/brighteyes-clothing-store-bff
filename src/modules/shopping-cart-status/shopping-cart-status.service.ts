import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/core/abstract.service';

import { CreateShoppingCartStatusDto } from './dto/create-shopping-cart-status.dto';
import { UpdateShoppingCartStatusDto } from './dto/update-shopping-cart-status.dto';
import { ShoppingCartStatus } from './entities/shopping-cart-status.entity';
import { ShoppingCartStatusRepository } from './shopping-cart-status.repository';

@Injectable()
export class ShoppingCartStatusService extends AbstractService<
  ShoppingCartStatus,
  CreateShoppingCartStatusDto,
  UpdateShoppingCartStatusDto
> {
  constructor(
    @InjectRepository(ShoppingCartStatus)
    shoppingCartStatusRepository: ShoppingCartStatusRepository,
  ) {
    super(shoppingCartStatusRepository);
  }
}
