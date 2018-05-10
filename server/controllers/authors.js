const mongoose = require('mongoose'),
        Author = mongoose.model('Author');

module.exports = {

    retrieveAll : (req, res) => {
        Author.find({}, (err, items) => {
            if (!err) {
                res.json({message: "Success", data: items});
            } else {
                console.log(err);
                res.json( {message: "Error", error: err})
            }
        });
    },

    retrieveById: (req, res) => {
        var ObjectId = mongoose.Types.ObjectId; 
        Author.find({_id: new ObjectId(req.params.id)})
            .exec((err, item)=>{
                if (!err) {
                    res.json({message: "Success", data: item});
                } else {
                    console.log(err);
                    res.json( {message: "Error", error: err})
                }
            });
    },
    
    create: (req, res) => {
        let item = new Author();
        item._id = new mongoose.Types.ObjectId();
        item.name = req.body.name;
        item.save( err => {
            if (!err) {
                res.json({message: "Success", data: item})
            } else {
                console.log(item.errors);
                res.json( {message: "Error", error: err})
            }
        });
    }, 

    updateById: (req, res) => {
        var ObjectId = mongoose.Types.ObjectId; 
        // Author.where({_id: new ObjectId(req.params.id)})
        //     .update({$set: {
        //         name: req.body.name,
        //     }})
        //     .exec((err, item)=>{
        //         if (!err) {
        //             res.json({message: "Success", data: item});
        //         } else {
        //             console.log(err);
        //             res.json( {message: "Error", error: err})
        //         }
        //     });
        var update = { name: req.body.name };
        var opts = { runValidators: true };
        Author.update({_id: new ObjectId(req.params.id)}, update, opts, function(err, item) {
            // Operation succeeds despite the fact that 'name' is not specified
            if (!err) {
                res.json({message: "Success", data: item});
            } else {
                console.log(err);
                res.json( {message: "Error", error: err})
            }
        });
    },

    removeById: (req, res) => {
        var ObjectId = mongoose.Types.ObjectId; 
        Author.remove({_id: new ObjectId(req.params.id)})
            .exec((err, item)=>{
                if (!err) {
                    res.json({message: "Success", data: item});
                } else {
                    console.log(err);
                    res.json( {message: "Error", error: err})
                }
            });
    }
}