import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class ProductImageDTO {
  @IsUrl({ message: 'The URL is not valid.' })
  url: string;

  @IsString()
  @IsNotEmpty({ message: 'The description of the image can not be empty.' })
  description: string;
}
