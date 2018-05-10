const mongoose = require('mongoose'),
        contr = require('../controllers/products'),
        path = require('path');
const baseUrl = '/products/';
module.exports = (app) => {

    app.get(baseUrl, (req, res) => {
        contr.retrieveAll(req, res);
    })

    app.get(baseUrl + ':id', (req, res) => {
        contr.retrieveById(req, res);
    });

    app.post(baseUrl, (req, res) => {
        contr.create(req, res);
    });

    app.put(baseUrl + ':id', (req, res) => {
        contr.updateById(req, res);
    });

    app.delete(baseUrl + ':id', (req, res)=> {
        contr.removeById(req, res);
    });

    // this route will be triggered if any of the routes above did not match
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./client/dist/client/index.html"))
    });
}