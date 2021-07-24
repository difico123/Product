const productRouter = require('./product.js');

function router(app) {
    app.use('/',productRouter);
}

module.exports = router;