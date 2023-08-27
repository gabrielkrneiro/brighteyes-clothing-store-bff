import { Repository } from 'typeorm';

import { CustomerStatus } from './entities/customer-status.entity';

export class CustomerStatusRepository extends Repository<CustomerStatus> {}
