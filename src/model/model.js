class ProductModel{

    constructor(_id, _name, _desc, _price, _imageUrl,rating,count){
        this.id = _id;
        this.name = _name;
        this.desc = _desc;
        this.price = _price;
        this.imageUrl = _imageUrl;
        this.rating=rating;
        this.count=count;
    }
    static get(){
        return products;
    }
}

var products = [
  new ProductModel(
      4,
      'iPhone 13 Pro',
      'The latest iPhone with advanced camera capabilities and powerful performance.',
      1099.99,
      'https://m.media-amazon.com/images/I/71DVgBTdyLL._AC_UY218_.jpg',
  ),
  new ProductModel(
      5,
      'Samsung Galaxy Watch 4',
      'Smartwatch with fitness and health tracking features, compatible with Android and iOS devices.',
      249.99,
      'data:image/jpeg;base64,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',
  ),
  new ProductModel(
      6,
      'Sony WH-1000XM4 Wireless Headphones',
      'Premium noise-canceling headphones with exceptional sound quality.',
      349.99,
      'data:image/jpeg;base64,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',
  ),
];

  module.exports=ProductModel;