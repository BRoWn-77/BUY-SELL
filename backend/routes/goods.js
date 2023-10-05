const express = require('express')
const Goods = require('../models/goodsModel')

const router = express.Router()

// GET all goods 
router.get('/', (req, res) => {
    res.json({mssg: 'GET all goods'})
})

// GET a single goods
router.get('/:id', (req, res) => {
    res.json({mssg:'GET a single goods'})
})

// POST a new goods
router.post('/', async (req, res) => {
    const {name, description, price, quantity} = req.body

    try {
        const goods = await Goods.create({name, description, price, quantity})
        res.status(200).json(goods)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

// DELETE a goods
router.delete('/:id', (req, res) => {
    res.json({mssg:'DELETE a goods'})
})

// UPDATE a goods
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a goods'})
})

module.exports = router