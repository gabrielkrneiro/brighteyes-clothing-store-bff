import { CustomerStatus } from 'src/modules/customer-status/entities/customer-status.entity';
import { ShoppingCart } from 'src/modules/shopping-cart/entities/shopping-cart.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  cpf: string;

  @Column()
  birthdate: Date;

  @ManyToOne(() => CustomerStatus, (customerStatus) => customerStatus.id, {
    eager: true,
  })
  @JoinTable()
  status: CustomerStatus;

  @OneToMany(() => ShoppingCart, (shoppingCart) => shoppingCart.id)
  shoppingCarts?: ShoppingCart[];
}
