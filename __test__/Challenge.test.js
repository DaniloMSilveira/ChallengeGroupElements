const request = require('supertest')
const server = require('../src/server')

const MissingParamError = require('../src/errors/MissingParamError')
const TypeInvalidError = require('../src/errors/TypeInvalidError')
const LengthElementsError = require('../src/errors/LengthElementsError')
const RangeError = require('../src/errors/RangeError')

describe('Testes para rota do Challenge', () => {
  test('Deve retornar 400 devido faltar o parâmetro "quantidadeElementos"', async () => {
    const body = {
      elementos: 'array_de_numeros'
    }
    const httpResponse = await request(server)
      .post('/challenge')
      .send(body)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body.status).toBe('error')
    expect(httpResponse.body.type).toEqual('MissingParamError')
    expect(httpResponse.body.message).toEqual(new MissingParamError('quantidadeElementos').message)
  })

  test('Deve retornar 400 devido faltar o parâmetro "elementos"', async () => {
    const body = {
      quantidadeElementos: 3
    }
    const httpResponse = await request(server)
      .post('/challenge')
      .send(body)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body.status).toBe('error')
    expect(httpResponse.body.type).toEqual('MissingParamError')
    expect(httpResponse.body.message).toEqual(new MissingParamError('elementos').message)
  })

  test('Deve retornar 400 devido ao tipo do parametro "quantidadeElementos" for diferente de inteiro', async () => {
    const body = {
      quantidadeElementos: 'any_number',
      elementos: 'any_array'
    }
    const httpResponse = await request(server)
      .post('/challenge')
      .send(body)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body.status).toBe('error')
    expect(httpResponse.body.type).toEqual('TypeInvalidError')
    expect(httpResponse.body.message).toEqual(new TypeInvalidError('quantidadeElementos', 'Integer').message)
  })

  test('Deve retornar 400 devido ao tipo do parametro "elementos" for diferente de array', async () => {
    const body = {
      quantidadeElementos: 2,
      elementos: 'any_array'
    }
    const httpResponse = await request(server)
      .post('/challenge')
      .send(body)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body.status).toBe('error')
    expect(httpResponse.body.type).toEqual('TypeInvalidError')
    expect(httpResponse.body.message).toEqual(new TypeInvalidError('elementos', 'Array').message)
  })

  test('Deve retornar 400 devido ao parametro "quantidadeElementos" não estar entre 1 e 1000', async () => {
    const body = {
      quantidadeElementos: 0,
      elementos: [1, -2, 3, 4, 5]
    }
    const httpResponse = await request(server)
      .post('/challenge')
      .send(body)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body.status).toBe('error')
    expect(httpResponse.body.type).toEqual('RangeError')
    expect(httpResponse.body.message).toEqual(new RangeError('quantidadeElementos', '1 and 1000').message)
  })

  test('Deve retornar 400 devido ao tamanho do array "elementos" não corresponder ao parametro "quantidadeElementos"', async () => {
    const body = {
      quantidadeElementos: 2,
      elementos: [1, -2, 3, 4, 5]
    }
    const httpResponse = await request(server)
      .post('/challenge')
      .send(body)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body.status).toBe('error')
    expect(httpResponse.body.type).toEqual('LengthElementsError')
    expect(httpResponse.body.message).toEqual(new LengthElementsError('elementos', body.elementos.length, body.quantidadeElementos).message)
  })

  test('Deve retornar 400 devido ao valor de um elemento do array "elementos" não estar entre -1000 e 1000', async () => {
    const body = {
      quantidadeElementos: 3,
      elementos: [1, -2, 3000]
    }
    const httpResponse = await request(server)
      .post('/challenge')
      .send(body)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body.status).toBe('error')
    expect(httpResponse.body.type).toEqual('RangeError')
    expect(httpResponse.body.message).toEqual(new RangeError('elementos', '-1000 and 1000').message)
  })

  test('Deve retornar 200 e o resultado da saída do exemplo 1', async () => {
    const body = {
      quantidadeElementos: 10,
      elementos: [10, 10, 9, 9, 8, 8, 7, 7, 6, 6]
    }
    const httpResponse = await request(server)
      .post('/challenge')
      .send(body)
    expect(httpResponse.statusCode).toBe(200)
    expect(httpResponse.body.status).toBe('success')
    expect(httpResponse.body.result).toEqual([6, 7, 8, 9, 10])
  })

  test('Deve retornar 200 e o resultado da saída do exemplo 2', async () => {
    const body = {
      quantidadeElementos: 5,
      elementos: [-1, -1, -1, -1, -1]
    }
    const httpResponse = await request(server)
      .post('/challenge')
      .send(body)
    expect(httpResponse.statusCode).toBe(200)
    expect(httpResponse.body.status).toBe('success')
    expect(httpResponse.body.result).toEqual([-1])
  })

  test('Deve retornar 200 e o resultado da saída do exemplo 3', async () => {
    const body = {
      quantidadeElementos: 5,
      elementos: [-123, 123, 999, 1000, -1000]
    }
    const httpResponse = await request(server)
      .post('/challenge')
      .send(body)
    expect(httpResponse.statusCode).toBe(200)
    expect(httpResponse.body.status).toBe('success')
    expect(httpResponse.body.result).toEqual([-1000, -123, 123, 999, 1000])
  })
})
