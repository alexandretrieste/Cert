import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/entities/Product';
import { ProductRepository } from '../typeorm/repositories/ProductRepository';

//camada de serviços: método de chamada de execução de serviços: resposabilidade = listar o produto
class ListProductService {
  public async execute(): Promise<Product[]> {
    const productRepository = getCustomRepository(ProductRepository);
    const products = await productRepository.find();

    return products;
  }
}

export default ListProductService;
