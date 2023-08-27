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

import { CreateCustomerStatusDto } from './dto/create-customer-status.dto';
import { UpdateCustomerStatusDto } from './dto/update-customer-status.dto';
import { CustomerStatusService } from './customer-status.service';

@Controller('customer-status')
export class CustomerStatusController {
  constructor(private readonly customerStatusService: CustomerStatusService) {}

  @Post()
  create(@Body() createCustomerStatusDto: CreateCustomerStatusDto) {
    return this.customerStatusService.create(createCustomerStatusDto);
  }

  @Get()
  findAll() {
    return this.customerStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.customerStatusService.findOne({ id });
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCustomerDto: UpdateCustomerStatusDto,
  ) {
    return this.customerStatusService.update({ id }, updateCustomerDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.customerStatusService.remove({ id });
  }
}
