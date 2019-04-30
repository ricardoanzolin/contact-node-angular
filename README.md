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


### Um pouco sobre os arquivos

``app.component.css`` - Arquivo que contam as folhas de estilo do componente da aplicação principal, sendo que os estilos pode ser definidos localmente para cada componente.

``app.component.html`` - Arquivos HTML do componente

``app.component.ts`` - Código de controle do componente

``app.module.ts`` - Aqui definimos quais modulos a aplicação usará

``app-routing.module.ts`` - Arquivo de configuração das rotas da aplicação

``app.component.spec.ts`` - Esqueleto de testes unitários da aplicação

## License

Apache 2.0, see [LICENSE](LICENSE).
