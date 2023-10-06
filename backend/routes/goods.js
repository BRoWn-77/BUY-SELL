const express = require('express')
const {
    createGoods,
    getGoods,
    getsingleGoods
} = require('../controllers/goodsController')

const router = express.Router()

// GET all goods 
router.get('/', getGoods)

// GET a single goods
router.get('/:id', getsingleGoods)

// POST a new goods
router.post('/', createGoods)

// DELETE a goods
router.delete('/:id', (req, res) => {
    res.json({mssg:'DELETE a goods'})
})

// UPDATE a goods
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a goods'})
})

module.exports = router