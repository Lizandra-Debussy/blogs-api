<div style="text-align: justify;">
  
# Blogs API

Projeto desenvolvido durante o módulo de Back-End no curso de Desenvolvimento WEB da Trybe .

Este projeto possui uma API RESTful para a produção de conteúdo de um blog, desenvolvida em Node.js utilizando o pacote Sequelize como ORM (Object-Relational Mapping) para a manipulação de dados em um banco de dados MySQL.

Através desta aplicação, os usuários podem criar e gerenciar seus próprios posts, utilizando diferentes categorias para organização do conteúdo. Além disso, é possível realizar autenticação para garantir que apenas usuários autorizados possam realizar ações na API.


## Funcionalidades

* Operações CRUD (Create, Read, Update, Delete) de posts;
* Cadastro e autenticação de usuários para realização de operações de criação, atualização e exclusão de posts;
* Criação e associação de categorias para os posts.


## Rotas

As rotas da API estão listadas abaixo. Para acessá-las, é necessário incluir o token de autenticação do usuário nas requisições.
  
| Método | Rota | Descrição |
|--------|------|-----------|
| POST   | /login      | Realiza o login de um usuário |
| GET    | /user       | Retorna todos os usuários |
| GET    | /user/:id   | Retorna um usuário específico |
| POST   | /user       | Cadastra um novo usuário |
| DELETE | /user/me    | Deleta o próprio usuário |
| GET    | /post       | Retorna todos os posts |
| GET    | /post/:id   | Retorna um post específico |
| POST   | /post       | Cria um novo post |
| PUT    | /post/:id   | Atualiza um post existente |
| DELETE | /post/:id   | Deleta um post existente |
| GET    | /categories | Retorna todas as categorias |
| POST   | /categories | Cria uma nova categoria |
  
## Tecnologias e Ferramentas utilizadas

* NodeJS
* Express
* Sequelize ORM
* Jsonwebtoken
* MySQL2
* Docker
* Eslint

## Como utilizar

* Clone o repositório:
```
  git@github.com:Lizandra-Debussy/blogs-api.git
```
* Acesse a pasta do repositório:
```
  cd blogs-api
```
* Instale as dependências:
```
  npm install
```
* Configure as variáveis de ambiente no arquivo .env conforme os exemplos do arquivo .env.example.

* Inicie o servidor:
```
  npm start
```
* Utilize um cliente HTTP para realizar as requisições para as rotas da API.

<br>

## Autor(a)

Este projeto foi desenvolvido por [Lizandra Debussy](https://github.com/Lizandra-Debussy).
  
</div>

