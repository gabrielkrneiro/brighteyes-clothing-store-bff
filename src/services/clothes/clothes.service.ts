import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateClothesDto } from 'src/modules/clothes/dto/create-clothes.dto';
import { UpdateClothesDto } from 'src/modules/clothes/dto/update-clothe.dto';
import { Clothes } from 'src/modules/clothes/entities/clothes.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClothesService {
  constructor(
    @InjectRepository(Clothes)
    private clothesRepository: Repository<Clothes>,
  ) {}

  create(createClothesDto: CreateClothesDto) {
    return this.clothesRepository.create(createClothesDto);
  }

  findAll(): Promise<Clothes[]> {
    return this.clothesRepository.find();
  }

  findOne(id: number): Promise<Clothes | null> {
    return this.clothesRepository.findOneBy({ id });
  }

  update(id: number, updateClothesDto: UpdateClothesDto) {
    return this.clothesRepository.update({ id }, updateClothesDto);
  }

  async remove(id: number): Promise<Clothes> {
    const toBeRemoved = await this.clothesRepository.findOneBy({ id });
    return this.clothesRepository.remove(toBeRemoved);
  }
}
