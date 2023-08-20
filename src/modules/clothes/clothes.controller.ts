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

import { CreateClothesDto } from './dto/create-clothes.dto';
import { UpdateClothesDto } from './dto/update-clothes.dto';
import { ClothesService } from './services/clothes.service';

@Controller('clothes')
export class ClothesController {
  constructor(private readonly clothesService: ClothesService) {}

  @Post()
  create(@Body() createClothesDto: CreateClothesDto) {
    return this.clothesService.create(createClothesDto);
  }

  @Get()
  findAll() {
    return this.clothesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.clothesService.findOne({ id });
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateClotheDto: UpdateClothesDto,
  ) {
    return this.clothesService.update({ id }, updateClotheDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.clothesService.remove({ id });
  }
}
