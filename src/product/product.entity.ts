import { v4 as uuid } from 'uuid';

interface IProductCharacteristic {
	name: string;
	description: string;
}

interface IProductImage {
	url: string;
	description: string;
}

interface IProduct {
  id: string;
  userId: string;
  name: string;
  value: number;
  quantity: number;
  description: string;
  category: string;
  characteristics: IProductCharacteristic[];
  images: IProductImage[];
}

class ProductCharacteristic {
  name: string;
	description: string;

  constructor(properties: IProductCharacteristic) {
    this.name = properties.name;
    this.description = properties.description;
  }
}

class ProductImage {
  url: string;
	description: string;

  constructor(properties: IProductImage) {
    this.url = properties.url;
    this.description = properties.description;
  }
}

export class ProductEntity {
  id: string;
  userId: string;
  name: string;
  value: number;
  quantity: number;
  description: string;
  category: string;
  characteristics: ProductCharacteristic[];
  images: ProductImage[];

  constructor(properties: Omit<IProduct, 'id'>) {
    this.id = uuid();
    this.userId = properties.userId;
    this.name = properties.name;
    this.value = properties.value;
    this.quantity = properties.quantity;
    this.description = properties.description;
    this.category = properties.category;
    this.characteristics = properties.characteristics;
    this.images = this.images;
  }
}