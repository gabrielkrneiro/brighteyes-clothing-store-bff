import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { AbstractService } from '../../core/abstract.service';

import { CreateClothesStatusDto } from './dto/create-clothes_status.dto';
import { UpdateClothesStatusDto } from './dto/update-clothes_status.dto';
import { ClothesStatus } from './entities/clothes_status.entity';
import { ClothesStatusRepository } from './clothes_status.repository';

@Injectable()
export class ClothesStatusService extends AbstractService<
  ClothesStatus,
  CreateClothesStatusDto,
  UpdateClothesStatusDto
> {
  constructor(
    @InjectRepository(ClothesStatus)
    clothesStatusRepository: ClothesStatusRepository,
  ) {
    super(clothesStatusRepository);
  }
}
