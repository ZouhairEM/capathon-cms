import Countdown from "./ui/Countdown";
import FaqSection from "./ui/FaqSection.jsx";
import SignupSection from "./ui/SignupSection";
import Navbar from "./ui/Navbar";
import { getData } from "./service/FetchData";
import OrganiserSection from "./ui/OrganiserSection";

export default async function Home() {
  const data = await getData();
  const [heroData, faqSection, countdownData, signUpData] = data.sections;
  const { navbar } = data;

  return (
    <div>
      <Navbar data={navbar} />
      <main>
        <FaqSection data={faqSection.faqs} />
        <Countdown data={countdownData.countdown} />
        <SignupSection data={signUpData.signUp} />
        <OrganiserSection />
      </main>
    </div>
  );
}
