import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
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
  findOne(@Param('id') id: string) {
    return this.clothesStatusService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateClothesStatusDto: UpdateClothesStatusDto,
  ) {
    return this.clothesStatusService.update(+id, updateClothesStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clothesStatusService.remove(+id);
  }
}
