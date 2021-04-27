# Sobre

Estes documento README tem como objetivo fornecer as informações necessárias para realização do projeto de avaliação de candidatos.

# 🏗 O que fazer?

- Você deve realizar um fork deste repositório e, ao finalizar, enviar o link do seu repositório para a nossa equipe. Lembre-se, NÃO é necessário criar um Pull Request para isso, nós iremos avaliar e retornar por email o resultado do seu teste.

# 🚨 Requisitos

Esta seção descreve os requisitos de sistema que devem compor a sua aplicação. É esperado que a sua aplicação contemple todos eles e que não possuam falhas ou erros. Além disso, a interpretação dos requisitos é **sua responsabilidade**, portanto, a forma como eles estão descritos não definem exatamente como você deve implementar o sistema.

## - Requisitos Não Funcionais

- A API deverá ser construída em **NodeJS** ou **Rails**

- Caso seja desenvolvida em NodeJS, o seu projeto terá que ser implementado utilizando o framework **ExpressJS**. Para ambas as linguagens, fica estritamente proibída a utilização de outros frameworks de desenvolvimento como Adonis, Loopback, NestJS, etc.

- Ainda, caso seja desenvolvida em NodeJS, é desejável que o teste esteja em **JavaScript**. No entanto, testes realizados em TypeScript também serão aceitos.

- Sua API deverá seguir os padrões REST na construção das rotas e retornos

- Para a comunicação com o banco de dados utilize algum **ORM**/**ODM**

- Bancos relacionais permitidos:

  - MySQL
  - MariaDB
  - Postgre

- Bancos não relacionais permitidos:

  - MongoDB

- Sua API deverá conter a collection/variáveis do Postman/Insomnia ou algum endpoint que forneça a documentação em openapi.

- Sua API deverá conter um sistema de autenticação baseado no padrão **JWT**, considerando o recebimento de tokens no formato **Bearer**.

## - Requisitos Funcionais

Esta seção descreve os requisitos relacionados às regras de negócio, que devem compor a sua aplicação.

Você deverá construir um sistema de catálogo de produtos e estoque de um "fictício" supermercado convencional. Diferentes usuários terão diferentes tipos de acessos ao sistema.

### - Usuários:

1. O sistema deverá permitir o cadastro de usuários comuns, com os seguintes dados:

   - Nome Completo
   - Email
   - Senha
   - Data de Nascimento
   - UF de residência
   - Cidade de residência
   - Escolaridade (Infantil, Fundamental, Médio, Superior, Pós-graduação, Mestrado, Doutorado)

2. O sistema deverá permitir o cadastro de usuários administradores, considerando os mesmos dados descritos no requisito anterior. Apenas administradores poderão cadastrar outros administradores.

3. O sistema deverá permitir a edição de usuários, tendo como base a alteração de todos os campos descritos no requisito anterior. Qualquer usuário pode alterar os seus dados.

4. O sistema deverá permitir o detalhamento de um usuário, exibindo todas as suas informações. Apenas administradores poderão detalhar usuários, sejam eles administradores ou comuns.

5. O sistema deverá permitir a listagem de usuários, com filtros baseados em todos os campos descritos no requisito 1 desta seção. Apenas administradores poderão listar usuários, sejam eles administradores ou comuns.

6. O sistema deverá permitir a exclusão de usuários. A exclusão de qualquer usuário administrador ou comum deverá ser permitida apenas à administradores. Um usuário comum pode excluir apenas o seu próprio cadastro.

### - Produtos:

1. O sistema deverá permitir o cadastro de produtos, apenas para usuários administradores. Tendo como base os seguintes campos:

   - Nome
   - Código
   - Departamento
   - Fabricante
   - Preço
   - Quantidade em estoque

   Cada produto deverá possuir um código

2. O sistema deverá permitir a edição das informações de produtos, tendo como base a alteração de todos os campos descritos no requisito anterior. Apenas usuários administradores poderão editar produtos.

3. O sistema deverá permitir o detalhamento de um produto, exibindo todas as suas informações. Qualquer usuário poderá detalhar um produto.

4. O sistema deverá permitir a listagem de produtos, com filtros baseados em todos os campos descritos no requisito 1 desta seção. Qualquer usuário poderá listar produtos.

5. O sistema deverá permitir a exclusão de produtos. A exclusão de produtos deverá ser permitida apenas à usuários administradores.

## - Observações:

1. Todas as entidades deverão possuir timestamps para registro de datas de criação, alteração e exclusão.
2. Todas as funcionalidades deverão possuir validações dos dados das suas respectivas requisições.

# 🎁 Requisitos Extras

- Esta seção descreve os requisitos funcionais opcionais. O cumprimento destes requisitos é opcional, portanto, caso você decida não implementá-los, eles não serão contabilizados na sua avaliação. Entretanto, caso você escolha implementar alguns dos requisitos, o não cumprimento dos mesmos acarretará em penalidades na sua avaliação, ou seja, requisitos extras que forem implementados com erros ou falhas serão contabilizados como pontos negativos na sua avaliação.

## - Requisitos funcionais

1. Para popular/atualizar o banco de dados, você deverá implementar um ou mais **serviços AGENDADOS de 15 em 15 minutos**, leiam e cadastrem nas suas respectivas tabelas, os registros fictícios nos arquivos .xlsx, na pasta `sheets`. Cada arquivo possui o nome da entidade dos seus respectivos registros.
2. Para possibilitar uma auditoria do sistema, você deverá implementar um serviço que permita o _download_ de uma listagem de produtos (com ou sem filtros), em um arquivo no formato .xlsx. Esse serviço deve necessariamente devolver apenas o arquivo no corpo da resposta.

## - Requisitos não funcionais

1. O seu código deverá conter testes unitários para as funcionalidades de **pelo menos uma** das entidades (Usuários ou Produtos) do seu sistema
2. O seu código deverá conter um analisador sintático (Linter) de sua preferência.
3. O seu código deverá conter um formatador de código de sua preferência.

# 🕵🏻‍♂️ Itens a serem avaliados

- Cumprimento dos requisitos
- Estrutura do projeto
- Segurança da API (Autenticação, senhas no banco, SQL Injection e outros)
- Boas práticas de programação (Organização, Legibilidade, Reusabilidade, etc.)
- Modelagem do banco

# 🔗 Links

- Documentação JWT https://jwt.io/
- Frameworks NodeJS:

  1. https://expressjs.com/pt-br/
  2. https://sailsjs.com/

- Guideline rails http://guides.rubyonrails.org/index.html
