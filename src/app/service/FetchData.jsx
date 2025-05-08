export async function getData() {
  const res = await fetch("http://localhost:3001/data");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

// This file has a .jsx extension, but it doesn't use any JSX. It's all just JavaScript