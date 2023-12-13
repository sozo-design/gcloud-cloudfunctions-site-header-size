const axios = require('axios');
const { checkHeaderLength } = require('./index');

jest.mock('axios');

describe('checkHeaderLength', () => {
  test('should return the header length', async () => {
    const mockUrl = 'http://example.com';
    const mockHeaderLength = '1234';

    axios.get.mockResolvedValue({
      headers: {
        'content-length': mockHeaderLength,
      },
    });

    const mockReq = {
      body: {
        url: mockUrl,
      },
    };
    const mockRes = {
      status: jest.fn(),
      send: jest.fn(),
    };

    await checkHeaderLength(mockReq, mockRes);

    expect(axios.get).toHaveBeenCalledWith(mockUrl);
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.send).toHaveBeenCalledWith(`Header length: ${mockHeaderLength}`);
  });

  test('should handle errors', async () => {
    const mockUrl = 'https://example.com';
    const mockError = new Error('An error occurred');

    axios.get.mockRejectedValue(mockError);

    const mockReq = {
      body: {
        url: mockUrl,
      },
    };
    const mockRes = {
      status: jest.fn(),
      send: jest.fn(),
    };

    await checkHeaderLength(mockReq, mockRes);

    expect(axios.get).toHaveBeenCalledWith(mockUrl);
    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.send).toHaveBeenCalledWith('An error occurred');
  });
});