import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/entities/Product';
import { ProductRepository } from '../typeorm/repositories/ProductRepository';

//interface para tipar as informações
interface IRequest {
  name: string;
  price: number;
  quantity: number;
}

//camada de serviços: método de chamada de execução de serviços: resposabilidade = criar o produto
class CreateProductService {
  public async execute({ name, price, quantity }: IRequest): Promise<Product> {
    const productRepository = getCustomRepository(ProductRepository);
    const productExists = await productRepository.findByName(name);
    //tratando erro se já existe o nome, enviando para AppError disponibilizar ao frontEnd
    if (productExists) {
      throw new AppError('There is already one product with this name.');
    }

    const product = await productRepository.create({
      name,
      price,
      quantity,
    });

    await productRepository.save(product);
    return product;
  }
}

export default CreateProductService;
