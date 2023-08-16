import { Repository } from 'typeorm';
import { Clothes } from './entities/clothes.entity';

export class ClothesRepository extends Repository<Clothes> {}
