const express = require('express')
const {
    createGoods,
    getGoods,
    getsingleGoods,
    deleteGoods,
    updateGoods
} = require('../controllers/goodsController')

const router = express.Router()

// GET all goods 
router.get('/', getGoods)

// GET a single goods
router.get('/:id', getsingleGoods)

// POST a new goods
router.post('/', createGoods)

// DELETE a goods
router.delete('/:id', deleteGoods)

// UPDATE a goods
router.patch('/:id', updateGoods)

module.exports = router