const Goods = require('../models/goodsModel')

// get all goods


// get a single goods


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


// update a goods

module.exports = {
    createGoods
}