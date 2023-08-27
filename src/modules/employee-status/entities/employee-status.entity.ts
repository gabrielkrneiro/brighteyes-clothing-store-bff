import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EmployeeStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
