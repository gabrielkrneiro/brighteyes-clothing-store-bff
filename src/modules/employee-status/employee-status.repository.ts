import { Repository } from 'typeorm';

import { EmployeeStatus } from './entities/employee-status.entity';

export class EmployeeStatusRepository extends Repository<EmployeeStatus> {}
