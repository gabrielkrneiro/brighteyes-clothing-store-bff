import { CustomerStatusEnum } from 'src/modules/customer-status/customer.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column({ enum: CustomerStatusEnum })
  status: number;
}
