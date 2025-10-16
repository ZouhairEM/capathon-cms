const client = require('../InitializeClient/InitializeClient').default;

export async function getData() {
  const allEntries = [];
  let skip = 0;
  const limit = 100;
  let total = 0;

  do {
    const response = await client.getEntries({ skip, limit });
    allEntries.push(...response.items);
    total = response.total;
    skip += limit;
  } while (skip < total);

  const entryFields = allEntries
    .filter((entry) => entry.fields.sectionName) // only entries with sectionName
    .map((entry) => ({
      id: entry.sys.id,
      ...entry.fields,
    }));

  const sections = entryFields.reduce((acc, entry) => {
    if (entry.sectionName) acc[entry.sectionName] = entry;
    return acc;
  }, {});

  return sections;
}
