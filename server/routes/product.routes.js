const ProductController = require('../controllers/Product.controller');
 
module.exports = app => {
    app.get('/api/Products', ProductController.findAllProducts);
    app.get('/api/Products/:id', ProductController.findOneSingleProduct);
    app.put('/api/Products/:id', ProductController.updateExistingProduct);
    app.post('/api/Products', ProductController.createNewProduct);
    app.delete('/api/Products/:id', ProductController.deleteAnExistingProduct);
}