const request = require('supertest');
const app = require('../index');

describe('GET /api/hello', () => {
  it('responde con status 200 y el mensaje esperado', async () => {
    const res = await request(app).get('/api/hello');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Hola desde DevOps");
    expect(res.body).toHaveProperty('environment');
  });
});