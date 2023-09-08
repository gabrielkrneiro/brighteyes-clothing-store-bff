import { ShoppingCartStatus } from '../entities/shopping-cart-status.entity';

export class CreateShoppingCartStatusDto
  implements Omit<ShoppingCartStatus, 'id' | 'shoppingCarts'>
{
  name: string;
}
