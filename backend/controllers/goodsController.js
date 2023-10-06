const Goods = require('../models/goodsModel')
const mongoose = require('mongoose')

// get all goods
const getGoods = async (req, res) => {
    const goods = await Goods.find({}).sort({createdAt: -1})

    res.status(200).json(goods)
}


// get a single goods
const getsingleGoods = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such goods'})
    }

    const singleGoods = await Goods.findById(id)

    if (!singleGoods) {
        return res.status(400).json({error: 'No such goods'})
    }

    res.status(200).json(singleGoods)
}


// create a new goods
const createGoods = async (req, res) => {
    const {name, description, price, quantity} = req.body

    try {
        const goods = await Goods.create({name, description, price, quantity})
        res.status(200).json(goods)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


// delete a goods
const deleteGoods = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such goods'})
    }

    const goods = await Goods.findOneAndDelete({_id: id})

    if (!goods) {
        return res.status(400).json({error: 'No such ggods'})
    }

    res.status(200).json(goods)
} 


// update a goods
const updateGoods = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such goods'})
    }

    const goods = await Goods.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!goods) {
        return res.status(400).json({error: 'No such goods'})
    }

    res.status(200).json(goods)
}


module.exports = {
    getGoods,
    getsingleGoods,
    createGoods,
    deleteGoods,
    updateGoods
}