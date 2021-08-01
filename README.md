## :page_facing_up: Descrição
Foi desenvolvido um web service REST para auxiliar na resolução do seguinte desafio abaixo:

<h4>Problema do conjunto e seus elementos únicos</h4>
Por definição, um conjunto não pode ter elementos repetidos.

Faça um programa capaz de ler um número inteiro N (1<=N<=1000) e N inteiros K (-1000<=K<=1000)

A saída deverá ser um conjunto formato pelos K inteiros. Os elementos deverão ser exibidos em ordem crescente

Exemplo de entrada:
Número inteiro para representar N: 5
Indicar os 5 números do conjunto K: [2, -3, 1, 4, 2]

Exemplo de saída:
[-3, 1, 2, 4]


## 🛠 Tecnologias
Este projeto foi desenvolvido com as seguintes tecnologias

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Jest](https://jestjs.io/pt-BR/)
- [Javascript](https://pt.wikipedia.org/wiki/JavaScript)


## :closed_book: Instalação

```bash
# Clone este repositório.
$ git clone https://github.com/DaniloMSilveira/ChallengeGroupElements.git

# Instale as dependências
# NPM
$ npm i 
# YARN
$ yarn

# Para executar os testes com Jest
# NPM
$ npm run test
# YARN
$ yarn test

# Execute a aplicação
# NPM
$ npm run start
# YARN
$ yarn start
 
# O app vai está rodando na porta 3000 - http://localhost:3000

# Paramêtros para realizar a request para a rota do challenge:
type: "GET",
url: "http://localhost:3000/challenge",
data: {
  quantidadeElementos: 3 #número de elementos
  elementos: [1,2,3] # array com os elementos
}
```

## :man: Autor
Feito com ❤️ por Danilo Martin

