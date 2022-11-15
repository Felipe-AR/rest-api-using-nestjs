import { v4 as uuid } from 'uuid';

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
}

export class UserEntity {
  id: string;
  name: string;
  email: string;
  password: string;

  constructor(properties: Omit<IUser, "id">) {
    this.id = uuid();
    this.name = properties.name;
    this.email = properties.email;
    this.password = properties.password;
  }
}