import { PartialType } from '@nestjs/mapped-types';

import { CreateShoppingCartStatusDto } from './create-shopping-cart-status.dto';

export class UpdateShoppingCartStatusDto extends PartialType(
  CreateShoppingCartStatusDto,
) {}
