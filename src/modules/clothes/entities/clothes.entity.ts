import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Clothes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: true, name: 'is_available' })
  isAvailable: boolean;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  photo: string;

  @Column({ name: 'quantity_in_stock' })
  quantityInStock: number;
}
