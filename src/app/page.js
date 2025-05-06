import Countdown from "./ui/Countdown";
import FaqSection from "./ui/FaqSection.jsx";
import SignupSection from "./ui/SignupSection";
import Navbar from "./ui/Navbar";
import { getData } from "./service/FetchData";
import HeroSection from "./ui/HeroSection";

export default async function Home() {
  const data = await getData();
  const [heroData, faqSection, countdownData, signUpData] = data.sections;
  const { navbar } = data;

  return (
    <div>
      <Navbar data={navbar} />
      <main>
        <HeroSection data={heroData.hero} />
        <FaqSection data={faqSection.faqs} />
        <Countdown data={countdownData.countdown} />
        <SignupSection data={signUpData.signUp} />
      </main>
    </div>
  );
}
