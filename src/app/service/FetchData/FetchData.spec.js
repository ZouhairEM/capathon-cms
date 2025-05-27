const mockGetEntry = jest.fn();

jest.mock('../InitializeClient/InitializeClient', () => ({
  default: { getEntry: mockGetEntry },
}));

const { getData } = require('./FetchData');

describe('getData', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.clearAllMocks();
    process.env = { ...OLD_ENV, CONTENTFUL_ENTRY_ID: 'mock_entry_id' };
  });

  afterEach(() => {
    process.env = OLD_ENV;
  });

  it('returns db.data when client.getEntry resolves', async () => {
    const mockData = { fields: { data: { data: { foo: 'bar' } } } };
    mockGetEntry.mockResolvedValueOnce(mockData);

    const result = await getData();
    expect(mockGetEntry).toHaveBeenCalledWith('mock_entry_id');
    expect(result).toEqual({ foo: 'bar' });
  });

  it('logs error when client.getEntry throws', async () => {
    const error = new Error('fail');
    mockGetEntry.mockRejectedValueOnce(error);
    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    await getData();
    expect(consoleSpy).toHaveBeenCalledWith(error);
    consoleSpy.mockRestore();
  });
});
