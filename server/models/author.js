const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = (() => {
    const AuthorSchema = new mongoose.Schema({
        _id : Schema.Types.ObjectId,
        name: {
            type: String, 
            required: [true, 'name required'], 
            minlength: [3, 'name must be greater than 3 characters']
        },
        
        
    }, {timestamps: true});
    
    mongoose.model('Author', AuthorSchema);
})();