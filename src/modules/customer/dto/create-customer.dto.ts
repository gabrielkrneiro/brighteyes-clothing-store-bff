import { Customer } from '../entities/customer.entity';

export class CreateCustomerDto implements Omit<Customer, 'id'> {
  name: string;
  address: string;
  cpf: string;
  birthdate: Date;
  status: number;
}
