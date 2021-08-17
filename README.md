![api](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Fbr%2Ficone-gratis%2Fnodejs_919825&psig=AOvVaw2y0UMYnRMcUZjEk6pQVWRt&ust=1629287143850000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPjauN39t_ICFQAAAAAdAAAAABAD)

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

Nesse desafio, você deve criar uma aplicação para treinar o que você aprendeu até agora no Node.js!

Essa será uma aplicação para armazenar repositórios do seu portfólio, que irá permitir a criação, listagem, atualização e remoção dos repositórios, e além disso permitir que os repositórios possam receber "likes".

#### Template da aplicação

Para te ajudar nesse desafio, criamos para você um modelo que você deve utilizar como um template do Github.

O template está disponível na seguinte url: Acessar Template


Agora navegue até a pasta criada e abra no Visual Studio Code, lembre-se de executar o comando yarn no seu terminal para instalar todas as dependências de desenvolvimento



#### Rotas da aplicação

Agora que você já está com o template clonado, e pronto para continuar, você deve abrir o arquivo app.js, e completar onde não possui código com o código para atingir os objetivos de cada rota.

POST /xxx: A rota deve receber title, url e techs dentro do corpo da requisição, sendo a URL o link para o github desse repositório. Ao cadastrar um novo projeto, ele deve ser armazenado dentro de um objeto no formato JSON;
GET /xxxx: Rota que lista todos;

PUT /xxx/:id: A rota deve alterar apenas o nome, email...;

DELETE /xxx/:id: A rota deve deletar com o id presente nos parâmetros da rota e mostrar um array vazio, porém o requisito pedia uma inativação apenas e não uma deleção, assim não foi possível implementar a flag por um erro ainda desconhecido;


Com a separação entre tabela vendas e usuários, temos diferentes regras de negócio para cada entidade;


### 📆 Entrega

Esse desafio deve ser entregue a partir do github, envie o link do repositório que você fez suas alterações.

### Licença
<a href="https://pt.wikipedia.org/wiki/Licen%C3%A7a_MIT#:~:text=A%20licen%C3%A7a%20MIT%2C%20tamb%C3%A9m%20chamada,livre%20quanto%20em%20software%20propriet%C3%A1rio.">🔗 MIT</a>
