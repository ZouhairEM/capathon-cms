import Countdown from "./ui/Countdown";
import FaqSection from "./ui/FaqSection.jsx";
import SignupSection from "./ui/SignupSection";

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
  const { signUpPossible } = data[1].signUp;

  return (
    <main>
      <FaqSection />
      <Countdown data={countdown} />
      <SignupSection signUpPossible={signUpPossible} />
    </main>
  );
}
