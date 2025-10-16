const client = require('../InitializeClient/InitializeClient').default;

export async function getData() {
  const response = await client.getEntries();
  const entryFields = response.items
    .filter((entry) => entry.fields.sectionName)
    .map((entry) => ({
      id: entry.sys.id,
      ...entry.fields,
    }));

  return entryFields.reduce((acc, entry) => {
    acc[entry.sectionName] = entry;
    return acc;
  }, {});
}
