import Countdown from "./ui/countdown";
import FaqSection from "./ui/faqSection.jsx";

async function getData() {
  const res = await fetch("http://localhost:3001/sections");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const data = await getData();
  const countdown = data[0];
  const faqs = data[0].faqSection.faqs;

  return (
    <div>
      <FaqSection faqs={faqs} />
      <Countdown data={countdown} />
    </div>
  );
}
