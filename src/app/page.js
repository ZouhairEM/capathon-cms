import Countdown from "./ui/Countdown";
import FaqSection from "./ui/FaqSection.jsx";
import Navbar from "./ui/Navbar.jsx";

async function getData() {
  const res = await fetch("http://localhost:3001/sections");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const data = await getData();
  const countdown = data[0].countdown;
  const navbar = data[1].navbar;

  return (
    <div>
      <Navbar data={navbar} />
      <FaqSection />
      <Countdown data={countdown} />
    </div>
  );
}
