import Countdown from "./ui/Countdown";
import FaqSection from "./ui/FaqSection.jsx";
import SignupSection from "./ui/SignupSection";
import Navbar from "./ui/Navbar";
import { getData } from "./service/FetchData";

export default async function Home() {
  const data = await getData();
  const [heroData, faqSection, countdownData, signUpData] = data.sections;
  const { navbar } = data;
  const faqs = countdownData.faqSection.faqs
  // This missing semicolon on line 11 made me think, you can configure prettier to include semicolons as part of the linting, can you look into it?

  return (
    // this div can be replaced with a React fragment
    <div>
      <Navbar data={navbar} />
      <main>
        <FaqSection data={faqSection.faqs} />
        <Countdown data={countdownData.countdown} />
        <SignupSection data={signUpData.signUp} />
      </main>
    </div>
  );
}
