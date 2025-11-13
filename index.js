import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { gql } from "graphql-tag";

const typeDefs = gql`
  scalar Data

  type Query {
    ola: String
    horaAtual: String
    dataAtual: Data
    melhorUsuario: Usuario!
    melhorProduto: Produto
  }

  type Usuario {
    id: Int
    nome: String
    email: String
    salario: Float
    vip: Boolean
  }

  type Produto {
    id: Int
    nome: String
    preco: Float
    desconto: Float
    precoDesconto: Float
  }
`;

const resolvers = {
  Query: {
    ola() {
      return "Olá Mundo!";
    },
    horaAtual() {
      const dataAtual = new Date();
      return ` ${dataAtual.getHours()}: ${dataAtual.getMinutes()}`;
    },
    dataAtual() {
      return new Date();
    },
    melhorUsuario() {
      return {
        id: 1,
        nome_completo: "Borges",
        email: "borges@email.com",
        salario: 16000.0,
        vip: true,
      };
    },
    melhorProduto() {
      return {
        id: 10,
        nome: "lápis",
        preco: 10,
        desconto: 0.1,
        precoDesconto: {},
      };
    },
  },
  Usuario: {
    nome(usuario) {
      //   console.log(usuario);
      return usuario.nome_completo;
    },
  },
  Produto: {
    precoDesconto(produto) {
      const { preco, desconto } = produto;
      return preco * (1 - desconto);
    },
  },
};

const servidor = new ApolloServer({ typeDefs, resolvers });
const { url } = await startStandaloneServer(servidor);
console.log(`Servidor rodando em ${url}`);
