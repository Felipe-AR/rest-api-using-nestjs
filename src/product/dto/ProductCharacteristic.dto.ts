import { IsNotEmpty, IsString } from 'class-validator';

export class ProductCharacteristicDTO {
  @IsString()
  @IsNotEmpty({ message: 'The name of the characteristic can not be empty.' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'The description of the characteristic can not be empty.' })
  description: string;
}
