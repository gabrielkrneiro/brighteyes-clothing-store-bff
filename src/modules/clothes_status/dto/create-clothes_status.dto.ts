import { ClothesStatus } from '../entities/clothes_status.entity';

export class CreateClothesStatusDto implements Omit<ClothesStatus, 'id'> {
  name: string;
}
