import { ShoppingCart } from 'src/modules/shopping-cart/entities/shopping-cart.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

export enum ShoppingCartStatusEnum {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  CANCELED = 'CANCELED',
}

@Entity()
export class ShoppingCartStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    enum: ShoppingCartStatusEnum,
    default: ShoppingCartStatusEnum.PENDING,
  })
  name: string;

  @OneToMany(() => ShoppingCart, (shoppingCart) => shoppingCart.id)
  shoppingCarts: ShoppingCart[];
}
