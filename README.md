# Sobre

Estes documento README tem como objetivo fornecer as informações necessárias para realização do projeto de avaliação de candidatos.

# 🏗 O que fazer?

- Você deve realizar um fork deste repositório e, ao finalizar, enviar o link do seu repositório com as suas correções para a nossa equipe. Lembre-se, NÃO é necessário criar um Pull Request para isso, nós iremos avaliar e retornar por email o resultado do seu teste.

- Neste teste, você deverá atuar na manutenção de uma implementação da API de um sistema de um fictício supermercado convencional. Tendo como especificação os seguintes requisitos:

## - Requisitos:

- Usuários

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

- Produtos:

  1. O sistema deverá permitir o cadastro de produtos, apenas para usuários administradores. Tendo como base os seguintes campos:

     - Nome
     - Código
     - Departamento
     - Fabricante
     - Preço
     - Quantidade em estoque

     Cada produto deverá possuir um código único.

  2. O sistema deverá permitir a edição das informações de produtos, tendo como base a alteração de todos os campos descritos no requisito anterior. Apenas usuários administradores poderão editar produtos.

  3. O sistema deverá permitir o detalhamento de um produto, exibindo todas as suas informações. Qualquer usuário poderá detalhar um produto.

  4. O sistema deverá permitir a listagem de produtos, com filtros baseados em todos os campos descritos no requisito 1 desta seção. Qualquer usuário poderá listar produtos.

  5. O sistema deverá permitir a exclusão de produtos. A exclusão de produtos deverá ser permitida apenas à usuários administradores.

  ### - Observações:

  1. Todas as entidades deverão possuir timestamps para registro de datas de criação, alteração e exclusão.

  2. Todas as funcionalidades deverão possuir validações dos dados das suas respectivas requisições.

# Objetivo

- O seu objetivo é identificar erros e falhas que a aplicação possui e corrigí-los da melhor forma possível, isto é, **sempre** procurando manter os padrões do projeto, obedecendo as especificações do sistema, e respeitando as boas práticas de desenvolvimento de software. Além disso, esta API está desenvolvida em **NodeJS** utilizando o Express, Sequelize com suporte para o PostgreSQL e diversas outras libs auxiliares. É altamente recomendado que você não modifique essa estrutura base da aplicação.

- A princípio, existem X erros/falhas identificados na aplicação, sendo eles:

  1. Os filmes estão sendo cadastrados sem o dado x, mesmo que ele seja enviado na requisição.
  2. Os usuários não estão conseguindo votar em um filme que já possui mais 4 votos.
  3. Quando um usuário altera a sua senha, ele não está conseguindo autenticar o seu próximo acesso.
  4. ...
  5. ...
  6. ...
  7. ...

- Além disso, existem outros 5 erros/falhas na aplicação que são de nosso conhecimento, mas, que não serão identificados. Quanto a esses erros/falhas, é de sua responsabilidade também identificá-los e corrigí-los.

## - Observações:

- A aplicação em questão foi desenvolvida em sua integridade e testes foram escritos para garantir que ela estivesse livre de erros/falhas ao máximo possível. Apenas após todo esse processo, ela foi desconstruída para a elaboração e utilização no teste. Portanto, com base nos mesmos testes realizados, **garantimos a existência de todos os erros/falhas listados e não listados na aplicação**.
- Ainda assim, mesmo com todo o processo descrito anteriormente, existe a possibilidade de você encontrar erros/falhas que não estão no contexto da avaliação, porém, caso isso aconteça, esses erros não serão contabilizados na avaliação final.

# 🕵🏻‍♂️ Itens a serem avaliados

- Identificação dos erros não listados
- Integridade da estrutura do projeto
- Corretude e cumprimento dos requisitos
- Boas práticas da Linguagem/Framework

# 🔗 Links

- Documentação JWT: https://jwt.io/
- Framework Express: https://expressjs.com/pt-br/
