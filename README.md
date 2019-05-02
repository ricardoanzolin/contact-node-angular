# CRUD de Contatos com Node e Angular
 
Exemplo de um cadastro de contatos feito com Node e Angular.

**Pré-requisitos:** [Node.js](https://nodejs.org/).

## Iniciando

Para rodar a aplicação de exemplo, execute o seguinte comando:

```bash
git clone https://github.com/ricardoanzolin/contact-node-angular.git
cd contact-node-angular
```

Você tera uma copia do projeto instalada localmente. Para instalar todas as dependências e iniciar cada aplicação, siga as instruções abaixo:

Para rodar o servidor, acesse a pasta `MyContactServer` e execute os seguintes comandos:
 
```bash
npm i
npm run build
npm start
```

Para rodar a aplicação cliente, acesse a pasta `MyContactCrud` e execute os seguintes comandos:
 
```bash
npm install 
ng serve
```

## Bibliotecas foram utilizadas na construção da aplicação para cliente e servidor:


* Angular: ``Framework utilizado para construir a aplicação cliente``

* Angular Material: ``Plugin para Angular que deixa sua aplicação com Material Design``

* Node: ``Servidor rodando JavaScript``

* Express: ``Uma biblioteca de roteamento para responder as requisições do servidor e construir uma aplicação REST API``

* TypeOrm: ``Uma biblioteca ORM de banco de dados para TypeScript``

* Bootstrap: ``Estilização de componentes``

* Okta: ``Para autenticação e controle de usuários``


### Um pouco sobre os arquivos

``app.component.css`` - Arquivo que contam as folhas de estilo do componente da aplicação principal, sendo que os estilos pode ser definidos localmente para cada componente.

``app.component.html`` - Arquivos HTML do componente

``app.component.ts`` - Código de controle do componente

``app.module.ts`` - Aqui definimos quais modulos a aplicação usará

``app-routing.module.ts`` - Arquivo de configuração das rotas da aplicação

``app.component.spec.ts`` - Esqueleto de testes unitários da aplicação

### Autenticação

* [Okta](https://developer.okta.com)

O Okta foi utilizado para simplificar o processo de controle de acessos, a biblioteca gerencia toda a parte de autenticação, autorização e controle de usuários. 

Crie uma conta dentro do Okta:

1. Logue com sua conta de desenvolvedor, va até a aba **Applications**, e clique em **Add Application**.
3. Selecione **Single-Page App** e clique em **Next**. 
4. Dê um nome para a aplicação, altere o endereço `localhost:8080` para `localhost:4200` e clique **Done**.

#### Configurações do Servidor

Configure seu dominio e copie o `clientId` para `MyContactServer/src/auth.ts`. 

**NOTA:** O valor de `{yourOktaDomain}` deve ser algo como `dev-123456.oktapreview`. Garanta que você não adicionou `-admin` no valor do dominio!

```ts
const oktaJwtVerifier = new OktaJwtVerifier({
  clientId: '{clientId}',
  issuer: 'https://{yourOktaDomain}/oauth2/default'
});
```

#### Configuração do cliente

Para o cliente, configure o `issuer` e copie o `clientId` para `MyContactCrud/src/app/app.module.ts`.

```typescript
OktaAuthModule.initAuth({
  issuer: 'https://{yourOktaDomain}/oauth2/default',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '{clientId}'
}),
```

## Explicando a aplicação

A ideia basica da aplicação era criar um cadastro de contatos com os seguintes campos (Name, Email, Twitter, Phone). Utilizando Angular e Node.

### Client-side

Apos criar uma nova aplicação em angular com:

```ng new MyContactCrud```

e instalar as dependências:

``npm i @angular/material@7.0.2 @angular/cdk@7.0.2 @angular/animations@7.0.1 @angular/flex-layout@7.0.0-beta.19``

Vamos criar o componente ``contact`` e o componente ``home``

``ng generate component Contacts``

``ng generate component Home``

No arquivo ``contacts.component.ts`` temos a classe ``ContactsComponent`` com os métodos de criar, editar, atualizar e excluir um contato.

No arquivo ``contacts.component.html`` fica a nossa interface, exibindo uma tabela que lista os contatos e um formulário na lateral, para incluir e alterar um contato. Uma das colunas da tabela, tem um icone de lixeira, onde você pode excluir um contato.

O arquivo ``contacts.service.ts`` possui a classe ``ContactsService`` nessa classe temos os seguintes métodos:

* ``getContacts()`` - Método GET para retornar todos os contatos
* ``getContact(id: string)`` - Método GET com o parâmetro ID, retornando um contato pelo seu respectivo ID
* ``createContact(contact: Contact)`` - Método POST com o parâmetro Contact, para criar um novo contato
* ``updateContact(contact: Contact)`` - Método PATCH com o parâmetro Contact, para atualizar um contato
* ``deleteContact(id: string)`` - Método DELETE com o parâmetro ID, para deletar um contato

### Server-side







## License

Apache 2.0, see [LICENSE](LICENSE).
