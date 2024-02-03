const request = require('supertest');
const app = require('../../index');

describe('Product endpoints', () => {
  it('should create a new product', async () => {
    const res = await request(app)
      .post('/products')
      .send({
        name: 'Test Product',
        description: 'Test Description',
        price: 20,
        variants: [
          {
            name: 'Variant 1',
            sku: 'SKU001',
            additionalCost: 5,
            stockCount: 10
          }
        ]
      }).timeout(5000);
    expect(res.statusCode).toEqual(201);
    expect(res.body.name).toEqual('Test Product');
  });

  it('should fetch all products', async () => {
    const res = await request(app).get('/products');
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBeGreaterThanOrEqual(1);
  });
});

