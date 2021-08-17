import {
  Entity,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
//configuração dos atributos da Entity: é uma classe que mapeia para uma tabela de banco de dados. Podemos criar uma entidade definindo uma nova classe e marcá-la com @Entity()
//habilitar decorators no tsconfig.json
@Entity('Products')
class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column('decimal')
  price: number;
  @Column('int')
  quantity: number;
  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  updated_at: Date;
}

export default Product;
