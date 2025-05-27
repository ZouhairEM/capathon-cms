const client = require('../InitializeClient/InitializeClient').default;

export async function getData() {
  try {
    const entry = await client.getEntry(process.env.CONTENTFUL_ENTRY_ID);
    return entry.fields.data.data;
  } catch (error) {
    console.error(error);
  }
}
