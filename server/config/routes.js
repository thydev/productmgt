const mongoose = require('mongoose'),
        Author = mongoose.model('Author'),
        authors = require('../controllers/authors'),
        path = require('path');
const baseUrl = '/products/';
module.exports = (app) => {

    app.get(baseUrl, (req, res) => {
        authors.retrieveAll(req, res);
    })

    app.get(baseUrl + ':id', (req, res) => {
        authors.retrieveById(req, res);
    });

    app.post(baseUrl, (req, res) => {
        authors.create(req, res);
    });

    app.put(baseUrl + ':id', (req, res) => {
        authors.updateById(req, res);
    });

    app.delete(baseUrl + ':id', (req, res)=> {
        authors.removeById(req, res);
    });

    // this route will be triggered if any of the routes above did not match
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./client/dist/client/index.html"))
    });
}