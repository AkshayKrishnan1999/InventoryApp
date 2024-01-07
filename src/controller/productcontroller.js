const path=require('path');
const model=require('../model/model.js');
const ProductModel = require('../model/model.js');
class productController
{
    getProducts(req,res)
    {
       
       // res.sendFile(path.join(path.resolve(),'src','view','products.ejs'));
       let products=ProductModel.get();
       res.render("products", { products: products });
    }
}
module.exports = productController;