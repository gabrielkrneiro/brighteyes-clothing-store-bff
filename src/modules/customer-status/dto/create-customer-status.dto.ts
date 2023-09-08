import { CustomerStatus } from '../entities/customer-status.entity';

export class CreateCustomerStatusDto
  implements Omit<CustomerStatus, 'id' | 'customers'>
{
  name: string;
  status: CustomerStatus;
}
