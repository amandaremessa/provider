const Food = require('../models/Food');

module.exports = {
    async store(req, res){
        const { name, healthy } = req.body;

        let food = await Food.findOne({ name });

        if(!food) {
            food = await Food.create({ name, healthy });
        };
       
        return res.json(food);
    }
}