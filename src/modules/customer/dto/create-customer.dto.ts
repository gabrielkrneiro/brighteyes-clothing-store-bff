import { CustomerStatus } from 'src/modules/customer-status/entities/customer-status.entity';

import { Customer } from '../entities/customer.entity';

export class CreateCustomerDto
  implements Omit<Customer, 'id' | 'shoppingCarts'>
{
  name: string;
  id: number;
  address: string;
  cpf: string;
  birthdate: Date;
  status: CustomerStatus;
}
