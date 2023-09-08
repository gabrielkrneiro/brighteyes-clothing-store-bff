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

import { CreateShoppingCartStatusDto } from './dto/create-shopping-cart-status.dto';
import { UpdateShoppingCartStatusDto } from './dto/update-shopping-cart-status.dto';
import { ShoppingCartStatusService } from './shopping-cart-status.service';

@Controller('shopping-cart-status')
export class ShoppingCartStatusController {
  constructor(
    private readonly shoppingCartStatusService: ShoppingCartStatusService,
  ) {}

  @Post()
  create(@Body() createShoppingCartStatusDto: CreateShoppingCartStatusDto) {
    return this.shoppingCartStatusService.create(createShoppingCartStatusDto);
  }

  @Get()
  findAll() {
    return this.shoppingCartStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.shoppingCartStatusService.findOne({ id });
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateClotheDto: UpdateShoppingCartStatusDto,
  ) {
    return this.shoppingCartStatusService.update({ id }, updateClotheDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.shoppingCartStatusService.remove({ id });
  }
}
