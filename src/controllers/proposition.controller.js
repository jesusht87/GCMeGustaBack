const PropositionModel = require('../models/proposition.model')

const createProposition = async (req, res) => {
  try {
    const proposition = await PropositionModel.create({
      sendername: req.body.sendername,
      receivername: req.body.receivername,
      question: req.body.question,
      rightanswer: req.body.rightanswer,
      wronganswerone: req.body.wronganswerone,
      wronganswertwo: req.body.wronganswertwo,
      show: req.body.show
    })

    res.json({
      sendername: proposition.sendername,
      receivername: proposition.receivername,
      question: proposition.question,
      rightanswer: proposition.rightanswer,
      wronganswerone: proposition.wronganswerone,
      wronganswertwo: proposition.wronganswertwo,
      show: proposition.show,
      _id: proposition._id
    })
  } catch (error) {
    res.status(500).send(error)
  }
}

const getAllProposition = async (req, res) => {
  try {
    const proposition = await PropositionModel.find()
    res.json(proposition)
  } catch (error) {
    res.status(500).send(error)
  }
}

const updateProposition = async (req, res) => {
  try {
    const proposition = await PropositionModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
    res.json(proposition)
  } catch (error) {
    res.status(500).send(error)
  }
}

function getPropositionById(req, res) {
    PropositionModel.find({ _id: req.params.id }).then(response => res.json(response)).catch((err) => error(err, res))
}

module.exports = {
  createProposition,
  getAllProposition,
  updateProposition,
  getPropositionById
}
