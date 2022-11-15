import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';

@Injectable()
export class UserRepository {
  private users: UserEntity[] = [];

  private findById(id: string): UserEntity {
    const user = this.users.find(user => user.id === id);
    if (!user) throw new Error('This user does not exists. ');
    return user;
  }

  async save(user: UserEntity): Promise<void> {
    this.users.push(user);
  }

  async index(): Promise<UserEntity[]> {
    return this.users;
  }

  async emailAlreadyExists(email: string): Promise<boolean> {
    return !!this.users.find((user) => user.email === email);
  }

  async update(id: string, updatedData: Partial<UserEntity>): Promise<UserEntity> {
    const user = this.findById(id);
    delete updatedData.id;
    Object.entries(updatedData).forEach(([property, value]) => { user[property] = value });
    return user;
  }

  async delete(id: string): Promise<UserEntity> {
    const deletedUser = this.findById(id);
    this.users = this.users.filter(user => user.id !== deletedUser.id);
    return deletedUser;
  }
}
