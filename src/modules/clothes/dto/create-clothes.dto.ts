import { Clothes } from '../entities/clothes.entity';

export class CreateClothesDto implements Omit<Clothes, 'id'> {
  isAvailable: boolean;
  name: string;
  price: number;
  photo: string;
  quantityInStock: number;
}
