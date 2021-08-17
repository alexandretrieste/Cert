//criação de repositório customizado.
import { EntityRepository, Repository } from 'typeorm';
import Product from '../entities/Product';
//primeiro método
@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
  public async findByName(name: string): Promise<Product | undefined> {
    const product = this.findOne({
      where: {
        name,
      },
    });
    return product;
  }
}
