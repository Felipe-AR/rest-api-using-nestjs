import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { IsUniqueEmailValidator } from './validators/isUniqueEmail.validator';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserRepository, IsUniqueEmailValidator],
})
export class UserModule {}
