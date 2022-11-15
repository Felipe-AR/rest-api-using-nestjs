import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { IsUniqueEmail } from '../validators/isUniqueEmail.validator';

export class CreateUserDTO {
  @IsString({ message: 'The name should be text.' })
  @IsNotEmpty({ message: 'The name cannot be empty.' })
  name: string;

  @IsEmail({ message: 'This e-mail is not valid.' })
  @IsUniqueEmail({ message: 'Already exists an user with this e-mail.' })
  email: string;

  @MinLength(6, { message: 'The password requires at least 6 characters.' })
  password: string;
}
  