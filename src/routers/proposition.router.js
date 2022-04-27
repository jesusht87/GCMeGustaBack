const router = require('express').Router()
const {
    createProposition, 
    getAllProposition,
    updateProposition,
    getPropositionById
} = require('../controllers/proposition.controller')

router.get('/', getAllProposition)
router.get('/:id', getPropositionById)
router.post('/', createProposition)
router.put('/:id', updateProposition)
module.exports = router 