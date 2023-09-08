import { Repository } from 'typeorm';

import { ShoppingCartStatus } from './entities/shopping-cart-status.entity';

export class ShoppingCartStatusRepository extends Repository<ShoppingCartStatus> {}
