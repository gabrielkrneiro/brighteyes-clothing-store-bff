import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';

import { CreateEmployeeStatusDto } from './dto/create-employee-status.dto';
import { UpdateEmployeeStatusDto } from './dto/update-employee-status.dto';
import { EmployeeStatusService } from './employee-status.service';

@Controller('employee-status')
export class EmployeeStatusController {
  constructor(private readonly employeeStatusService: EmployeeStatusService) {}

  @Post()
  create(@Body() createEmployeeStatusDto: CreateEmployeeStatusDto) {
    return this.employeeStatusService.create(createEmployeeStatusDto);
  }

  @Get()
  findAll() {
    return this.employeeStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.employeeStatusService.findOne({ id });
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCustomerDto: UpdateEmployeeStatusDto,
  ) {
    return this.employeeStatusService.update({ id }, updateCustomerDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.employeeStatusService.remove({ id });
  }
}
