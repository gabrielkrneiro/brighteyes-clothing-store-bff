import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { CustomerStatus } from '../customer.enum';

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

  @Column({ enum: CustomerStatus })
  status: number;
}
