const Product = require('../models/Product.js');

class ProductController {

    show(req, res, next) {
        Product.find({})
            .then((product) => res.render('home',{
                product : 
                [{name:'shi'},{name:'duc'}]
            }))
            .catch(next);
    }
}

module.exports = new ProductController();