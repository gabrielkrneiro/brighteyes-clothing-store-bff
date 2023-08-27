import { NotFoundException } from '@nestjs/common';
import { DeepPartial, FindOptionsWhere, Repository } from 'typeorm';

export abstract class AbstractService<
  Ent,
  CreateDTO extends DeepPartial<Ent>,
  UpdateDTO extends DeepPartial<Ent>,
> {
  constructor(private entityRepository: Repository<Ent>) {}

  create(createDto: CreateDTO): Promise<Ent> {
    return this.entityRepository.save(createDto);
  }

  findAll(): Promise<Ent[]> {
    return this.entityRepository.find();
  }

  async findOne(findOptions: FindOptionsWhere<Ent>): Promise<Ent | null> {
    const found = await this.entityRepository.findOneBy(findOptions);

    if (!found) {
      throw new NotFoundException();
    }

    return found;
  }

  async update(
    findOptions: FindOptionsWhere<Ent>,
    updateClothesDto: UpdateDTO,
  ): Promise<Ent> {
    const toBeUpdated = await this.findOne(findOptions);
    return this.entityRepository.save({ ...toBeUpdated, ...updateClothesDto });
  }

  async remove(findOptions: FindOptionsWhere<Ent>): Promise<Ent> {
    const toBeRemoved = await this.findOne(findOptions);
    return this.entityRepository.remove(toBeRemoved);
  }
}
