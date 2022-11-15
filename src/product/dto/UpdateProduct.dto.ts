import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  Min,
  ValidateNested,
} from 'class-validator';
import { ProductCharacteristicDTO } from './ProductCharacteristic.dto';
import { ProductImageDTO } from './ProductImage.dto';

export class UpdateProductDTO {

  @IsNotEmpty({ message: 'The name of product can not be empty.' })
  @IsOptional()
  name: string;

  @IsNumber({ allowNaN: false, allowInfinity: false, maxDecimalPlaces: 2 })
  @Min(1, { message: 'The value of the product should be greater than zero.' })
  @IsOptional()
  value: number;

  @IsNumber()
  @Min(0, { message: 'The quantity of product should be graeter than zero.' })
  @IsOptional()
  quantity: number;

  @IsString()
  @IsNotEmpty({ message: 'The description of the product can not be empty.' })
  @MaxLength(1000, { message: 'The description length can not be great greater than 1000 characters.' })
  @IsOptional()
  description: string;

  @IsString()
  @IsNotEmpty({ message: 'The category of the product can not be empty.' })
  @IsOptional()
  category: string;

  @ValidateNested()
  @IsArray()
  @Type(() => ProductCharacteristicDTO)
  @ArrayMinSize(3)
  @IsOptional()
  characteristics: ProductCharacteristicDTO[];

  @ValidateNested()
  @IsArray()
  @ArrayMinSize(1)
  @Type(() => ProductImageDTO)
  @IsOptional()
  images: ProductImageDTO[];
}
