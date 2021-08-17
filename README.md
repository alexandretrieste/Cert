<h2 align="center">
    <a href="https://nodejs.org/en/">🔗 Desafio: Node.js | Postgres </a>
</h2>
<p align="center">🚀 Construindo uma aplicação backend com rotas</p>
 

<p align="center">
 <a href="#-sobre-o-desafio">Sobre o desafio</a> |
 <a href="#-entrega">Entrega</a> | 
 <a href="#licença"> Licença</a> |
</p>

<h4 align="center"> 
	🚧  NodeJS | Postgres | Docker 🚀 Em construção...  🚧
</h4>

### 🚀 Sobre o desafio

Nesse desafio, você deve criar uma aplicação em Node.js com postgres!


Agora navegue até a pasta criada e abra no Visual Studio Code, lembre-se de executar o comando yarn no seu terminal para instalar todas as dependências de desenvolvimento, ativar o docker e como sugestão o DBeaver e insomnia para testes de rotas.



#### Rotas da aplicação

Agora que você já está com o template clonado, e pronto para continuar, você deve abrir o arquivo app.js, e completar onde não possui código com o código para atingir os objetivos de cada rota.

POST /xxx: A rota deve receber title, url e techs dentro do corpo da requisição, sendo a URL o link para o github desse repositório. Ao cadastrar um novo projeto, ele deve ser armazenado dentro de um objeto no formato JSON;
GET /xxxx: Rota que lista todos;

PUT /xxx/:id: A rota deve alterar apenas o nome, email...;

DELETE /xxx/:id: A rota deve deletar com o id presente nos parâmetros da rota e mostrar um array vazio, porém o requisito pedia uma inativação apenas e não uma deleção, assim não foi possível implementar a flag por um erro ainda desconhecido;


Com a separação entre tabela vendas e usuários, temos diferentes regras de negócio para cada entidade;


### 📆 Entrega

Esse desafio deve ser entregue a partir do github, enviar o link do repositório que você fez suas alterações.

### Licença
<a href="https://pt.wikipedia.org/wiki/Licen%C3%A7a_MIT#:~:text=A%20licen%C3%A7a%20MIT%2C%20tamb%C3%A9m%20chamada,livre%20quanto%20em%20software%20propriet%C3%A1rio.">🔗 MIT</a>
