
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = (() => {
    const ProductSchema = new mongoose.Schema({
        _id : Schema.Types.ObjectId,
        name: {
            type: String, 
            required: [true, 'name is required'], 
            minlength: [4, 'name must be greater than 4 characters']
        },
        price: {
            type: Number,
            required: [true, "input the price"]
        },
        image_url: {
            type: String,
            required: [true, "input the image url"]
        }
        
    }, {timestamps: true});
    
    mongoose.model('Product', ProductSchema);
})();