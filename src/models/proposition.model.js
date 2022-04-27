const mongoose = require('mongoose')

const PropositionSchema = new mongoose.Schema({
  sendername: {
    type: String,
    required: [true, 'El nombre del emisor es obligatorio'],
  },
  receivername: {
    type: String,
    required: [true, 'El nombre del receptor es obligatorio'],
  },
  question: {
    type: String,
    required: [true, 'Hacer una pregunta es obligatorio'],
  },
  rightanswer: {
    type: String,
    required: [true, 'Falta la respuesta correcta.'],
  },
  wronganswerone: {
    type: String,
    required: [true, 'Falta una respuesta errónea (para el quiz)'],
  },
  wronganswertwo: {
    type: String,
    required: [true, 'Falta una respuesta errónea (para el quiz)'],
  },
  success: {
    type: Boolean,
  },
    show: {
    type: Boolean,
    default: true,
  }
})

const PropositionModel = mongoose.model('proposition', PropositionSchema)

module.exports = PropositionModel
