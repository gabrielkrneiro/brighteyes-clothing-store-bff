import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/core/abstract.service';

import { CreateShoppingCartDto } from './dto/create-shopping-cart.dto';
import { UpdateShoppingCartDto } from './dto/update-shopping-cart.dto';
import { ShoppingCart } from './entities/shopping-cart.entity';
import { ShoppingCartRepository } from './shopping-cart.repository';

@Injectable()
export class ShoppingCartService extends AbstractService<
  ShoppingCart,
  CreateShoppingCartDto,
  UpdateShoppingCartDto
> {
  constructor(
    @InjectRepository(ShoppingCart)
    shoppingCartRepository: ShoppingCartRepository,
  ) {
    super(shoppingCartRepository);
  }
}
