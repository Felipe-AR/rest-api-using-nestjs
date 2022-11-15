import { Injectable } from '@nestjs/common';
import { ProductEntity } from './product.entity';

@Injectable()
export class ProductRepository {
  private products: ProductEntity[] = [];

  private findById(id: string) {
    const product = this.products.find(product => product.id === id);
    if (!product) throw new Error('The product does not exists.');
    return product;
  }

  async save(product: ProductEntity) {
    this.products.push(product);
  }

  async index() {
    return this.products;
  }

  async update(id: string, updatedData: Partial<ProductEntity>) {
    const product = this.findById(id);
    delete updatedData.id; 
    delete updatedData.userId;
    Object.entries(updatedData).forEach(([property, value]) => { product[property] = value });
    return product;
  }

  async remove(id: string) {
    const deletedProduct = this.findById(id);
    this.products = this.products.filter(product => product.id !== deletedProduct.id);
    return deletedProduct;
  }
}
