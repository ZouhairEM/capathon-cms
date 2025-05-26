// Mock contentful before importing the client
jest.mock('contentful', () => ({
  createClient: jest.fn(() => 'mockClient'),
}));

describe('InitializeClient', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    // Reset the module registry and environment variables before each test
    jest.resetModules();
    process.env = { ...OLD_ENV };
    process.env.CONTENTFUL_SPACE_ID = 'mock_space_id';
    process.env.CONTENTFUL_ACCESS_TOKEN = 'mock_access_token';
  });

  afterEach(() => {
    // Restore the original environment variables after each test
    process.env = OLD_ENV;
  });

  it('creates a client with the correct config', async () => {
    const { createClient } = await import('contentful');
    const clientModule = await import('./InitializeClient.js');
    // Ensure the createClient function was called with the correct parameters
    expect(createClient).toHaveBeenCalledWith({
      space: 'mock_space_id',
      environment: 'master',
      accessToken: 'mock_access_token',
    });
    expect(clientModule.default).toBe('mockClient');
  });
});
