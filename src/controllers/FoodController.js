const Food = require('../models/Food');

module.exports = {
    async store(req, res){
        const { name, healthy } = req.body;

        let food = await Food.findOne({ name });

        if(!food) {
            food = await Food.create({ name, healthy });
        };
       
        return res.json(food);
    },

    async getAll(req, res){
        let foods = await Food.find();

        return res.json(foods);
    },

    async getById(req, res){
        const { id } = req.params;
        let food = await Food.findOne({ id });
        
        return res.json(food);
    }
}