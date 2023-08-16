import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClothesRepository } from 'src/modules/clothes/clothes.repository';
import { CreateClothesDto } from 'src/modules/clothes/dto/create-clothes.dto';
import { UpdateClothesDto } from 'src/modules/clothes/dto/update-clothes.dto';
import { Clothes } from 'src/modules/clothes/entities/clothes.entity';

@Injectable()
export class ClothesService {
  constructor(
    @InjectRepository(Clothes)
    private clothesRepository: ClothesRepository,
  ) {}

  create(createClothesDto: CreateClothesDto): Promise<Clothes> {
    const toBeCreated = this.clothesRepository.create(createClothesDto);
    return this.clothesRepository.save(toBeCreated);
  }

  findAll(): Promise<Clothes[]> {
    return this.clothesRepository.find();
  }

  async findOne(id: number): Promise<Clothes | null> {
    const found = await this.clothesRepository.findOneBy({ id });

    if (!found) {
      throw new NotFoundException(
        `Could not find ${Clothes.name} with id: ${id}`,
      );
    }

    return found;
  }

  async update(
    id: number,
    updateClothesDto: UpdateClothesDto,
  ): Promise<Clothes> {
    await this.findOne(id);
    return this.clothesRepository.save({ id, ...updateClothesDto });
  }

  async remove(id: number): Promise<Clothes> {
    const toBeRemoved = await this.clothesRepository.findOneBy({ id });
    return this.clothesRepository.remove(toBeRemoved);
  }
}
