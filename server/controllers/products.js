const mongoose = require('mongoose'),
        Product = mongoose.model('Product');

module.exports = {

    retrieveAll : (req, res) => {
        Product.find({}, (err, items) => {
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
        Product.find({_id: new ObjectId(req.params.id)})
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
        let item = new Product();
        item._id = new mongoose.Types.ObjectId();
        item.name = req.body.name;
        item.price = req.body.price;
        item.image_url = req.body.image_url;
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
        // Product.where({_id: new ObjectId(req.params.id)})
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
        var update = { 
            name: req.body.name,
            price: req.body.price,
            image_url: req.body.image_url
        };
        var opts = { runValidators: true };
        Product.update({_id: new ObjectId(req.params.id)}, update, opts, function(err, item) {
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
        Product.remove({_id: new ObjectId(req.params.id)})
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