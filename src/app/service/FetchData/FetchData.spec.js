const { getData } = require('./FetchData');
const client = require('../InitializeClient/InitializeClient');

jest.mock('../InitializeClient/InitializeClient', () => ({
  default: {
    getEntries: jest.fn(),
  },
}));

describe('getData', () => {
  it('should return formatted data grouped by sectionName', async () => {
    const mockResponse = {
      items: [
        {
          sys: { id: '1' },
          fields: { sectionName: 'Section1', data: 'Data1' },
        },
        {
          sys: { id: '2' },
          fields: { sectionName: 'Section2', data: 'Data2' },
        },
      ],
    };

    client.default.getEntries.mockResolvedValue(mockResponse);

    const result = await getData();

    expect(result).toEqual({
      Section1: { id: '1', sectionName: 'Section1', data: 'Data1' },
      Section2: { id: '2', sectionName: 'Section2', data: 'Data2' },
    });
  });

  it('should filter out entries without sectionName', async () => {
    const mockResponse = {
      items: [
        {
          sys: { id: '1' },
          fields: { sectionName: 'Section1', data: 'Data1' },
        },
        {
          sys: { id: '2' },
          fields: { data: 'Data2' },
        },
      ],
    };

    client.default.getEntries.mockResolvedValue(mockResponse);

    const result = await getData();

    expect(result).toEqual({
      Section1: { id: '1', sectionName: 'Section1', data: 'Data1' },
    });
  });

  it('should return an empty object if no entries are present', async () => {
    const mockResponse = { items: [] };

    client.default.getEntries.mockResolvedValue(mockResponse);

    const result = await getData();

    expect(result).toEqual({});
  });
});
