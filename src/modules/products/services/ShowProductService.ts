import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/entities/Product';
import { ProductRepository } from '../typeorm/repositories/ProductRepository';

//interface para tipar as informações
interface IRequest {
  id: string;
}
//camada de serviços: método de chamada de execução de serviços: resposabilidade = mostrar o produto
class ShowProductService {
  public async execute({ id }: IRequest): Promise<Product | undefined> {
    const productRepository = getCustomRepository(ProductRepository);

    const product = await productRepository.findOne(id);

    //tratando erro se não existe o nome, enviando para AppError disponibilizar ao frontEnd
    if (!product) {
      throw new AppError('Product not found.');
    }

    return product;
  }
}

export default ShowProductService;
