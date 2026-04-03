const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  test('should return 200', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });
});

describe('GET /health', () => {
  test('should return healthy', async () => {
    const res = await request(app).get('/health');
    expect(res.body.status).toBe('healthy');
  });
});
