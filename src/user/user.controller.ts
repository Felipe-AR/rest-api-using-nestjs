import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { UpdateUserDTO } from './dto/updateUser.dto';
import { CreateUserDTO } from './dto/createUser.dto';
import { UserEntity } from './user.entity';
import { UserRepository } from './user.repository';

@Controller('/usuarios')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async createUser(@Body() userData: CreateUserDTO) {
    const createdUser = new UserEntity({ ...userData });
    this.userRepository.save(createdUser);
    return createdUser;
  }

  @Get()
  async index() {
    return await this.userRepository.index();
  }

  @Put('/:id')
  async updateUser(@Param('id') id: string, @Body() updatedData: UpdateUserDTO) {
    const updatedUser = await this.userRepository.update(id, updatedData);
    return updatedUser;
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string) {
    const deletedUser = await this.userRepository.delete(id);
    return deletedUser;
  }
}
