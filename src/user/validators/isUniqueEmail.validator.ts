import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UserRepository } from '../user.repository';

@Injectable()
@ValidatorConstraint({ async: true })
export class IsUniqueEmailValidator implements ValidatorConstraintInterface {
  constructor(private userRepository: UserRepository) {}

  async validate(email: string): Promise<boolean> {
    const emailAlreadyExists = await this.userRepository.emailAlreadyExists(email);
    return !emailAlreadyExists;
  }
}

export const IsUniqueEmail = (validationOptions: ValidationOptions) => {
  return (object: Object, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: IsUniqueEmailValidator,
      constraints: [],
    });
  };
};
