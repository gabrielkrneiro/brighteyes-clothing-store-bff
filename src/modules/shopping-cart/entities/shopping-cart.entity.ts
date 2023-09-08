import { Customer } from 'src/modules/customer/entities/customer.entity';
import { ShoppingCartStatus } from 'src/modules/shopping-cart-status/entities/shopping-cart-status.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ShoppingCart {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Customer, (customer) => customer.id)
  customer: Customer;

  @ManyToOne(
    () => ShoppingCartStatus,
    (shoppingCartStatus) => shoppingCartStatus.id,
  )
  status: ShoppingCartStatus;
}
