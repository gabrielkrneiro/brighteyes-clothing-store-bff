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

import { CreateClothesStatusDto } from './dto/create-clothes_status.dto';
import { UpdateClothesStatusDto } from './dto/update-clothes_status.dto';
import { ClothesStatusService } from './clothes_status.service';

@Controller('clothes-status')
export class ClothesStatusController {
  constructor(private readonly clothesStatusService: ClothesStatusService) {}

  @Post()
  create(@Body() createClothesStatusDto: CreateClothesStatusDto) {
    return this.clothesStatusService.create(createClothesStatusDto);
  }

  @Get()
  findAll() {
    return this.clothesStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.clothesStatusService.findOne({ id });
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateClotheDto: UpdateClothesStatusDto,
  ) {
    return this.clothesStatusService.update({ id }, updateClotheDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.clothesStatusService.remove({ id });
  }
}
