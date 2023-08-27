import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CustomerStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
