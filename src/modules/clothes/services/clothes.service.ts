import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/core/abstract.service';
import { ClothesRepository } from 'src/modules/clothes/clothes.repository';
import { CreateClothesDto } from 'src/modules/clothes/dto/create-clothes.dto';
import { UpdateClothesDto } from 'src/modules/clothes/dto/update-clothes.dto';
import { Clothes } from 'src/modules/clothes/entities/clothes.entity';

@Injectable()
export class ClothesService extends AbstractService<
  Clothes,
  CreateClothesDto,
  UpdateClothesDto
> {
  constructor(
    @InjectRepository(Clothes)
    clothesRepository: ClothesRepository,
  ) {
    super(clothesRepository);
  }
}
