import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateClothesStatusDto } from './dto/create-clothes_status.dto';
import { UpdateClothesStatusDto } from './dto/update-clothes_status.dto';
import { ClothesStatus } from './entities/clothes_status.entity';
import { ClothesStatusRepository } from './clothes_status.repository';

@Injectable()
export class ClothesStatusService {
  constructor(
    @InjectRepository(ClothesStatus)
    private clothesStatusRepository: ClothesStatusRepository,
  ) {}

  create(createClothesStatusDto: CreateClothesStatusDto) {
    const toBeCreated = this.clothesStatusRepository.create(
      createClothesStatusDto,
    );
    return this.clothesStatusRepository.save(toBeCreated);
  }

  findAll(): Promise<ClothesStatus[]> {
    return this.clothesStatusRepository.find();
  }

  async findOne(id: number): Promise<ClothesStatus | null> {
    const found = await this.clothesStatusRepository.findOneBy({ id });

    if (!found) {
      throw new NotFoundException(
        `Could not find ${ClothesStatus.name} with id: ${id}`,
      );
    }

    return found;
  }

  async update(
    id: number,
    updateClothesDto: UpdateClothesStatusDto,
  ): Promise<ClothesStatus> {
    await this.findOne(id);
    return this.clothesStatusRepository.save({ id, ...updateClothesDto });
  }

  async remove(id: number): Promise<ClothesStatus> {
    const toBeRemoved = await this.clothesStatusRepository.findOneBy({ id });
    return this.clothesStatusRepository.remove(toBeRemoved);
  }
}
