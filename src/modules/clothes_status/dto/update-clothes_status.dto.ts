import { PartialType } from '@nestjs/mapped-types';

import { CreateClothesStatusDto } from './create-clothes_status.dto';

export class UpdateClothesStatusDto extends PartialType(
  CreateClothesStatusDto,
) {}
