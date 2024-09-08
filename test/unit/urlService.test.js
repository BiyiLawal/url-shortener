import { createShortUrl, getOriginalUrl } from '../../src/services/urlService';

describe('URL Shortening Service Unit Tests', () => {
  test('should shorten a valid URL', async () => {
    const url = 'https://www.example.com';
    const result = await createShortUrl(url);
    expect(result.shortCode).toBeDefined(); // Check that a short code is generated
  });

  test('should retrieve the original URL from shortCode', async () => {
    const shortCode = 'abc123';
    const url = await getOriginalUrl(shortCode);
    expect(url).toBe('https://www.example.com'); // Ensure original URL is returned
  });

  test('should throw an error if the short code does not exist', async () => {
    const shortCode = 'nonexistent';
    await expect(getOriginalUrl(shortCode)).rejects.toThrowError(); // Handle non-existent short code
  });
});