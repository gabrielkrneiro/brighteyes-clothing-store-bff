import { Customer } from 'src/modules/customer/entities/customer.entity';
import { ShoppingCartStatus } from 'src/modules/shopping-cart-status/entities/shopping-cart-status.entity';

import { ShoppingCart } from '../entities/shopping-cart.entity';

export class CreateShoppingCartDto implements Omit<ShoppingCart, 'id'> {
  customer: Customer;
  status: ShoppingCartStatus;
}
