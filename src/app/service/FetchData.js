const contentful = require('contentful');

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  environment: 'master',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getData() {
  try {
    const entry = await client.getEntry(process.env.CONTENTFUL_ENTRY_ID);
    return entry.fields.db.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
