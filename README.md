# Sobre

Estes documento README tem como objetivo fornecer as informações necessárias para realização do projeto de avaliação de candidatos.

# 🏗 O que fazer?

- Você deve realizar um fork deste repositório e, ao finalizar, enviar o link do seu repositório para a nossa equipe. Lembre-se, NÃO é necessário criar um Pull Request para isso, nós iremos avaliar e retornar por email o resultado do seu teste.

# 🚨 Problema

O cliente se chama João e tem uma empresa do setor varejista cujo modelo de negócio consiste em fazer uma pesquisa de preço em 
diversos fornecedores do mercado buscando sempre o melhor preço aos produtos cujo seus clientes requisitam faz a entrega em todo 
o Brasil.

Ele cita um exemplo que um cliente pede para ele entregar todo mês uma lista de insumos de escritorio e limpeza para uma agencia
de advocacia cujo o dono não tem tempo para tal e prefere o seu serviço, até porque mesmo pagando pelo serviço e também pelo frete 
trouxe bastante economia mensal na compra desse material. O cliente acha muito pratico enviar uma planilha com o que precisa e em alguns
dias chega em seu escritorio.

O João comenta sobre uma empresa do setor de construção civil já trabalha com ele a mais de quatro anos que utiliza de seus serviços 
para comprar ferramentas e equipamento de proteção para seus colaboradores de forma trimestral. Essa empresa passa pra ele uma 
planilha em excel com os items que ela busca fazer a compra e após ele fazer uma busca pelos melhores fornecedores analisando o 
preço, prazo de entrega e especificações do produto cria um orçamento e envia por email para aprovação do gestor.

A nossa equipe fez uma proposta de criar uma API Rest para ser consumida por uma aplicação front-end cujo qual irá ajudar muito 
ao João e sua equipe conseguir aprimorar a qualidade do serviço que ele já oferece e talvez até ampliar o seu negócio. 

Seria interessante que conforme cada recurso da API seja implementada seja documentada para que a pessoa desenvolvedora que está 
trabalhando no front-end possa ir implementando em paralelo a aplicação.

Use sua criatividade pra criar a melhor aplicação para atender o João em um prazo de 4 dias.

- A API deverá ser construída em **NodeJS** ou **Rails**
- Implementar autenticação e deverá seguir o padrão **JWT**, lembrando que o token a ser recebido deverá ser no formato **Bearer**
- Caso seja desenvolvida em NodeJS o seu projeto terá que ser implementado em **ExpressJS**

- Bancos relacionais permitidos:
  - MySQL
  - MariaDB
  - Postgre
- Bancos não relacionais permitidos:
  - MongoDB

- Sua API deverá seguir os padrões Rest na construção das rotas e retornos
- Sua API deverá conter a collection/variáveis do postman ou algum endpoint da documentação em openapi para a realização do teste
- É desejável que o teste esteja na liguagem  **JavaScript** buscando avaliar o entendimento completo da linguagem e não de estruturas 
ou dependências que abstraiam determinadas definições não alheias ao ECMAScript. No entanto, testes realizados em **TypeScript** também 
serão aceitos.

# 🕵🏻‍♂️ Itens a serem avaliados

- Estrutura do Projeto
- Segurança da API, como autenticação, senhas salvas no banco, SQL Injection e outros
- Boas práticas da Linguagem/Framework
- Migrations para a criação das tabelas do banco relacional

# 🎁 Extra

Esses itens não são obrigatórios, porém desejados.

- Testes unitários
- Linter
- Code Formater

**Obs.: Lembrando que o uso de algum linter ou code formater irá depender da linguagem que sua API for criada**
