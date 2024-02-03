// const express = require('express');
// const router = express.Router();
// const Product = require('../models/product');
//
// // Routes for product operations
//
// // Create a new product
// router.post('/products', async (req, res) => {
//     try {
//         const product = await Product.create(req.body);
//         res.status(201).json(product);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// });
//
// // Get all products
// router.get('/products', async (req, res) => {
//     try {
//         const products = await Product.find();
//         res.json(products);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });
//
// // Search products
// router.get('/products/search', async (req, res) => {
//     try {
//         const { query } = req.query;
//         const products = await Product.find({
//             $or: [
//                 { name: { $regex: query, $options: 'i' } },
//                 { description: { $regex: query, $options: 'i' } },
//                 { 'variants.name': { $regex: query, $options: 'i' } }
//             ]
//         });
//         res.json(products);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });
//
// module.exports = router;
const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Create a new product
router.post('/products', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all products
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.send(products);
  } catch (error) {
    res.status(500).send();
  }
});

// Search products by name, description, or variant name
router.get('/products/search', async (req, res) => {
  const searchText = req.query.q;
  try {
    const products = await Product.find({
      $or: [
        { name: { $regex: searchText, $options: 'i' } },
        { description: { $regex: searchText, $options: 'i' } },
        { 'variants.name': { $regex: searchText, $options: 'i' } }
      ]
    });
    res.send(products);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;
