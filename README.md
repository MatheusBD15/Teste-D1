# Teste para Engenheiro de Software da D1

## Requisitos:
  - Desenvolver uma aplicação web para cadastro de clientes.
  - Composta por no mínimo duas telas: tela para listagem de clientes e tela para cadastro e alteração de cliente.
  - Os campos do cadastro são: 
    - ID
    - Nome
    - Data de Nascimento
    - Telefones, sendo possível cadastrar mais de um por cliente, com uma identificação
    - Endereços, sendo possível cadastrar mais de um por cliente, com uma identificação
    - Redes sociais - Facebook, Linkedin, Twitter, Instagram
    - Cpf
    - Rg

## Rodar o projeto
### Requisitos
Para rodar o projeto, são necessárias as seguintes ferramentas:
- npm
- dotnet
- docker
- docker-compose

### Backend
Para facilitar a configuração, o banco de dados roda em um contâiner do docker. O backend roda nas rotas http://localhost:5032 e https://localhost:7016.
```
cd ClientsApi
docker-compose up -d
dotnet restore
dotnet ef database update
dotnet run
```
### Frontend
Com o backend rodando, abra um segundo terminal na raíz do projeto e execute os seguintes comandos:
```
cd clients-front
npm install
npm run dev
```
O frontend roda na porta 3000 do localhost, na seguinte rota: http://localhost:3000. Para que houvessem menos dependências e gerasse um pacote mais leve, foi utilizado vite ao invés de create-react-app para gerar o frontend.

## Execução do projeto
Foram utilizadas as seguintes tecnologias:
  - C#
  - WebAPI
  - Docker
  - SQLServer
  - ReactJs
  - Javascript
  - AntDesign (Para facilitar a construção dos componentes de interface, como tabelas e formulários)
  - CSS3
  - HTML5

## Detalhes sobre a Organização do Projeto

### Frontend
A aplicação segue uma estrutura padrão para SPAs React, com a declaração das rotas em appRouter.jsx, cada rota sendo responsável por renderizar uma página, que por sua vez renderiza vários componentes. Foi feita uma pasta de hooks para uma melhor abstração das requisições http realizadas ao longo do projeto.

### Backend 
A aplicação também segue uma estrutura padrão, dessa vez definida pela CLI dotnet para webApi. Os modelos do banco de dados estão definidos na pasta models, sendo que, por conta da paginação, foi criado um dto para o modelo do cliente. A lógica de CRUD ocorre nos controllers, dos quais só existe um pois só é realizado crud de clientes e suas entidades relacionadas. Os modelos Cellphone e Address possuem relações many-to-one com o cliente, pois cada cliente pode ter um valor indeterminado de números de telefone e endereços.

Para a paginação, foi usado o pacote X.PagedList, por possuir facilidades de contagem de campos, itens e também por possuir métodos assíncronos.

O projeto também possui swagger, na rota /swagger.