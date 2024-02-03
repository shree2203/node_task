const request = require('supertest');
const app = require('../index');

describe('Search endpoint', () => {
  it('should search products by name, description, or variant name', async () => {
    const res = await request(app).get('/products/search?q=Test');
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBeGreaterThanOrEqual(1);
  });
});
