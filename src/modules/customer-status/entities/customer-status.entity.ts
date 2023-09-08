import { Customer } from 'src/modules/customer/entities/customer.entity';
import {
  Column,
  Entity,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum CustomerStatusEnum {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

@Entity()
export class CustomerStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ enum: CustomerStatusEnum, default: CustomerStatusEnum.ACTIVE })
  name: string;

  @OneToMany(() => Customer, (customer) => customer.id)
  @JoinTable()
  customers?: Customer[];
}
