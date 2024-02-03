// const mongoose = require('mongoose');
//
// const VariantSchema = new mongoose.Schema({
//     name: String,
//     sku: String,
//     additionalCost: Number,
//     stockCount: Number
// });
//
// const ProductSchema = new mongoose.Schema({
//     name: String,
//     description: String,
//     price: Number,
//     variants: [VariantSchema]
// });
//
// const Product = mongoose.model('Product', ProductSchema);
//
// module.exports = Product;
const mongoose = require('mongoose');

const variantSchema = new mongoose.Schema({
  name: String,
  sku: String,
  additionalCost: Number,
  stockCount: Number
});

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  variants: [variantSchema]
});

module.exports = mongoose.model('Product', productSchema);
