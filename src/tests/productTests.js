// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const { app, server } = require('../app'); // Import app and server
// const Product = require('../models/product');
//
// const expect = chai.expect;
// chai.use(chaiHttp);
//
// describe('Product API', () => {
//     before(async () => {
//         // Clear existing data before each test
//         await Product.deleteMany({});
//     });
//
//     describe('POST /products', () => {
//         it('should create a new product', async () => {
//             const res = await chai.request(app)
//                 .post('/products')
//                 .send({
//                     name: 'Sample Product',
//                     description: 'Sample Description',
//                     price: 20.99
//                 });
//
//             expect(res).to.have.status(201);
//             expect(res.body).to.be.a('object');
//             expect(res.body).to.have.property('_id');
//         });
//     });
//
//     // Add more tests for other endpoints
//
//     after(async () => {
//         // Close the server after all tests
//         await server.close();
//     });
// });
