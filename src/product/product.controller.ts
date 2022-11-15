import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateProductDTO } from './dto/CreateProduct.dto';
import { UpdateProductDTO } from './dto/UpdateProduct.dto';
import { ProductEntity } from './product.entity';
import { ProductRepository } from './product.repository';

@Controller('products')
export class ProductController {
  constructor(private productRepository: ProductRepository) {}

  @Post()
  async createProduct(@Body() productData: CreateProductDTO) {
    const createdProduct = new ProductEntity({ ...productData })
    this.productRepository.save(createdProduct);
    return createdProduct;
  }

  @Get()
  async index() {
    return this.productRepository.index();
  }

  @Put('/:id')
  async update(@Param('id') id: string, @Body() updatedData: UpdateProductDTO) {
    const updatedProduct = this.productRepository.update(id, updatedData);
    return updatedProduct;
  }

  @Delete('/:id')
  async remove(@Param('id') id: string) {
    const deletedProduct = this.productRepository.remove(id);
    return deletedProduct;
  }
}
