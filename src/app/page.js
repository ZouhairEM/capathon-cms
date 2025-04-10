import Countdown from "./ui/Countdown";

async function getData() {
  const res = await fetch("http://localhost:3001/sections", {
    cache: "force-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const data = await getData();
  // console.log(data);
  const countdown = data[0];
  // console.log(countdownData);

  return (
    <div>
      <Countdown data={countdown} />
    </div>
  );
}
