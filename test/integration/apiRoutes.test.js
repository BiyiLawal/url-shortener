import request from 'supertest';
import app from '../../src/app'; 

describe('URL Shortener API Integration Tests', () => {
  test('should create a short URL', async () => {
    const res = await request(app)
      .post('/api/shorten')
      .send({ url: 'https://www.example.com' });
    expect(res.statusCode).toBe(201); // Check if response status is 201 Created
    expect(res.body.shortCode).toBeDefined(); // Ensure a short code is generated
  });

  test('should retrieve the original URL from short code', async () => {
    const shortCode = 'abc123'; // Example shortCode used in service
    const res = await request(app).get(`/api/shorten/${shortCode}`);
    expect(res.statusCode).toBe(200); // Ensure status is OK
    expect(res.body.url).toBe('https://www.example.com'); // Ensure original URL is returned
  });

  test('should return 404 for non-existent short code', async () => {
    const shortCode = 'nonexistent';
    const res = await request(app).get(`/api/shorten/${shortCode}`);
    expect(res.statusCode).toBe(404); // Check for 404 Not Found
  });
});