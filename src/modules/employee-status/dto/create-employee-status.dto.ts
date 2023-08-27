import { EmployeeStatus } from '../entities/employee-status.entity';

export class CreateEmployeeStatusDto implements Omit<EmployeeStatus, 'id'> {
  name: string;
}
