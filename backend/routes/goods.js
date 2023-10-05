const express = require('express')

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
router.post('/', (req, res) => {
    res.json({mssg:'POST a new goods'})
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