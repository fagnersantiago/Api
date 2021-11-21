### Teste Compasso UOL

Api desenvolvida em node.js

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando a Api

```bash
# Clone este repositório
$ git clone <https://github.com/fagnersantiago/Api.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd ApiCadastrodeCidade

# Instale as dependências
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

# O servidor inciará na porta:3333 - acesse <http://localhost:3333>
```

### 🎲 Rotas da entidade Cidade

Cadastro de Cidade: Método: Post
Rota: http://localhost:3333/city

Listar Cidade pelo Nome: Método: Get
Rota: http://localhost:3333/city

Listar Cidade pelo Estado: Método: Get
Rota: http://localhost:3333/city/state

### 🎲 Rotas da entidade Cliente

Cadastro de Cleint: Método: Post
Rota: http://localhost:3333/client

Listar Client pelo Nome: Método: Get
Rota: http://localhost:3333/client/
obs: nessa rota é necessário passar o nome do cliente pelo query params

Listar Client pelo id: Método: Get
Rota: http://localhost:3333/client/:id
obs: nessa rota é necessário passar o id no hearder da requisação

Alterar nome do Client: Método: Patch
Rota: http://localhost:3333/client/update/:id

Deletar Client: Método: Delete
Rota: http://localhost:3333/client/delete/:id

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção da api:

- [Express.js](https://expressjs.com/pt-br/)
- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Docker](https://www.docker.com/)
- [TypeOrm](https://typeorm.io/#/)
