import { Repository } from 'typeorm';

import { ClothesStatus } from './entities/clothes_status.entity';

export class ClothesStatusRepository extends Repository<ClothesStatus> {}
