const MissingParamError = require('../errors/MissingParamError')
const TypeInvalidError = require('../errors/TypeInvalidError')
const LengthElementsError = require('../errors/LengthElementsError')
const RangeError = require('../errors/RangeError')

class ChallengeController {
  async execute (req, res) {
    const { quantidadeElementos, elementos } = req.body

    if (quantidadeElementos === undefined) {
      throw new MissingParamError('quantidadeElementos')
    }
    if (elementos === undefined) {
      throw new MissingParamError('elementos')
    }
    if (!Number.isInteger(quantidadeElementos)) {
      throw new TypeInvalidError('quantidadeElementos', 'Integer')
    }
    if (!Array.isArray(elementos)) {
      throw new TypeInvalidError('elementos', 'Array')
    }
    if (quantidadeElementos < 1 || quantidadeElementos > 1000) {
      throw new RangeError('quantidadeElementos', '1 and 1000')
    }
    if (!(elementos.length === quantidadeElementos)) {
      throw new LengthElementsError('elementos', elementos.length, quantidadeElementos)
    }

    elementos.map(elemento => {
      if (elemento < -1000 || elemento > 1000) {
        throw new RangeError('elementos', '-1000 and 1000')
      }
      return true
    })

    const newElementos = elementos.filter((value, index, array) => {
      return array.indexOf(value) === index
    }).sort((a, b) => {
      return a - b
    })

    return res.json({
      status: 'success',
      result: newElementos
    })
  }
}

module.exports = ChallengeController
