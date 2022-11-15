import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';
import { IsUniqueEmail } from '../validators/isUniqueEmail.validator';

export class UpdateUserDTO {
  @IsString({ message: 'The name should be text.' })
  @IsNotEmpty({ message: 'The name cannot be empty.' })
  @IsOptional()
  nome: string;

  @IsEmail({ message: 'This e-mail is not valid.' })
  @IsUniqueEmail({ message: 'Already exists an user with this e-mail.' })
  @IsOptional()
  email: string;

  @MinLength(6, { message: 'The password requires at least 6 characters.' })
  @IsOptional()
  senha: string;
}
  