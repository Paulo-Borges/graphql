# Servidor GraphQL Básico com Apollo Server

Este é um projeto de ESTUDO de servidor GraphQL construído com **Node.js** e **Apollo Server**, utilizando o ecossistema `graphql-tag` para definição de _schemas_. Ele demonstra a criação de tipos, _queries_ básicas, _resolvers_ e a implementação de campos calculados.

---

## ✨ Funcionalidades Principais

- **Queries Básicas:** Demonstrações simples como `ola`, `horaAtual` e `dataAtual`.
- **Tipos Personalizados:** Definição dos tipos `Usuario` e `Produto`.
- **Campos Calculados (_Resolver Chain_):**
  - O campo `Usuario.nome` resolve a partir do campo `nome_completo` da fonte de dados (`melhorUsuario`).
  - O campo `Produto.precoDesconto` calcula o preço final após um desconto.
- **Dados Escalars Customizados:** Uso do _Scalar_ `Data` (embora não tenha um _resolver_ customizado explícito, está definido para demonstrar a inclusão de _scalars_).
- **Geração de Dados:** A _query_ `numerosMegaSena` gera um array de 6 números aleatórios e ordenados.

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução.
- **Apollo Server**: Framework para construção do servidor GraphQL.
- **`graphql`**: Implementação principal do GraphQL.
- **`graphql-tag`**: Para definir o _schema_ usando _template literals_ (`gql`).
- **`nodemon`**: Ferramenta de desenvolvimento para reiniciar automaticamente o servidor em alterações de código.

---

## ⚙️ Instalação e Configuração

Siga estes passos para configurar e executar o projeto localmente:

### 1. Pré-requisitos

Certifique-se de ter o **Node.js** (versão 18+ recomendada) e o **npm** instalados em sua máquina.

### 2. Clone o Repositório

🧑‍💻 Estrutura do CódigoO código está contido em um único arquivo (index.js ou equivalente), estruturado da seguinte forma:typeDefs: Definição do schema GraphQL usando gql.resolvers: Implementação das funções que resolvem os dados para as queries e campos dos tipos.Inicialização: Criação do ApolloServer e inicialização com startStandaloneServer.🤝 ContribuiçõesSinta-se à vontade para contribuir com melhorias, correções de bugs ou novas funcionalidades.Faça um Fork do projeto.Crie uma nova branch (git checkout -b feature/minha-feature).Faça o commit das suas alterações (git commit -m 'feat: adiciona nova funcionalidade X').Faça o push para a branch (git push origin feature/minha-feature).Abra um Pull Request.
