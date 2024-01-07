const http=require('http');
const express=require('express');
const server=express();
const path = require('path');
const productController=require('./src/controller/productcontroller.js');
const controller=new productController();
const port=5000;

server.use(express.static(path.join(__dirname,'..','views')));
server.set("view engine","ejs");
server.set("views",path.join(path.resolve(),"src","views"));

server.get('/',(req,res)=>{
    res.send('Welcome to Inventory App');
    
})
server.get('/products',(req,res)=>{
    controller.getProducts(req,res);
})


server.listen(port,()=>{
    console.log('Server is listening');
});