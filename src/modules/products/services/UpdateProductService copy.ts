import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/entities/Product';
import { ProductRepository } from '../typeorm/repositories/ProductRepository';

//interface para tipar as informações
interface IRequest {
  id: string;
  name: string;
  price: number;
  quantity: number;
}
//camada de serviços: método de chamada de execução de serviços: resposabilidade = atualizar o produto
class UpdateProductService {
  public async execute({
    id,
    name,
    price,
    quantity,
  }: IRequest): Promise<Product> {
    const productRepository = getCustomRepository(ProductRepository);

    const product = await productRepository.findOne(id);

    //tratando erro se não existe o nome, enviando para AppError disponibilizar ao frontEnd
    if (!product) {
      throw new AppError('Product not found.');
    }
    const productExists = await productRepository.findByName(name);
    //tratando erro se já existe o nome, enviando para AppError disponibilizar ao frontEnd
    if (productExists) {
      throw new AppError('There is already one product with this name.');
    }
    product.name = name;
    product.price = price;
    product.quantity = quantity;

    await productRepository.save(product);

    return product;
  }
}

export default UpdateProductService;
